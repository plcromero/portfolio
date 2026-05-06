export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  responsibilities?: string[];
  stack: string[];
  featured?: boolean;
  meta?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "metalendario",
    title: "Metalendario",
    tagline: "Plataforma de eventos · API-first",
    description:
      "Plataforma de eventos con arquitectura API-first que incluye backend, API REST y aplicación móvil en React Native. Desde el endpoint hasta la pantalla.",
    bullets: [
      "API REST con endpoints filtrables y paginación eficiente",
      "Sistema de agregación y normalización de datos heterogéneos",
      "Aplicación móvil multiplataforma en React Native",
      "Modelado de base de datos pensado para escalar",
    ],
    responsibilities: [
      "Desarrollo fullstack end-to-end",
      "Diseño y documentación de la API",
      "Integración con la app móvil",
      "Gestión y normalización de datos",
    ],
    stack: ["API REST", "Node / PHP", "MySQL", "React Native", "JSON Schema"],
    featured: true,
    meta: [
      { label: "Rol", value: "Fullstack Lead" },
      { label: "Estado", value: "Producción" },
      { label: "Tipo", value: "Plataforma + Mobile" },
    ],
  },
  {
    id: "saas-ticketing",
    title: "Plataforma SaaS de ticketing",
    tagline: "Multi-tenant · Ventas y reservas",
    description:
      "Sistema multi-tenant de gestión de ventas y reservas con lógica de negocio compleja, integraciones externas y optimización de rendimiento en hot-paths.",
    bullets: [
      "Gestión avanzada de precios, descuentos y disponibilidad",
      "Flujo de compras con estados y reintentos seguros",
      "Integraciones con APIs externas y pasarelas",
      "Optimización de queries y caché en endpoints críticos",
    ],
    responsibilities: [
      "Backend en CakePHP",
      "Funcionalidades críticas de negocio",
      "Optimización de rendimiento",
    ],
    stack: ["CakePHP", "MySQL", "REST", "Multi-tenant", "Cache"],
    meta: [
      { label: "Rol", value: "Backend Developer" },
      { label: "Tipo", value: "SaaS B2B" },
    ],
  },
  {
    id: "clientes",
    title: "Desarrollo web para clientes",
    tagline: "Frontend · Backend · Integraciones",
    description:
      "Webs corporativas y herramientas a medida con foco en mantenibilidad, accesibilidad y rendimiento real en dispositivos finales.",
    bullets: [
      "Frontend responsive y accesible",
      "Backend a medida con APIs limpias",
      "Integración de APIs y proveedores",
      "Despliegue y mantenimiento continuo",
    ],
    stack: ["Next.js", "PHP", "MySQL", "REST", "CI/CD"],
    meta: [
      { label: "Rol", value: "Fullstack" },
      { label: "Tipo", value: "Proyectos a medida" },
    ],
  },
  {
    id: "integraciones",
    title: "Integraciones y APIs",
    tagline: "Sistemas en producción · Eventos",
    description:
      "Consumo, integración y orquestación de APIs externas en sistemas reales, incluyendo entornos de eventos de gran volumen como FITUR.",
    bullets: [
      "Consumo de APIs externas con resiliencia (retries, backoff)",
      "Integración con proveedores y normalización de respuestas",
      "Sistemas complejos en producción con monitoreo",
      "Experiencia en entornos de eventos tipo FITUR",
    ],
    stack: ["REST", "Webhooks", "OAuth", "Observabilidad"],
    meta: [
      { label: "Rol", value: "Integration Developer" },
      { label: "Tipo", value: "Productivo · alto volumen" },
    ],
  },
];

export type Tech = {
  name: string;
  category: "Lenguajes" | "Frontend" | "Backend" | "Datos" | "DevOps" | "API";
  level: "Diario" | "Sólido" | "Familiar";
};

export const techs: Tech[] = [
  { name: "PHP", category: "Lenguajes", level: "Diario" },
  { name: "JavaScript", category: "Lenguajes", level: "Diario" },
  { name: "TypeScript", category: "Lenguajes", level: "Sólido" },
  { name: "Next.js", category: "Frontend", level: "Sólido" },
  { name: "React", category: "Frontend", level: "Sólido" },
  { name: "React Native", category: "Frontend", level: "Sólido" },
  { name: "CakePHP", category: "Backend", level: "Diario" },
  { name: "Node.js", category: "Backend", level: "Sólido" },
  { name: "APIs REST", category: "API", level: "Diario" },
  { name: "MySQL", category: "Datos", level: "Diario" },
  { name: "Git", category: "DevOps", level: "Diario" },
  { name: "Docker", category: "DevOps", level: "Sólido" },
];

export const contact = {
  email: "plcromero@gmail.com",
  github: "https://github.com/plcromero",
  githubUser: "plcromero",
  web: "https://plcromero.es",
  linkedin: "https://www.linkedin.com/in/plcromero/",
};
