"use client";

const projects = [
  {
    title: "E-commerce Admin Dashboard",
    description: "Desarrollo del núcleo lógico y funcional de una plataforma administrativa para comercio electrónico. Implementé la arquitectura de datos para la gestión de pedidos, procesamiento de ingresos y seguimiento de inventario.",
    tags: ["Next.js", "JavaScript", "Tailwind", "Radux UI", "Supabase"],
    github: "https://github.com/iMindCap/admin-panel",
    demo: "https://admin-panel-lemon-zeta.vercel.app/"
  },
];

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  "Next.js": { bg: "rgba(255,255,255,0.05)", color: "#e6edf3", border: "#30363d" },
  "TypeScript": { bg: "rgba(56,139,253,0.1)", color: "#388bfd", border: "rgba(56,139,253,0.3)" },
  "PostgreSQL": { bg: "rgba(47,128,237,0.1)", color: "#79c0ff", border: "rgba(47,128,237,0.3)" },
  "React": { bg: "rgba(87,199,227,0.1)", color: "#57c3e3", border: "rgba(87,199,227,0.3)" },
  "Node.js": { bg: "rgba(63,185,80,0.1)", color: "#3fb950", border: "rgba(63,185,80,0.3)" },
  "MongoDB": { bg: "rgba(63,185,80,0.1)", color: "#3fb950", border: "rgba(63,185,80,0.3)" },
  "Python": { bg: "rgba(255,212,59,0.1)", color: "#e3b341", border: "rgba(255,212,59,0.3)" },
  "FastAPI": { bg: "rgba(5,150,105,0.1)", color: "#34d399", border: "rgba(5,150,105,0.3)" },
  "Docker": { bg: "rgba(56,139,253,0.1)", color: "#388bfd", border: "rgba(56,139,253,0.3)" },
};

const defaultTag = { bg: "rgba(255,255,255,0.05)", color: "#8b949e", border: "#30363d" };

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: "60px 16px 80px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <p style={{ fontSize: "clamp(18px, 4vw, 25px)", letterSpacing: "0.12em", color: "#6e7681", textTransform: "uppercase" }}>Proyectos</p>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {projects.map(p => (
          <div key={p.title} style={{
            background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
            padding: "clamp(18px, 4vw, 28px) clamp(16px, 4vw, 32px)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            alignItems: "start",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#388bfd44")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#30363d")}
          >
            <div>
              <h3 style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 600, color: "#e6edf3", marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: "clamp(12px, 2.5vw, 13px)", color: "#8b949e", lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => {
                  const c = tagColors[t] ?? defaultTag;
                  return (
                    <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 12, color: "#e6edf3", textDecoration: "none",
                padding: "6px 14px", borderRadius: 6, background: "#21262d",
                border: "1px solid #30363d", transition: "border-color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#8b949e")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#30363d")}
              >Code</a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 12, color: "#fff", textDecoration: "none",
                  padding: "6px 14px", borderRadius: 6, background: "#238636",
                  border: "1px solid #2ea043", transition: "background 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#2ea043")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#238636")}
                >Demo ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}