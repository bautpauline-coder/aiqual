/* ============================================
   AIQual — main.js
   Bilingue FR / EN
   ============================================ */

// --- Traductions ---
const translations = {
  fr: {
    'meta.title':              'AIQual — Automatisation IA · Genève',
    'meta.description':        'AIQual — Automatisation intelligente et agents IA pour entreprises. Startup genevoise spécialisée en IA agentique.',
    'nav.home':                'Accueil',
    'nav.services':            'Services',
    'nav.about':               'À propos',
    'nav.cta':                 'Prendre RDV',
    'hero.badge':              '🇨🇭 Startup genevoise',
    'hero.title':              "L'automatisation IA<br/>au service de votre entreprise",
    'hero.sub':                'AIQual conçoit et déploie des <strong>agents IA autonomes</strong> qui automatisent vos processus métiers, vous font gagner du temps et amplifient votre impact.',
    'hero.ctaPrimary':         'Prendre rendez-vous',
    'hero.ctaSecondary':       'Découvrir nos services',
    'services.title':          'Nos services',
    'services.sub':            'Des solutions IA sur mesure pour accélérer votre transformation numérique',
    'services.card1.title':    'Agents IA autonomes',
    'services.card1.text':     "Conception et déploiement d'agents capables de raisonner, décider et agir — intégrés à vos outils existants (Telegram, CRM, ERP).",
    'services.card2.title':    'Automatisation de processus',
    'services.card2.text':     'Orchestration de workflows complexes via n8n, Make et LangGraph. Réduisez les tâches répétitives et libérez votre équipe.',
    'services.card3.title':    'Veille technologique IA',
    'services.card3.text':     "Suivi et analyse des dernières avancées en IA générative, LLMs et automatisation pour rester à la pointe de l'innovation.",
    'services.card4.title':    'Consulting & Formation',
    'services.card4.text':     "Accompagnement stratégique pour l'adoption de l'IA en entreprise. Partenaire ESM Genève — programme Business Specialist IA.",
    'about.title':             "À propos d'AIQual",
    'about.sub':               "Nous sommes une startup genevoise à l'intersection de l'intelligence artificielle et de l'automatisation métier.",
    'about.p1':                "Chez AIQual, nous croyons que l'IA agentique représente un tournant majeur pour les organisations. Notre mission est de rendre cette technologie accessible, concrète et immédiatement utile — que vous soyez une PME ou une grande entreprise.",
    'about.p2':                "En lien avec l'<strong>ESM Genève</strong>, nous formons également les professionnels de demain aux métiers du Business Specialist IA.",
    'about.stat1':             'Agents IA déployés',
    'about.stat2':             'Made in Geneva 🇨🇭',
    'about.stackTitle':        'Stack technologique',
    'about.stackData':         '🗄️ Données : RAG, Pinecone, PostgreSQL',
    'contact.title':           'Prenons contact',
    'contact.sub':             "Discutons de votre projet d'automatisation IA — premier échange gratuit et sans engagement.",
    'contact.location':        'Localisation',
    'contact.partner':         'Partenaire formation',
    'contact.send':            'Envoyer un message',
    'contact.rdvTitle':        'Réserver un rendez-vous',
    'contact.rdvSub':          'Notre assistant IA peut planifier un créneau directement dans votre agenda.',
    'contact.rdvWidget':       'Widget de prise de rendez-vous<br/><small>(intégration n8n à venir)</small>',
    'footer.tagline':          "Façonner l'avenir du travail avec l'intelligence artificielle.",
  },
  en: {
    'meta.title':              'AIQual — AI Automation · Geneva',
    'meta.description':        'AIQual — Intelligent automation and AI agents for businesses. Geneva-based startup specialising in agentic AI.',
    'nav.home':                'Home',
    'nav.services':            'Services',
    'nav.about':               'About',
    'nav.cta':                 'Book a Meeting',
    'hero.badge':              '🇨🇭 Geneva-based startup',
    'hero.title':              'AI Automation<br/>at the service of your business',
    'hero.sub':                'AIQual designs and deploys <strong>autonomous AI agents</strong> that automate your business processes, save you time and amplify your impact.',
    'hero.ctaPrimary':         'Book a meeting',
    'hero.ctaSecondary':       'Discover our services',
    'services.title':          'Our services',
    'services.sub':            'Tailored AI solutions to accelerate your digital transformation',
    'services.card1.title':    'Autonomous AI Agents',
    'services.card1.text':     'Design and deployment of agents capable of reasoning, deciding and acting — integrated with your existing tools (Telegram, CRM, ERP).',
    'services.card2.title':    'Process Automation',
    'services.card2.text':     'Orchestration of complex workflows via n8n, Make and LangGraph. Reduce repetitive tasks and free up your team.',
    'services.card3.title':    'AI Technology Watch',
    'services.card3.text':     'Monitoring and analysis of the latest advances in generative AI, LLMs and automation to stay at the cutting edge of innovation.',
    'services.card4.title':    'Consulting & Training',
    'services.card4.text':     'Strategic support for AI adoption in business. ESM Geneva partner — Business AI Specialist programme.',
    'about.title':             'About AIQual',
    'about.sub':               'We are a Geneva-based startup at the intersection of artificial intelligence and business automation.',
    'about.p1':                'At AIQual, we believe agentic AI represents a major turning point for organisations. Our mission is to make this technology accessible, concrete and immediately useful — whether you are an SME or a large enterprise.',
    'about.p2':                'Working with <strong>ESM Geneva</strong>, we also train tomorrow\'s professionals in Business AI Specialist roles.',
    'about.stat1':             'AI Agents deployed',
    'about.stat2':             'Made in Geneva 🇨🇭',
    'about.stackTitle':        'Technology stack',
    'about.stackData':         '🗄️ Data: RAG, Pinecone, PostgreSQL',
    'contact.title':           "Let's connect",
    'contact.sub':             'Let\'s discuss your AI automation project — first call is free and non-binding.',
    'contact.location':        'Location',
    'contact.partner':         'Training partner',
    'contact.send':            'Send a message',
    'contact.rdvTitle':        'Book an appointment',
    'contact.rdvSub':          'Our AI assistant can schedule a slot directly in your calendar.',
    'contact.rdvWidget':       'Appointment booking widget<br/><small>(n8n integration coming soon)</small>',
    'footer.tagline':          'Shaping the future of work with artificial intelligence.',
  }
};

