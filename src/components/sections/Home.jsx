import { useEffect, useState, useRef } from "react";

// ─── Floating particle background ───────────────────────────────────────────
const ParticleField = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 14 + 10,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.25 + 0.08,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400 dark:bg-blue-500"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

// ─── Scroll-reveal wrapper (triggers EVERY time you scroll) ─────────────────
const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transforms = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

// ─── Magnetic CTA button ─────────────────────────────────────────────────────
const MagneticCTA = ({ href }) => {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  return (
    <a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cta-link inline-flex items-center gap-5 text-gray-500 dark:text-gray-400 transition-all duration-300"
      style={{ transition: "transform 0.3s cubic-bezier(.22,1,.36,1)" }}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/50 scale-100 group-hover:scale-[1.6] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
        <div className="relative rounded-full border-2 border-blue-200 dark:border-blue-700 p-6 text-blue-500 dark:text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-300/60 transition-all duration-400">
          <span className="text-2xl block group-hover:rotate-45 transition-transform duration-300">↗</span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-sm text-gray-400 dark:text-gray-400 group-hover:text-blue-400 tracking-widest uppercase transition-colors duration-300">
          Let's Create
        </p>
        <p className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          Something Unique
        </p>
      </div>
    </a>
  );
};

// ─── Shimmer badge ───────────────────────────────────────────────────────────
const ShimmerBadge = ({ children }) => (
  <div className="relative inline-block overflow-hidden rounded-full px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
    <div
      className="absolute inset-0 -translate-x-full"
      style={{ animation: "shimmer 2.4s ease-in-out infinite", background: "linear-gradient(90deg, transparent 0%, rgba(99,179,237,0.25) 50%, transparent 100%)" }}
    />
    <span className="relative text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide">{children}</span>
  </div>
);

// ─── Profile image card ──────────────────────────────────────────────────────
const ProfileCard = ({ src }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  };
  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div
        className="absolute rounded-full border border-blue-200/60 dark:border-blue-700/60"
        style={{ inset: "-32px", animation: "pulseRing 3s ease-in-out infinite" }}
      />
      <div
        className="absolute rounded-full border border-blue-100/40 dark:border-blue-800/40"
        style={{ inset: "-56px", animation: "pulseRing 3s ease-in-out infinite 1.5s" }}
      />

      <div className="absolute -inset-10 bg-gradient-radial from-blue-200/40 dark:from-blue-900/30 via-blue-100/20 to-transparent blur-3xl rounded-full" />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-72 sm:w-80 md:w-[360px] lg:w-[400px] h-[420px] sm:h-[460px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-gray-700 bg-white dark:bg-gray-900"
        style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d", boxShadow: "0 30px 80px rgba(99,179,237,0.25), 0 10px 30px rgba(0,0,0,0.1)" }}
      >
        <img src={src} alt="Douaa Berrahmo" className="w-full h-full object-cover" />

        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(99,179,237,0.08) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        <div
          className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/60 dark:border-gray-700"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
        >
          <p className="text-2xl text-blue-400 dark:text-blue-500 font-semibold tracking-widest uppercase">SOFTWARE & AI Engineer</p>
          <p className="text-gray-800 dark:text-gray-300 font-bold text-sm uppercase">Berrahmo Douaa</p>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-30" style={{ backgroundImage: "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }} />
    </div>
  );
};

// ─── Main Home component ─────────────────────────────────────────────────────
export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "I'M BERRAHMO DOUAA";

  useEffect(() => {
    setText("");
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(200%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.04); opacity: 1; }
        }
        @keyframes gradShift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes lineGrow {
          to { transform: scaleX(1); }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .hero-gradient {
          background: linear-gradient(-45deg, #f8fafc, #eff6ff, #e0f2fe, #f1f5f9);
          background-size: 400% 400%;
          animation: gradShift 12s ease infinite;
        }
        .dark .hero-gradient {
          background: #0a0a0a;
          animation: none;
        }
        .name-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #1d4ed8 50%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dark .name-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .line-grow {
          animation: lineGrow 1.2s 1.4s cubic-bezier(.22,1,.36,1) forwards;
          transform-origin: left;
          transform: scaleX(0);
        }
      `}</style>

      <section
        id="home"
        className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300"
      >
        <ParticleField />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)", backgroundSize: "60px 60px" }}
        />

        <div className="relative z-10 w-[90vw] max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 py-24 lg:py-0">

          <div className="flex-1 text-center lg:text-left">

            <RevealOnScroll delay={0}>
              <p className="text-sm sm:text-base tracking-[0.35em] uppercase text-gray-400 dark:text-gray-400 mb-6 font-medium">
                Salam, Welcome to my Portfolio
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-8 tracking-tight name-gradient">
                {text}
                <span
                  className="text-blue-500 dark:text-blue-400 inline-block"
                  style={{ animation: "pulse 1s ease-in-out infinite" }}
                >|</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="flex items-center justify-center lg:justify-start mb-8 gap-4">
                <ShimmerBadge>AI & Software Engineering Student</ShimmerBadge>
                <div
                  className="hidden lg:block h-px bg-gradient-to-r from-blue-300 dark:from-blue-600 to-transparent line-grow"
                  style={{ width: "120px" }}
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={450}>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-12 mx-auto lg:mx-0">
                Building intelligent applications through AI, computer vision,
                and modern software engineering.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <MagneticCTA href="#projects" />
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200} direction="right">
            <div className="flex-1 flex justify-center lg:justify-end">
              <ProfileCard src="/douaatech-portfolio/myimg.png" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};