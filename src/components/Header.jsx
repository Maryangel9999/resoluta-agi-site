import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to('.main-nav', {
        duration: 0.3,
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        ease: 'power2.out'
      });
    } else {
      gsap.to('.main-nav', {
        duration: 0.2,
        opacity: 0,
        y: -10,
        pointerEvents: 'none',
        ease: 'power2.in'
      });
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#calculator', label: 'Calculadora' },
    { href: '#knowledge', label: 'Conhecimento' },
    { href: '#services', label: 'Serviços' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label="Resoluta AGI - Home">
          <span className="brand-mark">R</span>
          <span>
            <strong>Resoluta</strong>
            <small>AGI</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal" role="navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary header-btn">
            Fale conosco
          </a>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
