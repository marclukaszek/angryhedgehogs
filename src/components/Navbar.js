import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="desktop-navbar">
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#players">PLAYERS</a></li>
          <li><a href="#sponsors">SPONSORS</a></li>
          <li><a href="#videos">VIDEOS</a></li>
          <li><a href="#contact">RECRUITMENT</a></li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`mobile-navbar ${showNavbar ? 'visible' : ''}`}>
        <div className="mobile-navbar-content">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
        </div>
        {menuOpen && (
          <ul className="mobile-menu">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#players">PLAYERS</a></li>
            <li><a href="#sponsors">SPONSORS</a></li>
            <li><a href="#videos">VIDEOS</a></li>
            <li><a href="#contact">RECRUITMENT</a></li>
          </ul>
        )}
      </nav>
    </>
  );
}
