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
    "approach.title1": "Cómo abordo ",
    "approach.title2": "los proyectos.",
    "approach.whatWeDo": "Metodología",
    "approach.cuz": "— un resumen de mi trayectoria y habilidades.",
    "approach.cv": "Mi CV",
    "approach.downloadCv": "Descargar",
    "approach.shareWhatsapp": "Compartir por WhatsApp",
    "approach.copyLink": "Copiar enlace",
    "general.scroll": "Desplazar",
    "general.noImage": "Sin imagen",
    "general.placeholder": "Marcador",
    "general.category": "Categoría",
    
    "app.1.title": "Desarrollo Full Stack",
    "app.1.desc": "Diseño y construyo sistemas robustos con Next.js, React y Node.js. Cofundé Nexium, donde entregamos más de 100 proyectos que me enseñaron a escalar aplicaciones reales.",
    "app.2.title": "Ciencia de Datos & IA",
    "app.2.desc": "Combino mi rol técnico con mi Licenciatura en Ciencia de Datos en la UNSAM. Integro Python y agentes de IA para que las aplicaciones no solo funcionen, sino que sean inteligentes.",
    "app.3.title": "Liderazgo en Zevetix",
    "app.3.desc": "Actualmente dirijo Zevetix, liderando equipos de desarrollo y coordinando la arquitectura técnica para asegurar que cada solución tecnológica cumpla los objetivos del negocio.",
    "app.4.title": "Aprendizaje Autodidacta",
    "app.4.desc": "Empecé en 2020 con mi primera computadora. Desde clones de juegos retro hasta sistemas complejos, nunca dejo de aprender y adaptar nuevas tecnologías a mis proyectos.",
    "app.5.title": "Valor Real",
    "app.5.desc": "La tecnología es solo una herramienta. Mi objetivo final siempre es resolver problemas genuinos y crear un impacto positivo y medible para las personas que usan el software.",
    "app.6.title": "Arquitectura Escalable",
    "app.6.desc": "Diseño sistemas con el futuro en mente. Preveo el crecimiento desde el principio, garantizando que el rendimiento se mantenga óptimo incluso cuando la cantidad de usuarios aumente.",
    "app.7.title": "Optimización Continua",
    "app.7.desc": "Mi trabajo no termina al publicar. Analizo métricas, optimizo tiempos de carga y mejoro constantemente la experiencia de usuario para maximizar el retorno de inversión de cada solución.",

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
    "approach.title1": "How I approach ",
    "approach.title2": "projects.",
    "approach.whatWeDo": "Methodology",
    "approach.cuz": "— a summary of my background and skills.",
    "approach.cv": "My CV",
    "approach.downloadCv": "Download",
    "approach.shareWhatsapp": "Share via WhatsApp",
    "approach.copyLink": "Copy link",
    "general.scroll": "Scroll",
    "general.noImage": "No Image",
    "general.placeholder": "Placeholder",
    "general.category": "Category",
    
    "app.1.title": "Full Stack Development",
    "app.1.desc": "I design and build robust systems using Next.js, React, and Node.js. I co-founded Nexium, delivering over 100 projects that taught me how to scale real-world applications.",
    "app.2.title": "Data Science & AI",
    "app.2.desc": "I combine my technical role with my Data Science degree at UNSAM. I integrate Python and AI agents so applications aren't just functional, but genuinely intelligent.",
    "app.3.title": "Leadership at Zevetix",
    "app.3.desc": "I currently lead Zevetix, managing development teams and coordinating technical architectures to ensure each solution meets business objectives.",
    "app.4.title": "Self-taught Learner",
    "app.4.desc": "I started in 2020 with my first computer. From retro game clones to complex systems, I never stop learning and adapting new technologies to my projects.",
    "app.5.title": "Real Value",
    "app.5.desc": "Technology is just a tool. My ultimate goal is always to solve genuine problems and create a positive, measurable impact for the people using the software.",
    "app.6.title": "Scalable Architecture",
    "app.6.desc": "I design systems with the future in mind. I anticipate growth from the start, ensuring that performance remains optimal even as the user base expands.",
    "app.7.title": "Continuous Optimization",
    "app.7.desc": "My work doesn't end at deployment. I analyze metrics, optimize load times, and constantly improve the user experience to maximize the return on investment of each solution.",

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
