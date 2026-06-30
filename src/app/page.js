'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

/* ════════════════════════════════════════════════════════════
   XORVIA — Build your entire startup from just an idea.
   Tailwind-converted version. Design, colors, animations,
   and placement are identical to the original CSS build.

   IMPORTANT — make these available to Tailwind:
   1) Add the keyframes + colors to tailwind.config.js (block at
      the very bottom of this file, copy it in).
   2) Keep the small <style jsx global> block — it only holds
      things Tailwind utilities cannot express identically:
      pseudo-elements (::after shine + underline), the GSAP
      reveal initial states, ::selection, details marker reset,
      font imports, and the reduced-motion overrides.
   ════════════════════════════════════════════════════════════ */

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Sample points that spell a word from an offscreen 2D canvas. */
function sampleWordPoints(word, count) {
  if (typeof document === 'undefined') return [];
  const canvas = document.createElement('canvas');
  const W = 1400;
  const H = 360;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.font = '700 240px Sora, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(word, W / 2, H / 2 + 10);

  const data = ctx.getImageData(0, 0, W, H).data;
  const hits = [];
  for (let y = 0; y < H; y += 4) {
    for (let x = 0; x < W; x += 4) {
      if (data[(y * W + x) * 4 + 3] > 128) hits.push([x, y]);
    }
  }
  const pts = [];
  for (let i = 0; i < count; i++) {
    const [hx, hy] = hits[Math.floor(Math.random() * hits.length)];
    pts.push([
      (hx - W / 2) / 26,
      -(hy - H / 2) / 26,
      (Math.random() - 0.5) * 0.6,
    ]);
  }
  return pts;
}

