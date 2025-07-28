import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import portfolio from '../../asset/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'project', 'skills', 'experience', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">
          <img src={portfolio} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'project' ? 'active' : ''}`}
            to="/project"
            onClick={handleLinkClick}
          >
            Project
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
            to="/skills"
            onClick={handleLinkClick}
          >
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`}
            to="/experience"
            onClick={handleLinkClick}
          >
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            to="/about"
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
