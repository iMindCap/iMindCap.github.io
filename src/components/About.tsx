"use client";
import { useState } from "react";

type Category = "all" | "frontend" | "backend" | "tools";

const stack: { name: string; icon: string; category: Exclude<Category, "all"> }[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", category: "frontend" },

  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "backend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "backend" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend" },
  { name: "SupaBase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: "backend" },

  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "tools" },

];

const filters: { label: string; value: Category }[] = [
  { label: "Todos", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Herramientas", value: "tools" },
];

const interests = ["Open Source", "DevOps", "Arquitectura de software"];

export default function About() {
  const [active, setActive] = useState<Category>("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === "all" ? stack : stack.filter(s => s.category === active);

  return (
    <section id="sobre-mi" style={{ padding: "60px 16px 80px", maxWidth: 900, margin: "0 auto" }}>

      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <span style={{ fontSize: "clamp(18px, 4vw, 25px)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e7681", whiteSpace: "nowrap" }}>
          Sobre mí
        </span>
        <div style={{ flex: 1, height: 1, background: "#161b22" }} />
      </div>

      {/* Bio */}
      <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 14, padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 48px)", marginBottom: 12 }}>

        {/* Header con avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%", background: "#0d1117",
            border: "1px solid #21262d", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 16, fontWeight: 700, color: "#388bfd", flexShrink: 0,
          }}>AA</div>
          <div>
            <p style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 600, color: "#e6edf3", marginBottom: 2 }}>Arael Amador</p>
            <p style={{ fontSize: 12, color: "#484f58" }}>Full-Stack Developer</p>
          </div>
        </div>

        {/* Grid bio — una columna en móvil */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e6edf3", marginBottom: 10 }}>Enfoque</p>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: "#6e7681", lineHeight: 1.85 }}>
              Desarrollador con experiencia construyendo aplicaciones web escalables. Me especializo en el ecosistema JavaScript y disfruto convertir ideas en productos reales con buen diseño y código limpio.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e6edf3", marginBottom: 10 }}>Fuera del código</p>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: "#6e7681", lineHeight: 1.85 }}>
              Contribuyo a proyectos open source, aprendo sobre sistemas distribuidos, o intento mejorar mis habilidades de diseño.
            </p>
          </div>
        </div>

        <div style={{ width: "100%", height: 1, background: "#21262d", margin: "24px 0" }} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {interests.map(i => (
            <span key={i} style={{
              fontSize: 11, color: "#484f58", background: "#0d1117",
              border: "1px solid #21262d", borderRadius: 5, padding: "4px 11px", fontWeight: 500,
            }}>{i}</span>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 14, padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 48px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", color: "#e6edf3", textTransform: "uppercase" }}>Stack</p>
          {/* Filtros — scroll horizontal en móvil muy pequeño */}
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f.value} onClick={() => setActive(f.value)} style={{
                fontSize: 12, padding: "5px 12px", borderRadius: 6, border: "1px solid",
                cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
                background: active === f.value ? "#388bfd" : "transparent",
                borderColor: active === f.value ? "#388bfd" : "#30363d",
                color: active === f.value ? "#fff" : "#6e7681",
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 8 }}>
          {filtered.map(s => (
            <div key={s.name}
              onMouseEnter={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                padding: "16px 8px", borderRadius: 10, border: "1px solid", cursor: "default", transition: "all 0.2s",
                background: hovered === s.name ? "#21262d" : "transparent",
                borderColor: hovered === s.name ? "#388bfd44" : "#21262d",
                transform: hovered === s.name ? "translateY(-2px)" : "none",
              }}>
              <img src={s.icon} alt={s.name} width={28} height={28} style={{ display: "block" }} />
              <span style={{ fontSize: 10, color: hovered === s.name ? "#e6edf3" : "#6e7681", textAlign: "center", transition: "color 0.2s", lineHeight: 1.3 }}>
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}