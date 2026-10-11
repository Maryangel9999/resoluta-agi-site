import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-content .eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.hero-content h1', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-content > p', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-actions .btn', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-points li', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.3');

      gsap.from('.hero-visual img', {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.floating-card', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.6
      });

      // Animação flutuante contínua
      gsap.to('.floating-card.card-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.floating-card.card-2', {
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-bg"></div>
      <div className="container hero-grid">
        <div className="hero-content" ref={contentRef}>
          <span className="eyebrow">Consultoria para pequenos negócios</span>
          <h1>Transformamos Gestão em Resultados.</h1>
          <p>
            Ajudamos pequenos negócios a crescerem com organização, planejamento e
            inteligência financeira.
          </p>

          <div className="hero-actions">
            <a href="#calculator" className="btn btn-primary">Calcular Preço de Venda</a>
            <a href="#about" className="btn btn-secondary">Conheça a Resoluta AGI</a>
          </div>

          <ul className="hero-points">
            <li><i className="fa-solid fa-check"></i> Precificação inteligente</li>
            <li><i className="fa-solid fa-check"></i> Gestão financeira com clareza</li>
            <li><i className="fa-solid fa-check"></i> Estratégia para crescer com segurança</li>
          </ul>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="floating-card card-1">
            <div className="mini-stat">
              <span className="label">Lucratividade</span>
              <strong>+38%</strong>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="mini-chart">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            alt="Empresários reunidos em reunião profissional de gestão empresarial"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
