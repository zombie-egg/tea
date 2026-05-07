# TeaSourcex B2B Tea Website

Static multi-page website template for an English B2B tea ingredients supplier.

## Local Run

Open `index.html` directly in a browser, or use VS Code Live Server:

1. Open this folder in VS Code.
2. Right-click `index.html`.
3. Choose `Open with Live Server`.

## Pages

- `index.html`
- `about.html`
- `products.html`
- `solutions.html`
- `quality.html`
- `resources.html`
- `contact.html`
- `thank-you-inquiry.html`
- `thank-you-sample.html`
- Detail pages under `about/`, `products/`, `solutions/`, `quality/`, `resources/`, `contact/`
- Blog demo URL: `resources/blog/article-slug.html`

## Implemented Frontend Features

- Fixed left sidebar navigation with folder icons
- Paper / frosted beige texture background
- Warm brown, orange-brown and gold color system
- Responsive layout for desktop, tablet and mobile 375px+
- Mobile hamburger navigation
- Fixed Home button
- Fixed WhatsApp floating button
- Hero video placeholder with mobile image fallback
- Fade-in-on-scroll animation
- CountUp-style number animation
- Horizontal brand timeline, vertical on mobile
- Product filter component
- Solutions tab component
- Certificate lightbox component
- Blog tag filter and search
- SOP accordion with download buttons
- Inquiry form and sample request form
- Separate noindex thank-you pages

## Static Site Limitations

This project is pure HTML/CSS/JavaScript and has no backend. The following production requirements need server/CMS integration before launch:

- Real website backend login account and password
- Admin article publishing system
- Server-side form notification
- CRM or email delivery logs
- WordPress, Webflow CMS, Strapi, Sanity or another CMS for blog management

The current forms use a `mailto:` simulation and redirect to thank-you pages. To make forms production-ready, replace the form handling in `js/main.js` with Formspree, Netlify Forms, a CRM endpoint or a custom backend API.

## Content Notes

- All placeholder content is marked as ``.
- Background image is intentionally empty in `css/style.css`:

```css
background-image: url("");
```

Replace it when the client provides a real background image.

- Placeholder images use `https://via.placeholder.com/`.
- Replace `https://wa.me/8600000000000` with the real WhatsApp number in international format.

## Deployment

Upload all files to a static hosting server such as Nginx, Apache, Netlify, Vercel, Cloudflare Pages or the client server public web directory.

For CMS/admin requirements, deploy this frontend as a theme or static frontend connected to the selected CMS/backend.
