"use client";

import { useState, useEffect, useRef } from "react";

/* ─── DESIGN TOKENS ────────────────────────────────────────────── */
const C = {
  bg:      "#03050F",
  navy:    "#070B1A",
  card:    "#0C1127",
  border:  "rgba(99,120,255,0.15)",
  borderH: "rgba(99,120,255,0.35)",
  accent:  "#6378FF",
  accentB: "#8B9DFF",
  glow:    "rgba(99,120,255,0.22)",
  text:    "#F0F2FF",
  muted:   "#7A83A8",
  dim:     "#3A3F5C",
};

const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');
`;

/* ─── GLOBAL STYLES ─────────────────────────────────────────────── */
const globalCSS = `
  ${fonts}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.bg}; color: ${C.text}; font-family: 'Inter', sans-serif; overflow-x: hidden; }
  ::selection { background: ${C.accent}33; }
  ::-webkit-scrollbar { width: 4px; } 
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.accent}55; border-radius: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 ${C.glow}; }
    50%       { transform: scale(1.06); box-shadow: 0 0 60px 20px ${C.glow}; }
  }
  @keyframes orbitSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes counterSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes tickerScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes borderGlow {
    0%, 100% { border-color: rgba(99,120,255,0.15); }
    50%       { border-color: rgba(99,120,255,0.5); }
  }

  .fade-up   { animation: fadeUp 0.7s ease both; }
  .delay-1   { animation-delay: 0.1s; }
  .delay-2   { animation-delay: 0.22s; }
  .delay-3   { animation-delay: 0.36s; }
  .delay-4   { animation-delay: 0.52s; }
  .delay-5   { animation-delay: 0.68s; }

  a { text-decoration: none; color: inherit; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; }
