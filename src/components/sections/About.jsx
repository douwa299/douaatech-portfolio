import { useEffect, useRef, useState } from "react";
import Skills from "./Skills";

import { RevealOnScroll } from "../RevealOnScroll.jsx";

// ─── Reusable scroll-reveal hook (triggers every time) ─────────────────────
const useReveal = (threshold = 0.08) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      ([entry]) => { 
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  
  return [ref, visible];
};

// ─── Reveal wrapper (animates in both directions) ──────────────────────────
const Reveal = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, visible] = useReveal(0.15);
  const origins = { 
    up: "translateY(36px)", 
    left: "translateX(-36px)", 
    right: "translateX(36px)", 
    down: "translateY(-24px)" 
  };
  
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : origins[direction],
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Section heading ──────────────────────────────────────────────────────────
const SectionHeading = ({ label, accent, delay = 0 }) => (
  <Reveal delay={delay}>
    <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-3 sm:gap-4 mb-0">
      <img
        src="/douaatech-portfolio/icons/rhombe.png"
        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
        style={{ animation: "spinDiamond 6s linear infinite" }}
        alt=""
      />
      <span className="text-gray-900 dark:text-white">{label}</span>
      <span className="text-blue-500 dark:text-blue-400 ml-1">{accent}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-300/80 via-blue-200/40 to-transparent dark:from-blue-700/50 dark:via-blue-600/30 ml-2 line-expand" />
    </h2>
  </Reveal>
);

// ─── Offer card ───────────────────────────────────────────────────────────────
const OfferCard = ({ icon, title, accent, description, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay} direction="up" className="flex-1 min-w-[280px]">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 h-full overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered
            ? "0 20px 60px rgba(59,130,246,0.18), 0 4px 20px rgba(0,0,0,0.06)"
            : "0 2px 16px rgba(0,0,0,0.06)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* Hover glow blob */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/60 dark:bg-blue-900/30 blur-2xl pointer-events-none"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }}
        />

        {/* Shimmer top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: "linear-gradient(90deg, transparent, #3b82f6, #0ea5e9, transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        <div className="relative flex items-center gap-4 mb-4">
          <div
            className="p-3 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 flex-shrink-0"
            style={{
              borderColor: hovered ? "#bfdbfe" : "#f3f4f6",
              background: hovered ? "#eff6ff" : "#f9fafb",
              transition: "all 0.4s ease",
              transform: hovered ? "rotate(6deg) scale(1.05)" : "rotate(0deg) scale(1)",
            }}
          >
            <img src={icon} alt={title} className="w-10 h-10" />
          </div>
          <div>
            <p className="text-base font-semibold text-gray-700 dark:text-gray-300">{title}</p>
            <p className="text-lg font-black text-blue-500 dark:text-blue-400">{accent}</p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
};

// ─── Main About component ─────────────────────────────────────────────────────
export const About = () => {
  return (
    <>
      <style>{`
        @keyframes spinDiamond {
          0%,100% { transform: rotate(0deg) scale(1); }
          25%      { transform: rotate(180deg) scale(1.2); }
          50%      { transform: rotate(360deg) scale(1); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .line-expand {
          transform-origin: left;
          animation: lineExpand 1s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes viewLinkShine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .view-work-btn { text-decoration: none; }
        .view-work-fill { will-change: transform; }
      `}</style>

      <section
        id="about"
        className="relative min-h-fit flex flex-col justify-center items-center text-gray-800 dark:text-gray-200 bg-slate-100 dark:bg-[#0a0a0a] pt-10 overflow-hidden transition-colors duration-300"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.01]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ── ABOUT ME block ── */}
        <RevealOnScroll>
          <div className="relative w-[90vw] max-w-7xl my-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Heading col */}
            <div className="lg:w-[45%]">
              <SectionHeading label="ABOUT" accent="ME" delay={0} />
            </div>

            {/* Bio + link col */}
            <div className="lg:w-[55%] flex flex-col justify-between gap-4">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm{" "}
                <span className="text-blue-500 dark:text-blue-400 font-semibold">Berrahmo Douaa,</span>{" "}
                a fourth-year engineering student passionate about software
                development and web technologies.
                <span className="block mt-2">
                  I enjoy building practical projects and turning ideas into
                  efficient digital solutions.
                </span>
              </p>
              <a
                href="#projects"
                className="view-work-btn group inline-flex items-center gap-3 w-fit cursor-pointer"
              >
                <span className="relative overflow-hidden rounded-full px-5 py-2.5 border-2 border-blue-400 dark:border-blue-600 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-400"
                  style={{ background: "transparent" }}
                >
                  {/* Fill on hover */}
                  <span className="view-work-fill absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-out rounded-full" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">VIEW MY WORK</span>
                  <span className="relative z-10 text-base group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 inline-block">↗</span>
                </span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Divider */}
        <div className="w-[90vw] max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent mb-10" />

        {/* ── WHAT I OFFER block ── */}
        <RevealOnScroll>
          <div className="relative w-[90vw] max-w-7xl mb-10">
            <div className="mb-6">
              <SectionHeading label="WHAT I" accent="OFFER" delay={100} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <OfferCard
                icon="/douaatech-portfolio/icons/dev.png"
                title="Full-Stack"
                accent="WEB DEVELOPMENT"
                description="I build modern, responsive websites and web applications using the latest technologies."
                delay={150}
              />
              <OfferCard
                icon="/douaatech-portfolio/icons/ai.png"
                title="AI-powered"
                accent="Solutions"
                description="I develop practical AI solutions using Deep Learning, Machine Learning, and Computer Vision."
                delay={300}
              />
            </div>
          </div>
          <Skills />
        </RevealOnScroll>

        {/* Bottom fade */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 dark:via-gray-700/30 to-transparent mt-6" />
      </section>
    </>
  );
};