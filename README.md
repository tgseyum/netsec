# NetSec Consulting Inc. Website

This project contains a static corporate website for NetSec Consulting Inc., built with HTML5, CSS3, JavaScript, and Bootstrap 5. It is designed for static hosting on platforms such as GitHub Pages, Netlify, or Cloudflare Pages.

## Project Structure

- `index.html` — root homepage entry point for GitHub Pages
- `home/index.html` — extensionless homepage route
- `about/index.html` — company overview route
- `services/index.html` — services overview route
- `network-security/index.html` — network security route
- `networking/index.html` — networking route
- `wireless/index.html` — wireless network route
- `consulting/index.html` — consulting route
- `contact/index.html` — contact information route
- `consultation/index.html` — consultation form route
- `css/style.css` — shared design system and responsive styling
- `js/script.js` — navigation, validation, back-to-top, and scroll behavior
- `images/` — folders for future image assets

Each page lives in a folder with an `index.html`, so GitHub Pages serves clean URLs such as `/services/` instead of `/services.html`.

## Local Preview

You can preview this site by serving the folder locally, for example:

```bash
cd d:\pproject2
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Notes

- The consultation form includes client-side validation.
- The contact page contains contact information only.
- It is intentionally designed as a static HTML site without a backend form service.
- The site uses remote high-quality technology imagery and Bootstrap assets for easy deployment.