`;

/* ─── HELPERS ───────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── ROOT ──────────────────────────────────────────────────────── */
export default function Xorvia() {
  return (
    <>
      <style>{globalCSS}</style>
      <main style={{ minHeight: "100vh", background: C.bg }}>
        <Navbar />
        <Hero />
        <LogoBar />
        <Features />
        <Workflow />
        <Metrics />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

/* ─── NAVBAR ────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "16px 24px",
      display: "flex", justifyContent: "center",
    }}>
      <nav style={{
        width: "100%", maxWidth: 1120,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60,
        padding: "0 24px",
        borderRadius: 16,
        border: `1px solid ${scrolled ? C.borderH : C.border}`,
        background: scrolled ? "rgba(7,11,26,0.92)" : "rgba(7,11,26,0.6)",
        backdropFilter: "blur(20px)",
        transition: "all 0.35s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${C.accent}, #A78BFF)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff",
          }}>X</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" }}>Xorvia</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: C.muted }}>
          {["Product", "Features", "Pricing", "Docs"].map(l => (
            <a key={l} href="#" style={{ transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{l}</a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{
            height: 38, padding: "0 18px", borderRadius: 10,
            border: `1px solid ${C.border}`, color: C.text,
            fontSize: 14, background: "transparent",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.borderH}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
          >Log in</button>
          <button style={{
            height: 38, padding: "0 18px", borderRadius: 10,
            background: `linear-gradient(135deg, ${C.accent}, #8B6AFF)`,
            color: "#fff", fontSize: 14, fontWeight: 600,
            boxShadow: `0 4px 20px ${C.glow}`,
            transition: "opacity 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.boxShadow = `0 6px 28px rgba(99,120,255,0.4)`; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = `0 4px 20px ${C.glow}`; }}
          >Get started free</button>
        </div>
      </nav>
    </header>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background glows */}
      <div style={{
        position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400,
        background: `radial-gradient(ellipse, rgba(99,120,255,0.14) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "20%",
        width: 300, height: 300,
        background: `radial-gradient(circle, rgba(139,106,255,0.08) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "15%",
        width: 280, height: 280,
        background: `radial-gradient(circle, rgba(99,120,255,0.08) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1120, width: "100%", display: "flex", alignItems: "center", gap: 64, position: "relative" }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="fade-up delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 100,
            border: `1px solid ${C.border}`,
            background: `rgba(99,120,255,0.06)`,
            fontSize: 12, fontWeight: 500, color: C.accentB,
            letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
            Now in public beta
          </div>

          <h1 className="fade-up delay-2" style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(46px, 6vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            color: C.text,
          }}>
            Build your entire{" "}
            <span style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${C.accentB} 0%, #C084FC 50%, ${C.accent} 100%)`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}>startup</span>
            <br />from one idea.
          </h1>

          <p className="fade-up delay-3" style={{
            fontSize: 18, lineHeight: 1.7, color: C.muted,
            maxWidth: 480, marginBottom: 40,
          }}>
            Xorvia is the AI operating system for founders — validate, research, plan, brand,
            and launch, all inside one intelligent workspace.
          </p>

          <div className="fade-up delay-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
            <button style={{
              height: 52, padding: "0 32px", borderRadius: 12,
              background: `linear-gradient(135deg, ${C.accent}, #8B6AFF)`,
              color: "#fff", fontSize: 15, fontWeight: 600,
              boxShadow: `0 6px 32px ${C.glow}`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(99,120,255,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 6px 32px ${C.glow}`; }}
            >Start building free →</button>

            <button style={{
              height: 52, padding: "0 28px", borderRadius: 12,
              border: `1px solid ${C.border}`, color: C.text,
              fontSize: 15, background: "transparent",
              transition: "border-color 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderH; e.currentTarget.style.background = "rgba(99,120,255,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "transparent"; }}
            >▶ Watch demo</button>
          </div>

          <div className="fade-up delay-5" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex" }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: `2px solid ${C.bg}`,
                  marginLeft: i === 0 ? 0 : -10,
                  background: `linear-gradient(135deg, hsl(${220 + i*18},80%,62%), hsl(${240 + i*14},75%,55%))`,
                }} />
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, color: "#FBBF24", letterSpacing: 2 }}>★★★★★</div>
              <div style={{ fontSize: 12, color: C.muted }}>Loved by 10,000+ founders</div>
            </div>
          </div>
        </div>

        {/* Right — Orbit */}
        <div style={{ flex: "0 0 460px" }}>
          <OrbitDiagram />
        </div>
      </div>
    </section>
  );
}

/* ─── ORBIT ─────────────────────────────────────────────────────── */
function OrbitDiagram() {
  const nodes = [
    { label: "Idea",          angle:   0, r: 180, color: "#6378FF" },
    { label: "Validation",    angle:  51, r: 180, color: "#8B5CF6" },
    { label: "Research",      angle: 103, r: 180, color: "#A78BFF" },
    { label: "Business Plan", angle: 154, r: 180, color: "#C084FC" },
    { label: "Branding",      angle: 205, r: 180, color: "#8B6AFF" },
    { label: "Website",       angle: 257, r: 180, color: "#6378FF" },
    { label: "Launch",        angle: 308, r: 180, color: "#60A5FA" },
  ];

  return (
    <div style={{ position: "relative", width: 460, height: 460, animation: "floatY 6s ease-in-out infinite" }}>

      {/* Rings */}
      {[180, 130, 75].map((r, i) => (
        <div key={r} style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: r * 2, height: r * 2,
          borderRadius: "50%",
          border: `1px solid rgba(99,120,255,${0.06 + i * 0.03})`,
          transform: "translate(-50%, -50%)",
        }} />
      ))}

      {/* Spinning accent ring */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 380, height: 380,
        borderRadius: "50%",
        border: "1px dashed rgba(99,120,255,0.12)",
        transform: "translate(-50%, -50%)",
        animation: "orbitSpin 30s linear infinite",
      }} />

      {/* Core */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 96, height: 96,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${C.accent}, #8B6AFF)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff",
        animation: "pulse 4s ease-in-out infinite",
        boxShadow: `0 0 60px rgba(99,120,255,0.35), 0 0 0 12px rgba(99,120,255,0.08)`,
        zIndex: 2,
      }}>X</div>

      {/* Connecting lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
        {nodes.map((n) => {
          const rad = (n.angle - 90) * Math.PI / 180;
          const cx = 230, cy = 230;
          const x = cx + n.r * Math.cos(rad);
          const y = cy + n.r * Math.sin(rad);
          return (
            <line key={n.label}
              x1={cx} y1={cy} x2={x} y2={y}
              stroke={`rgba(99,120,255,0.12)`} strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((n) => {
        const rad = (n.angle - 90) * Math.PI / 180;
        const x = 50 + (n.r / 460) * 100 * Math.cos(rad);
        const y = 50 + (n.r / 460) * 100 * Math.sin(rad);
        return (
          <div key={n.label} style={{
            position: "absolute",
            left: `${x}%`, top: `${y}%`,
            transform: "translate(-50%, -50%)",
            padding: "8px 14px",
            borderRadius: 10,
            background: C.card,
            border: `1px solid ${C.border}`,
            fontSize: 12, fontWeight: 500, color: C.text,
            whiteSpace: "nowrap",
            backdropFilter: "blur(8px)",
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,120,255,0.08)`,
            transition: "border-color 0.3s, box-shadow 0.3s",
            animation: `borderGlow ${3 + nodes.indexOf(n) * 0.4}s ease-in-out infinite`,
          }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: n.color, marginRight: 6, verticalAlign: "middle" }} />
            {n.label}
          </div>
        );
      })}
    </div>
  );
}

