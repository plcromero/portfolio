import Link from "next/link";
import { contact } from "@/lib/data";
import { Github, Linkedin, Mail } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-muted/60 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 text-sm text-fg-subtle md:flex-row md:items-center">
        <div>
          <p>
            © {year} <span className="text-fg-muted">plcromero</span> · Manuel Jesús Romero García
          </p>
          <p className="mt-1 font-mono text-xs">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-muted bg-bg-elevated text-fg-muted transition-all hover:border-primary/40 hover:text-primary"
          >
            <Mail />
          </Link>
          <Link
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-muted bg-bg-elevated text-fg-muted transition-all hover:border-primary/40 hover:text-primary"
          >
            <Github />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-muted bg-bg-elevated text-fg-muted transition-all hover:border-primary/40 hover:text-primary"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
