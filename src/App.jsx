import React, { useEffect, useState } from 'react';
import './App.css';
import { config } from './config';

function App() {
  const [scrolled, setScrolled] = useState(false);

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
    return null;
  };

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-text">{config.company.type} <strong className="weight-bold">{config.company.name}</strong></span>
          </div>
          <nav className="nav-desktop">
            <a href="#identity" className="cursor-pointer">選ばれる理由</a>
            <a href="#services" className="cursor-pointer">サービス</a>
            <a href="#works" className="cursor-pointer">施工実績</a>
            <a href="#flow" className="cursor-pointer">施工の流れ</a>
            <a href="#faq" className="cursor-pointer">よくある質問</a>
          </nav>
          <div className="header-header-cta">
            <a href={`tel:${config.company.phone.replace(/-/g, '')}`} className="phone-link cursor-pointer">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {config.company.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content reveal">
            <h1 dangerouslySetInnerHTML={{ __html: config.hero.headline.replace(/\n/g, '<br />') }}></h1>
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
            <img src="/craftsmanship.png" alt="職人の技術" className="rounded-image shadow shadow-xl" />
          </div>
          <div className="identity-text reveal-stagger">
            <span className="section-label">{config.identity.label}</span>
            <h2 dangerouslySetInnerHTML={{ __html: config.identity.title.replace(/\n/g, '<br />') }}></h2>
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
            <span className="section-label">Our Services</span>
            <h2>住まいを「守り、育てる」ための専門技術</h2>
          </div>
          <div className="services-grid">
            {config.services.map((service, idx) => (
              <div key={idx} className="service-card cursor-pointer reveal">
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

      {/* Flow Section */}
      <section id="flow" className="flow section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Process</span>
            <h2>完成までの5ステップ</h2>
          </div>
          <div className="flow-grid reveal-stagger">
            {[
              { step: "01", title: "ご相談・ヒアリング", desc: `まずはお電話かフォームで。${config.company.representative}が直接お話を伺います。` },
              { step: "02", title: "現場調査・お見積り", desc: "現場を細かく確認し、透明性の高いお見積りをご提示します。" },
              { step: "03", title: "プラン作成・ご契約", desc: "納得いくまで打ち合わせを重ね、理想の形を確定させます。" },
              { step: "04", title: "熟練職人による直接施工", desc: `私が現場責任者として、心を込めて一釘一釘打ち込みます。` },
              { step: "05", title: "点検・アフターケア", desc: "完成後が本当のお付き合いの始まり。いつでも駆けつけます。" }
            ].map((item, index) => (
              <div key={index} className="flow-item">
                <div className="flow-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Works Section */}
      <section id="works" className="works section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Works</span>
            <h2>{config.works.title}</h2>
            <p className="section-subtitle">{config.works.subtitle}</p>
          </div>
          <div className="works-gallery">
            {config.works.items.map((item, idx) => (
              <div key={idx} className={`works-item ${item.large ? 'large' : ''} cursor-pointer reveal`}>
                <img src={item.image} alt={item.title} />
                <div className="works-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Unique Commemorative Service Section */}
          <div className="commemorative-service shadow-xl reveal">
            <div className="commemorative-grid">
              <div className="commemorative-content">
                <span className="service-badge">{config.uniqueService.badge}</span>
                <h3>{config.uniqueService.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: config.uniqueService.description.replace(/\n/g, '<br />') }}></p>
                <div className="commemorative-image-mobile">
                  <img src={config.uniqueService.image} alt="家族の手形" className="rounded-image" />
                </div>
              </div>
              <div className="commemorative-image-desktop">
                <img src={config.uniqueService.image} alt="家族の手形" className="rounded-image shadow shadow-lg" />
              </div>
            </div>
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
                {config.message.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                <p className="signature">
                  {config.company.title}　<strong className="weight-bold">{config.company.representative}</strong>
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
    </div>
  );
}

export default App;
