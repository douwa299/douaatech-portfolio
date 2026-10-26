import React, { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    id: 'servalog',
    title: 'Full-Stack',
    highlight: 'AI Developer',
    suffix: 'Intern (PFA)',
    date: 'JUNE-AUGUST 2026| SERVALOG GROUP, MEKNÈS', // TODO: put your real internship dates
    points: [
  'Developed an AI-powered solution for Moroccan notaries to process CNIEs and property certificates using YOLOv8 for document layout detection and Qwen2.5-VL for Arabic/French text extraction.',
  'Structured extracted information for validation and integration into notarial documents, automating Word document generation with Python, docxtpl, and python-docx.',
  'Contributed to a React web interface and API prototype for document processing and automated notarial act generation.'
],
    tech: [
      'Python', 'YOLOv8', 'OCR', 'Computer Vision', 'Qwen2.5-VL', 'LLMs',
      'FastAPI', 'Flask', 'React', 'Tailwind CSS', 'Document Automation',
    ],
  },
    {
    id: 'ens-fez',
    title: 'Full-Stack',
    highlight: 'Software Developer',
    suffix: 'Intern',
    date: 'JULY-SEPTEMBER 2025 | ENS FEZ',
    points: [
      'Developed academic structure modules including departments, filières, modules, and module elements using PHP.',
      'Built user interfaces for managing and organizing academic data.',
      'Implemented backend logic with database operations (MySQL) following an MVC architecture.',
    ],
    tech: [
      'PHP', 'MySQL', 'Git', 'HTML', 'CSS', 'JavaScript',
      'Bootstrap 5', 'phpMyAdmin', 'MVC Architecture',
    ],
  },
];

/* Reusable observer hook: toggles visibility when scrolled into view */
const useInView = (onEnter, onLeave) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onEnter && onEnter();
        } else {
          setVisible(false);
          onLeave && onLeave();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
};

const ExperienceItem = ({ exp }) => {
  const [techVisible, setTechVisible] = useState([]);
  const timeouts = useRef([]);

  const [ref, isVisible] = useInView(
    () => {
      exp.tech.forEach((_, idx) => {
        const t = setTimeout(() => setTechVisible((prev) => [...prev, idx]), idx * 80);
        timeouts.current.push(t);
      });
    },
    () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
      setTechVisible([]);
    }
  );

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  const v = isVisible ? 'visible' : '';

  return (
    <div ref={ref} className="relative flex flex-col justify-between pl-6 ml-3 h-auto">
      <div
        className={`work-border-line absolute left-0 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 rounded-full ${v}`}
        style={{ height: isVisible ? '100%' : '0%' }}
      />

      <div className="work-content-container relative pl-6 pb-2">
        <h1 className={`work-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white ${v}`}>
          {exp.title}{' '}
          <span className="text-blue-600 dark:text-blue-400">{exp.highlight}</span>{' '}
          {exp.suffix}
        </h1>

        <h3 className={`work-date text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mt-2 ${v}`}>
          {exp.date}
        </h3>

        {exp.points ? (
          <ul className={`work-description text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed list-disc pl-5 space-y-1 ${v}`}>
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : (
          <p className={`work-description text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed ${v}`}>
            {exp.description}
          </p>
        )}

        <div className={`work-tech-tags flex flex-wrap gap-2 mt-4 ${v}`}>
          {exp.tech.map((tech, idx) => (
            <span
              key={tech}
              className={`tech-tag bg-blue-500 text-white px-3 py-1 rounded-full text-sm ${techVisible.includes(idx) ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const [headingRef, headingVisible] = useInView();

  return (
    <div className="w-[80vw] mt-40 overflow-hidden">
      <style>{`
        .work-heading-left { transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
        .work-heading-left.visible { opacity: 1; transform: translateX(0); }
        .work-heading-left:not(.visible) { opacity: 0; transform: translateX(-80px); }

        .work-border-line { transition: height 0.6s ease-out; }
        .work-border-line.visible { height: 100%; }

        .work-title { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s; }
        .work-title.visible { opacity: 1; transform: translateY(0); }
        .work-title:not(.visible) { opacity: 0; transform: translateY(-50px); }

        .work-date { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s; }
        .work-date.visible { opacity: 1; transform: translateX(0); }
        .work-date:not(.visible) { opacity: 0; transform: translateX(-60px); }

        .work-description { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s; }
        .work-description.visible { opacity: 1; transform: translateY(0); }
        .work-description:not(.visible) { opacity: 0; transform: translateY(50px); }

        .work-tech-tags { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.6s; }
        .work-tech-tags.visible { opacity: 1; transform: translateY(0); }
        .work-tech-tags:not(.visible) { opacity: 0; transform: translateY(30px); }

        .tech-tag { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; }
        .tech-tag:hover {
          transform: scale(1.08);
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        }
        .dark .tech-tag { background: linear-gradient(135deg, #1e40af, #1e3a8a); }
        .dark .tech-tag:hover { background: linear-gradient(135deg, #2563eb, #1d4ed8); }
        .tech-tag.visible { opacity: 1; transform: scale(1); }
        .tech-tag:not(.visible) { opacity: 0; transform: scale(0); }

        .work-content-container {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .work-content-container:hover { transform: translateX(8px); }
      `}</style>

      <div className="flex justify-around flex-col lg:flex-row gap-8 lg:gap-0">
        {/* LEFT SIDE - Heading */}
        <div ref={headingRef} className={`work-heading-left p-4 lg:sticky lg:top-24 self-start ${headingVisible ? 'visible' : ''}`}>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">Work</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400">EXPERIENCE</p>
        </div>

        {/* RIGHT SIDE - Experiences */}
        <div className="flex flex-col gap-14 lg:max-w-[55%]">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;