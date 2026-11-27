import React, { useEffect, useState } from "react";

const routes = [
  { name: "Centro histórico", place: "Cochabamba · urbano", duration: "2–3 horas", accessibility: "Ritmo flexible", description: "Una propuesta para descubrir espacios emblemáticos del centro mediante orientación, referencias verbales y pausas planificadas.", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85", alt: "Arquitectura urbana y calles de una ciudad" },
  { name: "Parque y naturaleza", place: "Cochabamba · naturaleza", duration: "Media jornada", accessibility: "En evaluación", description: "Un recorrido demostrativo entre áreas verdes, con información previa sobre superficies, distancias y condiciones del trayecto.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85", alt: "Sendero rodeado de árboles en un entorno natural" },
  { name: "Miradores de la ciudad", place: "Cochabamba · panorámico", duration: "Por definir", accessibility: "Propuesta", description: "Idea de visita para conocer el paisaje y la historia local. El acceso y las condiciones deben evaluarse antes de ofrecerla.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85", alt: "Vista panorámica de montañas y valle" }
];

const services = [
  { icon: "01", title: "Recorridos planificados", text: "Propuestas de visita con información anticipada sobre duración, entorno y características del trayecto." },
  { icon: "02", title: "Orientación y acompañamiento", text: "Apoyo durante la experiencia, comunicación clara y referencias espaciales acordes con cada situación." },
  { icon: "03", title: "Descripción verbal", text: "Explicaciones de lugares, elementos relevantes y contexto para enriquecer la visita." },
  { icon: "04", title: "Adaptación de la experiencia", text: "Actividades y ritmo ajustados, cuando sea posible, a las preferencias y necesidades de cada participante." }
];

const steps = [
  ["01", "Conocemos el recorrido", "Compartimos la propuesta, sus condiciones y la información disponible."],
  ["02", "Conversamos sobre accesibilidad", "Identificamos preferencias y necesidades para preparar la visita."],
  ["03", "Realizamos la experiencia", "El acompañamiento y la orientación se organizan según el recorrido acordado."],
  ["04", "Recogemos observaciones", "Los comentarios ayudan a revisar y mejorar futuras propuestas."]
];

const faqs = [
  ["¿A quién están dirigidos los recorridos?", "La iniciativa está pensada para personas con discapacidad visual. La participación y los apoyos se conversan previamente."],
  ["¿Necesito acudir con acompañante?", "Depende de las condiciones del recorrido y de las necesidades de cada persona. Se aclarará antes de confirmar una actividad."],
  ["¿Qué información se proporciona antes de la visita?", "La propuesta contempla comunicar duración estimada, entorno, desplazamientos y condiciones de accesibilidad conocidas."],
  ["¿Los recorridos están disponibles actualmente?", "Esta web es un prototipo académico. Los recorridos mostrados son demostrativos y no representan actividades habilitadas para reserva."]
];

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Andar, volver al inicio">
            <span className="brand-mark"><Icon name="eye" /></span>
            <span><strong>andar</strong><small>turismo accesible</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span><Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav id="main-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
            <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#recorridos" onClick={closeMenu}>Recorridos</a>
            <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>Conocer el proyecto <Icon name="arrow" /></a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-image" role="img" aria-label="Paisaje de un valle boliviano al amanecer" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow light"><span /> COCHABAMBA · BOLIVIA</p>
            <h1>El destino se descubre<br /><em>de muchas maneras.</em></h1>
            <p className="hero-copy">Experiencias turísticas accesibles, pensadas para recorrer, conocer y disfrutar con información clara y acompañamiento respetuoso.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#recorridos">Explorar propuestas <Icon name="arrow" /></a>
              <a className="text-link light-link" href="#nosotros">Conoce nuestra iniciativa</a>
            </div>
            <div className="hero-note"><span className="note-line" /> Una propuesta que pone la accesibilidad en el camino.</div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="intro section-pad" id="nosotros">
          <div className="container intro-grid">
            <div><p className="eyebrow">01 — QUIÉNES SOMOS</p><h2>Viajar debería abrir caminos,<br /><em>no levantar barreras.</em></h2></div>
            <div className="intro-text"><p className="lead">Andar es una iniciativa en desarrollo que busca acercar el turismo de Cochabamba a personas con discapacidad visual.</p><p>Partimos de una idea sencilla: una experiencia accesible comienza mucho antes de llegar al destino. La información, la planificación y una comunicación adecuada hacen que cada persona pueda decidir cómo quiere vivir su recorrido.</p><a className="text-link" href="#compromiso">Nuestro enfoque <Icon name="arrow" /></a></div>
          </div>
        </section>

        <section className="services section-pad" id="servicios">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">02 — QUÉ OFRECEMOS</p><h2>La experiencia, <em>bien preparada.</em></h2></div><p>Recursos y acompañamiento para que conocer un lugar sea una experiencia más clara, cómoda e inclusiva.</p></div>
            <div className="service-grid">{services.map(s => <article className="service-card" key={s.icon}><span className="service-number">{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p><span className="card-rule" /></article>)}</div>
          </div>
        </section>

        <section className="process section-pad">
          <div className="container process-grid">
            <div className="process-heading"><p className="eyebrow light">03 — CÓMO FUNCIONA</p><h2>Antes, durante<br />y después.</h2><p>Una experiencia accesible se construye en conjunto, con expectativas claras y decisiones compartidas.</p></div>
            <ol className="steps">{steps.map(([num,title,text]) => <li key={num}><span className="step-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="routes section-pad" id="recorridos">
          <div className="container">
            <div className="section-heading routes-heading"><div><p className="eyebrow">04 — DESTINOS</p><h2>Cochabamba, <em>por explorar.</em></h2></div><p>Ideas de recorrido para el prototipo. Las condiciones de acceso deben verificarse antes de ofrecer cada visita.</p></div>
            <div className="route-grid">{routes.map((route, index) => <article className="route-card" key={route.name}><div className="route-photo"><img src={route.image} alt={route.alt} loading="lazy" /><span className="route-label">PROPUESTA {String(index + 1).padStart(2, "0")}</span></div><div className="route-body"><p className="route-place"><Icon name="pin" /> {route.place}</p><h3>{route.name}</h3><p>{route.description}</p><div className="route-meta"><span>{route.duration}</span><span>{route.accessibility}</span></div></div></article>)}</div>
          </div>
        </section>

        <section className="commitment section-pad" id="compromiso">
          <div className="container commitment-grid"><div className="commitment-art"><div className="art-circle"><span>ACCESO</span><strong>para<br />todas las<br /><em>personas.</em></strong><span className="art-bottom">CON SENTIDO</span></div><span className="art-caption">DISEÑAR CON<br />ATENCIÓN</span></div><div className="commitment-copy"><p className="eyebrow">05 — NUESTRO COMPROMISO</p><h2>La accesibilidad<br />se <em>practica.</em></h2><p className="lead">No se trata de prometer que no habrá barreras. Se trata de identificarlas, comunicar lo que sabemos y mejorar cada propuesta con responsabilidad.</p><ul className="commitment-list"><li>Información previa comprensible</li><li>Trato respetuoso y comunicación directa</li><li>Evaluación de las condiciones del recorrido</li><li>Atención a la autonomía y preferencias personales</li></ul></div></div>
        </section>

        <section className="faq section-pad" id="preguntas"><div className="container faq-grid"><div><p className="eyebrow">06 — PREGUNTAS FRECUENTES</p><h2>Lo importante,<br /><em>sin rodeos.</em></h2><p className="faq-aside">Si algo no está claro, la información debe poder consultarse antes de iniciar el recorrido.</p></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

        <section className="contact" id="contacto"><div className="container contact-inner"><div><p className="eyebrow light">07 — CONTACTO</p><h2>Conversemos sobre<br /><em>turismo accesible.</em></h2><p>Este espacio presenta los datos de contacto previstos para el proyecto. Los canales siguientes son ficticios y no están habilitados.</p></div><div className="contact-details"><div><span>UBICACIÓN</span><strong>Cochabamba, Bolivia</strong></div><div><span>Correo de demostración</span><strong>hola@andar-accesible.example</strong></div><div><span>Estado</span><strong>Prototipo académico · En desarrollo</strong></div></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Icon name="eye" /></span><span><strong>andar</strong><small>turismo accesible</small></span></a><p>Conocer un lugar también es<br />encontrar nuevas formas de recorrerlo.</p><nav aria-label="Navegación de pie de página"><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#recorridos">Recorridos</a><a href="#contacto">Contacto</a></nav></div><div className="container footer-bottom"><span>© 2026 Andar · Proyecto demostrativo</span><span>Diseñado desde la accesibilidad</span></div></footer>
    </>
  );
}

export default App;

