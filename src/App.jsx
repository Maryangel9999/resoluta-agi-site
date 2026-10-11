import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Calculator from './components/Calculator';
import Knowledge from './components/Knowledge';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Animação de fade-in na montagem
    gsap.from('body', {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Scroll suave global
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: target, offsetY: 80 },
            ease: 'power3.out'
          });
        }
      });
    });
  }, []);

  return (
    <div ref={appRef} className="app">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Stats />
        <About />
        <Calculator />
        <Knowledge />
        <Services />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
