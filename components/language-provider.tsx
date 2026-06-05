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
    "hero.subtitle": "Desarrollador web|",
    "hero.description.start": "Me gusta crear soluciones, convirtiendo la tecnología en una ",
    "hero.description.highlight": "herramienta al servicio del prójimo",
    "hero.btn": "Contactarse",
    "hero.scroll": "(Desplazar abajo)",
    "hero.rights": "Todos los derechos reservados.",

    // About Stats
    "about.tag": "Sobre Tomás",
    "about.years": "— años de experiencia construyendo aplicaciones web modernas.",
    "about.statement": "Soy Tomás Nadal, desarrollador web de Buenos Aires, Argentina. Mi pasión es crear soluciones digitales innovadoras que aporten valor real. Cada proyecto es una oportunidad para transformar ideas en herramientas al servicio de las personas.",
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
    "works.title1": "Desarrollo soluciones escalables ",
    "works.title2": "enfocadas en resolver problemas reales.",

    // Approach
    "approach.title1": "Soluciones escalables. ",
    "approach.title2": "Rendimiento óptimo.",
    "approach.whatWeDo": "Qué hacemos",
    "approach.cuz": "— un resumen de mi trayectoria y habilidades.",
    "approach.cv": "Mi CV",
    "approach.downloadCv": "Descargar",
    "approach.shareWhatsapp": "Compartir por WhatsApp",
    "approach.copyLink": "Copiar enlace",
    "general.scroll": "Desplazar",
    "general.noImage": "Sin imagen",
    "general.placeholder": "Marcador",
    "general.category": "Categoría",
    
    "app.1.title": "Arquitectura Full Stack",
    "app.1.desc": "Construcción de sistemas robustos y escalables del lado del servidor e interfaces altamente interactivas con Next.js, React y Node.js. Más de 100 proyectos entregados con éxito.",
    "app.2.title": "Datos & Inteligencia",
    "app.2.desc": "Aprovechando mi formación en Ciencia de Datos en la UNSAM para integrar Python, R y agentes de IA en aplicaciones web, haciéndolas no solo funcionales, sino genuinamente inteligentes.",
    "app.3.title": "Liderazgo Tecnológico",
    "app.3.desc": "Dirijo equipos de desarrollo y coordino estrategias técnicas. Mi enfoque es alinear la tecnología con las necesidades comerciales para asegurar resultados efectivos.",
    "app.4.title": "Interfaces Centradas en el Usuario",
    "app.4.desc": "Interfaces estéticas y dinámicas. El diseño no solo debe verse bien, sino brindar una experiencia inmersiva que guíe al usuario de forma natural.",
    "app.5.title": "Soluciones Escalables",
    "app.5.desc": "Sistemas preparados para crecer. Desde el primer día diseño la arquitectura para soportar más usuarios y funcionalidades sin perder rendimiento.",
    "app.6.title": "Evolución Continua",
    "app.6.desc": "Desde mis primeros proyectos como clones de juegos retro o aplicaciones de mensajería en 2021, nunca he dejado de aprender y evolucionar técnica y profesionalmente.",
    "app.7.title": "Propósito y Valor Real",
    "app.7.desc": "La tecnología debe estar al servicio de las personas. Mi objetivo final en cada desarrollo es resolver problemas reales y aportar un valor significativo y medible al cliente.",

    // CTA
    "cta.chaos": "Mi historia",
    "cta.subtitle": "— desde 2020 creando soluciones.",
    "cta.title1": "Mi ",
    "cta.title2": "Trayectoria.",
    "cta.story": "Empecé en 2020 cuando compré mi primera computadora. Aprendí de manera autodidacta, participé en bootcamps y construí proyectos personales. Hoy combino mi Licenciatura en Ciencia de Datos en la UNSAM con mi rol técnico. Cofundé Nexium (ahora descontinuada) entregando +100 proyectos, y actualmente dirijo Zevetix creando soluciones de alto impacto.",
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
    "footer.description": "Me gusta crear soluciones, convirtiendo la tecnología en una herramienta al servicio del prójimo.",
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
    "hero.subtitle": "Web Developer|",
    "hero.description.start": "I like to create solutions, turning technology into ",
    "hero.description.highlight": "a tool at the service of others",
    "hero.btn": "Contact",
    "hero.scroll": "(Scroll down)",
    "hero.rights": "All Rights Reserved.",

    // About Stats
    "about.tag": "About Tomás",
    "about.years": "— years of experience building modern web applications.",
    "about.statement": "I'm Tomás Nadal, a web developer from Buenos Aires, Argentina. My passion is creating innovative digital solutions that provide real value. Each project is an opportunity to transform ideas into tools that serve people.",
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
    "works.title1": "I develop scalable solutions ",
    "works.title2": "focused on solving real-world problems.",

    // Approach
    "approach.title1": "Scalable solutions. ",
    "approach.title2": "Optimal performance.",
    "approach.whatWeDo": "What We Do",
    "approach.cuz": "— a summary of my background and skills.",
    "approach.cv": "My CV",
    "approach.downloadCv": "Download",
    "approach.shareWhatsapp": "Share via WhatsApp",
    "approach.copyLink": "Copy link",
    "general.scroll": "Scroll",
    "general.noImage": "No Image",
    "general.placeholder": "Placeholder",
    "general.category": "Category",
    
    "app.1.title": "Full Stack Architecture",
    "app.1.desc": "Building robust, scalable server-side systems and highly interactive frontends using Next.js, React, and Node.js. Over 100 successful projects delivered.",
    "app.2.title": "Data & Intelligence",
    "app.2.desc": "Leveraging my Data Science background at UNSAM to integrate Python, R, and AI agents into web applications, making them not just functional, but genuinely intelligent.",
    "app.3.title": "Tech Leadership",
    "app.3.desc": "I manage development teams and coordinate technical strategies. My approach is to align technology with business needs to ensure effective results.",
    "app.4.title": "User-Centric Interfaces",
    "app.4.desc": "Aesthetic and dynamic interfaces. Design shouldn't just look good; it must provide an immersive experience that naturally guides the user.",
    "app.5.title": "Scalable Solutions",
    "app.5.desc": "Systems built to grow. From day one I design the architecture to support more users and features without losing performance.",
    "app.6.title": "Continuous Evolution",
    "app.6.desc": "From my first projects like retro game clones or basic messaging apps in 2021, I have never stopped learning and evolving technically and professionally.",
    "app.7.title": "Purpose and Real Value",
    "app.7.desc": "Technology must serve people. My ultimate goal in every development is to solve real problems and provide significant, measurable value to the client.",

    // CTA
    "cta.chaos": "My story",
    "cta.subtitle": "— building solutions since 2020.",
    "cta.title1": "My ",
    "cta.title2": "Journey.",
    "cta.story": "I started in 2020 when I bought my first computer. I learned on my own, participated in bootcamps, and built personal projects. Today I combine my Data Science degree at UNSAM with my technical role. I co-founded Nexium (now discontinued) delivering 100+ projects, and currently I lead Zevetix creating high-impact solutions.",
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
    "footer.description": "I like to create solutions, turning technology into a tool to serve others.",
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
