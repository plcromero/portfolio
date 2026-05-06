export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://plcromero.es";

export const seo = {
  name: "plcromero",
  fullName: "Manuel Jesús Romero García",
  alias: "plcromero",
  jobTitle: "Fullstack Developer",
  description:
    "Manuel Jesús Romero García (plcromero) — Fullstack Developer en España. Construyo APIs REST, plataformas SaaS multi-tenant y aplicaciones web modernas con Next.js, TypeScript, CakePHP y MySQL.",
  shortDescription:
    "Fullstack Developer · APIs REST, SaaS multi-tenant y aplicaciones web modernas.",
  email: "plcromero@gmail.com",
  url: siteUrl,
  locale: "es_ES",
  language: "es",
  country: "ES",
  region: "Andalucía",
  twitter: "@plcromero",
  github: "https://github.com/plcromero",
  linkedin: "https://www.linkedin.com/in/plcromero/",
  keywords: [
    "Fullstack Developer España",
    "Desarrollador fullstack",
    "Next.js Developer",
    "TypeScript Developer",
    "CakePHP Developer",
    "APIs REST",
    "SaaS multi-tenant",
    "React Native",
    "MySQL",
    "Docker",
    "plcromero",
    "Manuel Jesús Romero García",
    "Romero developer",
    "Metalendario",
    "freelance developer",
    "desarrollador web profesional",
  ],
};
