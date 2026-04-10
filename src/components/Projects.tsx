"use client";

const projects = [
  {
    title: "Proyecto Uno",
    description: "Descripción.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "",
    demo: "https://proyecto.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: "0 24px 120px", maxWidth: 860, margin: "0 auto" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.12em", color: "#444", textTransform: "uppercase", marginBottom: 40 }}>proyectos</p>
      <div style={{ border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden" }}>
        {projects.map((p, i) => (
          <div key={p.title} style={{
            background: "#0d0d0d",
            padding: "32px 40px",
            borderBottom: i < projects.length - 1 ? "1px solid #1a1a1a" : "none",
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 500, color: "#ddd", marginBottom: 10 }}>{p.title}</h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontSize: 11, color: "#444", border: "1px solid #1e1e1e", borderRadius: 3, padding: "3px 8px" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 12, color: "#444", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#444")}
              >GitHub ↗</a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "#444", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#444")}
                >Demo ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}