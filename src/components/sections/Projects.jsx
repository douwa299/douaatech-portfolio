import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showImages, setShowImages] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState({});
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleCards((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Face Mask Detection with Model Comparison(YOLOv8/MobileNetSSD)",
      desc: "Built a full computer vision pipeline to detect face masks in real time and compare multiple deep learning models including YOLOv8 and MobileNet SSD. Includes dataset preprocessing, augmentation, training, and evaluation of both models.",
      tech: [
        "Python",
        "OpenCV",
        "PyTorch",
        "TensorFlow",
        "YOLOv8",
        "MobileNet SSD",
        "Albumentations",
      ],
      video:
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/2026-05-06 00-48-01.mp4",
      images: [
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/test2.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection1.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection2.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection3.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection4.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/test1.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/test3.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/test4.png",
        "/douaatech-portfolio/ScreensForProjetcs/faceMask/test5.png",
      ],
    },
    {
      title: "Fashion Recommendation System",
      desc: "A machine learning-based recommendation system built on a large-scale H&M dataset. The system analyzes product attributes and user transaction behavior to generate personalized fashion recommendations. It combines clustering (K-Means) and similarity-based search (PCA + Euclidean distance) to suggest visually and semantically similar items in real time.",
      tech: [
        "Angular",
        "Flask",
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "PCA",
        "K-Means Clustering",
        "REST API",
        "Matplotlib",
      ],
      video:
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/vid_Trim.mp4",
      images: [
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/homePage3.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/homePage1.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/homePage2.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/login.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/register.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/boutiquePage.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/boutiquePage2.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013903.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/article2.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013646.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/similarProduct.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013550.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013611.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013639.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013805.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 013840.png",
        "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 014007.png",
      ],
    },
    {
      title: "Employee Task Manager",
      desc: "Full-stack task management system where admins assign tasks to employees and track progress in real time. Employees can view assigned tasks and update their status (completed/pending), improving workflow transparency and productivity.",
      tech: [
        "Angular",
        "Spring Boot",
        "Java",
        "REST API",
        "MySQL",
        "SQL Workbench",
        "Bootstrap",
      ],
      video:
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/2026-05-06 00-14-31.mp4",
      images: [
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Employee.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/List_Of_Tasks.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/login.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Register.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/task.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/post.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/update.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/updateStatus.png",
        "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Annotation 2026-05-05 235531.png",
      ],
    },
    {
      title: "Hotel Management Web Application",
      desc: "Developed a hotel management web application with room reservation, availability filtering, customer account management, and an interactive user dashboard. Designed a responsive and intuitive interface to simplify hotel booking and management operations.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
      video:
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/20250421_130047.mp4",
      images: [
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.25.jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/register.jfif",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/login.jfif",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.25.jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.27.jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.27 (1).jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.27 (2).jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.29.jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.27 (3).jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.28 (1).jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.28.jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.28 (2).jpeg",
        "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/WhatsApp Image 2026-05-10 at 01.53.28 (4).jpeg",
      ],
    },
    {
      title: "Personal Portfolio Website v1",
      desc: "Designed and developed a modern responsive portfolio website to showcase my projects, technical skills, and experience. Includes animated UI components, project galleries, smooth navigation, and a contact form integrated with EmailJS for direct communication.",
      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Vite",
        "EmailJS",
        "Framer Motion",
      ],
      github: "https://github.com/douwa299/douaatech-portfolio",
      live: "https://douwa299.github.io/douaatech-portfolio/",
      images: [
        "/douaatech-portfolio/ScreensForProjetcs/Portfoliov1/home.png",
        "/douaatech-portfolio/ScreensForProjetcs/Portfoliov1/about.png",
        "/douaatech-portfolio/ScreensForProjetcs/Portfoliov1/projects.png",
        "/douaatech-portfolio/ScreensForProjetcs/Portfoliov1/contact.png",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 bg-slate-100 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background particles - responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/10 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-200/10 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
          {/* Heading - Responsive */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-black dark:text-white flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <hr className="hidden sm:block flex-1 border-0 h-px bg-gradient-to-r from-transparent via-gray-600 dark:via-gray-500 to-transparent" />
            <span>FEATURED</span>
            <span className="text-blue-600 dark:text-blue-400 ml-0 sm:ml-2">PROJECTS</span>
            <hr className="hidden sm:block flex-1 border-0 h-px bg-gradient-to-r from-transparent via-gray-600 dark:via-gray-500 to-transparent" />
          </h2>

          {/* Grid - fully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col cursor-pointer ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image preview - responsive height */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="rounded-lg mb-4 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 object-cover w-full h-40 sm:h-48"
                  onClick={() => {
                    setSelectedProject(project);
                    setShowImages(true);
                  }}
                />

                {/* Title - responsive text */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description - responsive text, clamp on mobile */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 line-clamp-3 sm:line-clamp-none">
                  {project.desc}
                </p>

                {/* Tech stack - responsive tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105 cursor-pointer"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-auto">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowDemo(true);
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base relative group"
                  >
                    View Project ➤
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ================= IMAGE CAROUSEL MODAL - Responsive ================= */}
      {showImages && selectedProject && (
        <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 animate-in fade-in duration-300">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 max-w-[95vw] sm:max-w-5xl w-full overflow-hidden transform transition-all duration-300 scale-100">
            {/* Header - responsive */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-gray-800 dark:text-white text-base sm:text-xl font-bold line-clamp-1 pr-4">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setShowImages(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-xl sm:text-2xl transition-all duration-200 hover:scale-110 hover:rotate-90 flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Carousel area - responsive */}
            <div className="relative flex items-center justify-center p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 min-h-[300px] sm:min-h-[500px]">
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProject.images.length - 1 : prev - 1,
                  )
                }
                className="absolute left-2 sm:left-4 z-10 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-gray-800 dark:text-white text-2xl sm:text-4xl w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg shadow-md border border-gray-300 dark:border-gray-700"
              >
                ‹
              </button>

              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="max-h-[50vh] sm:max-h-[65vh] w-auto max-w-full rounded-lg shadow-md transition-all duration-300 object-contain"
              />

              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === selectedProject.images.length - 1 ? 0 : prev + 1,
                  )
                }
                className="absolute right-2 sm:right-4 z-10 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-gray-800 dark:text-white text-2xl sm:text-4xl w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg shadow-md border border-gray-300 dark:border-gray-700"
              >
                ›
              </button>
            </div>

            {/* Footer - responsive */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-3">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-mono">
                  {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(selectedProject.images.length).padStart(2, "0")}
                </p>
                <div className="flex gap-1.5 sm:gap-2">
                  {selectedProject.images.slice(0, 8).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                        idx === currentImageIndex
                          ? "w-4 sm:w-6 bg-blue-500 dark:bg-blue-400"
                          : "w-1.5 sm:w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                  {selectedProject.images.length > 8 && (
                    <span className="text-xs text-gray-500 dark:text-gray-500 ml-1">+{selectedProject.images.length - 8}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= VIDEO DEMO MODAL - Responsive ================= */}
      {showDemo && selectedProject && (
        <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 animate-in fade-in duration-300">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 max-w-[95vw] sm:max-w-4xl w-full overflow-hidden transform transition-all duration-300 scale-100">
            {/* Header - responsive */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-gray-800 dark:text-white text-sm sm:text-xl font-bold ml-1 sm:ml-2 line-clamp-1">
                  {selectedProject.title} · Demo
                </h3>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-xl sm:text-2xl transition-all duration-200 hover:scale-110 hover:rotate-90 flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Video Player - responsive */}
            <div className="relative p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
              <video
                controls
                autoPlay
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                poster={selectedProject.images[0]}
              >
                <source src={selectedProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer hint */}
            <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs font-mono hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                🎬 Watch the full demonstration — use controls to play, pause, or adjust volume.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent mt-8 sm:mt-10"></div>
    </section>
  );
};