/* ─── LOGO BAR ──────────────────────────────────────────────────── */
function LogoBar() {
  const logos = ["Stripe", "Notion", "Linear", "Vercel", "Figma", "Supabase", "OpenAI", "Shopify", "Stripe", "Notion", "Linear", "Vercel", "Figma", "Supabase", "OpenAI", "Shopify"];
  return (
    <section style={{ padding: "40px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, overflow: "hidden" }}>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{
          display: "flex", gap: 64, alignItems: "center",
          animation: "tickerScroll 24s linear infinite",
          whiteSpace: "nowrap",
        }}>
          {logos.map((l, i) => (
            <span key={i} style={{
              fontSize: 16, fontWeight: 600, color: C.dim,
              letterSpacing: "-0.02em",
              fontFamily: "'Syne', sans-serif",
            }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ──────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: "⚡",
    title: "Instant validation",
    desc: "Run market fit analysis in seconds. Xorvia queries live data so you know if your idea holds before you write a single line of code.",
    highlight: "10x faster",
  },
  {
    icon: "🧠",
    title: "AI-powered research",
    desc: "Deep competitor mapping, ICP profiling, and trend analysis synthesized into a single digestible brief — not a wall of raw links.",
    highlight: "360° coverage",
  },
  {
    icon: "📐",
    title: "Structured business plans",
    desc: "Industry-standard decks, financial models, and go-to-market strategy built from your idea automatically. Investor-ready from day one.",
    highlight: "VC-grade output",
  },
  {
    icon: "🎨",
    title: "Brand identity generation",
    desc: "Logo concepts, color systems, voice guidelines, and a full brand kit — cohesive, distinctive, and yours in minutes.",
    highlight: "Full brand kit",
  },
  {
    icon: "🌐",
    title: "Launch-ready website",
    desc: "Tailored landing pages generated from your brand identity and value prop. Deploy directly or export clean code.",
    highlight: "Deploy in 1 click",
  },
  {
    icon: "📊",
    title: "Progress dashboard",
    desc: "One view of your entire startup journey — tasks, milestones, feedback loops — so nothing slips through the cracks.",
    highlight: "Zero blindspots",
  },
];

function Features() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{
          display: "inline-block", fontSize: 12, fontWeight: 500, color: C.accentB,
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
        }}>What Xorvia does</div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}>
          Every tool a founder needs.<br />
          <span style={{ color: C.muted, fontWeight: 600 }}>Nothing they don't.</span>
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}>
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} f={f} delay={i * 80} visible={visible} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ f, delay, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 28px 32px",
        borderRadius: 16,
        border: `1px solid ${hovered ? C.borderH : C.border}`,
        background: hovered ? `rgba(99,120,255,0.04)` : C.card,
        transition: "all 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
      <div style={{
        display: "inline-block", fontSize: 11, fontWeight: 600, color: C.accent,
        letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 10,
        padding: "3px 10px", borderRadius: 100,
        background: "rgba(99,120,255,0.1)",
        border: "1px solid rgba(99,120,255,0.2)",
      }}>{f.highlight}</div>
      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700,
        letterSpacing: "-0.02em", marginBottom: 10, color: C.text,
      }}>{f.title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.muted }}>{f.desc}</p>
    </div>
  );
}

