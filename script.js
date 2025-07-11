    async function fetchAll(urlBase) {
      let page = 1;
      let allData = [];
      while (true) {
        const res = await fetch(`${urlBase}?per_page=100&page=${page}`);
        if (!res.ok) throw new Error('Error fetching data.');
        const data = await res.json();
        allData = allData.concat(data);
        if (data.length < 100) break;
        page++;
      }
      return allData;
    }

    async function fetchData() {
      const username = document.getElementById('username').value.trim();
      const results = document.getElementById('results');
      const loading = document.getElementById('loading');
      if (!username) {
        alert('Please enter a username.');
        return;
      }

      results.innerHTML = '';
      loading.style.display = 'block';

      try {
        const [followers, following] = await Promise.all([
          fetchAll(`https://api.github.com/users/${username}/followers`),
          fetchAll(`https://api.github.com/users/${username}/following`)
        ]);

        const followersSet = new Set(followers.map(u => u.login));
        const notFollowingBack = following.filter(u => !followersSet.has(u.login));

        loading.style.display = 'none';

        if (notFollowingBack.length === 0) {
          results.innerHTML = `<p style="text-align:center;">🎉 Everyone you follow follows you back!</p>`;
        } else {
          results.innerHTML = `
            <h2>Users You Follow But They Don't Follow You Back (${notFollowingBack.length})</h2>
            <ul>
              ${notFollowingBack.map(u => `
                <li>
                  <a href="${u.html_url}" target="_blank">${u.login}</a>
                  <img src="${u.avatar_url}" alt="${u.login}">
                </li>
              `).join('')}
            </ul>
          `;
        }
      } catch (error) {
        loading.style.display = 'none';
        results.innerHTML = `<p style="color:red; text-align:center;">${error.message}</p>`;
      }
    }