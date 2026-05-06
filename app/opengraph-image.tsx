import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "plcromero — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(88,166,255,0.30) 0%, rgba(13,17,23,0) 70%), radial-gradient(40% 40% at 80% 100%, rgba(255,148,114,0.25) 0%, rgba(13,17,23,0) 70%), #0d1117",
          color: "#e6edf3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#8b949e" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid #30363d",
              background: "#161b22",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#58a6ff",
              fontSize: 22,
            }}
          >
            ◆
          </div>
          <span>plcromero.es</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(120deg, #e6edf3 0%, #79b8ff 50%, #ffb088 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1,
            }}
          >
            plcromero
          </div>
          <div style={{ fontSize: 40, color: "#e6edf3" }}>Fullstack Developer</div>
          <div style={{ fontSize: 26, color: "#8b949e", maxWidth: 900 }}>
            APIs REST · Plataformas SaaS multi-tenant · Aplicaciones web modernas
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#8b949e" }}>
          {["Next.js", "TypeScript", "CakePHP", "MySQL", "React Native"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                border: "1px solid #30363d",
                background: "#161b22",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
