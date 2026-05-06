import { contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-muted/60 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-fg-subtle md:flex-row md:items-center">
        <p>
          © {year} Manuel Jesús Romero García ·{" "}
          <span className="font-mono text-fg-muted">@{contact.githubUser}</span>
        </p>
        <p className="font-mono text-xs">
          Built with Next.js, TypeScript, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}
