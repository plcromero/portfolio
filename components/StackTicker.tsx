"use client";

const items = [
  "PHP",
  "CakePHP",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "MySQL",
  "REST APIs",
  "Docker",
  "Git",
  "Multi-tenant",
  "API-first",
];

export default function StackTicker() {
  return (
    <div className="relative border-y border-border-muted/60 bg-bg-elevated/30 py-4">
      <div aria-hidden className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div aria-hidden className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="marquee">
        {/* duplicate twice for seamless loop */}
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {items.map((it) => (
              <span
                key={`${k}-${it}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-subtle"
              >
                <span className="h-1 w-1 rounded-full bg-primary/60" />
                {it}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
