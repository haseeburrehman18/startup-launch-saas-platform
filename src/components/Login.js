"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// ─── Keyframe CSS (injected once) ────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  @keyframes auroraDrift1 {
    0%   { transform: translate(0,0) scale(1) rotate(0deg); }
    33%  { transform: translate(4%,6%) scale(1.12) rotate(3deg); }
    66%  { transform: translate(-3%,3%) scale(1.08) rotate(-2deg); }
    100% { transform: translate(5%,8%) scale(1.18) rotate(4deg); }
  }
  @keyframes auroraDrift2 {
    0%   { transform: translate(0,0) scale(1) rotate(0deg); }
    33%  { transform: translate(-5%,-6%) scale(1.1) rotate(-3deg); }
    66%  { transform: translate(3%,-4%) scale(1.14) rotate(2deg); }
    100% { transform: translate(-6%,-9%) scale(1.2) rotate(-5deg); }
  }
  @keyframes auroraDrift3 {
    0%   { transform: translate(0,0) scale(1); }
    100% { transform: translate(3%,-4%) scale(1.1); }
  }
  @keyframes cardReveal {
    from { opacity:0; transform:translateY(32px) scale(0.955); filter:blur(4px); }
    to   { opacity:1; transform:translateY(0) scale(1);    filter:blur(0);   }
  }
  @keyframes itemFadeUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes logoFloat {
    0%,100% { transform:translateY(0) rotate(0deg); filter:drop-shadow(0 0 22px rgba(111,76,255,0.65)); }
    50%      { transform:translateY(-7px) rotate(1deg); filter:drop-shadow(0 0 38px rgba(111,76,255,0.9)); }
  }
  @keyframes logoGemSpin {
    0%   { filter:drop-shadow(0 0 22px rgba(111,76,255,0.65)) hue-rotate(0deg); }
    100% { filter:drop-shadow(0 0 22px rgba(111,76,255,0.65)) hue-rotate(30deg); }
  }
  @keyframes topShimmer {
    0%   { background-position:200% center; }
    100% { background-position:-200% center; }
  }
  @keyframes btnGradient {
    0%,100% { background-position:0% 50%; }
    50%      { background-position:100% 50%; }
  }
  @keyframes scanMove {
    from { transform:translateY(-100%); }
    to   { transform:translateY(2000%); }
  }
  @keyframes particleLife {
    0%   { transform:translate(0,0) scale(0); opacity:0; }
    15%  { opacity:1; transform:scale(1); }
    80%  { opacity:0.4; }
    100% { transform:translate(var(--dx),var(--dy)) scale(0.3); opacity:0; }
  }
  @keyframes orb1 {
    0%,100%{transform:scale(1) translate(0,0);}
    50%{transform:scale(1.05) translate(2%,3%);}
  }
  @keyframes orb2 {
    0%,100%{transform:scale(1) translate(0,0);}
    50%{transform:scale(1.08) translate(-2%,-2%);}
  }
  @keyframes spinLoader {
    to { transform: rotate(360deg); }
  }
  @keyframes successPop {
    0%   { transform:scale(0.8); opacity:0; }
    60%  { transform:scale(1.08); }
    100% { transform:scale(1); opacity:1; }
  }
  @keyframes borderPulse {
    0%,100% { opacity:0.5; }
    50%      { opacity:1; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration:0.01ms !important; animation-iteration-count:1 !important; }
  }

  .xv-root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #020408;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    position: relative;
    overflow: hidden;
    padding: 2rem 1.25rem;
  }

  /* ── Atmosphere ── */
  .xv-aurora {
    position: absolute; border-radius: 50%; pointer-events: none;
    will-change: transform;
  }
  .xv-aurora--a {
    width: 72vw; height: 72vw;
    top: -28%; left: -22%;
    background: radial-gradient(circle at 38% 38%, #5b3ef5 0%, #3b28cc 35%, #0d0636 75%, transparent 100%);
    opacity: 0.28;
    filter: blur(90px);
    animation: auroraDrift1 32s ease-in-out infinite alternate;
  }
  .xv-aurora--b {
    width: 65vw; height: 65vw;
    bottom: -25%; right: -18%;
    background: radial-gradient(circle at 62% 62%, #7c3aed 0%, #4f46e5 40%, #1e1b4b 75%, transparent 100%);
    opacity: 0.22;
    filter: blur(100px);
    animation: auroraDrift2 28s ease-in-out infinite alternate;
  }
  .xv-aurora--c {
    width: 45vw; height: 45vw;
    top: 35%; left: 42%;
    background: radial-gradient(circle, #6d28d9 0%, transparent 70%);
    opacity: 0.12;
    filter: blur(70px);
    animation: auroraDrift3 22s ease-in-out infinite alternate;
  }

  .xv-grid {
    position: absolute; inset: 0; pointer-events: none; z-index: 1;
    background-image:
      linear-gradient(rgba(99,88,230,0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,88,230,0.055) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.6), transparent 90%);
  }

  .xv-scanline {
    position: absolute; left: 0; right: 0; height: 180px;
    background: linear-gradient(180deg, transparent 0%, rgba(100,88,230,0.04) 50%, transparent 100%);
    pointer-events: none; z-index: 2;
    animation: scanMove 9s linear infinite;
  }

  .xv-particle {
    position: absolute; width: 2.5px; height: 2.5px;
    border-radius: 50%; pointer-events: none; z-index: 3;
    background: var(--pc, #7c6fe0);
    animation: particleLife var(--dur,5s) ease-out var(--delay,0s) infinite;
  }

  /* ── Content ── */
  .xv-content {
    position: relative; z-index: 10;
    width: 100%; max-width: 460px;
    display: flex; flex-direction: column; align-items: center;
  }

  /* ── Brand ── */
  .xv-brand {
    display: flex; align-items: center; gap: 1rem;
    margin-bottom: 1.8rem;
    animation: itemFadeUp 0.7s ease both;
  }
  .xv-logo-wrap {
    width: 60px; height: 60px;
    animation: logoFloat 4s ease-in-out infinite;
    flex-shrink: 0;
    position: relative;
  }
  .xv-logo-wrap img {
    width: 60px; height: 60px;
    object-fit: contain;
    display: block;
  }
  .xv-brand-text { display: flex; flex-direction: column; gap: 2px; }
  .xv-brand-name {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2rem; font-weight: 700;
    letter-spacing: -0.025em; line-height: 1;
    background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 35%, #818cf8 65%, #6366f1 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .xv-brand-sub {
    font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.22em; color: #6d5fa0;
    text-transform: uppercase;
  }

  /* ── Card ── */
  .xv-card {
    width: 100%; position: relative;
    background: rgba(8,6,22,0.68);
    border: 1px solid rgba(120,100,230,0.18);
    border-radius: 1.75rem;
    padding: 2.25rem 2.25rem 1.75rem;
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    box-shadow:
      0 0 0 1px rgba(120,100,230,0.06) inset,
      0 40px 100px -25px rgba(0,0,0,0.8),
      0 0 80px -30px rgba(90,60,220,0.2);
    animation: cardReveal 1s cubic-bezier(0.16,1,0.3,1) 0.1s both;
    overflow: hidden;
  }

  .xv-card-top-line {
    position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, #a78bfa, #818cf8, #6366f1, transparent);
    background-size: 200% auto;
    animation: topShimmer 4s linear infinite, borderPulse 4s ease-in-out infinite;
  }
  .xv-card-glow {
    position: absolute; top: -60%; left: -10%; right: -10%; height: 60%;
    background: radial-gradient(ellipse at 50% 100%, rgba(99,88,230,0.07), transparent 70%);
    pointer-events: none;
  }
  .xv-card-btm-line {
    position: absolute; bottom: 0; left: 25%; right: 25%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,88,230,0.35), transparent);
  }

  /* ── Header ── */
  .xv-heading {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2rem; font-weight: 600;
    color: #f0edff; text-align: center;
    letter-spacing: -0.02em; line-height: 1.1;
    margin: 0 0 0.5rem;
    animation: itemFadeUp 0.6s 0.22s ease both;
  }
  .xv-subheading {
    color: #6d5fa0; font-size: 0.9rem;
    text-align: center; margin: 0 0 1.75rem;
    animation: itemFadeUp 0.6s 0.3s ease both;
  }

  /* ── OAuth ── */
  .xv-oauth { display: flex; flex-direction: column; gap: 0.7rem; }

  .xv-oauth-btn {
    display: flex; align-items: center; justify-content: center; gap: 0.65rem;
    height: 2.8rem; width: 100%;
    border-radius: 0.9rem;
    border: 1px solid rgba(120,100,230,0.2);
    background: rgba(255,255,255,0.025);
    color: #ccc8f5; font-size: 0.875rem; font-weight: 600;
    font-family: 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    text-decoration: none;
  }
  .xv-oauth-btn:hover {
    background: rgba(99,88,230,0.1);
    border-color: rgba(120,100,230,0.55);
    color: #ece9ff;
    transform: translateY(-1.5px);
    box-shadow: 0 10px 28px -10px rgba(99,88,230,0.45);
  }
  .xv-oauth-btn:active { transform: translateY(0); }
  .xv-oauth-btn:nth-child(1) { animation: itemFadeUp 0.5s 0.36s ease both; }
  .xv-oauth-btn:nth-child(2) { animation: itemFadeUp 0.5s 0.44s ease both; }

  /* ── Divider ── */
  .xv-divider {
    display: flex; align-items: center; gap: 0.75rem;
    color: #342e54; font-size: 0.68rem;
    font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 1.5rem 0;
    animation: itemFadeUp 0.5s 0.5s ease both;
  }
  .xv-divider-line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,88,230,0.22), transparent);
  }

  /* ── Fields ── */
  .xv-field { display: flex; flex-direction: column; gap: 0.42rem; }
  .xv-field--email { animation: itemFadeUp 0.5s 0.54s ease both; }
  .xv-field--pw    { animation: itemFadeUp 0.5s 0.6s  ease both; }

  .xv-label {
    font-size: 0.78rem; font-weight: 600;
    color: #8475b0; letter-spacing: 0.02em;
  }
  .xv-label-row {
    display: flex; justify-content: space-between; align-items: center;
  }
  .xv-forgot {
    font-size: 0.75rem; color: #7c6fe0;
    text-decoration: none; font-weight: 500;
    transition: color 0.15s;
  }
  .xv-forgot:hover { color: #b3aaff; text-decoration: underline; }

  .xv-input-wrap { position: relative; }
  .xv-input {
    width: 100%; height: 2.7rem;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(120,100,230,0.2);
    border-radius: 0.72rem;
    color: #ede9ff;
    font-size: 0.88rem; font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 0 0.95rem;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
  .xv-input::placeholder { color: #3a3257; }
  .xv-input:focus {
    border-color: #7c6fe0;
    background: rgba(99,88,230,0.07);
    box-shadow: 0 0 0 3.5px rgba(99,88,230,0.18);
  }
  .xv-input--pr { padding-right: 2.75rem; }

  .xv-eye {
    position: absolute; right: 0.85rem; top: 50%; transform: translateY(-50%);
    background: none; border: none; padding: 0; cursor: pointer;
    color: #4a3f72; line-height: 0;
    transition: color 0.15s;
  }
  .xv-eye:hover { color: #a89cf5; }

  /* ── Remember ── */
  .xv-remember {
    display: flex; align-items: center; gap: 0.55rem;
    font-size: 0.78rem; color: #5c4f8a;
    animation: itemFadeUp 0.5s 0.64s ease both;
  }
  .xv-remember input[type="checkbox"] {
    accent-color: #7c6fe0; width: 15px; height: 15px; cursor: pointer;
  }
  .xv-remember label { cursor: pointer; }

  /* ── Fields gap ── */
  .xv-fields { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }

  /* ── Submit ── */
  .xv-submit {
    width: 100%; height: 2.95rem; margin-top: 0.25rem;
    border: none; border-radius: 0.9rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.95rem; font-weight: 700;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    background: linear-gradient(120deg, #5b3ef5, #7c6fe0, #818cf8, #6366f1, #5b3ef5);
    background-size: 300% 300%;
    color: #fff;
    animation: itemFadeUp 0.5s 0.7s ease both, btnGradient 6s ease infinite;
    transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
    position: relative; overflow: hidden;
  }
  .xv-submit::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    border-radius: inherit; pointer-events: none;
  }
  .xv-submit:hover:not(:disabled) {
    transform: translateY(-2.5px);
    box-shadow: 0 18px 44px -12px rgba(99,88,230,0.65);
    filter: brightness(1.08);
  }
  .xv-submit:active:not(:disabled) { transform: translateY(0); }
  .xv-submit:disabled { opacity: 0.82; cursor: not-allowed; }

  .xv-spinner {
    width: 17px; height: 17px; flex-shrink: 0;
    border: 2px solid rgba(255,255,255,0.28);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spinLoader 0.75s linear infinite;
  }

  .xv-arrow { transition: transform 0.25s ease; flex-shrink: 0; }
  .xv-submit:hover:not(:disabled) .xv-arrow { transform: translateX(4px); }

  /* ── Success state ── */
  .xv-success {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 0.75rem; padding: 1rem 0;
    animation: successPop 0.5s ease both;
  }
  .xv-success-icon {
    width: 52px; height: 52px;
    background: rgba(99,88,230,0.15);
    border: 1.5px solid rgba(99,88,230,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .xv-success-text { color: #c4b5fd; font-size: 0.9rem; font-weight: 600; }

  /* ── Footer ── */
  .xv-footer {
    text-align: center; margin-top: 1.5rem;
    font-size: 0.855rem; color: #5c4f8a;
    animation: itemFadeUp 0.5s 0.76s ease both;
  }
  .xv-footer a { color: #8b7eeb; font-weight: 700; text-decoration: none; }
  .xv-footer a:hover { color: #c4b5fd; text-decoration: underline; }

  /* ── Trust strip ── */
  .xv-trust {
    display: flex; gap: 1.1rem; justify-content: center; align-items: center;
    margin-top: 1.1rem; flex-wrap: wrap;
    animation: itemFadeUp 0.5s 0.82s ease both;
  }
  .xv-trust-item {
    display: flex; align-items: center; gap: 0.3rem;
    font-size: 0.67rem; color: #3a3257; font-weight: 500;
  }
  .xv-trust-dot { width: 3px; height: 3px; border-radius: 50%; background: #4a3f72; }

  /* ── Floating corner badge ── */
  .xv-corner-badge {
    position: absolute; top: 1rem; right: 1.25rem;
    background: rgba(99,88,230,0.12);
    border: 1px solid rgba(99,88,230,0.25);
    border-radius: 100px;
    padding: 0.28rem 0.7rem;
    font-size: 0.65rem; font-weight: 700;
    color: #7c6fe0; letter-spacing: 0.08em; text-transform: uppercase;
    animation: itemFadeUp 0.5s 0.9s ease both;
  }
`

// ─── Tiny SVG icons ──────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e0d8ff" aria-hidden>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const EyeIcon = ({ open }) =>
  open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )

const ArrowIcon = () => (
  <svg className="xv-arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const LockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
)

// ─── Particle config ─────────────────────────────────────────────────────────
const PARTICLES = [
  { left:"12%", top:"18%", dx:"28px",  dy:"-55px", dur:"5.2s", delay:"0s",   pc:"#7c6fe0" },
  { left:"82%", top:"62%", dx:"-32px", dy:"42px",  dur:"6.1s", delay:"0.8s", pc:"#a78bfa" },
  { left:"58%", top:"8%",  dx:"18px",  dy:"65px",  dur:"4.8s", delay:"1.6s", pc:"#6366f1" },
  { left:"22%", top:"78%", dx:"44px",  dy:"-35px", dur:"5.7s", delay:"0.3s", pc:"#8b5cf6" },
  { left:"90%", top:"28%", dx:"-38px", dy:"30px",  dur:"7.3s", delay:"2.1s", pc:"#c4b5fd" },
  { left:"45%", top:"90%", dx:"-20px", dy:"-60px", dur:"6.5s", delay:"1.2s", pc:"#7c6fe0" },
  { left:"3%",  top:"50%", dx:"55px",  dy:"-22px", dur:"5.9s", delay:"2.8s", pc:"#818cf8" },
]

// ─── Main Component ──────────────────────────────────────────────────────────
export default function LoginPage() {
  const [showPassword, setShowPassword]   = useState(false)
  const [loading, setLoading]             = useState(false)
  const [success, setSuccess]             = useState(false)
  const [email, setEmail]                 = useState("")
  const [password, setPassword]           = useState("")
  const [remember, setRemember]           = useState(false)
  const emailRef = useRef(null)

  // Focus email on mount
  useEffect(() => { emailRef.current?.focus() }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (loading || success) return
    setLoading(true)
    // Replace with real auth logic
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1900)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <main className="xv-root" role="main">
        {/* Atmosphere layers */}
        <div className="xv-aurora xv-aurora--a" aria-hidden />
        <div className="xv-aurora xv-aurora--b" aria-hidden />
        <div className="xv-aurora xv-aurora--c" aria-hidden />
        <div className="xv-grid" aria-hidden />
        <div className="xv-scanline" aria-hidden />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="xv-particle"
            aria-hidden
            style={{
              left: p.left, top: p.top,
              "--dx": p.dx, "--dy": p.dy,
              "--dur": p.dur, "--delay": p.delay,
              "--pc": p.pc,
            }}
          />
        ))}

        {/* ── Content ── */}
        <div className="xv-content">

          {/* Brand mark */}
          <div className="xv-brand">
            <div className="xv-logo-wrap">
              {/*
                Place your logo at: /public/logo.png
                Then this Image tag works automatically.
              */}
              <Image
                src="/images/logo.png"
                alt="Xorvia logo"
                width={60}
                height={60}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="xv-brand-text">
              <div className="xv-brand-name">XORVIA</div>
              <div className="xv-brand-sub">Premium Platform</div>
            </div>
          </div>

          {/* Card */}
          <div className="xv-card" role="region" aria-label="Sign in">
            <div className="xv-card-top-line" aria-hidden />
            <div className="xv-card-glow" aria-hidden />

            {/* Version badge */}
            <div className="xv-corner-badge" aria-hidden>v2.0</div>

            {success ? (
              /* ── Success state ── */
              <div className="xv-success" role="status" aria-live="polite">
                <div className="xv-success-icon"><CheckIcon /></div>
                <p className="xv-success-text">Signed in — redirecting…</p>
              </div>
            ) : (
              <>
                <h1 className="xv-heading">Welcome back</h1>
                <p className="xv-subheading">Sign in to continue building your startup</p>

                {/* OAuth */}
                <div className="xv-oauth">
                  <button className="xv-oauth-btn" type="button" aria-label="Continue with Google">
                    <GoogleIcon /> Continue with Google
                  </button>
                  <button className="xv-oauth-btn" type="button" aria-label="Continue with GitHub">
                    <GitHubIcon /> Continue with GitHub
                  </button>
                </div>

                {/* Divider */}
                <div className="xv-divider" aria-hidden>
                  <span className="xv-divider-line" />
                  or continue with email
                  <span className="xv-divider-line" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="xv-fields">
                    {/* Email */}
                    <div className="xv-field xv-field--email">
                      <label className="xv-label" htmlFor="xv-email">Email address</label>
                      <div className="xv-input-wrap">
                        <input
                          ref={emailRef}
                          id="xv-email"
                          className="xv-input"
                          type="email"
                          placeholder="you@startup.com"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="xv-field xv-field--pw">
                      <div className="xv-label-row">
                        <label className="xv-label" htmlFor="xv-password">Password</label>
                        <a href="/auth/forgot-password" className="xv-forgot">Forgot password?</a>
                      </div>
                      <div className="xv-input-wrap">
                        <input
                          id="xv-password"
                          className="xv-input xv-input--pr"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="xv-eye"
                          onClick={() => setShowPassword(s => !s)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          aria-pressed={showPassword}
                        >
                          <EyeIcon open={showPassword} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remember */}
                  <div className="xv-remember" style={{ marginBottom: "1.1rem" }}>
                    <input
                      id="xv-remember"
                      type="checkbox"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                    />
                    <label htmlFor="xv-remember">Remember me for 30 days</label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="xv-submit"
                    disabled={loading || !email || !password}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <div className="xv-spinner" aria-hidden />
                        Signing in…
                      </>
                    ) : (
                      <>
                        Sign in
                        <ArrowIcon />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            <div className="xv-card-btm-line" aria-hidden />
          </div>

          {/* Footer */}
          {!success && (
            <p className="xv-footer">
              Don&apos;t have an account?{" "}
              <a href="/auth/signup">Create one free</a>
            </p>
          )}

          {/* Trust strip */}
          <div className="xv-trust" aria-label="Security assurances">
            <div className="xv-trust-item">
              <StarIcon /> Enterprise ready
            </div>
            <div className="xv-trust-dot" aria-hidden />
            <div className="xv-trust-item">
              <LockIcon /> 256-bit SSL
            </div>
            <div className="xv-trust-dot" aria-hidden />
            <div className="xv-trust-item">
              <ShieldIcon /> SOC 2 certified
            </div>
          </div>

        </div>
      </main>
    </>
  )
}