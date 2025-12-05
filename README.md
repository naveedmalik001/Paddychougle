# Paddy Chougule Portfolio

A modern, production-ready Next.js portfolio website designed for a fitness model and actor. Built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design:** Sleek Charcoal & Gold theme.
- **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.
- **Scroll Spy:** Sticky header with active section highlighting.
- **Interactive:** Smooth animations and modal-based project views.
- **Contact API:** Serverless API route handling form submissions.
- **SEO Ready:** Semantic HTML and optimized metadata.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Form:** React Hook Form

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

4. **Customize Content:**
   - Edit content in `components/` files.
   - Replace images in `public/images/`.
   - Update `app/layout.tsx` for SEO metadata.

## Deployment

Deploy easily to [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project in Vercel.
3. Vercel will auto-detect Next.js and build.

## Checklist (Pre-Launch)
- [ ] Replace placeholder images in `/public/images`.
- [ ] Add your actual `media-kit.pdf` to `/public`.
- [ ] Update `app/api/contact/route.ts` with real email service (e.g., Resend, SendGrid).
