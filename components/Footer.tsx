import { contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-muted/60 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-fg-subtle md:flex-row md:items-center">
        <p>
          © {year} <span className="text-fg-muted">plcromero</span> · Manuel Jesús Romero García ·{" "}
          <a href={`mailto:${contact.email}`} className="text-fg-muted hover:text-primary transition-colors">
            {contact.email}
          </a>
        </p>
        <p className="font-mono text-xs">
          Next.js · TypeScript · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
