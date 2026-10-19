# Sooraj Muralidharan — Portfolio

A responsive, single-page portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion.

## Setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it locally with `npm run preview`. Run static checks with `npm run lint`; format files with `npm run format`.

## Update the content

All portfolio copy and editable content lives under `src/data/`:

- `site.js`: name, role, tagline, biography, contact information, résumé path, and stats.
- `projects.js`: project summaries, technology tags, image URLs, and links.
- `skills.js`: grouped technology lists.
- `experience.js`: career and education timeline entries.
- `socials.js`: social profile links and icons.

Replace sample project screenshots and links, timeline entries, biography, stats, and contact details with verified information. Add a résumé as `public/resume.pdf` or change `site.resume`. The placeholder portrait is a generated monogram; use a real photo in the About section when ready. Replace the default Open Graph preview in `public/og-image.svg` before sharing.

## Configure the contact form (EmailJS)

Create an EmailJS service and template, then add the following values to a local `.env` file in the project root (never commit real secrets):

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The template should accept `name`, `email`, and `message` fields. Restart Vite after updating `.env`. Without configuration, the form reports that setup is needed and the direct email link remains available.

## Deploy

### Vercel

Import the repository in Vercel. Use `npm run build` as the build command and `dist` as the output directory. Add the three EmailJS environment variables in project settings.

### Netlify

Import the repository in Netlify. Set the build command to `npm run build` and publish directory to `dist`. Add the EmailJS environment variables in Site configuration → Environment variables.

This single-page site does not require router rewrites. Restrict the EmailJS public key to the domain(s) where the site is deployed.
