# Ghafan Steel Works — Website

High-performance marketing site for **Ghafan Steel Works** (Al Qusais Industrial 1, Dubai), built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Features
- Industrial "steel" dark + safety-orange design system
- Pages: Home, Services, Projects, About, Contact
- Floating WhatsApp CTA + sticky call/quote buttons
- SEO: per-page metadata, OpenGraph, `LocalBusiness` JSON-LD, sitemap & robots
- Scroll-reveal animations, fully responsive, accessible (reduced-motion aware)
- Contact form that opens WhatsApp with details pre-filled (no backend needed)

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Edit business details — one file
All content (phone, **WhatsApp number**, email, address, hours, services, stats)
lives in **`lib/site.js`**. Update the placeholder values:

```js
phoneDisplay: "+971 50 000 0000",   // shown on the site
phoneRaw: "+971500000000",          // tel: link
whatsapp: "971500000000",           // WhatsApp (no +, no spaces)
email: "info@ghafansteelworks.ae",
url: "https://ghafansteelworks.ae", // your live domain
```

> Replace the placeholder WhatsApp/phone number with the real one before going live.

## Deploy
Optimised for **Vercel** — push to a Git repo and import, or run `npm run build`
and host the output anywhere that runs Node.
"# ghafan" 
