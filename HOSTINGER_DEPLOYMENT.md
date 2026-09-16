# Hostinger Deployment Guide — Akla Foodstuff Trading LLC

This web application is **100% Hostinger Deployment Ready**. It requires **zero Node.js backend configuration** to run on Hostinger, making it fully compatible with:
- Hostinger **Shared Web Hosting** (Single, Premium, Business)
- Hostinger **Cloud Hosting** (Startup, Professional, Enterprise)
- Hostinger **cPanel / hPanel Web Hosting**
- Hostinger **VPS Hosting** (OpenLiteSpeed / Nginx / Apache)

---

## 🚀 Quickest Method: 3-Minute hPanel Upload (Recommended)

### Step 1: Get the Deployment ZIP
You already have the production-ready archive created for you:
- File name: `akla-foodstuff-hostinger-deploy.zip`
- Found in the project root or inside `public/akla-foodstuff-hostinger-deploy.zip`
- Or run `npm run build:zip` anytime in this repository to generate a fresh build!

### Step 2: Open Hostinger hPanel File Manager
1. Log into your [Hostinger Account](https://hpanel.hostinger.com).
2. Go to **Websites** → click **Manage** next to your domain (`aklafoodstuff.com` or your staging domain).
3. Under the **Files** section, click **File Manager** (or **File Manager for public_html**).

### Step 3: Upload and Extract
1. Open the **`public_html`** directory.
2. *(Optional)* If there is a default placeholder file like `default.php`, delete it.
3. Click the **Upload** icon in the top right corner of File Manager.
4. Select `akla-foodstuff-hostinger-deploy.zip`.
5. Once uploaded, right-click `akla-foodstuff-hostinger-deploy.zip` and choose **Extract**.
6. Set the extraction path to `/public_html` (the current folder).
7. That's it! You can now delete the `.zip` file from `public_html` to save space.

### Step 4: Visit Your Live Website
Open your domain in any browser:
- All pages, sections, and category modals load instantly.
- Refreshing the page works seamlessly without 404 errors (handled by the included `.htaccess`).
- Images, animations, and typography load with high-speed LiteSpeed compression.

---

## 🛠️ What Is Included in the Deployment Package?

| File / Folder | Purpose on Hostinger |
| :--- | :--- |
| **`index.html`** | Main entry point with pre-rendered SEO metadata, Open Graph tags, and viewport optimization |
| **`.htaccess`** | Hostinger-specific Apache & LiteSpeed server directives (SPA routing, Gzip/Brotli, cache headers, security headers) |
| **`assets/`** | Bundled, hashed CSS and JavaScript chunks with 1-year browser caching |
| **`site-content.json`** | Live editable website content structure |
| **`wholesale.jpg`** | Local high-resolution wholesale warehouse banner |
| **`hero-dubai-trade.jpg`** | Local high-resolution Dubai trade port banner |

---

## ⚡ Hostinger-Specific Features Already Configured

### 1. Zero 404 Errors on Refresh (SPA URL Rewriting)
The `.htaccess` file includes rewrite rules that route all URL paths to `index.html`, allowing the client-side router to handle page navigation without Apache returning 404 errors.

### 2. High-Performance LiteSpeed GZIP Compression
Automatic GZIP and Deflate compression is enabled for HTML, CSS, JavaScript, JSON, and SVG files, ensuring maximum Google PageSpeed and GTmetrix scores on Hostinger servers.

### 3. Aggressive Asset Caching
Static assets in the `/assets/` directory are cached for 1 year (`max-age=31536000, immutable`), while `index.html` and `site-content.json` are served fresh to ensure any future updates appear immediately to visitors.

### 4. Enterprise Security Headers
Pre-configured security headers protect against:
- Clickjacking (`X-Frame-Options: SAMEORIGIN`)
- MIME-type confusion attacks (`X-Content-Type-Options: nosniff`)
- Cross-Site Scripting (`X-XSS-Protection: 1; mode=block`)
- Directory browsing disabled (`Options -Indexes`)

---

## 🔄 How to Deploy Future Updates

Whenever you make updates to the website:
1. Run:
   ```bash
   npm run build:zip
   ```
2. Upload the newly created `akla-foodstuff-hostinger-deploy.zip` to `public_html` in Hostinger File Manager.
3. Right-click and **Extract** (choose "Overwrite existing files").
4. Your website is instantly updated!
