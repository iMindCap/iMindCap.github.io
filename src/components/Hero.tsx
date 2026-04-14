"use client";
import { useEffect, useRef } from "react";

const chips = ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 32px", maxWidth: 860, margin: "0 auto" }}>
      <div ref={ref} style={{ width: "100%" }}>

        {/* Badge disponibilidad */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 12, fontWeight: 500, color: "#58a6ff",
          background: "rgba(56,139,253,0.08)", border: "1px solid rgba(56,139,253,0.2)",
          borderRadius: 999, padding: "5px 14px", marginBottom: 28,
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#58a6ff", display: "inline-block" }} />
          disponible para proyectos
        </div>

        {/* Nombre */}
        <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2.5px", color: "#e6edf3", marginBottom: 10 }}>
          Arael Amador<br />
        </h1>

        {/* Rol */}
        <p style={{ fontSize: 16, color: "#8b949e", fontWeight: 400, marginBottom: 20, letterSpacing: "0.02em" }}>
          Full-Stack Developer &nbsp;·&nbsp; Ingeniero en Software
        </p>

        {/* Línea decorativa */}
        <div style={{ width: 40, height: 2, background: "#388bfd", borderRadius: 2, marginBottom: 24 }} />

        {/* Stack chips */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {chips.map(c => (
            <span key={c} style={{
              fontSize: 11, fontWeight: 500, color: "#6e7681",
              background: "#161b22", border: "1px solid #21262d",
              borderRadius: 5, padding: "4px 10px", letterSpacing: "0.03em",
            }}>{c}</span>
          ))}
        </div>

        {/* Descripción */}
        <p style={{ fontSize: 15, color: "#6e7681", maxWidth: 460, lineHeight: 1.85, marginBottom: 44 }}>
          Construyo productos web con{" "}
          <span style={{ color: "#8b949e", fontWeight: 500 }}>buen código</span>{" "}
          y atención al detalle — desde la interfaz hasta el servidor. Me especializo en React, Node.js y todo lo que hay en el medio.
        </p>

        {/* Botones */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#proyectos" style={{
            fontSize: 13, fontWeight: 500, color: "#fff", textDecoration: "none",
            padding: "11px 22px", borderRadius: 8, background: "#388bfd",
            border: "1px solid #388bfd", transition: "all 0.18s ease",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#58a6ff"; e.currentTarget.style.borderColor = "#58a6ff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#388bfd"; e.currentTarget.style.borderColor = "#388bfd"; }}
          >
            Ver proyectos
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" style={{
            fontSize: 13, fontWeight: 500, color: "#c9d1d9", textDecoration: "none",
            padding: "11px 22px", borderRadius: 8, background: "#161b22",
            border: "1px solid #30363d", transition: "all 0.18s ease",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#21262d"; e.currentTarget.style.borderColor = "#58a6ff"; e.currentTarget.style.color = "#e6edf3"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#161b22"; e.currentTarget.style.borderColor = "#30363d"; e.currentTarget.style.color = "#c9d1d9"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}