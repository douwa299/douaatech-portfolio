import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "FrontEnd",
    skills: [
      "React",
      "Vue",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
  {
    title: "AI & Data",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "BackEnd",
    skills: ["Node.js", "SpringBoot", "Python", "PHP", "Java", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "VSCode"],
  },
];

const SkillCard = ({ skill, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col items-center w-[80px] transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-1">
        <div className="w-10 h-10 p-[2px] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-md shadow-sm transition-all duration-200 group-hover:shadow group-hover:from-blue-400 group-hover:to-blue-500"
          style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
          >
            <img
              src={`/douaatech-portfolio/icons/${skill}.png`}
              alt={skill}
              className="w-6 h-6 object-contain transition-transform duration-200 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `/douaatech-portfolio/icons/${skill}.svg`;
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-[11px] sm:text-xs font-medium text-gray-700 dark:text-gray-400 text-center capitalize transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {skill}
      </p>
    </div>
  );
};

const SkillSection = ({ title, skills, sectionDelay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${sectionDelay}ms` }}
    >
      <h2 className="text-base sm:text-lg font-bold text-center mb-2 pb-1 relative group text-gray-800 dark:text-white">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-12"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} delay={index * 50} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        } else {
          setTitleVisible(false);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-6 px-4 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-[#0a0a0a] dark:to-[#0f0f0f] relative overflow-hidden transition-colors duration-300">
      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title - compact */}
        <div
          ref={titleRef}
          className={`text-center mb-5 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold inline-flex items-center gap-2 text-gray-800 dark:text-white">
            My
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent relative group">
              SKILLS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500"></span>
            </span>
          </h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-2 rounded-full animate-pulse"></div>
        </div>

        {/* Skill Groups Grid - compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, index) => (
            <SkillSection
              key={group.title}
              title={group.title}
              skills={group.skills}
              sectionDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;