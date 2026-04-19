"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled || open ? "rgba(13,17,23,0.95)" : "transparent",
      borderBottom: scrolled ? "1px solid #30363d" : "1px solid transparent",
      backdropFilter: scrolled || open ? "blur(12px)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#e6edf3", letterSpacing: "-0.3px" }}>
          Portafolio<span style={{ color: "#388bfd" }}>.dev</span>
        </span>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }}
          className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: 13, color: "#8b949e", textDecoration: "none",
                padding: "6px 12px", borderRadius: 6, display: "block", transition: "color 0.15s, background 0.15s"
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#e6edf3"; e.currentTarget.style.background = "#161b22"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#8b949e"; e.currentTarget.style.background = "transparent"; }}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 6, display: "none", flexDirection: "column",
            gap: 5, alignItems: "center", justifyContent: "center",
          }}
          aria-label="Menú"
        >
          <span style={{
            display: "block", width: 20, height: 1.5, background: "#8b949e",
            transition: "all 0.25s",
            transform: open ? "rotate(45deg) translateY(5px)" : "none",
          }} />
          <span style={{
            display: "block", width: 20, height: 1.5, background: "#8b949e",
            transition: "all 0.25s",
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 20, height: 1.5, background: "#8b949e",
            transition: "all 0.25s",
            transform: open ? "rotate(-45deg) translateY(-5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        borderTop: open ? "1px solid #30363d" : "none",
      }}
        className="show-mobile-block"
      >
        <ul style={{ listStyle: "none", margin: 0, padding: "8px 16px 16px" }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", fontSize: 14, color: "#8b949e",
                  textDecoration: "none", padding: "12px 8px",
                  borderBottom: "1px solid #1e1e1e", transition: "color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e6edf3")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8b949e")}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; max-height: 0 !important; }
        }
      `}</style>
    </nav>
  );
}