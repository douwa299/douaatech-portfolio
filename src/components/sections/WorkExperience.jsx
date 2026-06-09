import React, { useEffect, useRef, useState } from 'react';

const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [techVisible, setTechVisible] = useState([]);
  const containerRef = useRef(null);
  const techRefs = useRef([]);

  const techUsedInInternship = [
    "PHP",
    "MySQL",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap 5",
    "phpMyAdmin",
    "MVC Architecture",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger tech tags appearance
          techRefs.current.forEach((_, idx) => {
            setTimeout(() => {
              setTechVisible(prev => [...prev, idx]);
            }, idx * 80);
          });
        } else {
          setIsVisible(false);
          setTechVisible([]);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-[80vw] mt-40 overflow-hidden">
      <style>{`
        /* Left side heading animation */
        .work-heading-left {
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .work-heading-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .work-heading-left:not(.visible) {
          opacity: 0;
          transform: translateX(-80px);
        }

        /* Border line animation - appears FIRST */
        .work-border-line {
          transition: height 0.6s ease-out;
        }
        .work-border-line.visible {
          height: 100%;
        }

        /* Right side content - title appears from TOP */
        .work-title {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .work-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .work-title:not(.visible) {
          opacity: 0;
          transform: translateY(-50px);
        }

        /* Date appears from LEFT */
        .work-date {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }
        .work-date.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .work-date:not(.visible) {
          opacity: 0;
          transform: translateX(-60px);
        }

        /* Description appears from BOTTOM */
        .work-description {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s;
        }
        .work-description.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .work-description:not(.visible) {
          opacity: 0;
          transform: translateY(50px);
        }

        /* Tech tags container */
        .work-tech-tags {
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
        }
        .work-tech-tags.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .work-tech-tags:not(.visible) {
          opacity: 0;
          transform: translateY(30px);
        }

        /* Individual tech tag animation */
        .tech-tag {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }
        .tech-tag:hover {
          transform: scale(1.08);
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        }

        /* Dark mode tech tag */
        .dark .tech-tag {
          background: linear-gradient(135deg, #1e40af, #1e3a8a);
        }
        .dark .tech-tag:hover {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
        }

        .tech-tag.visible {
          opacity: 1;
          transform: scale(1);
        }
        .tech-tag:not(.visible) {
          opacity: 0;
          transform: scale(0);
        }

        /* Hover effect on the whole right container */
        .work-content-container {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .work-content-container:hover {
          transform: translateX(8px);
        }
      `}</style>

      <div className="flex justify-around flex-col lg:flex-row gap-8 lg:gap-0">
        
        {/* LEFT SIDE - Heading */}
        <div className={`work-heading-left p-4 ${isVisible ? 'visible' : ''}`}>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">Work</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400">EXPERIENCE</p>
        </div>

        {/* RIGHT SIDE - Content with border animation */}
        <div className="relative flex flex-col justify-between pl-6 ml-3 h-auto lg:h-70">
          {/* Border line that appears first */}
          <div
            className={`work-border-line absolute left-0 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 rounded-full ${isVisible ? 'visible' : ''}`}
            style={{ height: isVisible ? '100%' : '0%' }}
          />

          <div className="work-content-container relative pl-6">
            <h1 className={`work-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white ${isVisible ? 'visible' : ''}`}>
              Full-Stack <span className="text-blue-600 dark:text-blue-400">Software Developer</span> Intern
            </h1>

            <h3 className={`work-date text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mt-2 ${isVisible ? 'visible' : ''}`}>
              JULY 2025 | ENS FEZ
            </h3>

            <p className={`work-description text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed ${isVisible ? 'visible' : ''}`}>
              Developed academic structure modules including departments, filières, modules, 
              and module elements using PHP. Built user interfaces and implemented backend 
              logic with database operations to efficiently manage and organize academic data.
            </p>

            <div className={`work-tech-tags flex flex-wrap gap-2 mt-4 ${isVisible ? 'visible' : ''}`}>
              {techUsedInInternship.map((tech, idx) => (
                <span
                  key={idx}
                  ref={(el) => (techRefs.current[idx] = el)}
                  className={`tech-tag bg-blue-500 text-white px-3 py-1 rounded-full text-sm ${techVisible.includes(idx) ? 'visible' : ''}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;


