import { useEffect, useState } from "react";
import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";


export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Salam, I'm Berrahmo Douaa ";

  useEffect(() => {
    // Reset text immediately when the component mounts
    setText("");

    let index = 0;

    // Using an interval is more reliable for a "start-to-finish" effect on refresh
    const timer = setInterval(() => {
      // Use the functional update to ensure we always have the latest state
      setText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    // Cleanup: This stops the timer if the user leaves the page
    // or if the component re-renders unexpectedly
    return () => clearInterval(timer);
  }, []); // Empty array means: Run ONLY once when the page loads
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-around  py-5"
    >
      <RevealOnScroll >
        <div className="min-h-screen flex items-center justify-center relative ">
      <div className=" z-10 px-4 w-[800px]">
        {/* NAME */}
  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
    {text}
    <span className="text-white inline-block animate-bounce ml-2">👋</span>
    <span className="text-white animate-blink ml-1">|</span>
  </h1>
        {/* ROLE / TITLE (new addition - makes it more professional) */}
  <p className="text-blue-400 text-sm md:text-base tracking-widest uppercase mb-3">
    AI & Software Engineering Student
  </p>

  

  {/* SHORT TAGLINE (more impactful than paragraph first) */}
  <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-lg ">
    I build intelligent systems combining AI, computer vision, and software engineering.
  </p>

  {/* FULL DESCRIPTION */}
  <p className="text-gray-400 text-base mb-8 max-w-lg ">
    Fourth-year engineering student focused on AI and software development.
    I enjoy creating real-world solutions using machine learning, deep learning,
    and full-stack technologies — turning ideas into functional, scalable systems.
  </p>
        <div className="flex  space-x-4 mx-30">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative px-10 animate-[slideInRight_0.8s_ease-out_forwards]">
        {/* glow */}
        <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl"></div>

        <div
          className=" relative h-[500px] w-[400px] rounded-2xl overflow-hidden
                  border border-white/10
                  shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
        >
          <img
 src="/douaatech-portfolio/myimg.png"             alt="Profile"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

      </div>
     </RevealOnScroll>
       <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    </section>
  );
};
