import { seo, siteUrl } from "@/lib/seo";
import { projects } from "@/lib/data";

export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.fullName,
    alternateName: seo.alias,
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    sameAs: [seo.github, seo.linkedin],
    jobTitle: seo.jobTitle,
    description: seo.description,
    email: `mailto:${seo.email}`,
    nationality: { "@type": "Country", name: "España" },
    address: {
      "@type": "PostalAddress",
      addressCountry: seo.country,
      addressRegion: seo.region,
    },
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "CakePHP",
      "PHP",
      "React",
      "React Native",
      "Node.js",
      "MySQL",
      "REST APIs",
      "SaaS multi-tenant",
      "Docker",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / plcromero",
      url: siteUrl,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${seo.name} · Portfolio`,
    url: siteUrl,
    inLanguage: seo.language,
    publisher: { "@type": "Person", name: seo.fullName },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Proyectos", item: `${siteUrl}/#proyectos` },
      { "@type": "ListItem", position: 3, name: "Sobre mí", item: `${siteUrl}/#sobre-mi` },
      { "@type": "ListItem", position: 4, name: "Contacto", item: `${siteUrl}/#contacto` },
    ],
  };

  const projectGraph = {
    "@context": "https://schema.org",
    "@graph": projects.map((p) => ({
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#${p.id}`,
      name: p.title,
      description: p.description,
      author: { "@type": "Person", name: seo.fullName },
      keywords: p.stack.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectGraph) }}
      />
    </>
  );
}
