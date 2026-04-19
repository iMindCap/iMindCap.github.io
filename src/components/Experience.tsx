"use client";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Secretaría de Educación del Estado de Querétaro",
    period: "2023 — 2025",
    description: "Configuración de servidores en un VPS para el despliegue en producción, utilizando Docker. Implementación de pipelines de integración y entrega continua (CI/CD) para automatizar pruebas, builds y despliegues. Integración y administración de bases de datos para el almacenamiento y consulta eficiente de información. Aplicación de patrones de diseño para garantizar escalabilidad y mantenimiento.",
    tags: ["Django", "Python", "PostgreSQL"],
  }
];

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: "60px 16px 80px", maxWidth: 900, margin: "0 auto" }}>
      <p style={{ fontSize: "clamp(18px, 4vw, 25px)", letterSpacing: "0.12em", color: "#6e7681", textTransform: "uppercase", marginBottom: 24 }}>
        Experiencia
      </p>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "#21262d" }} />

        <div style={{ paddingLeft: "clamp(16px, 4vw, 28px)", display: "flex", flexDirection: "column", gap: 20 }}>
          {experience.map((e, i) => (
            <div key={e.company} style={{
              background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
              padding: "clamp(18px, 4vw, 28px) clamp(16px, 4vw, 32px)",
              position: "relative", transition: "border-color 0.2s",
            }}
              onMouseEnter={el => (el.currentTarget.style.borderColor = "#388bfd44")}
              onMouseLeave={el => (el.currentTarget.style.borderColor = "#30363d")}
            >
              {/* Dot */}
              <div style={{
                position: "absolute", left: "clamp(-22px, -3.5vw, -34px)", top: 32,
                width: 10, height: 10, borderRadius: "50%",
                background: i === 0 ? "#388bfd" : "#30363d",
                border: "2px solid #0d1117",
                boxShadow: i === 0 ? "0 0 8px #388bfd66" : "none",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "clamp(13px, 3vw, 15px)", fontWeight: 600, color: "#e6edf3", marginBottom: 2 }}>{e.role}</h3>
                  <p style={{ fontSize: "clamp(12px, 2.5vw, 13px)", color: "#388bfd", wordBreak: "break-word" }}>{e.company}</p>
                </div>
                <span style={{
                  fontSize: 11, color: "#6e7681", background: "#21262d",
                  border: "1px solid #30363d", borderRadius: 100, padding: "3px 12px",
                  whiteSpace: "nowrap", flexShrink: 0,
                }}>{e.period}</span>
              </div>

              <p style={{ fontSize: "clamp(12px, 2.5vw, 13px)", color: "#8b949e", lineHeight: 1.75, marginBottom: 16 }}>{e.description}</p>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {e.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, color: "#6e7681", border: "1px solid #21262d", borderRadius: 4, padding: "2px 8px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}