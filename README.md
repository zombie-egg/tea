# TeaSourcex B2B Tea Website

TeaSourcex is now a static frontend plus a lightweight Node backend. The frontend design stays the same, while products, contact information, and form submissions are backed by real server-side JSON data.

## Local Run

Use the backend server for real data and form submission:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

Admin:

```text
http://localhost:3000/admin.html
```

Default local password:

```text
change-this-password
```

Set a real production password before deployment:

```bash
ADMIN_PASSWORD="your-strong-password" npm start
```

## Backend Features

- `GET /api/site-data` returns editable contact and product data.
- `POST /api/inquiries` stores inquiry form submissions.
- `POST /api/sample-requests` stores sample request submissions.
- `POST /api/admin/login` logs into the admin panel.
- `GET /api/admin/data` reads editable content and submissions.
- `PUT /api/admin/data` saves contact and product content.

Data files:

```text
data/site-data.json
data/submissions.json
```

## Admin Editing

Client admin URL:

```text
/admin.html
```

After deployment, the client opens:

```text
https://your-domain.com/admin.html
```

The admin panel has three areas:

- `Content`: edit contact information and product details.
- `Articles`: add or edit blog articles, tags, summaries and article body.
- `Submissions`: view inquiry form submissions and sample request submissions.

When visitors submit the inquiry or sample form, the records are saved in the backend and appear in `Admin > Submissions`.

The admin panel can edit:

- Company address, email, phone, WhatsApp number
- Product title, Chinese title, category filter, image URL
- Product English/Chinese summaries
- Product English/Chinese details
- Blog article slug, tag, English/Chinese title, summaries and body
- Inquiry and sample request submissions

## Deployment Notes

For Zeabur, deploy this as a Node service:

- Build command: leave empty or `npm install`
- Start command: `npm start`
- Environment variable: `ADMIN_PASSWORD`
- Optional environment variable: `ADMIN_SECRET`

Important: JSON persistence requires a writable deployment filesystem or persistent volume. For high reliability, replace JSON storage with Zeabur PostgreSQL later.

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
- `admin.html`
- Detail pages under `about/`, `products/`, `solutions/`, `quality/`, `resources/`, `contact/`

## Notes

- The website still supports English and Chinese switching.
- Product and contact data now comes from backend data when running via `npm start`.
- Directly opening `index.html` still shows the frontend, but real forms and editable data require the Node server.
