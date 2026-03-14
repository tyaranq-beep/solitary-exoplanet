import React, { useEffect, useState } from 'react';
import './App.css';
import { config } from './config';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set CSS Variables for colors and fonts dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.design.colors.primary);
    root.style.setProperty('--color-secondary', config.design.colors.secondary);
    root.style.setProperty('--color-accent', config.design.colors.accent);
    root.style.setProperty('--color-gold', config.design.colors.gold);
    root.style.setProperty('--font-heading', config.design.fonts.heading);
    root.style.setProperty('--font-body', config.design.fonts.body);
  }, []);

  const Icon = ({ name, className }) => {
    if (name === 'home') return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
    if (name === 'tool') return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
    if (name === 'alert') return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
    if (name === 'plus') return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v19M3 12h19"></path></svg>;
    if (name === 'check') return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
    return null;
  };

  return (
    <div className="app-wrapper">
      {/* Demo Disclosure Bar */}
      <div className="demo-disclosure">
        <div className="container center">
          <p>{config.hero.demoNote}</p>
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''} ${menuOpen ? 'header-menu-open' : ''}`}>
        <div className="container header-content">
          <div className="logo cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>
            <span className="logo-text">{config.company.type} <strong className="weight-bold">{config.company.name}</strong></span>
          </div>
          <nav className={`nav-desktop ${menuOpen ? 'nav-mobile-open' : ''}`}>
            <a href="#identity" className="cursor-pointer" onClick={() => setMenuOpen(false)}>選ばれる理由</a>
            <a href="#services" className="cursor-pointer" onClick={() => setMenuOpen(false)}>サービス</a>
            <a href="#works" className="cursor-pointer" onClick={() => setMenuOpen(false)}>施工実績</a>
            <a href="#message" className="cursor-pointer" onClick={() => setMenuOpen(false)}>代表メッセージ</a>
          </nav>
          <div className="header-header-cta">
            <a href={`tel:${config.company.phone.replace(/-/g, '')}`} className="phone-link cursor-pointer">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {config.company.phone}
            </a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="badge-item">国家資格1級技能士</span>
              <span className="badge-item">大工歴35年</span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: config.hero.headline }}></h1>
            <p className="hero-subline">{config.hero.subline}</p>
            <div className="hero-actions">
              <a href="#contact" className="cta-button primary-cta cursor-pointer">{config.hero.primaryCta}</a>
              <a href="#works" className="cta-button secondary-cta cursor-pointer">{config.hero.secondaryCta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section id="identity" className="identity section">
        <div className="container identity-grid">
          <div className="identity-image reveal">
            <img src="/craftsman-spirit.png" alt="職人の技術" className="rounded-image shadow shadow-xl" />
            <span className="ai-annotation">{config.works.aiNote}</span>
          </div>
          <div className="identity-text reveal-stagger">
            <span className="section-label">{config.identity.label}</span>
            <h2 dangerouslySetInnerHTML={{ __html: config.identity.title }}></h2>
            <p className="text-muted">{config.identity.description}</p>
            <div className="features-simple">
              {config.identity.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>{feature.bold}</strong>：{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Business Scope</span>
            <h2>事業内容</h2>
          </div>
          <div className="services-grid">
            {config.services.map((service, idx) => (
              <div key={idx} className="service-card reveal">
                <div className="service-icon-box">
                  <Icon name={service.icon} className="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section section">
        <div className="container">
          <div className="commemorative-service shadow-xl reveal">
            <div className="commemorative-grid">
              <div className="commemorative-content">
                <span className="service-badge">{config.commitment.badge}</span>
                <h3>{config.commitment.title}</h3>
                <p>{config.commitment.description}</p>
                <div className="commemorative-image-mobile">
                  <img src={config.commitment.image} alt="誠実な施工" className="rounded-image" />
                  <span className="ai-annotation">{config.works.aiNote}</span>
                </div>
              </div>
              <div className="commemorative-image-desktop">
                <img src={config.commitment.image} alt="誠実な施工" className="rounded-image shadow shadow-lg" />
                <span className="ai-annotation">{config.works.aiNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Works Section */}
      <section id="works" className="works section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Portfolio</span>
            <h2>{config.works.title}</h2>
            <p className="section-subtitle">{config.works.subtitle}</p>
          </div>
          <div className="works-gallery">
            {config.works.items.map((item, idx) => (
              <div key={idx} className={`works-item ${item.large ? 'large' : ''} reveal`}>
                <div className="works-image-container">
                  <img src={item.image} alt={item.title} />
                  <span className="ai-annotation">{config.works.aiNote}</span>
                </div>
                <div className="works-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Q & A</span>
            <h2>よくあるご質問</h2>
          </div>
          <div className="faq-grid reveal-stagger">
            {config.faq.map((item, idx) => (
              <div key={idx} className="faq-item">
                <h4>Q. {item.q}</h4>
                <p>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="message section-alt">
        <div className="container reveal">
          <div className="message-container shadow-xl">
            <div className="message-content">
              <span className="section-label">Representative Message</span>
              <h2>{config.message.title}</h2>
              <div className="message-body">
                {config.message.quotes.map((quote, idx) => (
                  <p key={idx} className="message-quote">{quote}</p>
                ))}
                <p className="signature">
                  {config.company.title} <strong className="weight-bold">{config.company.representative}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-left reveal">
            <span className="logo-text">{config.company.type} <strong className="weight-bold">{config.company.name}</strong></span>
            <p className="footer-address">
              {config.company.address}<br />
              電話：{config.company.phone} / FAX：{config.company.fax}
            </p>
          </div>
          <div className="footer-right reveal">
            <div className="footer-cta-box shadow-md">
              <h3>まずは無料のご相談から</h3>
              <p>「こんなこと相談していいのかな？」というお悩みも誠実に伺います。</p>
              <a href={`tel:${config.company.phone.replace(/-/g, '')}`} className="footer-phone hover-lift cursor-pointer">{config.company.phone}</a>
              <p className="footer-note">受付：8:00〜18:00（日曜定休ですが、事前予約で打ち合わせ可能）</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 {config.company.type} {config.company.name}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <a href={`tel:${config.company.phone.replace(/-/g, '')}`} className="floating-call-btn">
        <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        お電話で無料相談
      </a>
    </div>
  );
}

export default App;
