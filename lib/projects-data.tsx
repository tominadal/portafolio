export interface Project {
  id: number
  slug: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  content?: string
  contentEn?: string
  image: string
  gallery?: string[]
  tags: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  order: number
  year?: number
  technologies?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "nexium",
    title: "Nexium Solutions",
    titleEn: "Nexium Solutions",
    description: "Emprendimiento de desarrollo web - Co-Fundador",
    descriptionEn: "Web development venture - Co-Founder",
    content: `Nexium Solutions es una agencia de desarrollo web especializada en la creación, optimización y gestión integral de la presencia digital de empresas, marcas y profesionales. Con más de dos años de trayectoria y más de cien proyectos web activos y funcionando actualmente, la agencia se consolida como un socio tecnológico confiable, orientado a resultados concretos y sostenibles.

La propuesta de Nexium Solutions abarca todo el ciclo de vida de un sitio web: diseño y desarrollo a medida, gestión de hosting y dominios, mantenimiento continuo, optimización de rendimiento y posicionamiento en buscadores. Cada proyecto es abordado desde una perspectiva estratégica, cuidando tanto la estética como la funcionalidad y la escalabilidad.

El foco está puesto en crear sitios rápidos, seguros y eficientes, con experiencias de usuario claras y modernas, alineadas a los objetivos de negocio de cada cliente. Nexium Solutions trabaja con una visión a largo plazo, priorizando la calidad, la atención personalizada y la construcción de relaciones genuinas en un entorno digital cada vez más automatizado.`,
    contentEn: `Nexium Solutions is a web development agency specialized in creating, optimizing and comprehensive management of the digital presence of companies, brands and professionals. With more than two years of experience and more than one hundred web projects currently active and running, the agency is consolidating itself as a reliable technology partner, oriented towards concrete and sustainable results.

Nexium Solutions' proposal covers the entire life cycle of a website: custom design and development, hosting and domain management, continuous maintenance, performance optimization and search engine positioning. Each project is approached from a strategic perspective, taking care of aesthetics as well as functionality and scalability.

The focus is on creating fast, secure and efficient sites, with clear and modern user experiences, aligned with each client's business objectives. Nexium Solutions works with a long-term vision, prioritizing quality, personalized attention and building genuine relationships in an increasingly automated digital environment.`,
    image: "/logo-nexium.png",
    gallery: ["/proyectos/nex1.png", "/proyectos/nex2.png", "/proyectos/nex3.png"],
    tags: ["Emprendimiento", "Consultoría IT", "Co-Fundador"],
    category: "Emprendimiento",
    demoUrl: "https://nexiumsolutions.site/",
    featured: false,
    order: 100,
    year: 2025
  },
  {
    id: 2,
    slug: "zevetix",
    title: "Zevetix Labs",
    titleEn: "Zevetix Labs",
    description: "Consultora IT - Fundador",
    descriptionEn: "IT Consultancy - Founder",
    content: `Zevetix Labs es una consultora IT dedicada al desarrollo de soluciones digitales inteligentes que optimizan, potencian y transforman negocios y profesionales. Su enfoque combina tecnología, automatización y estrategia, entendiendo que el crecimiento sostenido no depende solo del esfuerzo, sino de trabajar de manera inteligente.

La consultora ofrece servicios que incluyen desarrollo web, web apps y e-commerce, branding digital, sitios web con inteligencia artificial integrada, creación de agentes de IA personalizados y optimización de procesos empresariales. Cada solución está pensada para mejorar la eficiencia, reducir fricciones operativas y generar ventajas competitivas reales.

Bajo el lema "Trabajo inteligente, éxito garantizado", Zevetix Labs acompaña a sus clientes en la toma de decisiones estratégicas, ayudándolos a escalar sus operaciones y a transformar la tecnología en una herramienta clave para el crecimiento.`,
    contentEn: `Zevetix Labs is an IT consultancy dedicated to developing intelligent digital solutions that optimize, empower and transform businesses and professionals. Its approach combines technology, automation and strategy, understanding that sustained growth depends not only on effort, but on working intelligently.

The consultancy offers services including web development, web apps and e-commerce, digital branding, websites with integrated artificial intelligence, creation of personalized AI agents and optimization of business processes. Each solution is designed to improve efficiency, reduce operational friction and generate real competitive advantages.

Under the motto "Smart work, guaranteed success", Zevetix Labs accompanies its clients in making strategic decisions, helping them scale their operations and transform technology into a key tool for growth.`,
    image: "/logo-zevetix.png",
    gallery: ["/proyectos/zev1.png", "/proyectos/zev2.png", "/proyectos/zev3.png"],
    tags: ["Emprendimiento", "Consultoría IT", "Fundador"],
    category: "Emprendimiento",
    demoUrl: "https://zevetix.netlify.app/",
    featured: false,
    order: 101,
    year: 2025
  },
  {
    id: 3,
    slug: "vancouver",
    title: "Vancouver Canning",
    titleEn: "Vancouver Canning",
    description: "Web app para la sucursal de Canning de Vancouver Jeans",
    descriptionEn: "Web app for Vancouver Jeans Canning branch",
    content: `Landing híbrida desarrollada en Next.js que combina la experiencia de un e-commerce completo con un proceso de compra vía WhatsApp. Incluye catálogo de productos, filtros, fichas de detalle y una estructura optimizada para conversión.

El proyecto fue diseñado para ofrecer una experiencia moderna de compra online, pero manteniendo la cercanía y simplicidad del contacto directo. Los usuarios pueden navegar por todo el catálogo, explorar productos en detalle, y realizar sus pedidos de manera ágil a través de WhatsApp, eliminando fricciones innecesarias en el proceso de checkout.`,
    contentEn: `Hybrid landing page developed in Next.js that combines the experience of a complete e-commerce with a purchase process via WhatsApp. Includes product catalog, filters, detail sheets and a structure optimized for conversion.

The project was designed to offer a modern online shopping experience, while maintaining the closeness and simplicity of direct contact. Users can browse the entire catalog, explore products in detail, and place orders quickly through WhatsApp, eliminating unnecessary friction in the checkout process.`,
    image: "/proyectos/van1.png",
    gallery: ["/proyectos/van1.png", "/proyectos/van2.png", "/proyectos/van3.png"],
    tags: ["website", "e-commerce", "Next.js"],
    category: "landing page / e-commerce híbrido",
    demoUrl: "https://vancouvercanning.com.ar/",
    featured: true,
    order: 1,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 4,
    slug: "vymasesores",
    title: "V&M Asesores",
    titleEn: "V&M Asesores",
    description: "Landing page para V&M Asesores",
    descriptionEn: "Landing page for V&M Asesores",
    content: `Landing page animada desarrollada en Framer para V&M Asesores, empresa mexicana especializada en gastos médicos mayores, planes de ahorro, inversión, retiro, protección y planes educativos.

El sitio ofrece una experiencia visual atractiva, dinámica y moderna, diseñada para captar la atención y transmitir confianza desde el primer contacto. Las animaciones están cuidadosamente integradas para guiar al usuario a través de los servicios sin saturar la experiencia.`,
    contentEn: `Animated landing page developed in Framer for V&M Asesores, a Mexican company specializing in major medical expenses, savings plans, investment, retirement, protection and educational plans.

The site offers an attractive, dynamic and modern visual experience, designed to capture attention and convey trust from first contact. Animations are carefully integrated to guide users through services without overwhelming the experience.`,
    image: "/proyectos/vma1.png",
    gallery: ["/proyectos/vma1.png", "/proyectos/vma2.png", "/proyectos/vma3.png"],
    tags: ["website", "finance", "insurance"],
    category: "landing page",
    demoUrl: "https://collaborative-domain-946706.framer.app/",
    featured: true,
    order: 2,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 5,
    slug: "esdky",
    title: "E-Sky Web",
    titleEn: "E-Sky Web",
    description: "Web app para la empresa E-Sky",
    descriptionEn: "Web app for E-Sky company",
    content: `Portal web corporativo desarrollado en HTML para E-Sky, empresa estadounidense con sede en Michigan y más de 35 años de experiencia en la industria de seguros.

El sitio es completamente bilingüe (inglés y español) y presenta un diseño de vanguardia, pensado para transmitir solidez, confianza y trayectoria. Cada sección comunica profesionalismo, respaldando la reputación de una empresa con décadas en el mercado.`,
    contentEn: `Corporate web portal developed in HTML for E-Sky, an American company based in Michigan with more than 35 years of experience in the insurance industry.

The site is completely bilingual (English and Spanish) and features a cutting-edge design, designed to convey solidity, trust and trajectory. Each section communicates professionalism, supporting the reputation of a company with decades in the market.`,
    image: "/proyectos/esk1.png",
    gallery: ["/proyectos/esk1.png", "/proyectos/esk2.png", "/proyectos/esk3.png"],
    tags: ["website", "HTML", "insurance"],
    category: "website corporativo",
    demoUrl: "https://eskysystems.netlify.app/",
    featured: true,
    order: 3,
    technologies: "HTML, CSS",
    year: 2023
  },
  {
    id: 6,
    slug: "alondra",
    title: "Alondra Moncada",
    titleEn: "Alondra Moncada",
    description: "Landing page para Alondra Moncada",
    descriptionEn: "Landing page for Alondra Moncada",
    content: `Sitio web profesional desarrollado para Alondra Moncada, asesora financiera. El proyecto fue concebido como una landing page clara y directa, enfocada en transmitir confianza, profesionalismo y credibilidad dentro del sector financiero.`,
    contentEn: `Professional website developed for Alondra Moncada, financial advisor. The project was conceived as a clear and direct landing page, focused on transmitting trust, professionalism and credibility within the financial sector.`,
    image: "/proyectos/alo1.png",
    gallery: ["/proyectos/alo1.png", "/proyectos/alo2.png", "/proyectos/alo3.png"],
    tags: ["website", "Landing Page", "HTML"],
    category: "landing page",
    demoUrl: "https://alondramoncada.netlify.app/",
    featured: false,
    order: 4,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 7,
    slug: "arbid",
    title: "Arbid Labs",
    titleEn: "Arbid Labs",
    description: "Web app para la empresa Arbid Labs",
    descriptionEn: "Web app for Arbid Labs company",
    content: `Página web desarrollada para Arbid, una empresa con más de dos años en el mercado dedicada al desarrollo y financiamiento de productos de alta calidad a precios competitivos. Se especializan en impulsar proyectos innovadores mediante recursos financieros, capital humano y estrategias eficientes.`,
    contentEn: `Website developed for Arbid, a company with more than two years in the market dedicated to developing and financing high quality products at competitive prices. They specialize in driving innovative projects through financial resources, human capital and efficient strategies.`,
    image: "/proyectos/arb1.png",
    gallery: ["/proyectos/arb1.png", "/proyectos/arb2.png", "/proyectos/arb3.png"],
    tags: ["website", "agency", "innovation"],
    category: "website corporativo",
    demoUrl: "https://arbid.framer.website/",
    featured: false,
    order: 5,
    technologies: "Framer",
    year: 2023
  },
  {
    id: 8,
    slug: "cgas",
    title: "C.Gas Construcciones",
    titleEn: "C.Gas Construcciones",
    description: "Landing page para C-Gas construcciones",
    descriptionEn: "Landing page for C-Gas construcciones",
    content: `Landing para Guillermo. En ella muestra sus trabajos y ofrece sus servicios de manera efectiva para sus clientes.`,
    contentEn: `Landing page for Guillermo. It showcases his work and effectively offers his services to clients.`,
    image: "/proyectos/cga1.png",
    gallery: ["/proyectos/cga1.png", "/proyectos/cga2.png", "/proyectos/cga3.png"],
    tags: ["website", "HTML"],
    category: "landing page",
    demoUrl: "https://cgas-construcciones.netlify.app/",
    featured: false,
    order: 6,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 9,
    slug: "trasladoslm",
    title: "Traslados Los Mellis",
    titleEn: "Traslados Los Mellis",
    description: "Web app para la empresa de traslados \"Los Mellis\"",
    descriptionEn: "Web app for \"Los Mellis\" transport company",
    content: `Landing page y portal de reservas desarrollado para Traslados LM, una empresa argentina dedicada a servicios de traslados. El proyecto fue construido en Next.js e incorpora modo claro y modo oscuro, ofreciendo una experiencia moderna y adaptable a distintos usuarios.`,
    contentEn: `Landing page and booking portal developed for Traslados LM, an Argentine company dedicated to transport services. The project was built in Next.js and incorporates light and dark mode, offering a modern experience adaptable to different users.`,
    image: "/proyectos/mel1.png",
    gallery: ["/proyectos/mel1.png", "/proyectos/mel2.png", "/proyectos/mel3.png"],
    tags: ["website", "booking", "transportation"],
    category: "website / portal reservas",
    demoUrl: "https://trasladoslm.netlify.app/",
    featured: false,
    order: 7,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 10,
    slug: "powing",
    title: "Grupo Powing",
    titleEn: "Grupo Powing",
    description: "Landing page para Grupo Powing",
    descriptionEn: "Landing page for Grupo Powing",
    content: `Página web tipo embudo desarrollada en HTML para Grupo Powing, una empresa fundada en 2025 especializada en transformar negocios de pólizas en negocios MDRT.

Powing instala sistemas de adquisición de clientes rentables, descargables y predecibles en un plazo de 100 días. La empresa cuenta con más de 10.000 citas agendadas, más de 35 años de experiencia acumulada y más de 25 agentes MDRT. El sitio comunica autoridad, resultados y un enfoque altamente orientado a conversión.`,
    contentEn: `Funnel-type website developed in HTML for Grupo Powing, a company founded in 2025 specialized in transforming policy businesses into MDRT businesses.

Powing installs profitable, downloadable and predictable customer acquisition systems within 100 days. The company has more than 10,000 scheduled appointments, more than 35 years of accumulated experience and more than 25 MDRT agents. The site communicates authority, results and a highly conversion-oriented approach.`,
    image: "/proyectos/pow1.png",
    gallery: ["/proyectos/pow1.png", "/proyectos/pow2.png", "/proyectos/pow3.png"],
    tags: ["website", "funnel", "consulting"],
    category: "website corporativo",
    demoUrl: "https://grupopowing.com/",
    featured: false,
    order: 8,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 11,
    slug: "ferremarket",
    title: "Ferremarket",
    titleEn: "Ferremarket",
    description: "Landing page para Ferremarket",
    descriptionEn: "Landing page for Ferremarket",
    content: `Landing híbrida desarrollada para Ferretería Market, una ferretería argentina que integra un sistema de e-commerce con catálogo completo, fichas de producto, carrito y experiencia de compra optimizada.`,
    contentEn: `Hybrid landing page developed for Ferretería Market, an Argentine hardware store that integrates an e-commerce system with complete catalog, product sheets, cart and optimized shopping experience.`,
    image: "/proyectos/fer1.png",
    gallery: ["/proyectos/fer1.png", "/proyectos/fer2.png", "/proyectos/fer3.png"],
    tags: ["website", "e-commerce", "retail"],
    category: "landing page / e-commerce híbrido",
    demoUrl: "https://ferremarket.netlify.app/",
    featured: false,
    order: 9,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 12,
    slug: "efs",
    title: "En Forma Seguros",
    titleEn: "En Forma Seguros",
    description: "Web app para la empresa En Forma Seguros",
    descriptionEn: "Web app for En Forma Seguros company",
    content: `Landing page desarrollada en Framer para En Forma Seguros, una empresa mexicana dedicada a la protección financiera y a brindar soluciones de seguros enfocadas en el cuidado del patrimonio y las finanzas personales. El diseño es moderno, claro y orientado a conversión, priorizando una comunicación directa y confiable.`,
    contentEn: `Landing page developed in Framer for En Forma Seguros, a Mexican company dedicated to financial protection and providing insurance solutions focused on asset care and personal finances. The design is modern, clear and conversion-oriented, prioritizing direct and reliable communication.`,
    image: "/proyectos/efi1.png",
    gallery: ["/proyectos/efi1.png", "/proyectos/efi2.png", "/proyectos/efi3.png"],
    tags: ["website", "insurance"],
    category: "landing page",
    demoUrl: "https://enformaseguros.framer.website/",
    featured: false,
    order: 10,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 13,
    slug: "pvr",
    title: "PVR Asesores",
    titleEn: "PVR Asesores",
    description: "Landing page para PVR asesores",
    descriptionEn: "Landing page for PVR asesores",
    content: `Landing page desarrollada para PVR, una empresa colombiana que desde 2023 se posiciona como una línea de confianza para familias y empresas. Se especializan en asesoría personalizada en áreas como salud nacional e internacional, gestión patrimonial y soluciones empresariales.`,
    contentEn: `Landing page developed for PVR, a Colombian company that since 2023 has positioned itself as a line of trust for families and companies. They specialize in personalized advice in areas such as national and international health, asset management and business solutions.`,
    image: "/proyectos/pvr1.png",
    gallery: ["/proyectos/pvr1.png", "/proyectos/pvr2.png", "/proyectos/pvr3.png"],
    tags: ["website", "insurance", "consulting"],
    category: "landing page",
    demoUrl: "https://pvrasesores.framer.website/",
    featured: false,
    order: 11,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 14,
    slug: "ulises",
    title: "Ulises Castillo",
    titleEn: "Ulises Castillo",
    description: "Landing page para Ulises Castillo Sánchez",
    descriptionEn: "Landing page for Ulises Castillo Sánchez",
    content: `Landing page animada desarrollada en Framer, concebida como una auténtica experiencia digital. El sitio está enfocado en presentar de forma clara y atractiva los servicios profesionales ofrecidos, combinando diseño, animaciones y narrativa visual.`,
    contentEn: `Animated landing page developed in Framer, conceived as an authentic digital experience. The site is focused on presenting professional services in a clear and attractive way, combining design, animations and visual narrative.`,
    image: "/proyectos/uli1.png",
    gallery: ["/proyectos/uli1.png", "/proyectos/uli2.png", "/proyectos/uli3.png"],
    tags: ["website", "personal brand"],
    category: "landing page",
    demoUrl: "https://rotating-object-474590.framer.app/",
    featured: false,
    order: 12,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 15,
    slug: "eev",
    title: "Excelencia En Vida",
    titleEn: "Excelencia En Vida",
    description: "Web app para la empresa Excelencia En Vida",
    descriptionEn: "Web app for Excelencia En Vida company",
    content: `Portal web completo desarrollado para Excelencia en Vida, empresa fundada en 1999 por Elizabeth Rodríguez. La organización se dedica a formar emprendedores exitosos y a brindar asesoría financiera de alto nivel a familias mexicanas.

El proyecto refleja los valores de la empresa: ética, humanismo, integridad, profesionalismo y compromiso con el bienestar y la protección patrimonial de sus clientes. A diferencia de una landing page, este sitio funciona como un portal integral con múltiples secciones y contenidos.`,
    contentEn: `Complete web portal developed for Excelencia en Vida, a company founded in 1999 by Elizabeth Rodríguez. The organization is dedicated to training successful entrepreneurs and providing high-level financial advice to Mexican families.

The project reflects the company's values: ethics, humanism, integrity, professionalism and commitment to the well-being and asset protection of its clients. Unlike a landing page, this site functions as a comprehensive portal with multiple sections and content.`,
    image: "/proyectos/exe1.png",
    gallery: ["/proyectos/exe1.png", "/proyectos/exe2.png", "/proyectos/exe3.png"],
    tags: ["website", "finance", "consulting"],
    category: "website corporativo",
    demoUrl: "https://excelenciaenvida.framer.website/",
    featured: false,
    order: 13,
    technologies: "Framer",
    year: 2023
  },
  {
    id: 16,
    slug: "prolab",
    title: "ProLab Educativa",
    titleEn: "ProLab Educativa",
    description: "Web app para la empresa ProLab Educativa",
    descriptionEn: "Web app for ProLab Educativa company",
    content: `Plataforma web completa desarrollada en Next.js para Pro Lab Educativa, una fundación laboral con certificación nacional dedicada a la formación académica y profesional. El sitio funciona como una web app educativa donde se comercializan múltiples cursos y diplomaturas.

Incluye formaciones como Genias Argentinas, Ciencias Criminalísticas, diplomaturas especializadas, Personal Trainer, Técnicas de Enfermería y Organización Geriátrica, entre muchas otras. La plataforma cuenta con un diseño altamente vistoso, colores llamativos y una experiencia moderna que invita a explorar la oferta educativa. Incorpora modo claro y oscuro, una arquitectura robusta y una navegación fluida, pensada para escalar y acompañar el crecimiento institucional.`,
    contentEn: `Complete web platform developed in Next.js for Pro Lab Educativa, a labor foundation with national certification dedicated to academic and professional training. The site functions as an educational web app where multiple courses and diplomas are commercialized.

It includes training such as Genias Argentinas, Criminal Sciences, specialized diplomas, Personal Trainer, Nursing Techniques and Geriatric Organization, among many others. The platform has a highly eye-catching design, striking colors and a modern experience that invites you to explore the educational offer. It incorporates light and dark mode, a robust architecture and fluid navigation, designed to scale and accompany institutional growth.`,
    image: "/proyectos/pro1.png",
    gallery: ["/proyectos/pro1.png", "/proyectos/pro2.png", "/proyectos/pro3.png"],
    tags: ["website", "education", "web app"],
    category: "website corporativo",
    demoUrl: "https://prolabeducativa.com/",
    featured: false,
    order: 14,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 17,
    slug: "orestes",
    title: "Orestes Verduzco",
    titleEn: "Orestes Verduzco",
    description: "Landing page para Orestes Verduzco",
    descriptionEn: "Landing page for Orestes Verduzco",
    content: `Landing page sencilla desarrollada para Orestes Verdusco Cervantes, agente de seguros. El sitio presenta sus servicios de forma clara y directa, priorizando la conversión y el contacto.`,
    contentEn: `Simple landing page developed for Orestes Verdusco Cervantes, insurance agent. The site presents his services in a clear and direct way, prioritizing conversion and contact.`,
    image: "/proyectos/ore1.png",
    gallery: ["/proyectos/ore1.png", "/proyectos/ore2.png", "/proyectos/ore3.png"],
    tags: ["website", "insurance"],
    category: "landing page",
    demoUrl: "https://orestesverduzco.site/",
    featured: false,
    order: 15,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 18,
    slug: "sgasesores",
    title: "SG Asesores",
    titleEn: "SG Asesores",
    description: "Landing page para SG Asesores",
    descriptionEn: "Landing page for SG Asesores",
    content: `Landing page desarrollada para SG Patrimonial, empresa dedicada a la consultoría en protección patrimonial y ahorro. Proyecto claro y orientado a conversión.`,
    contentEn: `Landing page developed for SG Patrimonial, a company dedicated to consulting in asset protection and savings. Clear project oriented to conversion.`,
    image: "/proyectos/sga1.png",
    gallery: ["/proyectos/sga1.png", "/proyectos/sga2.png", "/proyectos/sga3.png"],
    tags: ["website", "finance", "consulting"],
    category: "website corporativo",
    demoUrl: "https://sgasesores.framer.website/",
    featured: false,
    order: 16,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 19,
    slug: "lessly",
    title: "Lessly",
    titleEn: "Lessly",
    description: "Landing page para Lessly",
    descriptionEn: "Landing page for Lessly",
    content: `Landing page desarrollada para Lessly, enfocada en asesoría financiera y protección patrimonial. Proyecto priorizando simplicidad y claridad en la comunicación de servicios.`,
    contentEn: `Landing page developed for Lessly, focused on financial advice and asset protection. Project prioritizing simplicity and clarity in service communication.`,
    image: "/proyectos/les1.png",
    gallery: ["/proyectos/les1.png", "/proyectos/les2.png", "/proyectos/les3.png"],
    tags: ["website", "finance", "insurance"],
    category: "landing page",
    demoUrl: "https://lessprotg.online/",
    featured: false,
    order: 17,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 20,
    slug: "genaro",
    title: "Gin San Genaro",
    titleEn: "Gin San Genaro",
    description: "Web app para la empresa Gin San Genaro",
    descriptionEn: "Web app for Gin San Genaro company",
    content: `Landing page desarrollada en HTML para San Genaro Gym, un gimnasio artesanal creado por tres amigos. El sitio es sencillo y directo, enfocado en presentar el espacio, la propuesta del gimnasio y facilitar el contacto con potenciales clientes.`,
    contentEn: `Landing page developed in HTML for San Genaro Gym, an artisan gym created by three friends. The site is simple and direct, focused on presenting the space, the gym's proposal and facilitating contact with potential clients.`,
    image: "/proyectos/gin1.png",
    gallery: ["/proyectos/gin1.png", "/proyectos/gin2.png", "/proyectos/gin3.png"],
    tags: ["website", "gym", "fitness"],
    category: "website corporativo",
    demoUrl: "https://ginsangenaro.com/",
    featured: false,
    order: 18,
    technologies: "HTML, CSS",
    year: 2023
  },
  {
    id: 21,
    slug: "extremedetail",
    title: "Extreme Detail",
    titleEn: "Extreme Detail",
    description: "Web app para la empresa Extreme Detail",
    descriptionEn: "Web app for Extreme Detail company",
    content: `Página web desarrollada para Extreme Detail, una empresa dedicada a ofrecer productos de alta gama para el cuidado y detailing automotriz. El sitio presenta una línea completa de productos diseñados para cubrir cada necesidad del cuidado vehicular.

Incluye ceras, shampoos, limpiadores, acondicionadores interiores y exteriores, bidones, perfumes y más. La web comunica calidad, profesionalismo y especialización, alineándose con un público exigente que busca resultados premium.`,
    contentEn: `Website developed for Extreme Detail, a company dedicated to offering high-end products for automotive care and detailing. The site presents a complete line of products designed to cover every vehicle care need.

Includes waxes, shampoos, cleaners, interior and exterior conditioners, drums, perfumes and more. The website communicates quality, professionalism and specialization, aligning with a demanding audience looking for premium results.`,
    image: "/proyectos/ext1.png",
    gallery: ["/proyectos/ext1.png", "/proyectos/ext2.png", "/proyectos/ext3.png"],
    tags: ["website", "automotive", "products"],
    category: "website corporativo",
    demoUrl: "https://extremedetail.framer.website/",
    featured: false,
    order: 19,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 22,
    slug: "crios",
    title: "CRIOS Asesores",
    titleEn: "CRIOS Asesores",
    description: "Landing page para CRIOS Asesores",
    descriptionEn: "Landing page for CRIOS Asesores",
    content: `Landing page desarrollada en Framer para Críos Asesores, empresa del sector financiero. El sitio presenta una estética moderna y una estructura clara, enfocada en conversión y contacto.`,
    contentEn: `Landing page developed in Framer for Críos Asesores, a financial sector company. The site presents a modern aesthetic and clear structure, focused on conversion and contact.`,
    image: "/proyectos/cri1.png",
    gallery: ["/proyectos/cri1.png", "/proyectos/cri2.png", "/proyectos/cri3.png"],
    tags: ["website", "finance"],
    category: "landing page",
    demoUrl: "https://favorable-photos-325805.framer.app/",
    featured: false,
    order: 20,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 23,
    slug: "bsfasesores",
    title: "BSF Asesores",
    titleEn: "BSF Asesores",
    description: "Landing page para BSF asesores",
    descriptionEn: "Landing page for BSF asesores",
    content: `Landing page desarrollada para BSF Asesores, orientada a la presentación de servicios financieros y asesoría patrimonial.`,
    contentEn: `Landing page developed for BSF Asesores, oriented to the presentation of financial services and asset management advice.`,
    image: "/proyectos/bsf1.png",
    gallery: ["/proyectos/bsf1.png", "/proyectos/bsf2.png", "/proyectos/bsf3.png"],
    tags: ["website", "finance"],
    category: "landing page",
    demoUrl: "https://bsfasesores.framer.website/",
    featured: false,
    order: 21,
    technologies: "Framer",
    year: 2023
  },
  {
    id: 24,
    slug: "diana",
    title: "Diana Espinoza",
    titleEn: "Diana Espinoza",
    description: "Landing page para Diana",
    descriptionEn: "Landing page for Diana",
    content: `Landing page desarrollada en Framer para Diana Espinoza, asesora financiera y de bienestar familiar. El sitio destaca por su diseño vistoso, moderno y dinámico, ofreciendo una experiencia visual atractiva que vale la pena recorrer.

La página está pensada para generar confianza, transmitir cercanía y comunicar profesionalismo desde el primer impacto.`,
    contentEn: `Landing page developed in Framer for Diana Espinoza, financial and family wellness advisor. The site stands out for its colorful, modern and dynamic design, offering an attractive visual experience worth exploring.

The page is designed to generate trust, convey closeness and communicate professionalism from the first impact.`,
    image: "/proyectos/dia1.png",
    gallery: ["/proyectos/dia1.png", "/proyectos/dia2.png", "/proyectos/dia3.png"],
    tags: ["website", "finance", "family"],
    category: "landing page",
    demoUrl: "https://dianaespinoza.framer.website/",
    featured: false,
    order: 22,
    technologies: "Framer",
    year: 2024
  },
  {
    id: 25,
    slug: "andrea",
    title: "Andrea Jiménez",
    titleEn: "Andrea Jiménez",
    description: "Landing page para Andrea",
    descriptionEn: "Landing page for Andrea",
    content: `Landing page desarrollada en HTML para Andrea Jiménez, asesora financiera. Ofrece servicios de ahorro para el retiro, ahorro educativo, protección, seguros de vida, optimización financiera y planes de ahorro personalizados. Proyecto sobrio, directo y funcional.`,
    contentEn: `Landing page developed in HTML for Andrea Jiménez, financial advisor. Offers retirement savings, educational savings, protection, life insurance, financial optimization and personalized savings plans. Sober, direct and functional project.`,
    image: "/proyectos/and1.png",
    gallery: ["/proyectos/and1.png", "/proyectos/and2.png", "/proyectos/and3.png"],
    tags: ["website", "finance"],
    category: "landing page",
    demoUrl: "https://andreajimenezfinanzas.netlify.app/",
    featured: false,
    order: 23,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 26,
    slug: "lacampaña",
    title: "La Campaña Juego",
    titleEn: "La Campaña Game",
    description: "Web app para La Campaña Juego",
    descriptionEn: "Web app for La Campaña Game",
    content: `Página web oficial del juego La Campaña, un juego de cartas estratégico donde los jugadores preparan un ejército compuesto por guerreros para atacar y defenderse de sus enemigos.

El sitio funciona como una landing híbrida, combinando información del juego, su universo, mecánicas y presentación visual. El proyecto fue desarrollado en Next.js y ofrece una experiencia moderna, alineada con la estética del juego y su propuesta estratégica.`,
    contentEn: `Official website of the game La Campaña, a strategic card game where players prepare an army composed of warriors to attack and defend against their enemies.

The site functions as a hybrid landing page, combining game information, its universe, mechanics and visual presentation. The project was developed in Next.js and offers a modern experience, aligned with the game's aesthetics and strategic proposal.`,
    image: "/proyectos/cam1.png",
    gallery: ["/proyectos/cam1.png", "/proyectos/cam2.png", "/proyectos/cam3.png"],
    tags: ["website", "game", "cards"],
    category: "landing page / e-commerce híbrido",
    demoUrl: "https://lacampania.netlify.app/",
    featured: false,
    order: 24,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 27,
    slug: "vocapodcast",
    title: "Voca Podcast",
    titleEn: "Voca Podcast",
    description: "Web app para Voca Podcast",
    descriptionEn: "Web app for Voca Podcast",
    content: `Landing page desarrollada en Next.js para Voca Podcast, un espacio dedicado a historias que inspiran y vocaciones que transforman. El podcast explora las vocaciones reales que construyen el mundo, a través de charlas, aprendizajes y experiencias de personas que dejan huella.

El canal es conducido por Máximo Sarmiento y la web funciona como punto central para presentar el proyecto, comunicar su identidad y conectar con la audiencia.`,
    contentEn: `Landing page developed in Next.js for Voca Podcast, a space dedicated to stories that inspire and vocations that transform. The podcast explores the real vocations that build the world, through talks, learnings and experiences of people who leave a mark.

The channel is hosted by Máximo Sarmiento and the website serves as a central point to present the project, communicate its identity and connect with the audience.`,
    image: "/proyectos/voc1.png",
    gallery: ["/proyectos/voc1.png", "/proyectos/voc2.png", "/proyectos/voc3.png"],
    tags: ["website", "podcast", "media"],
    category: "website corporativo",
    demoUrl: "https://vocapodcast.netlify.app/",
    featured: false,
    order: 25,
    technologies: "Next.js",
    year: 2025
  },
  {
    id: 28,
    slug: "afixsa",
    title: "Afix S.A.",
    titleEn: "Afix S.A.",
    description: "Web app para la empresa Afix S.A.",
    descriptionEn: "Web app for Afix S.A. company",
    content: `Página web completa desarrollada en HTML para Afix, una empresa especializada en soportes para gráficas publicitarias. La marca se destaca por su sistema Clic-Clac, una tecnología propia y patentada que optimiza la instalación y el recambio de gráficas.

Si bien está construida en HTML, la web es altamente completa e interactiva, con secciones dinámicas que explican el funcionamiento del sistema, sus ventajas competitivas y las aplicaciones del producto en distintos contextos comerciales y publicitarios.`,
    contentEn: `Complete website developed in HTML for Afix, a company specialized in supports for advertising graphics. The brand stands out for its Clic-Clac system, a proprietary and patented technology that optimizes the installation and replacement of graphics.

Although built in HTML, the website is highly complete and interactive, with dynamic sections explaining how the system works, its competitive advantages and product applications in different commercial and advertising contexts.`,
    image: "/proyectos/afi1.png",
    gallery: ["/proyectos/afi1.png", "/proyectos/afi2.png", "/proyectos/afi3.png"],
    tags: ["website", "advertising", "product"],
    category: "website corporativo",
    demoUrl: "https://afixsa.netlify.app/",
    featured: false,
    order: 26,
    technologies: "HTML, CSS",
    year: 2025
  },
  {
    id: 29,
    slug: "eduardo",
    title: "Eduardo Sánchez",
    titleEn: "Eduardo Sánchez",
    description: "Landing page para Eduardo",
    descriptionEn: "Landing page for Eduardo",
    content: `Landing page sobria desarrollada en HTML para Eduardo Sánchez. El sitio comunica servicios de estrategias para el retiro, protección integral, beneficios fiscales, garantía educativa universitaria, protección para mujeres y protección patrimonial vitalicia.`,
    contentEn: `Sober landing page developed in HTML for Eduardo Sánchez. The site communicates services for retirement strategies, comprehensive protection, tax benefits, university educational guarantee, women's protection and lifelong asset protection.`,
    image: "/proyectos/edu1.png",
    gallery: ["/proyectos/edu1.png", "/proyectos/edu2.png", "/proyectos/edu3.png"],
    tags: ["website", "finance"],
    category: "landing page",
    demoUrl: "https://tranquil-croquembouche-56c761.netlify.app/",
    featured: false,
    order: 27,
    technologies: "HTML, CSS",
    year: 2024
  },
  {
    id: 30,
    slug: "paulo",
    title: "Paulo Giardina",
    titleEn: "Paulo Giardina",
    description: "Landing page para Paulo Giardina",
    descriptionEn: "Landing page for Paulo Giardina",
    content: `Website para Paulo Giardina, entrenador personal. El sitio presenta sus servicios de entrenamiento y fitness de manera profesional y atractiva.`,
    contentEn: `Website for Paulo Giardina, personal trainer. The site presents his training and fitness services in a professional and attractive way.`,
    image: "/proyectos/pau1.png",
    gallery: ["/proyectos/pau1.png", "/proyectos/pau2.png", "/proyectos/pau3.png"],
    tags: ["website", "fitness", "web app"],
    category: "website corporativo",
    demoUrl: "https://paulogiardina.netlify.app/",
    featured: false,
    order: 28,
    technologies: "Next.js",
    year: 2025
  }
]