// --- Langue actuelle ---
let currentLang = localStorage.getItem('aiqual-lang') || 'fr';

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (!text) return;
    // title et meta[description] → attributs
    if (el.tagName === 'TITLE') { el.textContent = text; return; }
    if (el.tagName === 'META')  { el.setAttribute('content', text); return; }
    el.innerHTML = text;
  });

  // Mettre à jour le bouton switcher
  const btn = document.getElementById('langSwitcher');
  if (btn) {
    btn.querySelector('.lang-flag').textContent = lang === 'fr' ? '🇬🇧' : '🇫🇷';
    btn.querySelector('.lang-label').textContent = lang === 'fr' ? 'EN' : 'FR';
    btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }
  currentLang = lang;
  localStorage.setItem('aiqual-lang', lang);
}

// Switcher
document.getElementById('langSwitcher')?.addEventListener('click', () => {
  applyTranslations(currentLang === 'fr' ? 'en' : 'fr');
});

// Appliquer au chargement
applyTranslations(currentLang);

// --- Menu hamburger mobile ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 40
    ? 'rgba(15, 15, 26, 0.98)'
    : 'rgba(15, 15, 26, 0.85)';
});

// --- Smooth reveal on scroll ---
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .about-stack, .contact-rdv, .contact-info').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; } .fade-in.visible { opacity: 1; transform: translateY(0); }`;
document.head.appendChild(style);
