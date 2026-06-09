import React, { useEffect, useRef, useState } from "react";
import WorkExperience from "./WorkExperience";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

const Education = () => {
  const [cardVisible, setCardVisible] = useState({
    card1: false,
    card2: false,
    card3: false,
  });
  
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute("data-card");
          if (entry.isIntersecting) {
            setCardVisible((prev) => ({ ...prev, [cardId]: true }));
          } else {
            setCardVisible((prev) => ({ ...prev, [cardId]: false }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="
        education-section
        h-fit flex flex-col items-center text-gray-800 dark:text-gray-200
        bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#0f0f0f]
        p-20
        max-xl:p-12
        max-lg:p-8
        max-sm:p-5
        transition-colors duration-300
      "
    >
      <style>{`
        /* ── Entrance animation for the whole section ── */
        .education-section {
          animation: sectionFadeIn 0.6s ease-out both;
        }
        @keyframes sectionFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Heading diamond icon spin-in ── */
        .edu-diamond {
          transition: transform 0.4s ease;
        }
        .edu-heading:hover .edu-diamond {
          transform: rotate(90deg) scale(1.2);
        }

        /* ── Animated underline on the EDUCATION word ── */
        .edu-title-word {
          position: relative;
        }
        .edu-title-word::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: #2563eb;
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .edu-heading:hover .edu-title-word::after {
          width: 100%;
        }

        /* ── Timeline card ── */
        .edu-card {
          position: relative;
          transition:
            transform   0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow  0.35s ease,
            background  0.35s ease;
          cursor: default;
        }
        .edu-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px -6px rgba(59,130,246,0.18);
          background: rgba(255,255,255,0.55);
          border-radius: 0 12px 12px 0;
        }

        /* Dark mode card hover */
        .dark .edu-card:hover {
          background: rgba(30, 30, 40, 0.55);
          box-shadow: 0 12px 32px -6px rgba(59,130,246,0.25);
        }

        /* ── Date badge ── */
        .edu-date {
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .edu-card:hover .edu-date {
          border-color: #2563eb;
          color: #1d4ed8;
          background: rgba(219,234,254,0.5);
        }

        /* Dark mode date badge */
        .dark .edu-card:hover .edu-date {
          background: rgba(59,130,246,0.2);
        }

        /* ── Glowing dot pulse ── */
        .edu-dot {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .edu-card:hover .edu-dot {
          transform: scale(1.4);
          box-shadow: 0 0 0 4px rgba(59,130,246,0.2),
                      0 0 14px 3px rgba(59,130,246,0.5);
        }

        /* ── Card animations - triggers every time on scroll ── */
        .edu-card-1 {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .edu-card-1.card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .edu-card-1:not(.card-visible) {
          opacity: 0;
          transform: translateY(30px);
        }

        .edu-card-2 {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }
        .edu-card-2.card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .edu-card-2:not(.card-visible) {
          opacity: 0;
          transform: translateY(30px);
        }

        .edu-card-3 {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s;
        }
        .edu-card-3.card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .edu-card-3:not(.card-visible) {
          opacity: 0;
          transform: translateY(30px);
        }

        /* ── Vertical connector line grow ── */
        .edu-connector {
          position: absolute;
          left: -1px;
          top: 0;
          width: 2px;
          height: 0%;
          background: linear-gradient(to bottom, #3b82f6, transparent);
          transition: height 0.5s ease;
          border-radius: 2px;
        }
        .edu-card:hover .edu-connector {
          height: 100%;
        }

        /* ── Responsive grid ── */
        .edu-cards-grid {
          display: flex;
          justify-content: space-between;
          height: 15rem;
          margin: 2.5rem;
        }

        @media (max-width: 1024px) {
          .edu-cards-grid {
            flex-direction: column;
            height: auto;
            gap: 2.5rem;
            margin: 1.5rem 0;
          }
          .edu-card {
            align-self: flex-start !important;
          }
        }

        @media (max-width: 640px) {
          .edu-cards-grid {
            gap: 2rem;
            margin: 1rem 0;
          }
        }
      `}</style>

      <RevealOnScroll>
        <div className="w-[80vw] max-lg:w-[90vw] max-sm:w-[95vw]">

          {/* ── Heading ── */}
          <div className="mb-12 max-sm:mb-8">
            <h1 className="edu-heading text-4xl max-sm:text-2xl flex font-bold h-fit items-center w-full tracking-tight select-none">
              <img
                src="/douaatech-portfolio/icons/rhombe.png"
                className="edu-diamond w-[20px] h-[20px] mr-4"
                alt=""
              />
              <span className="text-gray-800 dark:text-white">My</span>
              <span className="edu-title-word text-blue-600 dark:text-blue-400 ml-5"> EDUCATION </span>
              <hr className="flex-1 border-gray-300 dark:border-gray-700 mx-6 max-sm:hidden" />
            </h1>
          </div>

          {/* ── Cards ── */}
          <div className="edu-cards-grid">

            {/* Card 1 */}
            <div
              ref={card1Ref}
              data-card="card1"
              className={`edu-card edu-card-1 relative flex flex-col w-fit px-2 border-l-2 border-gray-900/15 dark:border-gray-700/30 border-dotted h-fit self-end max-lg:self-start space-y-1 pb-4 rounded-r-lg ${cardVisible.card1 ? 'card-visible' : ''}`}
            >
              <div className="edu-connector" />
              <div className="flex flex-col w-fit space-y-1">
                <p className="edu-date text-sm font-bold italic relative right-2.5 p-4 border-l-2 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                  2021 – 2022
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base font-medium">
                  Baccalauréat en
                  <span className="text-blue-600 dark:text-blue-400 font-semibold ml-2">Sciences Mathématiques</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">Lycée Michlifen</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Azrou</p>
              </div>
              <div className="edu-dot absolute -left-[7px] bottom-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] shadow-blue-500/50" />
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              data-card="card2"
              className={`edu-card edu-card-2 relative flex flex-col w-fit px-2 border-l-2 border-gray-900/15 dark:border-gray-700/30 border-dotted h-fit self-center max-lg:self-start space-y-1 pb-4 rounded-r-lg ${cardVisible.card2 ? 'card-visible' : ''}`}
            >
              <div className="edu-connector" />
              <p className="edu-date text-sm font-bold italic relative right-2.5 p-4 border-l-2 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                2022 – 2024
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base font-medium">
                Cycle Préparatoire
                <span className="text-blue-600 dark:text-blue-400 font-semibold ml-2">Intégré</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">École Nationale des Sciences Appliquées</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Fès</p>
              <div className="edu-dot absolute -left-[7px] bottom-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] shadow-blue-500/50" />
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              data-card="card3"
              className={`edu-card edu-card-3 relative flex flex-col w-fit px-2 border-l-2 border-gray-900/15 dark:border-gray-700/30 border-dotted h-fit space-y-1 pb-4 rounded-r-lg ${cardVisible.card3 ? 'card-visible' : ''}`}
            >
              <div className="edu-connector" />
              <p className="edu-date text-sm font-bold italic relative right-2.5 p-4 border-l-2 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                2024 – Présent
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base font-medium">Cycle Ingénieur</p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                Ingénierie Logicielle & Intelligence Artificielle
              </p>
              <p className="text-gray-600 dark:text-gray-400">École Nationale des Sciences Appliquées</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Fès</p>
              <div className="edu-dot absolute -left-[7px] bottom-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] shadow-blue-500/50" />
            </div>

          </div>
        </div>

        <WorkExperience />
      </RevealOnScroll>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent mt-12" />
    </section>
  );
};

export default Education;