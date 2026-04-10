"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 24px", maxWidth: 860, margin: "0 auto" }}>
      <div ref={ref}>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#fff", marginBottom: 24 }}>
          Arael Amador
          <br />
          <span style={{ color: "#444" }}>Full-Stack Developer</span>
        </h1>
        <p style={{ fontSize: 15, color: "#555", maxWidth: 460, lineHeight: 1.75, marginBottom: 40 }}>
          Construyo productos digitales con atención al detalle, código limpio y experiencia de usuario que importa.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#proyectos"
            style={{ fontSize: 13, color: "#fff", textDecoration: "none", padding: "10px 20px", border: "1px solid #333", borderRadius: 6, transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#666")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#333")}
          >Ver proyectos</a>
          <a href="#contacto"
            style={{ fontSize: 13, color: "#555", textDecoration: "none", padding: "10px 20px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}
          >Contactar →</a>
        </div>
      </div>
    </section>
  );
}