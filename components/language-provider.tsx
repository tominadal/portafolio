"use client"

import * as React from "react"

export type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.brand": "— desarrollador & datos.",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.expertise": "Experiencia",
    "nav.works": "Trabajos",
    "nav.testimonials": "Testimonios",
    "nav.connect": "Conectar",
    "nav.sendMessage": "Contáctame",

    // Hero
    "hero.title": "Tomás Nadal",
    "hero.subtitle": "Desarrollador Web & Científico de Datos|",
    "hero.description.start": "Fusiono código y datos para hacer de la tecnología una ",
    "hero.description.highlight": "herramienta al servicio del prójimo",
    "hero.btn": "Contactarse",
    "hero.scroll": "(Desplazar abajo)",
    "hero.rights": "Todos los derechos reservados.",

    // About Stats
    "about.tag": "Sobre Tomás",
    "about.years": "— años de experiencia construyendo aplicaciones web modernas.",
    "about.statement": "Soy Tomás Nadal, desarrollador web y científico de datos de Buenos Aires, Argentina. Mi pasión es construir plataformas robustas y modelos analíticos que aporten valor real. Cada proyecto es una oportunidad para transformar datos e ideas en herramientas al servicio de las personas.",
    "about.ageLabel": "Edad",
    "about.yearsShort": "Años",
    "about.projectsLabel": "Proyectos",
    "about.btn": "Más sobre mí",

    // Expertise
    "exp.1.title": "Ingeniería Full Stack",
    "exp.1.desc": "Construyendo aplicaciones robustas y escalables con React, Next.js y Node.js. Convirtiendo requisitos complejos en experiencias digitales impecables.",
    "exp.2.title": "Ciencia de Datos & IA",
    "exp.2.desc": "Aprovechando Python, R y análisis de datos para construir soluciones inteligentes y vanguardistas que van más allá del desarrollo tradicional.",
    "exp.3.title": "Liderazgo Técnico y Gestión",
    "exp.3.desc": "Como Fundador de Zevetix, lidero equipos de desarrollo y defino la arquitectura técnica para cumplir con los objetivos del negocio.",
    "exp.learn": "Saber más",

    // Works
    "works.subtitle": "— desde mis trabajos más recientes hasta los más básicos.",
    "works.title1": "Desarrollo sistemas web y modelos analíticos ",
    "works.title2": "enfocados en resolver problemas reales.",

    // Approach
    "approach.title1": "Cómo abordo ",
    "approach.title2": "los proyectos.",
    "approach.whatWeDo": "Metodología",
    "approach.cuz": "— un resumen de mi trayectoria y habilidades.",
    "approach.cv": "Mi CV",
    "approach.cvWeb": "CV Ing. Software",
    "approach.cvData": "CV Ciencia de Datos",
    "approach.downloadCv": "Descargar",
    "approach.shareWhatsapp": "Compartir por WhatsApp",
    "approach.copyLink": "Copiar enlace",
    "general.scroll": "Desplazar",
    "general.noImage": "Sin imagen",
    "general.placeholder": "Marcador",
    "general.category": "Categoría",
    
    "app.1.title": "Ingeniería de Software",
    "app.1.desc": "Diseño y construyo sistemas robustos con Next.js, React y Node.js. Cofundé Nexium, donde entregamos más de 100 proyectos que me enseñaron a escalar aplicaciones reales.",
    "app.2.title": "Ciencia de Datos & IA (UNSAM)",
    "app.2.desc": "Aplico los rigurosos fundamentos estadísticos y matemáticos de mi Licenciatura en la UNSAM para integrar modelos analíticos, Python y Machine Learning, logrando que las aplicaciones sean verdaderamente inteligentes y predictivas.",
    "app.3.title": "Liderazgo en Zevetix",
    "app.3.desc": "Como cofundador de Nexium y actual director de Zevetix, adquirí habilidades blandas clave: gestión de equipos ágiles, comunicación asertiva con stakeholders y una visión integral de negocio para garantizar que cada solución tecnológica cumpla objetivos reales.",
    "app.4.title": "Aprendizaje Autodidacta",
    "app.4.desc": "Empecé en 2020 con mi primera computadora. Desde clones de juegos retro hasta sistemas complejos, nunca dejo de aprender y adaptar nuevas tecnologías a mis proyectos.",
    "app.5.title": "Valor Real",
    "app.5.desc": "La tecnología es solo una herramienta. Mi objetivo final siempre es resolver problemas genuinos y crear un impacto positivo y medible para las personas que usan el software.",
    "app.6.title": "Arquitectura & Optimización",
    "app.6.desc": "Diseño sistemas escalables desde el principio y optimizo constantemente su rendimiento para maximizar el impacto y la experiencia del usuario.",

    // CTA
    "cta.chaos": "Mi historia",
    "cta.subtitle": "— desde 2020 creando soluciones.",
    "cta.title1": "Mi ",
    "cta.title2": "Trayectoria.",
    "cta.story": "Mi camino comenzó en 2020. Me formé inicialmente como desarrollador autodidacta, construyendo desde cero. Hoy, gracias a mi Licenciatura en Ciencia de Datos en la UNSAM, fusiono la ingeniería de software con el análisis de datos y la IA. Cofundé Nexium (+100 proyectos) y actualmente dirijo Zevetix, donde construimos soluciones inteligentes y de alto impacto.",
    "cta.btn": "Trabajemos juntos",
    
    // Testimonials
    "test.title": "Feedback de clientes",
    "test.explore": "Explorar más",
    "test.1.quote": "\"Tomás entendió exactamente lo que necesitábamos. Entregó una arquitectura sólida que nos permitió escalar sin problemas cuando aumentaron nuestros usuarios.\"",
    "test.1.author": "Martín R., CTO",
    "test.2.quote": "\"El nivel de compromiso que le pone a los proyectos hace la diferencia. Nos ayudó a ordenar nuestra base de datos y mejoró notablemente los tiempos de carga.\"",
    "test.2.author": "Laura G., Product Manager",

    // Footer
    "footer.office": "(Ubicación)",
    "footer.contact": "(Contáctame)",
    "footer.nav": "(Navegación)",
    "footer.touch": "— estemos en contacto",
    "footer.social": "(Redes sociales)",
    "footer.built": "Tomás I. Nadal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    "footer.home": "Inicio",
    "footer.description": "Creo soluciones inteligentes, combinando código y datos para convertir la tecnología en una herramienta al servicio de las personas.",
    "footer.rights": "Todos los derechos reservados.",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Una colección de mis trabajos recientes y desarrollos destacados.",
    "projects.search": "Buscar proyectos",
    "projects.searchPlaceholder": "Escribe para buscar...",
    "projects.categories": "Categorías",
    "projects.sortBy": "Ordenar por",
    "projects.recent": "Más recientes",
    "projects.oldest": "Más antiguos",

    // Blog
    "blog.title": "Blog",

    // Contact
    "contact.title": "Ponte en contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? Hablemos de cómo podemos trabajar juntos.",
    "contact.name": "Nombre",
    "contact.namePlaceholder": "Tu nombre completo",
    "contact.email": "Correo electrónico",
    "contact.emailPlaceholder": "tu@email.com",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntame sobre tu proyecto...",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.location": "Ubicación"
  },
  en: {
    // Navigation
    "nav.brand": "— developer & data.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.expertise": "Expertise",
    "nav.works": "Works",
    "nav.testimonials": "Testimonials",
    "nav.connect": "Get Connected",
    "nav.sendMessage": "Contact Me",

    // Hero
    "hero.title": "Tomás Nadal",
    "hero.subtitle": "Web Developer & Data Scientist|",
    "hero.description.start": "I merge code and data to make technology a ",
    "hero.description.highlight": "a tool at the service of others",
    "hero.btn": "Contact",
    "hero.scroll": "(Scroll down)",
    "hero.rights": "All Rights Reserved.",

    // About Stats
    "about.tag": "About Tomás",
    "about.years": "— years of experience building modern web applications.",
    "about.statement": "I'm Tomás Nadal, a web developer and data scientist from Buenos Aires, Argentina. My passion is building robust platforms and analytical models that provide real value. Each project is an opportunity to transform data and ideas into tools that serve people.",
    "about.ageLabel": "Age",
    "about.yearsShort": "Years",
    "about.projectsLabel": "Projects",
    "about.btn": "More about me",

    // Expertise
    "exp.1.title": "Full Stack Engineering",
    "exp.1.desc": "Building robust, scalable applications with React, Next.js, and Node.js. Turning complex requirements into flawless digital experiences.",
    "exp.2.title": "Data Science & AI",
    "exp.2.desc": "Leveraging Python, R, and data analysis to build intelligent, forward-thinking solutions that go beyond traditional development.",
    "exp.3.title": "Tech Leadership & Management",
    "exp.3.desc": "As Founder at Zevetix, I lead development teams and define technical architectures to meet business goals.",
    "exp.learn": "Learn more",

    // Works
    "works.subtitle": "— from my most recent works to the most basic ones.",
    "works.title1": "I develop scalable systems and analytical models ",
    "works.title2": "focused on solving real-world problems.",

    // Approach
    "approach.title1": "How I approach ",
    "approach.title2": "projects.",
    "approach.whatWeDo": "Methodology",
    "approach.cuz": "— a summary of my background and skills.",
    "approach.cv": "My CV",
    "approach.cvWeb": "CV Software Eng.",
    "approach.cvData": "CV Data Science",
    "approach.downloadCv": "Download",
    "approach.shareWhatsapp": "Share via WhatsApp",
    "approach.copyLink": "Copy link",
    "general.scroll": "Scroll",
    "general.noImage": "No Image",
    "general.placeholder": "Placeholder",
    "general.category": "Category",
    
    "app.1.title": "Software Engineering",
    "app.1.desc": "I design and build robust systems using Next.js, React, and Node.js. I co-founded Nexium, delivering over 100 projects that taught me how to scale real-world applications.",
    "app.2.title": "Data Science & AI (UNSAM)",
    "app.2.desc": "I apply the rigorous statistical and mathematical foundations from my Data Science degree at UNSAM to integrate analytical models, Python, and Machine Learning, making applications truly intelligent and predictive.",
    "app.3.title": "Leadership at Zevetix",
    "app.3.desc": "As co-founder of Nexium and current director of Zevetix, I gained key soft skills: agile team management, assertive communication with stakeholders, and a comprehensive business vision to ensure each technical solution meets real objectives.",
    "app.4.title": "Self-taught Learner",
    "app.4.desc": "I started in 2020 with my first computer. From retro game clones to complex systems, I never stop learning and adapting new technologies to my projects.",
    "app.5.title": "Real Value",
    "app.5.desc": "Technology is just a tool. My ultimate goal is always to solve genuine problems and create a positive, measurable impact for the people using the software.",
    "app.6.title": "Architecture & Optimization",
    "app.6.desc": "I design scalable systems from the start and constantly optimize their performance to maximize impact and user experience.",

    // CTA
    "cta.chaos": "My story",
    "cta.subtitle": "— building solutions since 2020.",
    "cta.title1": "My ",
    "cta.title2": "Journey.",
    "cta.story": "My journey started in 2020. I initially trained as a self-taught developer, building from scratch. Today, through my Data Science degree at UNSAM, I merge software engineering with data analysis and AI. I co-founded Nexium (100+ projects) and currently lead Zevetix, building intelligent, high-impact solutions.",
    "cta.btn": "Work with me",
    
    // Testimonials
    "test.title": "Client Feedback",
    "test.explore": "Explore more",
    "test.1.quote": "\"Tomás understood exactly what we needed. He delivered a solid architecture that allowed us to scale seamlessly when our user base grew.\"",
    "test.1.author": "Martín R., CTO",
    "test.2.quote": "\"The level of commitment he puts into projects makes a difference. He helped us organize our database and noticeably improved loading times.\"",
    "test.2.author": "Laura G., Product Manager",

    // Footer
    "footer.office": "(Location)",
    "footer.contact": "(Contact me)",
    "footer.nav": "(Navigation)",
    "footer.touch": "— let's get in touch",
    "footer.social": "(Social media)",
    "footer.built": "Tomás I. Nadal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and Conditions",
    "footer.home": "Home",
    "footer.description": "I build intelligent solutions, combining code and data to turn technology into a tool to serve others.",
    "footer.rights": "All rights reserved.",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A collection of my recent works and featured developments.",
    "projects.search": "Search projects",
    "projects.searchPlaceholder": "Type to search...",
    "projects.categories": "Categories",
    "projects.sortBy": "Sort by",
    "projects.recent": "Most recent",
    "projects.oldest": "Oldest",

    // Blog
    "blog.title": "Blog",

    // Contact
    "contact.title": "Get in touch",
    "contact.subtitle": "Have a project in mind? Let's talk about how we can work together.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your full name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "you@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.location": "Location"
  }
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("es")

  React.useEffect(() => {
    const stored = localStorage.getItem("language") as Language
    if (stored && (stored === "es" || stored === "en")) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }, [])

  const t = React.useCallback(
    (key: string) => {
      return translations[language][key as keyof typeof translations.es] || key
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
