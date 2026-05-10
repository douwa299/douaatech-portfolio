import { useState } from "react";
import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showImages, setShowImages] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const projects = [
  {
  title: "Face Mask Detection with Model Comparison (YOLOv8 vs MobileNet SSD)",
desc: "Built a full computer vision pipeline to detect face masks in real time and compare multiple deep learning models including YOLOv8 and MobileNet SSD. Includes dataset preprocessing, augmentation, training, and evaluation of both models.",
tech: ["Python", "OpenCV", "PyTorch", "TensorFlow", "YOLOv8", "MobileNet SSD", "Albumentations"],
    video: "/douaatech-portfolio/ScreensForProjetcs/faceMask/2026-05-06 00-48-01.mp4",
    images: [
            "/douaatech-portfolio/ScreensForProjetcs/faceMask/test2.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection1.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection2.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection3.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/detection4.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/test1.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/test3.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/test4.png",
      "/douaatech-portfolio/ScreensForProjetcs/faceMask/test5.png"
    ]
  },

  {
    title: "Fashion Recommendation System",
    desc:
      "A machine learning-based recommendation system built on a large-scale H&M dataset. The system analyzes product attributes and user transaction behavior to generate personalized fashion recommendations. It combines clustering (K-Means) and similarity-based search (PCA + Euclidean distance) to suggest visually and semantically similar items in real time.",
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
      "Matplotlib"
    ],
    video: "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/vid_Trim.mp4",
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
      "/douaatech-portfolio/ScreensForProjetcs/RecommendationSystem/Annotation 2026-05-06 014007.png"
    ]
  },

  {
  title: "Employee Task Manager",
  desc:
    "Full-stack task management system where admins assign tasks to employees and track progress in real time. Employees can view assigned tasks and update their status (completed/pending), improving workflow transparency and productivity.",
  tech: [
    "Angular",
    "Spring Boot",
    "Java",
    "REST API",
    "MySQL",
    "SQL Workbench",
    "Bootstrap",
  ],
    video: "/douaatech-portfolio/ScreensForProjetcs/TaskProject/2026-05-06 00-14-31.mp4",
    images: [
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Employee.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/List_Of_Tasks.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/login.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Register.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/task.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/post.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/update.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/updateStatus.png",
      "/douaatech-portfolio/ScreensForProjetcs/TaskProject/Annotation 2026-05-05 235531.png"
    ]
  },
  
  {
  title: "Hotel Management Web Application",
  desc: "Developed a hotel management web application with room reservation, availability filtering, customer account management, and an interactive user dashboard. Designed a responsive and intuitive interface to simplify hotel booking and management operations.",
  tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
  video: "/douaatech-portfolio/ScreensForProjetcs/HotelManagment/20250421_130047.mp4",
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
  ]
},{
  title: "Personal Portfolio Website",
  desc: "Designed and developed a modern responsive portfolio website to showcase my projects, technical skills, and experience. Includes animated UI components, project galleries, smooth navigation, and a contact form integrated with EmailJS for direct communication.",

  tech: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Vite",
    "EmailJS",
    "Framer Motion"
  ],

  github: "https://github.com/douwa299/douaatech-portfolio",

  live: "https://douwa299.github.io/douaatech-portfolio/",

  images: [
    "/douaatech-portfolio/home.png"
  ]
},
];
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-16 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all"
              >
                {/* Image preview (click opens carousel) */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="rounded-lg mb-4 cursor-pointer hover:opacity-80 transition"
                  onClick={() => {
                    setSelectedProject(project);
                    setShowImages(true);
                  }}
                />

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-400 mb-4">{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowDemo(true);
                    }}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View Project ➤
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ================= IMAGE CAROUSEL MODAL ================= */}
      {showImages && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl shadow-2xl border border-white/20 max-w-5xl w-full overflow-hidden">
            {/* Header with title and close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <h3 className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setShowImages(false)}
                className="text-white/70 hover:text-red-400 text-2xl transition-all duration-200 hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Main carousel area */}
            <div className="relative flex items-center justify-center p-6 bg-black/30 min-h-[500px]">
              {/* Left navigation button */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProject.images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 z-10 bg-black/50 hover:bg-black/80 text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                ‹
              </button>

              {/* Current Image */}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="max-h-[65vh] w-auto max-w-full rounded-lg shadow-2xl transition-all duration-300 object-contain"
              />

              {/* Right navigation button */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === selectedProject.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 z-10 bg-black/50 hover:bg-black/80 text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                ›
              </button>
            </div>

            {/* Footer with counter and progress dots */}
            <div className="px-6 py-4 bg-black/40 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-300 text-sm font-mono">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(selectedProject.images.length).padStart(2, '0')}
                </p>
                <div className="flex gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? "w-6 bg-blue-500"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= VIDEO DEMO MODAL ================= */}
      {showDemo && selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl shadow-2xl border border-white/20 max-w-4xl w-full overflow-hidden">
            {/* Header with title and close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-white text-xl font-bold ml-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {selectedProject.title} · Demo
                </h3>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="text-white/70 hover:text-red-400 text-2xl transition-all duration-200 hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative p-6 bg-black/50 flex justify-center items-center">
              <video
                controls
                autoPlay
                className="w-full rounded-lg shadow-2xl"
                poster={selectedProject.images[0]}
              >
                <source src={selectedProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer hint */}
            <div className="px-6 py-3 bg-black/40 border-t border-white/10 text-center">
              <p className="text-gray-400 text-xs font-mono">
                🎬 Watch the full demonstration — use controls to play, pause, or adjust volume.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-10"></div>
    </section>
  );
};