/* ════════════════════════ HERO PARTICLES ════════════════════════ */
function HeroCanvas({ onSettled }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (reduceMotion()) {
      onSettled?.();
      return;
    }

    const mount = mountRef.current;
    if (!mount) return;

    const COUNT = 800;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const targets = sampleWordPoints('XORVIA', COUNT);
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const starts = [];
    const homes = [];

    const cA = new THREE.Color('#4A6CF7'); // crystal blue
    const cB = new THREE.Color('#7A5CFF'); // mid violet
    const cC = new THREE.Color('#9D6CFF'); // amethyst

    for (let i = 0; i < COUNT; i++) {
      const sx = (Math.random() - 0.5) * 70;
      const sy = (Math.random() - 0.5) * 50 - 10;
      const sz = (Math.random() - 0.5) * 30;
      starts.push([sx, sy, sz]);
      positions[i * 3] = sx;
      positions[i * 3 + 1] = sy;
      positions[i * 3 + 2] = sz;

      const t = targets[i] || [0, 0, 0];
      homes.push(t);

      const mix = (t[0] + 26) / 52;
      const col =
        mix < 0.5
          ? cA.clone().lerp(cB, mix * 2)
          : cB.clone().lerp(cC, (mix - 0.5) * 2);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // soft round sprite
    const sprite = (() => {
      const s = document.createElement('canvas');
      s.width = 64;
      s.height = 64;
      const g = s.getContext('2d');
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(200,210,255,0.8)');
      grad.addColorStop(1, 'rgba(120,140,255,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(s);
    })();

    const mat = new THREE.PointsMaterial({
      size: 0.55,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let raf;
    const t0 = performance.now();
    const DRIFT = 1000;
    const CONVERGE = 2200;
    let settledFired = false;

    const tick = (now) => {
      const el = now - t0;
      const pos = geo.attributes.position.array;

      if (el < DRIFT) {
        for (let i = 0; i < COUNT; i++) pos[i * 3 + 1] += 0.02;
      } else {
        const k = Math.min((el - DRIFT) / CONVERGE, 1);
        const ease = 1 - Math.pow(1 - k, 3);
        for (let i = 0; i < COUNT; i++) {
          const s = starts[i];
          const h = homes[i];
          const breathe = k >= 1 ? Math.sin(el / 600 + i) * 0.06 : 0;
          pos[i * 3] = s[0] + (h[0] - s[0]) * ease;
          pos[i * 3 + 1] = s[1] + (h[1] - s[1]) * ease + breathe;
          pos[i * 3 + 2] = s[2] + (h[2] - s[2]) * ease;
        }
        if (k >= 1 && !settledFired) {
          settledFired = true;
          onSettled?.();
        }
      }
      geo.attributes.position.needsUpdate = true;
      points.rotation.y = Math.sin(el / 4000) * 0.06;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      sprite.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [onSettled]);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 right-0 h-[56vh] z-0 max-[768px]:h-[44vh] max-[420px]:h-[40vh]"
      aria-hidden="true"
    />
  );
}

/* ════════════════════════════ PAGE ════════════════════════════ */
export default function Page() {
  const [showPre, setShowPre] = useState(true);
  const [revealHero, setRevealHero] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const heroContentRef = useRef(null);

  /* preloader — once per session */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('xorvia_seen')) {
      setShowPre(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem('xorvia_seen', '1');
      setShowPre(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  /* nav scrolled state */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* hero content reveal after particles settle */
  useEffect(() => {
    if (!revealHero || typeof window === 'undefined') return;
    const el = heroContentRef.current;
    if (!el) return;
    if (reduceMotion()) {
      el.style.opacity = 1;
      return;
    }
    gsap.fromTo(
      el.querySelectorAll('[data-hero]'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.22, ease: 'power3.out' }
    );
  }, [revealHero]);

  /* reduced motion: detect after mount (avoids hydration mismatch) */
  useEffect(() => {
    if (reduceMotion()) {
      setPrefersReduced(true);
      setRevealHero(true);
    }
  }, []);

  /* scroll-triggered reveals */
  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll('[data-item]'),
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 82%' },
          }
        );
      });

      gsap.utils.toArray('[data-words]').forEach((q) => {
        gsap.fromTo(
          q.querySelectorAll('.w'),
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: { trigger: q, start: 'top 78%' },
          }
        );
        const rule = q.parentElement.querySelector('.quote-rule');
        const attr = q.parentElement.querySelector('.quote-attr');
        if (rule)
          gsap.fromTo(
            rule,
            { width: 0 },
            {
              width: 80,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.4,
              scrollTrigger: { trigger: q, start: 'top 78%' },
            }
          );
        if (attr)
          gsap.fromTo(
            attr,
            { opacity: 0 },
            {
              opacity: 0.8,
              duration: 0.6,
              delay: 0.7,
              scrollTrigger: { trigger: q, start: 'top 78%' },
            }
          );
      });

      gsap.utils.toArray('[data-rise]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [showPre]);

  const splitWords = (text) =>
    text.split(' ').map((w, i) => (
      <span className="w inline-block" key={i}>
        {w}&nbsp;
      </span>
    ));

  return (
    <>
      {/* ───────── PRELOADER ───────── */}
      {showPre && (
        <div
          className="preloader fixed inset-0 z-[1000] bg-[#08080c] flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-[1.4rem]">
            <span className="font-mono tracking-[0.5em] text-[1rem] text-[#f4f2f8] pl-[0.5em]">
              XORVIA
            </span>
            <span className="w-[200px] h-px bg-white/[0.12] overflow-hidden block">
              <span className="pre-fill block h-full w-0 bg-[#4a6cf7] shadow-[0_0_12px_#4a6cf7]" />
            </span>
          </div>
        </div>
      )}

      {/* ───────── NAV ───────── */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between transition-all duration-[400ms] ease-[ease] ${
          navScrolled
            ? 'bg-[#08080c]/[0.85] backdrop-blur-[20px] border-b border-[#4a6cf7]/25 py-[0.9rem] px-8 max-[768px]:px-[1.4rem]'
            : 'py-[1.3rem] px-8 max-[768px]:py-4 max-[768px]:px-[1.4rem]'
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-[0.6rem] font-[Sora,sans-serif] font-semibold text-[1.4rem] tracking-[-0.01em] text-[#f4f2f8]"
        >
          <img
            src={'/images/logo.png'}
            alt="Xorvia"
            className="w-[30px] h-[30px] object-contain [filter:drop-shadow(0_0_8px_rgba(124,108,255,0.5))]"
          />
          <span>Xorvia</span>
        </a>
        <nav
          className="flex gap-8 max-[768px]:hidden"
          aria-label="Primary"
        >
          {[
            ['#how', 'How it works'],
            ['#delivers', 'What you get'],
            ['#pricing', 'Pricing'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="nav-link text-[0.92rem] text-[#f4f2f8]/[0.78] relative py-[0.2rem] hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-[0.7rem] items-center max-[768px]:hidden">
          <a
            href="/auth/Login"
            className="btn btn-ghost inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.85rem] py-[0.6rem] px-[1.3rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-[#f4f2f8]/30 text-[#f4f2f8] bg-transparent relative overflow-hidden whitespace-nowrap hover:border-[#4a6cf7] hover:text-white hover:bg-[#4a6cf7]/[0.08]"
          >
            Sign in
          </a>
          <a
            href="/auth/Signup"
            className="btn btn-fill inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.85rem] py-[0.6rem] px-[1.3rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-transparent text-white bg-[#4a6cf7] relative overflow-hidden whitespace-nowrap shadow-[0_6px_24px_rgba(74,108,247,0.35)] hover:bg-[#5d7bff] hover:shadow-[0_8px_32px_rgba(74,108,247,0.55)]"
          >
            Start free
          </a>
        </div>
        <button
          className="hidden max-[768px]:flex flex-col gap-[5px] bg-none border-none cursor-pointer p-[6px]"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-6 h-[2px] bg-[#4a6cf7] rounded-[2px] transition-[0.3s]" />
          <span className="w-6 h-[2px] bg-[#4a6cf7] rounded-[2px] transition-[0.3s]" />
          <span className="w-6 h-[2px] bg-[#4a6cf7] rounded-[2px] transition-[0.3s]" />
        </button>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[200] bg-[#08080c]/[0.97] backdrop-blur-[8px] flex flex-col items-center justify-center gap-[1.6rem] transition-transform duration-[450ms] ease-[ease] ${
          menuOpen
            ? 'translate-x-0 visible'
            : 'translate-x-full invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <button
          className="absolute top-6 right-8 bg-none border-none text-[#f4f2f8] text-[2.5rem] cursor-pointer leading-none"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        {[
          ['#how', 'How it works'],
          ['#delivers', 'What you get'],
          ['#pricing', 'Pricing'],
          ['#faq', 'FAQ'],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-[Sora,sans-serif] text-[1.5rem] text-[#f4f2f8]"
          >
            {label}
          </a>
        ))}
        <a
          href="/auth/Signup"
          className="btn btn-fill inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-transparent text-white bg-[#4a6cf7] relative overflow-hidden whitespace-nowrap shadow-[0_6px_24px_rgba(74,108,247,0.35)] hover:bg-[#5d7bff] hover:shadow-[0_8px_32px_rgba(74,108,247,0.55)]"
          onClick={() => setMenuOpen(false)}
        >
          Start free
        </a>
      </div>

      <main id="top">
        {/* ───────── HERO ───────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-start bg-[#08080c] overflow-hidden pb-16">
          <div className="orb orb-a absolute rounded-full blur-[80px] opacity-30 z-0 pointer-events-none w-[420px] h-[420px] [background:radial-gradient(circle,#4a6cf7,transparent_70%)] top-[-10%] left-[-5%]" />
          <div className="orb orb-b absolute rounded-full blur-[80px] opacity-30 z-0 pointer-events-none w-[360px] h-[360px] [background:radial-gradient(circle,#9d6cff,transparent_70%)] bottom-[-15%] right-[-8%]" />
          <div className="orb orb-c absolute rounded-full blur-[80px] opacity-30 z-0 pointer-events-none w-[300px] h-[300px] [background:radial-gradient(circle,#2d1b69,transparent_70%)] top-[40%] right-[20%]" />
          <HeroCanvas onSettled={() => setRevealHero(true)} />

          {prefersReduced && (
            <div className="absolute top-[22vh] z-0 font-[Sora,sans-serif] font-bold text-[clamp(3rem,12vw,9rem)] [background:linear-gradient(100deg,#4a6cf7,#9d6cff)] bg-clip-text text-transparent">
              XORVIA
            </div>
          )}

          <div
            className="relative z-[2] text-center flex flex-col items-center gap-[1.3rem] mt-[52vh] px-6 max-w-[680px] max-[768px]:mt-[46vh] max-[420px]:mt-[42vh]"
            ref={heroContentRef}
          >
            <span
              className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]"
              data-hero
            >
              FROM IDEA TO LAUNCH-READY
            </span>
            <h1
              className="font-[Sora,sans-serif] font-light text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.15] tracking-[-0.02em] text-[#f4f2f8]"
              data-hero
            >
              Build your entire startup from just an idea.
            </h1>
            <p
              className="max-w-[560px] text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.7] text-[#f4f2f8]/[0.66]"
              data-hero
            >
              Describe your vision once. Xorvia generates your market research,
              business plan, brand, financials, website, and launch roadmap —
              everything you need to go live.
            </p>
            <div
              className="flex gap-4 flex-wrap justify-center mt-[0.4rem] max-[768px]:flex-col max-[768px]:w-full max-[768px]:max-w-[320px]"
              data-hero
            >
              <a
                href="/main"
                className="btn btn-fill inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-transparent text-white bg-[#4a6cf7] relative overflow-hidden whitespace-nowrap shadow-[0_6px_24px_rgba(74,108,247,0.35)] hover:bg-[#5d7bff] hover:shadow-[0_8px_32px_rgba(74,108,247,0.55)] max-[768px]:w-full"
              >
                Build my startup
              </a>
              <a
                href="#how"
                className="btn btn-ghost inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-[#f4f2f8]/30 text-[#f4f2f8] bg-transparent relative overflow-hidden whitespace-nowrap hover:border-[#4a6cf7] hover:text-white hover:bg-[#4a6cf7]/[0.08] max-[768px]:w-full"
              >
                See how it works →
              </a>
            </div>
            <p
              className="font-mono text-[0.72rem] tracking-[0.12em] text-[#f4f2f8]/[0.45] mt-[0.2rem]"
              data-hero
            >
              Free to start · No card required · Ready in 2–3 minutes
            </p>
          </div>
        </section>

        {/* ───────── HOW IT WORKS ───────── */}
        <section
          className="py-28 relative overflow-hidden bg-[#10101e] max-[768px]:py-20"
          id="how"
        >
          <div className="max-w-[1200px] mx-auto px-8 w-full text-center mb-14 max-[768px]:px-[1.4rem] max-[768px]:mb-10">
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              HOW IT WORKS
            </span>
            <h2 className="font-[Sora,sans-serif] font-normal text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] mt-[0.8rem]">
              Three steps to a launch-ready business.
            </h2>
          </div>
          <div
            className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:max-w-[520px] max-[768px]:px-[1.4rem]"
            data-stagger
          >
            {[
              {
                n: '01',
                t: 'Share your idea',
                b: 'Tell us your concept, target market, and budget. A sentence is enough to begin.',
              },
              {
                n: '02',
                t: 'Xorvia builds it',
                b: 'Our AI analyzes demand, studies competitors, and generates every asset your startup needs.',
              },
              {
                n: '03',
                t: 'Review and launch',
                b: 'Get a complete dashboard with your plan, brand, site, and a day-by-day roadmap to go live.',
              },
            ].map((s) => (
              <article
                className="group p-[2.2rem] border border-white/[0.08] rounded-2xl bg-white/[0.04] transition-[border-color,transform] duration-300 hover:border-[#7c6cff]/40 hover:-translate-y-1"
                data-item
                key={s.n}
              >
                <span className="font-mono text-[1rem] text-[#4a6cf7] tracking-[0.1em]">
                  {s.n}
                </span>
                <h3 className="font-[Inter,sans-serif] font-semibold text-[1.2rem] mt-4 mb-[0.6rem]">
                  {s.t}
                </h3>
                <p className="text-[1rem] leading-[1.75] text-[#f4f2f8]/[0.72]">
                  {s.b}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── WHAT YOU GET (8 deliverables) ───────── */}
        <section
          className="py-28 relative overflow-hidden max-[768px]:py-20"
          id="delivers"
        >
          <div className="max-w-[1200px] mx-auto px-8 w-full text-center mb-14 max-[768px]:px-[1.4rem] max-[768px]:mb-10">
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              EVERYTHING IN ONE PLACE
            </span>
            <h2 className="font-[Sora,sans-serif] font-normal text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] mt-[0.8rem]">
              One idea in. A whole company out.
            </h2>
            <p className="text-[1rem] leading-[1.75] text-[#f4f2f8]/[0.72] max-w-[560px] mx-auto mt-4">
              Xorvia generates eight complete deliverables, each ready to use
              or export — no consultants, no blank pages.
            </p>
          </div>
          <div
            className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-4 gap-[1.2rem] max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:px-[1.4rem]"
            data-stagger
          >
            {DELIVERABLES.map((d) => (
              <article
                className="deliver p-[1.8rem] border border-white/[0.08] rounded-[14px] bg-white/[0.04] transition-[border-color,transform] duration-300 hover:border-[#7c6cff]/50 hover:-translate-y-1"
                data-item
                key={d.t}
              >
                <span className="inline-flex text-[#4a6cf7] mb-[0.9rem] [&_svg]:w-[26px] [&_svg]:h-[26px]">
                  {d.icon}
                </span>
                <h3 className="font-[Inter,sans-serif] font-semibold text-[1.05rem] mb-[0.4rem]">
                  {d.t}
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[#f4f2f8]/[0.62]">
                  {d.b}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── PULL QUOTE ───────── */}
        <section className="py-28 relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#08080c] max-[768px]:py-20">
          <div className="orb orb-a absolute rounded-full blur-[80px] opacity-30 z-0 pointer-events-none w-[420px] h-[420px] [background:radial-gradient(circle,#4a6cf7,transparent_70%)] top-[-10%] left-[-5%]" />
          <div className="orb orb-c absolute rounded-full blur-[80px] opacity-30 z-0 pointer-events-none w-[300px] h-[300px] [background:radial-gradient(circle,#2d1b69,transparent_70%)] top-[40%] right-[20%]" />
          <div className="relative z-[2] text-center max-w-[880px] px-6 flex flex-col items-center gap-[1.6rem]">
            <blockquote
              className="font-[Sora,sans-serif] font-light italic text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.18] tracking-[-0.02em] text-[#f4f2f8]"
              data-words
            >
              {splitWords('Most startups die from a blank page. Xorvia fills it.')}
            </blockquote>
            <span className="quote-rule h-px bg-[#4a6cf7] shadow-[0_0_10px_#4a6cf7] w-0" />
            <span className="quote-attr font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8] opacity-0">
              — BUILT FOR FOUNDERS
            </span>
          </div>
        </section>

        {/* ───────── WHY XORVIA (6 tiles) ───────── */}
        <section
          className="py-28 relative overflow-hidden bg-[#10101e] max-[768px]:py-20"
          id="why"
        >
          <div className="max-w-[1200px] mx-auto px-8 w-full text-center mb-14 max-[768px]:px-[1.4rem] max-[768px]:mb-10">
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              WHY XORVIA
            </span>
            <h2 className="font-[Sora,sans-serif] font-normal text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] mt-[0.8rem]">
              Six reasons founders start here.
            </h2>
          </div>
          <div
            className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-3 gap-[1.2rem] max-[900px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:px-[1.4rem]"
            data-stagger
          >
            {[
              ['REAL RESEARCH', 'Market size, growth rates, and competitor analysis grounded in real data — not guesses.'],
              ['VALIDATION FIRST', 'Get a clear verdict on your idea before you spend a dollar building it.'],
              ['BRAND IN MINUTES', 'Names, logos, color palettes, and voice — a complete identity kit, ready to download.'],
              ['FINANCIALS THAT ADD UP', 'Revenue projections, pricing strategy, and break-even analysis you can take to investors.'],
              ['A SITE READY TO SHIP', 'Generated pages, copy, and structure — export to HTML or Webflow in one click.'],
              ['A ROADMAP TO LAUNCH', 'A day-by-day plan with a pre-launch checklist so nothing slips through the cracks.'],
            ].map(([k, v]) => (
              <article
                className="border border-white/[0.08] rounded-xl p-8 transition-[border-color] duration-300 hover:border-[#7c6cff]/40"
                data-item
                key={k}
              >
                <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#4a6cf7] block mb-[0.8rem]">
                  {k}
                </span>
                <p className="text-[1rem] leading-[1.75] text-[#f4f2f8]/[0.72]">
                  {v}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          className="py-28 relative overflow-hidden max-[768px]:py-20"
          id="pricing"
        >
          <div className="max-w-[1200px] mx-auto px-8 w-full text-center mb-14 max-[768px]:px-[1.4rem] max-[768px]:mb-10">
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              SIMPLE, TRANSPARENT PRICING
            </span>
            <h2 className="font-[Sora,sans-serif] font-normal text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] mt-[0.8rem]">
              Choose the plan that fits your journey.
            </h2>
            <p className="text-[1rem] leading-[1.75] text-[#f4f2f8]/[0.72] max-w-[560px] mx-auto mt-4">
              No hidden fees. Cancel anytime.
            </p>
          </div>
          <div
            className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-3 gap-6 items-stretch max-[900px]:grid-cols-1 max-[900px]:max-w-[460px] max-[768px]:px-[1.4rem]"
            data-stagger
          >
            {PLANS.map((p) => (
              <article
                className={`relative flex flex-col p-[2.4rem_2rem] border rounded-[18px] ${
                  p.featured
                    ? 'border-[#4a6cf7]/60 bg-[#4a6cf7]/[0.06] shadow-[0_16px_50px_rgba(74,108,247,0.18)] max-[900px]:order-[-1]'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
                data-item
                key={p.name}
              >
                {p.featured && (
                  <span className="absolute top-[-0.8rem] left-1/2 -translate-x-1/2 bg-[#4a6cf7] text-white font-mono text-[0.62rem] tracking-[0.16em] uppercase py-[0.35rem] px-[0.9rem] rounded-full whitespace-nowrap">
                    Most popular
                  </span>
                )}
                <h3 className="font-[Sora,sans-serif] font-semibold text-[1.3rem]">
                  {p.name}
                </h3>
                <p className="text-[0.88rem] text-[#f4f2f8]/60 mt-[0.4rem] mb-[1.2rem] min-h-[2.4em]">
                  {p.desc}
                </p>
                <div className="flex items-baseline gap-[0.3rem] mb-[1.4rem]">
                  <span className="font-[Sora,sans-serif] font-semibold text-[2.6rem] text-[#f4f2f8]">
                    {p.price}
                  </span>
                  <span className="text-[0.85rem] text-[#f4f2f8]/50">
                    /month
                  </span>
                </div>
                <a
                  href="#"
                  className={`btn inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border relative overflow-hidden whitespace-nowrap w-full mb-[1.6rem] ${
                    p.featured
                      ? 'btn-fill border-transparent text-white bg-[#4a6cf7] shadow-[0_6px_24px_rgba(74,108,247,0.35)] hover:bg-[#5d7bff] hover:shadow-[0_8px_32px_rgba(74,108,247,0.55)]'
                      : 'btn-ghost border-[#f4f2f8]/30 text-[#f4f2f8] bg-transparent hover:border-[#4a6cf7] hover:text-white hover:bg-[#4a6cf7]/[0.08]'
                  }`}
                >
                  {p.cta}
                </a>
                <ul className="list-none flex flex-col gap-[0.7rem]">
                  {p.feats.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-[0.6rem] text-[0.9rem] text-[#f4f2f8]/[0.78] leading-[1.4]"
                    >
                      <span className="text-[#4a6cf7] font-semibold shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section
          className="py-28 relative overflow-hidden bg-[#10101e] max-[768px]:py-20"
          id="faq"
        >
          <div className="max-w-[1200px] mx-auto px-8 w-full text-center mb-14 max-[768px]:px-[1.4rem] max-[768px]:mb-10">
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              QUESTIONS
            </span>
            <h2 className="font-[Sora,sans-serif] font-normal text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] mt-[0.8rem]">
              Frequently asked.
            </h2>
          </div>
          <div
            className="max-w-[760px] mx-auto px-8 w-full flex flex-col gap-[0.8rem] max-[768px]:px-[1.4rem]"
            data-stagger
          >
            {FAQS.map((f) => (
              <details
                className="faq group border border-white/[0.08] rounded-xl px-[1.4rem] bg-white/[0.04] transition-[border-color] duration-300 open:border-[#7c6cff]/40"
                data-item
                key={f.q}
              >
                <summary className="faq-q flex items-center justify-between gap-4 cursor-pointer list-none py-[1.2rem] font-[Inter,sans-serif] font-semibold text-[1rem] text-[#f4f2f8] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="text-[#4a6cf7] text-[1.4rem] leading-none transition-transform duration-300 shrink-0 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-0 pb-[1.3rem] text-[0.95rem] leading-[1.75] text-[#f4f2f8]/[0.72]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── SOCIAL PROOF ───────── */}
        <section className="py-28 relative overflow-hidden text-center bg-[#08080c] max-[768px]:py-20">
          <p
            className="text-[clamp(1.05rem,2vw,1.35rem)] text-[#f4f2f8]/80 mb-14 leading-[1.6]"
            data-rise
          >
            Trusted by founders, indie hackers, and teams
            <br />
            turning ideas into companies.
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="marquee-track flex gap-16 w-max max-[420px]:gap-10">
              {[...WORDMARKS, ...WORDMARKS].map((w, i) => (
                <span
                  className="font-[Sora,sans-serif] font-semibold text-[1.5rem] text-[#f4f2f8]/[0.22] whitespace-nowrap tracking-[-0.01em] max-[420px]:text-[1.2rem]"
                  key={i}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="py-28 relative overflow-hidden min-h-[90vh] flex items-center justify-center [background:linear-gradient(130deg,#08080c,#2d1b69,#10101e,#08080c)] bg-[length:300%_300%] animate-[grad_20s_ease_infinite] max-[768px]:py-20">
          <div
            className="text-center flex flex-col items-center gap-[1.3rem] px-6"
            data-rise
          >
            <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#c8cdd8]">
              READY TO BUILD?
            </span>
            <h2 className="font-[Sora,sans-serif] font-light text-[clamp(2.6rem,7vw,6rem)] tracking-[-0.03em] text-[#f4f2f8]">
              Meet Xorvia.
            </h2>
            <p className="max-w-[520px] text-[1.05rem] text-[#f4f2f8]/70 leading-[1.6]">
              Turn your idea into a launch-ready startup today.
              <br />
              Free to start, no card required.
            </p>
            <div className="flex gap-4 flex-wrap justify-center mt-[0.4rem] max-[768px]:flex-col max-[768px]:w-full max-[768px]:max-w-[320px]">
              <a
                href="#"
                className="btn btn-fill inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-transparent text-white bg-[#4a6cf7] relative overflow-hidden whitespace-nowrap shadow-[0_6px_24px_rgba(74,108,247,0.35)] hover:bg-[#5d7bff] hover:shadow-[0_8px_32px_rgba(74,108,247,0.55)] max-[768px]:w-full"
              >
                Build my startup
              </a>
              <a
                href="#how"
                className="btn btn-ghost inline-flex items-center justify-center font-[Inter,sans-serif] font-semibold text-[0.95rem] py-[0.85rem] px-[1.8rem] rounded-full cursor-pointer transition-all duration-[350ms] ease-[ease] border border-[#f4f2f8]/30 text-[#f4f2f8] bg-transparent relative overflow-hidden whitespace-nowrap hover:border-[#4a6cf7] hover:text-white hover:bg-[#4a6cf7]/[0.08] max-[768px]:w-full"
              >
                See how it works →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-[#08080c] border-t border-[#7c6cff]/20 py-12 px-8 flex items-center justify-between gap-6 flex-wrap max-[768px]:flex-col max-[768px]:text-center max-[768px]:gap-[1.8rem]">
        <div className="flex flex-col gap-[0.3rem] max-[768px]:items-center">
          <span className="flex items-center gap-2 font-[Sora,sans-serif] font-semibold text-[1.2rem] text-[#f4f2f8]">
            <img
              src={'/images/logo.png'}
              alt=""
              className="w-6 h-6 object-contain"
            />
            Xorvia
          </span>
          <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#f4f2f8]/55">
            build from idea
          </span>
        </div>
        <nav
          className="flex gap-6 max-[768px]:flex-wrap max-[768px]:justify-center"
          aria-label="Footer"
        >
          {['Privacy', 'Terms', 'Security', 'Contact'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.85rem] text-[#f4f2f8]/50 hover:text-[#4a6cf7]"
            >
              {l}
            </a>
          ))}
        </nav>
        <span className="font-mono text-[0.72rem] tracking-[0.28em] uppercase text-[#f4f2f8]/40">
          © 2026 Xorvia. All rights reserved.
        </span>
      </footer>

      {/* ──────────────────────────────────────────────────────────
          Minimal global CSS — ONLY what Tailwind utilities cannot
          express identically. Everything else is Tailwind above.
          ────────────────────────────────────────────────────────── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=Inter:wght@300;400;600&family=DM+Mono:wght@400;500&display=swap');

        html {
          scroll-behavior: smooth;
        }
        body {
          background: #08080c;
          color: #f4f2f8;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        ::selection {
          background: rgba(74, 108, 247, 0.4);
          color: #fff;
        }
        a:focus-visible,
        button:focus-visible,
        summary:focus-visible,
        .btn:focus-visible {
          outline: 2px solid #4a6cf7;
          outline-offset: 3px;
          border-radius: 2px;
        }

        /* nav underline (::after pseudo-element) */
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #4a6cf7;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* button shine sweep (::after pseudo-element) */
        .btn-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-120%);
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255, 255, 255, 0.45),
            transparent
          );
        }
        .btn-fill:hover::after {
          transform: translateX(120%);
          transition: transform 0.8s ease;
        }

        /* preloader fill + exit (keyframes) */
        .preloader {
          animation: preExit 0.5s ease 1.7s forwards;
        }
        .pre-fill {
          animation: preFill 1.8s ease forwards;
        }
        @keyframes preFill {
          to {
            width: 100%;
          }
        }
        @keyframes preExit {
          to {
            opacity: 0;
            transform: translateY(-100%);
            visibility: hidden;
          }
        }

        /* orb drift (keyframes) */
        .orb-a {
          animation: drift1 30s ease-in-out infinite;
        }
        .orb-b {
          animation: drift2 34s ease-in-out infinite;
        }
        .orb-c {
          animation: drift1 38s ease-in-out infinite;
        }
        @keyframes drift1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(60px, 40px);
          }
        }
        @keyframes drift2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, -40px);
          }
        }

        /* marquee + gradient (keyframes) */
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes grad {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* reduced motion overrides */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
          .preloader {
            display: none;
          }
          [data-hero],
          [data-item],
          [data-rise],
          .w,
          .quote-attr {
            opacity: 1 !important;
            transform: none !important;
          }
          .quote-rule {
            width: 80px !important;
          }
        }
      `}</style>
    </>
  );
}

/* ════════════════ inline SVG icons ════════════════ */
const I = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="6.5" cy="11.5" r="2.5" /><circle cx="17.5" cy="14.5" r="2.5" /><path d="M2 21l4-4M22 21l-4-4" /></svg>
  ),
  finance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l3-4 3 2 4-6" /></svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M7 4v5" /></svg>
  ),
  market: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /><path d="M12 2a8 8 0 00-5 14l-2 6 5-3 5 3-2-6a8 8 0 00-4-14z" opacity="0" /><path d="M4.5 16.5l-1.5 4 4-1.5M14 6l4 4M11 13a9 9 0 016-9 9 9 0 01-9 6z" /></svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 7-7" /><path d="M17 4h4v4" /></svg>
  ),
};

const DELIVERABLES = [
  { t: 'Market Research', b: 'Demand, market size, growth rates, and competitor analysis grounded in data.', icon: I.search },
  { t: 'Idea Validation', b: 'A clear verdict and score on your concept before you invest in building it.', icon: I.market },
  { t: 'Business Plan', b: 'Executive summary, problem, solution, and revenue model — investor-ready.', icon: I.plan },
  { t: 'Brand & Design', b: 'Names, logos, color palette, typography, and brand voice in one kit.', icon: I.brand },
  { t: 'Financial Plan', b: 'Revenue projections, pricing strategy, and break-even analysis.', icon: I.finance },
  { t: 'Website Structure', b: 'Generated pages and copy, exportable to HTML or Webflow in a click.', icon: I.web },
  { t: 'Marketing Strategy', b: 'Channel plan, content calendar, and sample posts ready to publish.', icon: I.launch },
  { t: 'Launch Roadmap', b: 'A day-by-day plan and pre-launch checklist to take you live.', icon: I.growth },
];

const PLANS = [
  {
    name: 'Free',
    desc: 'Perfect for exploring the platform.',
    price: '$0',
    cta: 'Get started free',
    featured: false,
    feats: [
      '1 startup idea generation',
      'Basic validation report',
      'Simple business plan outline',
      'Brand name suggestions',
      'Community support',
    ],
  },
  {
    name: 'Plus',
    desc: 'For serious founders ready to launch.',
    price: '$39',
    cta: 'Upgrade to Plus',
    featured: true,
    feats: [
      'Everything in Free, plus:',
      '5 startup ideas per month',
      'Complete validation & market research',
      'Full business plan with financials',
      'Brand identity & logo design',
      'Website structure & copy',
      'Marketing strategy & launch roadmap',
    ],
  },
  {
    name: 'Pro',
    desc: 'For agencies and serial entrepreneurs.',
    price: '$99',
    cta: 'Upgrade to Pro',
    featured: false,
    feats: [
      'Everything in Starter, plus:',
      'Unlimited startup ideas',
      'Advanced AI customization',
      'Export to Webflow / HTML',
      'Growth & scaling strategies',
      'Priority support',
      'Team collaboration',
    ],
  },
];

const FAQS = [
  { q: 'Can I switch plans anytime?', a: 'Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.' },
  { q: 'Is there a free trial?', a: 'Both Starter and Pro come with a 14-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
  { q: 'Can I get a refund?', a: 'Yes. We offer a 30-day money-back guarantee if you are not satisfied with the platform.' },
  { q: 'How accurate is the generated research?', a: 'Xorvia uses current market data to produce estimates and analysis. We recommend treating figures as a strong starting point and validating key numbers before major decisions.' },
];

const WORDMARKS = ['NEXUS', 'AETHER', 'KORVO', 'LUMEN', 'VERTEX', 'QUANTA', 'ORACLE', 'STRATA'];
