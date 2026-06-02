import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaArrowRight } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return saved === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark mode to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Track scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keeps track of the overflow of the body content
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-md"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            douwa<span className="text-blue-500 dark:text-blue-400">.tech</span>
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Hint text with arrow pointing to button - continuous vibration */}
            <div className="hidden sm:flex items-center gap-2 animate-vibrate">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </span>
              <FaArrowRight className="text-blue-500 dark:text-blue-400 text-sm" />
            </div>

            {/* Prominent Dark/Light Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="relative group cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300 animate-pulse"></div>
              <div className="relative p-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                {darkMode ? (
                  <FaSun className="text-yellow-300 text-xl sm:text-2xl" />
                ) : (
                  <FaMoon className="text-white text-xl sm:text-2xl" />
                )}
              </div>
            </button>

            {/* Desktop Download CV Button */}
            <a
              href="/douaatech-portfolio/CV_Douaa_Berrahmo.pdf"
              download
              className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10">Download CV</span>
            </a>

            {/* Mobile menu button */}
            <div
              className="w-10 h-10 relative cursor-pointer z-50 md:hidden flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <FaTimes className="text-xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
              ) : (
                <FaBars className="text-xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu items */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 px-4">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Contact
          </a>

          <a
            href="/douaatech-portfolio/CV_Douaa_Berrahmo.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Add continuous vibration animation CSS */}
      <style>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          10% { transform: translateX(-3px); }
          20% { transform: translateX(3px); }
          30% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          50% { transform: translateX(-1px); }
          60% { transform: translateX(1px); }
          70% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.8s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};