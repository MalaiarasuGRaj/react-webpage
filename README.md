# React Webpage (Vite + React)

A modern, responsive single-page company landing site built with React and Vite. Sections include Hero, About, Services, Portfolio, Testimonials, and Contact (with client-side validation).

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

- npm start — Runs Vite dev server (host 0.0.0.0, port from PORT or 3000).
- npm run build — Builds for production to dist/.
- npm run preview — Preview the production build on 0.0.0.0:PORT (default 3000).

## Project Structure

- index.html — Vite entry HTML with #root mount.
- src/main.jsx — React entry point.
- src/App.jsx — Main app assembling sections.
- src/components/* — Section components (Hero, About, Services, Portfolio, Testimonials, Contact).
- src/styles.css — Global styles and responsive layout.

## Notes

- No external API keys or environment variables required to run.
- The development server binds to 0.0.0.0 for containerized environments.
- Contact form performs client-side validation only and does not submit to a backend.
