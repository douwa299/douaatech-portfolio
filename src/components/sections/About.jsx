
import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";


export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Angular",
  ];
  const backendSkills = ["Node.js", "Python", "MongoDB", "PHP", "SpringBoot"];
  const techUsedInInternship = [
    "PHP",
    "MySQL",
    "MVC Architecture",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap 5",
    "phpMyAdmin",
    "MySQL Workbench",
    "Git",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-around  py-5"
    >

      <RevealOnScroll >

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 ">
            Fourth-year engineering student passionate about software
            development and web technologies. I enjoy building practical
            projects and turning ideas into efficient digital solutions.{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-- hover:-translate-y-1 transition-all">
              <h3 className="text-xl  font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-- hover:-translate-y-1 transition-all">
              <h3 className="text-xl  font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grip-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-8"> 🎓Education</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm mb-10">
                <div className="font-semibold text-white">
                  🎓 2024 – Présent | Cycle Ingénieur : Ingénierie Logicielle &
                  Intelligence Artificielle
                </div>
                <div className="text-sm text-gray-400 ">
                  École Nationale des Sciences Appliquées de Fès
                </div>
              </li>

              <li className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm mb-10">
                <div className="font-semibold text-white">
                  🎓 2022 – 2024 | Cycle Préparatoire Intégré
                </div>
                <div className="text-sm text-gray-400">
                  École Nationale des Sciences Appliquées de Fès
                </div>
              </li>

              <li className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm mb-10">
                <div className="font-semibold text-white">
                  📚 2021 – 2022 | Baccalauréat en Sciences Mathématiques
                </div>
                <div className="text-sm text-gray-400">
                  Lycée Michlifen, Azrou
                </div>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼Work Experience</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white text-lg">
                  <span className="text-blue-400 font-bold">July 2025</span> |
                  Full-Stack Software Developer Intern
                </h4>

                <div className="text-sm text-gray-400 mt-1">
                  À l’ENS de Fès (École Normale Supérieure de Fès)
                </div>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Developed academic structure modules including departments,
                  filières, modules, and module elements using PHP. Built user
                  interfaces and implemented backend logic with database
                  operations to efficiently manage and organize academic data.
                </p>
              </div>

              {/* Tech section */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">
                  🛠️ Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {techUsedInInternship.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm
          border border-blue-500/20
          hover:bg-blue-500/20 hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

         </RevealOnScroll >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    </section>
  );
};
