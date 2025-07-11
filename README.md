# GitHub Not Following Back Tracker

A simple responsive website to check which GitHub users **you are following but who are not following you back**.

## Features

✅ Enter any GitHub username  
✅ Fetch **followers** and **following** lists  
✅ Show clean, responsive list of users you follow who don't follow you back  
✅ User avatars and profile links  
✅ No authentication needed  
✅ Mobile-friendly design  
✅ No confidential API keys

---

## Demo

[View Live Demo](https://followers-tracker-omega.vercel.app/)



## How to Use



- **Open `index.html` in your browser**

- Simply double-click `index.html` or use Live Server if you prefer.

4. **Enter your GitHub username**

- Type your username and click **Fetch**.

5. **View results**

- The app will list all users you follow but who do not follow you back.
- Click their names to open their GitHub profiles.


## Notes

- This project uses the **public GitHub API** without authentication.
- **Rate Limit:** Unauthenticated requests are limited to **60 requests per hour per IP address**.
- For accounts with more than 100 followers/following, pagination is implemented so you will see all users.
- All data is public; no private repositories or secrets are accessed.


## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- GitHub REST API v3


## 🛡️ License

This project is licensed under the MIT License.  
Feel free to use, modify, and share.


## Acknowledgments

- [GitHub API Docs](https://docs.github.com/en/rest/users/followers)
- Inspired by the need to keep track of social connections on GitHub.


## Author

- **Dhrubaraj Pati**
- [GitHub Profile](https://github.com/codewithdhruba01)
