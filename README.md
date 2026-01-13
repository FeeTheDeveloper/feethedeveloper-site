# Fee The Developer LLC - Marketing Website

A production-ready marketing website for Fee The Developer LLC, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14 App Router (no /pages directory)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive mobile-first design
- ✅ Smooth scroll navigation
- ✅ Client-side contact form
- ✅ Vercel-ready with zero configuration
- ✅ SEO-optimized metadata
- ✅ Strict red/black/gray/white palette via CSS variables + Tailwind tokens

## Project Structure

```
feethedeveloper-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global Tailwind styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Site Sections

The homepage includes all marketing sections in order:

1. **Header** - Logo, navigation, and CTA button
2. **Hero** - Main value proposition
3. **What We Do** - Service offerings (5 services)
4. **Hosting Packages** - 3-tier hosting plans ($99–$399/month)
5. **Who We Work With** - Target audience
6. **Why Us** - Key differentiators
7. **Website Build Packages** - 3-tier build packages ($1,500–$5,000+)
8. **How Engagements Work** - Engagement types
9. **Contact / Let's Build** - Contact form and email link
10. **Footer** - Copyright information

## Local Development

### Prerequisites

- Node.js 20.x (use `node --version` to check)
- npm (comes with Node.js)

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# The site will be at http://localhost:3000
```

The development server watches for changes and hot-reloads automatically.

### Building for Production

```bash
# Build the project
npm run build

# Start the production server locally
npm start

# Open in browser at http://localhost:3000
```

### Linting

```bash
npm run lint
```

## Color Palette (Mandatory)

Defined in app/globals.css and mapped in tailwind.config.ts:

- `--bg: #0B0B0D`
- `--fg: #F5F5F7`
- `--muted: #B3B3B8`
- `--surface: #1F1F23`
- `--surface-2: #2A2A30`
- `--border: #2A2A30`
- `--accent: #D11A2A`
- `--accent-hover: #B91523`

Tailwind tokens use these variables only (`bg`, `fg`, `muted`, `surface`, `surface2`, `border`, `accent`, `accentHover`). Buttons, hover, and focus-visible rings rely on `accent`/`accentHover`; no other hues are used.

## Deployment to Vercel

### Step 1: Prepare Your Repository

Ensure all code is committed to git:

```bash
git add .
git commit -m "Initial commit: Fee The Developer website"
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (or create an account)
3. Click "New Project"
4. Select your repository (`feethedeveloper-site`)
5. **Keep all defaults** - Vercel auto-detects Next.js
6. Click "Deploy"

**No additional configuration needed.** Vercel automatically:
- Detects Next.js 14
- Installs dependencies
- Builds the project
- Deploys to production

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy from the project directory
vercel

# Follow prompts:
# - Confirm project name
# - Select account
# - Select "Link to existing project" or create new
# - Accept defaults for build/output settings
```

### Step 3: Verify Deployment

After deployment completes, Vercel provides a production URL. Verify:

#### Checklist - No 404 Errors

- [ ] **Root Route** → Visit `https://your-project.vercel.app/` (should show homepage, NOT 404)
- [ ] **Scroll Navigation** → Click header links (What We Do, Who We Work With, etc.) → should smooth-scroll to correct sections
- [ ] **Contact CTA** → Click "Start a conversation" or "Request a quote" → should scroll to contact form
- [ ] **Email Link** → Click "Email Fee" → should open default email client with prefilled address
- [ ] **Form Submission** → Fill contact form and submit → should open email client with form data
- [ ] **Mobile** → Test on mobile device or use browser DevTools (should be fully responsive)

## Common Causes of 404 Errors (This Repo Avoids All of These)

### ❌ Problem: Wrong App Router Setup
- **Cause:** Using `/pages` directory instead of `/app`
- **This repo:** ✅ Uses `/app/layout.tsx` and `/app/page.tsx`

### ❌ Problem: Missing Root Layout
- **Cause:** No `app/layout.tsx` file
- **This repo:** ✅ Includes proper root layout with metadata

### ❌ Problem: Missing Homepage File
- **Cause:** No `app/page.tsx` file
- **This repo:** ✅ Homepage at `app/page.tsx` (root route `/`)

### ❌ Problem: Incorrect Route File Names
- **Cause:** Typos in `layout.tsx`, `page.tsx`, etc.
- **This repo:** ✅ All files named correctly per Next.js conventions

### ❌ Problem: Broken Imports
- **Cause:** Hardcoded absolute paths, missing exports
- **This repo:** ✅ Clean relative imports, no external dependencies

### ❌ Problem: Missing package.json Scripts
- **Cause:** Incomplete or incorrect npm scripts
- **This repo:** ✅ Includes all required scripts: `dev`, `build`, `start`, `lint`

### ❌ Problem: Incompatible Node Version
- **Cause:** Node < 20
- **This repo:** ✅ Requires Node 20.x (specified in package.json)

### ❌ Problem: Vercel Configuration Conflicts
- **Cause:** Custom `vercel.json` with incorrect settings
- **This repo:** ✅ No `vercel.json` needed (uses defaults)

## Troubleshooting

### Issue: 404 on Root Route (`/`)

**Solution:**
1. Verify `/app/page.tsx` exists
2. Run `npm run build` locally to check for errors
3. Check build logs in Vercel dashboard (Settings → Deployments → click failed deployment)
4. Ensure no typos in `app/page.tsx` or `app/layout.tsx`

### Issue: Styles Not Loading

**Solution:**
1. Verify `app/globals.css` is imported in `app/layout.tsx`
2. Check that Tailwind is configured in `tailwind.config.ts`
3. Run `npm run build` to verify CSS generation

### Issue: Navigation Links Not Working

**Solution:**
1. Ensure section IDs match nav link IDs (e.g., `id="contact"` in nav and section)
2. Check browser console for JavaScript errors
3. Verify smooth scroll is enabled in `app/globals.css`

### Issue: Form Not Sending Email

**Solution:**
- The form is client-side only. Clicking "Send Message" should open the user's email client.
- This is intentional—no backend required.

## Technologies

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Runtime:** Node.js 20.x
- **Hosting:** Vercel (recommended)

## Performance & SEO

- ✅ Metadata configured for social sharing
- ✅ Mobile-responsive design
- ✅ No external API calls
- ✅ Fast build and deployment on Vercel
- ✅ Automatic static optimization

## License

Fee The Developer LLC

## Contact

Email: fee@feethedeveloper.com