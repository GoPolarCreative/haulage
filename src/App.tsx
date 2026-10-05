import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  Mail,
  Menu,
  MoveUpRight,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';

const galleryImages = [
  { src: '/2884b2ac-3c08-4782-a53d-901336ebf7a0.jpg', alt: 'Super Tilts heavy haulage truck at night' },
  { src: '/a3e44266-024a-47c7-8cf4-d79125ead6fa.jpg', alt: 'Heavy haulage truck carrying a large industrial unit' },
  { src: '/86cbfebb-70ca-43e8-81f9-d8e5d793f5ec.jpg', alt: 'Super Tilts prime mover on the road' },
  { src: '/e2d66415-1615-4f15-8a71-54b414e274c2.jpg', alt: 'Oversize load transport at sunset' },
  { src: '/6bb3cfc7-70dc-4dca-abe9-4868e02eb4ad.jpg', alt: 'Heavy transport with forklift and equipment' },
  { src: '/7dd3da34-af38-40fd-8634-f5a227b96b13.jpg', alt: 'Super Tilts truck with specialist trailer' },
  { src: '/de6cc5c5-6680-4d35-8f48-2b7a9e4314b3.jpg', alt: 'Wide load transport across Australia' },
  { src: '/91ab768d-c205-45d8-8f63-c230d7f34120.jpg', alt: 'Heavy haulage convoy at dusk' },
  { src: '/904a86bd-0781-4ec8-a0fa-0d765d450337.jpg', alt: 'Oversize machinery ready for transport' },
];

const services = [
  { number: '01', title: 'Heavy haulage', text: 'Purpose-built equipment and experienced operators for the loads that demand more.' },
  { number: '02', title: 'Oversize transport', text: 'Carefully planned movements for oversized machinery, structures and specialist freight.' },
  { number: '03', title: 'General transport', text: 'From caravans and boats to machinery and materials, if it needs moving, we move it.' },
  { number: '04', title: 'Project logistics', text: 'From first route check to final delivery, every detail is coordinated with precision.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Super Tilts home">
          <img src="/Super_Tilts_logo.jpg" alt="Super Tilts and Heavy Haulage Australia" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>Why Super Tilts</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Any move, big or small</div>
              <h1>Big moves.<br /><em>Handled.</em></h1>
              <p>From caravans and boats to oversize machinery and project freight, Super Tilts moves it all. Specialist heavy haulage when you need it, everyday transport when you don't.</p>
              <div className="hero-actions">
                <a className="button button-red" href="#contact">Plan your move <ArrowRight size={17} /></a>
                <a className="text-link" href="#gallery">See the fleet <MoveUpRight size={16} /></a>
              </div>
              <div className="hero-trust"><ShieldCheck size={18} /><span>Trusted for complex loads and critical deadlines</span></div>
            </div>
            <div className="contact-card" id="contact">
              <div className="card-kicker">Tell us what’s moving</div>
              <h2>Let’s make a plan.</h2>
              {submitted ? (
                <div className="success-message"><CircleCheck size={30} /><h3>Thanks, we’ve got it.</h3><p>Your enquiry is ready for the Super Tilts team. We’ll be in touch shortly.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={15} /></button></div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field-row">
                    <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
                    <label><span>Phone</span><input name="phone" type="tel" placeholder="Your phone" required /></label>
                  </div>
                  <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" required /></label>
                  <label><span>What are you moving?</span><textarea name="message" rows={3} placeholder="Tell us a little about your load, route or timeline" required /></label>
                  <button className="button button-dark" type="submit">Request a callback <ArrowRight size={16} /></button>
                  <small>We’ll only use your details to respond to this enquiry.</small>
                </form>
              )}
            </div>
          </div>
          <a className="scroll-cue" href="#services"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        </section>

        <section className="intro-section page-width" id="about">
          <div className="section-label">01 / The difference</div>
          <div className="intro-grid">
            <h2>When the load is critical, <span>experience matters.</span></h2>
            <div className="intro-copy"><p>Super Tilts and Heavy Haulage Australia exists for the jobs that cannot be left to chance. But we are not just for the big stuff. From a caravan across the state to oversize machinery across the country, we bring the same care, communication and pride in getting it right to every single move.</p><a className="text-link" href="#contact">Talk to the team <ArrowRight size={16} /></a></div>
          </div>
          <div className="stats-row"><div><strong>24<span>/7</span></strong><p>Project-minded support</p></div><div><strong>AU<span>STRALIA</span></strong><p>Nationwide capability</p></div><div><strong>01</strong><p>Clear point of contact</p></div></div>
        </section>

        <section className="services-section" id="services">
          <div className="page-width"><div className="section-label light">02 / What we do</div><div className="services-heading"><h2>Capability for<br /><span>the uncommon.</span></h2><p>Specialist solutions for freight that sits outside the ordinary, plus everyday transport for the jobs that just need a good operator. Every move is considered, coordinated and carried through.</p></div>
            <div className="service-list">{services.map((service) => <div className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ChevronRight className="service-arrow" size={21} /></div>)}</div>
          </div>
        </section>

        <section className="gallery-section page-width" id="gallery">
          <div className="section-top"><div><div className="section-label">03 / In the field</div><h2>A fleet built to <span>move with purpose.</span></h2></div><a className="text-link" href="#contact">Need a tailored solution? <ArrowRight size={16} /></a></div>
          <div className="gallery-grid">{galleryImages.map((image, index) => <button className="gallery-tile" key={image.src} onClick={() => setActiveImage(index)} aria-label={`View ${image.alt}`}><img src={image.src} alt={image.alt} loading={index > 2 ? 'lazy' : 'eager'} /><span><MoveUpRight size={18} /></span></button>)}</div>
        </section>

        <section className="closing-section"><div className="page-width closing-inner"><div className="closing-mark"><Truck size={31} /></div><div><div className="eyebrow"><span /> Ready when you are</div><h2>Let’s move<br /><em>something.</em></h2></div><a className="button button-red" href="#contact">Start a conversation <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-main"><div className="footer-brand"><img src="/Super_Tilts_logo.jpg" alt="Super Tilts" /><p>Heavy haulage, oversize and everyday transport Australia-wide.</p></div><div className="footer-links"><div><span className="footer-heading">Explore</span><a href="#services">Services</a><a href="#about">Why Super Tilts</a><a href="#gallery">Gallery</a></div><div><span className="footer-heading">Get in touch</span><a href="#contact"><Phone size={14} /> Request a callback</a><a href="#contact"><Mail size={14} /> Send an enquiry</a><span className="footer-detail"><Clock3 size={14} /> Available for project work</span></div></div></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Super Tilts and Heavy Haulage Australia</span><a href="https://www.itscold.com.au" target="_blank" rel="noreferrer">Website by Go Polar <MoveUpRight size={13} /></a></div></footer>

      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}><button onClick={() => setActiveImage(null)} aria-label="Close image"><X size={24} /></button><img src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} onClick={(event) => event.stopPropagation()} /></div>}
    </div>
  );
}

export default App;
