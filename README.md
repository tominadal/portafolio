# Tomás Nadal - Portfolio Personal

Portfolio profesional desarrollado con Next.js 15, TypeScript y Tailwind CSS. Presenta mi trayectoria como Full Stack Developer, proyectos destacados, artículos de blog y formas de contacto.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌓 **Modo Oscuro/Claro**: Soporte completo para temas light y dark
- 🌍 **Bilingüe**: Soporte para español e inglés con cambio dinámico
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Rendimiento**: Optimizado con Next.js App Router e ISR
- 🎨 **UI Components**: Biblioteca de componentes con shadcn/ui
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, sitemap y robots.txt
- 🗺️ **Mapas Interactivos**: Integración con Google Maps
- 📊 **Analytics**: Vercel Analytics integrado

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Iconos**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Fuentes**: [Google Fonts](https://fonts.google.com/) (Manrope, Geist Mono)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Instalación

### Requisitos previos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tominadal/portafolio.git
cd portafolio
```

2. Instalar dependencias:
```bash
pnpm install
# o
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.local.example .env.local
```

4. Ejecutar el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌿 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Email para el formulario de contacto
NEXT_PUBLIC_CONTACT_EMAIL=tu-email@ejemplo.com

# Google Maps API (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu-api-key

# Vercel Analytics (automático en Vercel)
# No requiere configuración manual
```

## 📂 Estructura del Proyecto

```
tomas-portfolio/
├── app/                    # Next.js App Router
│   ├── blog/              # Página de blog y posts
│   ├── contact/           # Página de contacto
│   ├── projects/          # Galería de proyectos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── sitemap.ts         # Generación de sitemap
│   ├── manifest.ts        # PWA manifest
│   └── icon.tsx           # Favicon dinámico
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de shadcn/ui
│   ├── custom-cursor.tsx # Cursor personalizado
│   ├── footer.tsx        # Footer del sitio
│   ├── language-provider.tsx # Proveedor de idioma
│   ├── navigation.tsx    # Barra de navegación
│   ├── theme-provider.tsx # Proveedor de tema
│   └── whatsapp-float.tsx # Botón flotante de WhatsApp
├── hooks/                 # Custom React hooks
├── lib/                   # Utilidades y datos
│   ├── blog-data.tsx     # Data de artículos
│   ├── projects-data.tsx # Data de proyectos
│   ├── translations.ts   # Traducciones ES/EN
│   └── utils.ts          # Funciones auxiliares
├── public/                # Archivos estáticos
│   ├── elementos/        # Elementos flotantes del hero
│   ├── proyectos/        # Imágenes de proyectos
│   ├── robots.txt        # Configuración de crawlers
│   └── *.png             # Logos e imágenes
└── scripts/               # Scripts de utilidad

```

## 🎨 Personalización

### Colores y Tema

Los colores se configuran en `app/globals.css` usando variables CSS:

```css
@theme {
  --color-accent: #ff620a;
  --color-foreground: #0f0f0f;
  --color-background: #ffffff;
  /* ... más variables */
}
```

### Contenido

- **Proyectos**: Edita `lib/projects-data.tsx`
- **Blog**: Edita `lib/blog-data.tsx`
- **Traducciones**: Edita `lib/translations.ts`

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Producción  
pnpm build        # Construye para producción
pnpm start        # Inicia servidor de producción

# Linting y formateo
pnpm lint         # Ejecuta ESLint
```

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Las variables de entorno se configuran automáticamente
3. Cada push a `main` despliega automáticamente

### Otros proveedores

```bash
# Build
pnpm build

# Los archivos estáticos estarán en .next/
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

**Tomás Nadal**
- Email: tomasnadal04@gmail.com
- LinkedIn: [linkedin.com/in/tomasnadal](https://linkedin.com/in/tomasnadal)
- GitHub: [@tominadal](https://github.com/tominadal)
- Portfolio: [tomasnadal.vercel.app](https://tomasnadal.vercel.app)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