/* ─── WORKFLOW ──────────────────────────────────────────────────── */
const STEPS = [
  { n: "01", title: "Drop your idea", desc: "Type a sentence. Xorvia understands what you're building and pulls live context to frame the opportunity." },
  { n: "02", title: "Xorvia maps the space", desc: "Market data, competitors, trends, and ICPs are synthesized into a founder brief before you've finished your coffee." },
  { n: "03", title: "Build your startup kit", desc: "Business plan, brand identity, landing page — generated and packaged, ready to share with co-founders or investors." },
  { n: "04", title: "Launch with confidence", desc: "Deploy your site, track your milestones, and iterate fast. Xorvia stays in the loop at every step." },
];

function Workflow() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{
      padding: "100px 24px",
      background: C.navy,
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: C.accentB, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How it works</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em",
            opacity: visible ? 1 : 0, transition: "opacity 0.7s ease",
          }}>From spark to launch in four steps.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
          {/* Connector line */}
          <div style={{
            position: "absolute", top: 40, left: "12.5%", right: "12.5%", height: 1,
            background: `linear-gradient(to right, transparent, ${C.accent}44, transparent)`,
            pointerEvents: "none",
          }} />

          {STEPS.map((s, i) => (
            <div key={s.n} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: `all 0.6s ease ${i * 120}ms`,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14, marginBottom: 20,
                background: `rgba(99,120,255,0.1)`,
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: C.accent,
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700,
                letterSpacing: "-0.02em", marginBottom: 10, color: C.text,
              }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: C.muted }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── METRICS ───────────────────────────────────────────────────── */
function Metrics() {
  const [ref, visible] = useInView();
  const stats = [
    { value: "12,000+", label: "Startups built" },
    { value: "$1.4B+",  label: "Funding raised by users" },
    { value: "94%",     label: "Launch faster than solo" },
    { value: "< 4 hrs", label: "Avg. time to first MVP" },
  ];
  return (
    <section ref={ref} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{
          borderRadius: 24,
          border: `1px solid ${C.border}`,
          background: C.card,
          padding: "56px 64px",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
          position: "relative", overflow: "hidden",
        }}>
          {/* Background glow */}
          <div style={{
            position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
            width: 600, height: 300,
            background: `radial-gradient(ellipse, rgba(99,120,255,0.1) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />
          {stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: `all 0.6s ease ${i * 100}ms`,
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800,
                letterSpacing: "-0.04em", color: C.text,
                background: `linear-gradient(135deg, ${C.text}, ${C.accentB})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>{s.value}</div>
              <div style={{ fontSize: 14, color: C.muted, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────── */
function CTA() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: "80px 24px 120px" }}>
      <div style={{
        maxWidth: 760, margin: "0 auto", textAlign: "center",
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)",
        transition: "all 0.8s ease",
      }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: C.accentB, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
          Ready to build?
        </div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em",
          marginBottom: 24,
        }}>
          Your startup starts<br />
          <span style={{
            background: `linear-gradient(135deg, ${C.accentB}, #C084FC)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>right now.</span>
        </h2>
        <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          No credit card needed. Start with a single idea and Xorvia handles the rest.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            height: 56, padding: "0 36px", borderRadius: 14,
            background: `linear-gradient(135deg, ${C.accent}, #8B6AFF)`,
            color: "#fff", fontSize: 16, fontWeight: 600,
            boxShadow: `0 8px 40px rgba(99,120,255,0.35)`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 50px rgba(99,120,255,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 40px rgba(99,120,255,0.35)"; }}
          >Start building for free →</button>
          <button style={{
            height: 56, padding: "0 30px", borderRadius: 14,
            border: `1px solid ${C.border}`, color: C.text, fontSize: 15,
            background: "transparent", transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.borderH}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
          >Talk to sales</button>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C.border}`,
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: `linear-gradient(135deg, ${C.accent}, #A78BFF)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff",
          }}>X</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16 }}>Xorvia</span>
          <span style={{ color: C.dim, fontSize: 13, marginLeft: 8 }}>© 2025</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 13, color: C.dim }}>
          {["Privacy", "Terms", "Status", "Twitter", "GitHub"].map(l => (
            <a key={l} href="#"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.muted}
              onMouseLeave={e => e.target.style.color = C.dim}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
