'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import LoginModal from '../shared/SharedLoginModal/SharedLoginModal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/education', label: 'Education' },
  // { href: '/contact', label: 'Contact' },
];

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 1024);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // Close menu on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ignoreScroll = false;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ignoreScroll && menuOpen && currentScrollY > lastScrollY) {
        setMenuOpen(false);
      }
      lastScrollY = currentScrollY;
    };

    if (menuOpen) {
      ignoreScroll = true;
      timeoutId = setTimeout(() => {
        ignoreScroll = false;
      }, 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [menuOpen]);

  // Check login status
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('app-user-token'));
  }, []);

  const handleLoginSuccess = useCallback(() => {
    setIsLoggedIn(true);
    setShowLogin(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('app-user-token');
    setIsLoggedIn(false);
    window.location.reload();
  }, []);

  const renderLinks = (onClick?: () => void) =>
    navLinks.map(({ href, label }) => (
      <Link key={href} href={href} onClick={onClick}>
        {label}
      </Link>
    ));

  const renderAuthButton = (extraAction?: () => void) =>
    isLoggedIn ? (
      <button
        onClick={() => {
          handleLogout();
          extraAction?.();
        }}
        className="border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition"
      >
        Logout
      </button>
    ) : (
      <button
        onClick={() => {
          setShowLogin(true);
          extraAction?.();
        }}
        className="border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition"
      >
        Login
      </button>
    );

  return (
    <nav className="header-footer-bg">
      {/* Top bar */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">My Portfolio</div>

        {!isMobile ? (
          <div className="flex items-center gap-6">
            {renderLinks()}
            {renderAuthButton()}
          </div>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Backdrop overlay */}
      {isMobile && menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4 pt-20">
            {renderLinks(() => setMenuOpen(false))}
            {renderAuthButton(() => setMenuOpen(false))}
          </div>
        </div>
      )}

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </nav>
  );
}

export default NavBar;
