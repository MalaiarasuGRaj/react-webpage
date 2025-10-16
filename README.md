# React Webpage (Vite + React + React Router)

A modern, responsive multi-page company website built with React, Vite, and React Router. Dedicated pages include Home, About, Services, Portfolio (with detail), Testimonials, Careers (with detail), Contact (with validation), and Legal.

## Quick Start

- Install dependencies:
  npm install

- Start development server on port 3000:
  npm start

The server binds to 0.0.0.0 and respects the PORT environment variable if set:
  PORT=3000 npm start

To avoid auto-opening the browser, we set BROWSER=none by default (Vite does not open a browser unless configured).

Open http://localhost:3000 to view the app.

## Scripts

- npm start — Runs Vite dev server (host 0.0.0.0, port 3000 strict).
- npm run build — Builds for production to dist/.
- npm run preview — Preview the production build on 0.0.0.0:PORT (default 3000).

## Routes

- / — Home (Hero, Services, Portfolio highlights, Testimonials)
- /about — About the company
- /services — Services grid + FAQ
- /portfolio — Portfolio grid (filterable) from local data
- /portfolio/:slug — Case study detail
- /testimonials — Client testimonials
- /careers — Jobs list
- /careers/:id — Job detail
- /contact — Contact form (client-side validated)
- /privacy — Privacy Policy
- /terms — Terms of Service

## Project Structure

- index.html — Base HTML with route-friendly <base href="/"> and default meta.
- src/main.jsx — Router entry point with lazy-loaded pages.
- src/layouts/Layout.jsx — Shared layout (Header, Footer, skip-to-content link).
- src/components/* — Reusable components (Hero, Contact, etc.).
- src/pages/* — Route pages for each top-level path.
- src/data/* — Local JSON-like data modules for services, case studies, testimonials, jobs.
- src/styles.css — Global styles, responsive layout, and header/footer/nav styles.

## Data-driven Content

Update local data inside:
- src/data/services.js
- src/data/caseStudies.js
- src/data/testimonials.js
- src/data/jobs.js

Pages import from these modules at runtime; no external APIs are used.

## Accessibility and Responsiveness

- Shared layout includes a “Skip to content” link.
- Visible focus styles and keyboard-friendly navigation.
- Mobile nav uses a hamburger toggle with aria-expanded and closes on link click / Esc.
- Responsive grids and typography support mobile → desktop breakpoints.

## Notes

- No external API keys or environment variables required to run.
- The development server uses port 3000 and allows the configured preview host (see vite.config.js).
- The Contact form performs client-side validation only and does not submit to a backend.
