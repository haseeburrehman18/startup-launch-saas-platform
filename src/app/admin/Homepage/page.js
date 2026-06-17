"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <MetricsBar />
    </main>
  );
}

/* =========================
   NAVBAR
========================= */

function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-between px-6">

        <div className="font-bold text-lg">
          Solvespher
        </div>

        <nav className="hidden lg:flex gap-8 text-sm text-zinc-400">
          <a href="#">Product</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
        </nav>

        <div className="flex gap-3">
          <button className="h-10 px-4 border border-white/10 rounded-xl">
            Login
          </button>

          <button className="h-10 px-5 rounded-xl bg-cyan-500 text-black font-semibold">
            Start Building Free
          </button>
        </div>

      </div>
    </header>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">

      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <HeroContent />

          <OrbitWorkflow />

        </div>

      </div>

    </section>
  );
}

/* =========================
   LEFT CONTENT
========================= */

function HeroContent() {
  return (
    <div>

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-xs tracking-widest uppercase mb-8">
        AI Operating System For Founders
      </div>

      <h1 className="text-[72px] lg:text-[96px] leading-[0.92] font-bold tracking-tight">

        Build Your

        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Entire Startup
        </span>

        From One Idea

      </h1>

      <p className="text-zinc-400 text-lg mt-8 max-w-xl">
        Validate, research, plan, brand and launch your startup
        using a single AI workspace.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <button className="h-14 px-8 rounded-xl bg-cyan-500 text-black font-semibold">
          Start Building Free
        </button>

        <button className="h-14 px-8 rounded-xl border border-white/10 bg-white/[0.03]">
          Watch Demo
        </button>

      </div>

      <div className="mt-10 flex items-center gap-4">

        <div className="flex -space-x-3">
          {[1,2,3,4,5].map((i)=>(
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-[#050816] bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          ))}
        </div>

        <div>
          <div className="text-green-400 text-sm">
            ★★★★★
          </div>

          <div className="text-zinc-500 text-sm">
            Loved by founders worldwide
          </div>
        </div>

      </div>

    </div>
  );
}

/* =========================
   ORBIT
========================= */
function OrbitWorkflow() {
  const nodes = [
    { text: "Idea", x: 50, y: 6 },
    { text: "Validation", x: 88, y: 20 },
    { text: "Research", x: 95, y: 50 },
    { text: "Business Plan", x: 85, y: 80 },
    { text: "Branding", x: 50, y: 92 },
    { text: "Website", x: 15, y: 80 },
    { text: "Launch", x: 5, y: 40 },
  ];

  return (
    <div className="relative w-[720px] h-[720px]">

      {/* Glow Layers */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="absolute w-[720px] h-[720px] rounded-full border border-cyan-500/5" />

        <div className="absolute w-[560px] h-[560px] rounded-full border border-cyan-500/10" />

        <div className="absolute w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[120px]" />

      </div>

      {/* Orbit SVG */}

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 720 720"
      >
        <circle
          cx="360"
          cy="360"
          r="280"
          fill="none"
          stroke="rgba(0,229,255,.08)"
          strokeWidth="1"
        />

        <circle
          cx="360"
          cy="360"
          r="200"
          fill="none"
          stroke="rgba(0,229,255,.08)"
          strokeWidth="1"
        />
      </svg>

      {/* Core */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="absolute inset-0 scale-[2.5] bg-cyan-500/20 blur-[100px] rounded-full" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            relative
            w-32
            h-32
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            flex
            items-center
            justify-center
            font-bold
            text-2xl
          "
        >
          S
        </motion.div>

      </div>

      {/* Nodes */}

      {nodes.map((node) => (
        <div
          key={node.text}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="
              px-5
              py-3
              rounded-2xl
              bg-[#0B1020]
              border
              border-cyan-500/20
              shadow-[0_0_30px_rgba(0,229,255,.15)]
              whitespace-nowrap
            "
          >
            {node.text}
          </div>
        </div>
      ))}
    </div>
  );
}
/* =========================
   METRICS BAR
========================= */

function MetricsBar() {
  return (
    <section className="-mt-20 relative z-10 pb-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="rounded-3xl border border-white/10 bg-[#0B1020]/80 backdrop-blur-xl p-8">

          <div className="grid lg:grid-cols-7 gap-8 items-center">

            <div>
              <div className="text-zinc-500 text-xs uppercase">
                Trusted by founders
              </div>
            </div>

            <Metric value="10K+" label="Startups Built" />
            <Metric value="$1.2B+" label="Funding Raised" />
            <Metric value="95%" label="Launch Faster" />

            <div className="text-zinc-500">deel.</div>
            <div className="text-zinc-500">HubSpot</div>
            <div className="text-zinc-500">loom</div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-bold">
        {value}
      </div>

      <div className="text-zinc-500 text-sm mt-1">
        {label}
      </div>
    </div>
  );
}
