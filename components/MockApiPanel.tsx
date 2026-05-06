type Props = {
  endpoint: string;
  payload: string;
};

export default function MockApiPanel({ endpoint, payload }: Props) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-border-muted bg-bg-inset shadow-card">
      <div className="flex min-w-0 items-center gap-2 border-b border-border-muted bg-bg-elevated/70 px-3 py-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[11px] text-fg-subtle">
          {endpoint}
        </span>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 font-mono text-[11.5px] leading-relaxed text-fg-muted sm:text-[12.5px]">
        {payload}
      </pre>
    </div>
  );
}
