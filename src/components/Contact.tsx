"use client";

const socials = [
  {
    label: "GitHub", href: "https://github.com/iMindCap",
    icon: <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>,
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/arael-amador/",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  }
];

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: "0 16px 80px", maxWidth: 900, margin: "0 auto" }}>

      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <span style={{ fontSize: "clamp(18px, 4vw, 25px)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e7681", whiteSpace: "nowrap" }}>
          Contacto
        </span>
        <div style={{ flex: 1, height: 1, background: "#161b22" }} />
      </div>

      <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 14, overflow: "hidden" }}>

        {/* Zona superior */}
        <div style={{
          padding: "clamp(28px, 6vw, 56px) clamp(20px, 6vw, 56px) clamp(24px, 5vw, 48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 32,
          alignItems: "start",
        }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, letterSpacing: "-1.2px", color: "#e6edf3", lineHeight: 1.1, marginBottom: 14 }}>
              Hablemos.
            </h2>
            <p style={{ fontSize: "clamp(13px, 2.5vw, 14px)", color: "#6e7681", lineHeight: 1.85, maxWidth: 360 }}>
              Abierto a oportunidades, colaboraciones, proyectos open source o para conversar sobre las últimas tendencias en tech.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Email", value: "arael.amadorlp@gmail.com", href: "mailto:arael.amadorlp@gmail.com" },
              { label: "Ubicación", value: "México" }
            ].map((item, i) => (
              <div key={item.label}>
                {i > 0 && <div style={{ width: "100%", height: 1, background: "#21262d", marginBottom: 10 }} />}
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#30363d", marginBottom: 3 }}>{item.label}</p>
                {item.href
                  ? <a href={item.href} style={{ fontSize: 13, color: "#6e7681", textDecoration: "none", wordBreak: "break-all" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#e6edf3")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6e7681")}
                    >{item.value}</a>
                  : <p style={{ fontSize: 13, color: "#6e7681" }}>{item.value}</p>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div style={{ width: "100%", height: 1, background: "#21262d" }} />

        {/* Zona inferior */}
        <div style={{
          padding: "clamp(20px, 4vw, 28px) clamp(20px, 6vw, 56px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <a href="mailto:arael.amadorlp@gmail.com" style={{
            fontSize: 13, fontWeight: 500, color: "#fff", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 22px", borderRadius: 8,
            background: "#388bfd", border: "1px solid #388bfd", transition: "all 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#58a6ff"; e.currentTarget.style.borderColor = "#58a6ff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#388bfd"; e.currentTarget.style.borderColor = "#388bfd"; }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"/></svg>
            Enviar mensaje
          </a>

          <div style={{ display: "flex", gap: 6 }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{
                width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 7, border: "1px solid #21262d", color: "#484f58",
                textDecoration: "none", transition: "all 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#30363d"; e.currentTarget.style.color = "#8b949e"; e.currentTarget.style.background = "#21262d"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#21262d"; e.currentTarget.style.color = "#484f58"; e.currentTarget.style.background = "transparent"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p style={{ marginTop: 40, textAlign: "center", fontSize: 12, color: "#30363d" }}>
        © {new Date().getFullYear()} Arael Amador · Hecho con Next.js
      </p>
    </section>
  );
}