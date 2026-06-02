import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isVisible, setIsVisible] = useState({
    left: false,
    right: false,
    github: false,
    linkedin: false,
  });
  
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);

  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [index]: true }));
          } else {
            setIsVisible((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (leftSideRef.current) observer.observe(leftSideRef.current);
    if (rightSideRef.current) observer.observe(rightSideRef.current);
    if (githubRef.current) observer.observe(githubRef.current);
    if (linkedinRef.current) observer.observe(linkedinRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);
        alert("Oops! Something went wrong.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-200/10 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <RevealOnScroll>
        {/* SECTION TITLE - Responsive */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-black dark:text-white flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <hr className="hidden sm:block flex-1 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          <span>GET IN</span>
          <span className="text-blue-600 dark:text-blue-400 ml-0 sm:ml-2">TOUCH</span>
          <hr className="hidden sm:block flex-1 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        </h2>
        
        {/* CONTENT - Responsive grid */}
        <div className="text-base sm:text-xl max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* LEFT SIDE - Responsive */}
          <div 
            ref={leftSideRef}
            data-index="left"
            className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
              isVisible.left ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-black dark:text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              LET'S BUILD A
              <span className="text-blue-500 dark:text-blue-400 block mt-2 relative inline-block group">
                PROJECT TOGETHER.
                <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700"></span>
              </span>
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
              Feel free to contact me for internship opportunities,
              collaborations, or any project discussions.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {/* EMAIL */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer flex-wrap sm:flex-nowrap">
                <div className="p-2 sm:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Email</p>
                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 break-all">
                    douaaberrahmo@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer flex-wrap sm:flex-nowrap">
                <div className="p-2 sm:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <FaPhone className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Phone</p>
                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    +212 6 45 39 39 44
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS - Responsive */}
            <h1 className="text-xs flex text-gray-400 dark:text-gray-500 font-bold h-fit items-center w-full tracking-tight">
              FIND ME ON 
              <hr className="flex-1 border-gray-300 dark:border-gray-700 mx-3 sm:mx-6 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-500" />
            </h1>
            
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/douwa299"
                target="_blank"
                ref={githubRef}
                data-index="github"
                className={`p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 ${
                  isVisible.github ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <FaGithub className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/douaa-berrahmo-73ba6334b/"
                target="_blank"
                ref={linkedinRef}
                data-index="linkedin"
                className={`p-3 sm:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 ${
                  isVisible.linkedin ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <FaLinkedin className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Form - Responsive */}
          <div 
            ref={rightSideRef}
            data-index="right"
            className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-l-0 lg:border-l-2 border-t-2 lg:border-t-0 border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-lg rounded-2xl transition-all duration-700 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 ${
              isVisible.right ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-800 dark:text-white text-sm sm:text-base
                  transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 dark:focus:bg-gray-700
                  group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-800 dark:text-white text-sm sm:text-base
                  transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 dark:focus:bg-gray-700
                  group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                  placeholder="Your email"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={5}
                  className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-800 dark:text-white text-sm sm:text-base
                  transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 dark:focus:bg-gray-700
                  group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                  placeholder="Your Message..."
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </div>

              <button
                type="submit"
                className="relative w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium text-sm sm:text-base
                transition-all duration-300 overflow-hidden group cursor-pointer
                hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:from-blue-700 hover:to-blue-600"
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10">Send A Message</span>
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
      
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 dark:border-gray-800 py-3 sm:py-4 text-center bg-white/80 dark:bg-black/50 backdrop-blur-md z-50 transition-colors duration-300">
  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4">
    © 2026 Douaa Berrahmo. All rights reserved.
  </p>
</footer>
    </section>
  );
};