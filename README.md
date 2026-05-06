# Romero · Portfolio

Portfolio personal de **Manuel Jesús Romero García** (`plcromero`) — Fullstack Developer.

Construido con **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS** y **Framer Motion**.

## Requisitos

- Node.js 18.18+ o 20+
- npm 9+

## Desarrollo

```bash
npm install
npm run dev
# http://localhost:4040
```

## Build

```bash
npm run build
npm run start
# http://localhost:4040
```

## Scripts

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en el puerto **4040** |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build en el puerto **4040** |
| `npm run lint` | Lint con ESLint |
| `npm run typecheck` | TypeScript en modo `--noEmit` |

## Estructura

```
app/
  layout.tsx           Metadata, fuentes y estilos globales
  page.tsx             Composición de secciones
  globals.css          Tokens de diseño + utilidades
  api/contact/route.ts Endpoint del formulario
components/
  Navbar.tsx           Sticky con efecto scroll
  Hero.tsx             Hero con parallax suave
  Projects.tsx         Listado con proyecto destacado
  FeaturedProject.tsx  Card grande de Metalendario
  ProjectCard.tsx      Card estándar
  About.tsx            Sobre mí (sin frases vacías)
  Stack.tsx            Tecnologías agrupadas
  Contact.tsx          Form + enlaces directos
  Footer.tsx
lib/
  data.ts              Proyectos, stack y contacto
  motion.ts            Variants de Framer Motion
```

## Diseño

- Fondo `#0d1117`, superficie `#161b22`
- Primario `#58a6ff`, acento salmón `#ff9472`
- Tipografía Inter + JetBrains Mono para detalles de código
- Animaciones suaves al hacer scroll, microinteracciones discretas

## Despliegue

Cualquier plataforma con soporte Next.js (Vercel, Netlify, Docker, Node).

---

© Manuel Jesús Romero García
