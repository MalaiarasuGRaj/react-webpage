import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

/**
 * PUBLIC_INTERFACE
 * Layout wraps all route pages with a shared header, skip-to-content link, main content, and footer.
 */
export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
