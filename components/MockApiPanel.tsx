type Props = {
  endpoint: string;
  payload: string;
};

export default function MockApiPanel({ endpoint, payload }: Props) {
  return (
    <div className="rounded-xl border border-border-muted bg-bg-inset overflow-hidden shadow-card">
      <div className="flex items-center gap-2 border-b border-border-muted bg-bg-elevated/70 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[11px] text-fg-subtle">
          {endpoint}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-[12.5px] leading-relaxed font-mono text-fg-muted">
        {payload}
      </pre>
    </div>
  );
}
