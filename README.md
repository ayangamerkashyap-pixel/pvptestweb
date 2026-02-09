# scaling-barnacle

A modern, responsive static website for Purbottar Vikash Parishad NGO with clean URL routing and optimized Vercel deployment.

## Features

✨ **Clean URL Routing** - Access pages without `.html` extensions (e.g., `/pages/services` instead of `/pages/services.html`)
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
🚀 **Vercel Ready** - Configured for seamless deployment to Vercel
🔒 **Security Headers** - CORS, CSP, and other security measures included
⚡ **Performance Optimized** - Minimal dependencies, fast page loads
🎨 **Modern Design** - Built with Tailwind CSS for beautiful UI

## Project Structure

```
scaling-barnacle/
├── index.html              # Entry point (redirects to homepage)
├── pages/                  # All page files
│   ├── homepage.html
│   ├── aboutus.html
│   ├── services.html
│   ├── gallery.html
│   ├── vision.html
│   ├── reports.html
│   └── contact.html
├── Images/                 # Image assets
├── router.py              # Custom router for clean URLs (dev)
├── vercel.json            # Vercel configuration
├── .htaccess              # Apache rewrite rules
├── package.json           # Project metadata
└── netlify.toml           # Legacy Netlify config

```

## Local Development

### Using the Router (Recommended)

The custom Python router enables clean URLs for local development:

```bash
# Install dependencies (optional, if using npm scripts)
npm install

# Start development server with clean URLs
npm run dev

# Or run directly
python3 router.py 8000
```

Access the site at: **http://localhost:8000/**

**Clean URL Examples:**
- Home: http://localhost:8000/pages/homepage
- Services: http://localhost:8000/pages/services
- Gallery: http://localhost:8000/pages/gallery
- Contact: http://localhost:8000/pages/contact

### Using Basic HTTP Server

If you prefer the standard Python HTTP server:

```bash
npm run dev:basic
# or
python3 -m http.server 8000
```

**Note:** With the basic server, use URLs with `.html` extension:
- http://localhost:8000/pages/homepage.html
- http://localhost:8000/pages/services.html

## Deployment

### Deploy to Vercel

1. **Connect Your Repository**
   - Push your code to GitHub
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New..." → "Project"
   - Select your repository

2. **Vercel Auto-Configuration**
   - Vercel automatically detects `vercel.json`
   - Clean URLs are pre-configured
   - No additional setup needed!

3. **Deploy**
   - Click "Deploy"
   - Your site is live! 🎉

**Deployed URLs will support clean URLs:**
- https://your-domain.vercel.app/pages/services
- https://your-domain.vercel.app/pages/contact

### Deploy to Traditional Apache Server

If deploying to an Apache server:

1. Ensure `mod_rewrite` is enabled
2. The included `.htaccess` file handles clean URL rewriting
3. Upload all files to your server

## Router Configuration

### router.py Features

- **Clean URL Rewriting**: `/pages/homepage` → `/pages/homepage.html`
- **Index File Serving**: Automatically serves `index.html` for root paths
- **Directory Handling**: Serves `index.html` for directory requests
- **Cache Control**: Prevents HTML caching for dynamic content
- **Error Handling**: Graceful 404 handling
- **Logging**: Console output of all requests

### vercel.json Configuration

The `vercel.json` file includes:
- **Rewrites**: Maps clean URLs to actual `.html` files
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, CSP, etc.
- **Cache Control**: Optimized caching strategies

## Navigation Links

All navigation links use clean URLs:

```html
<!-- These links work with both the router and Vercel -->
<a href="/pages/homepage">Home</a>
<a href="/pages/services">Services</a>
<a href="/pages/contact">Contact</a>
```

## Troubleshooting

### Pages not loading locally?

1. Ensure you're using `npm run dev` (router.py) for clean URLs
2. If using basic HTTP server, add `.html` to URLs
3. Check that Python version is 3.6+

### Clean URLs not working on production?

1. Verify `vercel.json` is in the repository root
2. Check Vercel deployment logs for errors
3. Ensure all links use clean URLs (without `.html`)

## Scripts

```json
{
  "dev": "python3 router.py 8000",           // Start with router
  "dev:basic": "python3 -m http.server 8000", // Start basic server
  "build": "echo 'Static site - no build step needed'",
  "start": "python3 router.py 8000"          // Production start
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

ISC

## Credits

- Built with [Tailwind CSS](https://tailwindcss.com)
- Hosted on [Vercel](https://vercel.com)
- Designed & Maintained by Ayan Kashyap