import { FaTimes } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-screen
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg
        z-50
        flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out

        ${
          menuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-3xl focus:outline-none cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
        aria-label="Close Menu"
      >
        <FaTimes />
      </button>

      <div className="flex flex-col items-center space-y-6 sm:space-y-8 px-4">
        <a
          href="#home"
          className={`text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={`text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <a
          href="/douaatech-portfolio/CV_Douaa_Berrahmo.pdf"
          download
          className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 group"
          onClick={() => {
            setMenuOpen(false);
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "cv_download", {
                event_category: "engagement",
                event_label: "Portfolio CV Download",
              });
            }
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative z-10">Download CV</span>
        </a>
      </div>
    </div>
  );
};