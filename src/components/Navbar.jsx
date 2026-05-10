import { useEffect } from "react";

export const Navbar = ( {menuOpen,setMenuOpen}) => {



        // To kkep track of the body content if its  on a phone it ll not show the menu it ll show a icone of the menu  
        // Keeps track of the overflow of the body content 
        useEffect(()=>{
            document.body.style.overflow=menuOpen ? "hidden" : "";
        },[menuOpen]);




  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            douwa<span className="text-blue-500">.tech</span>{" "}
          </a>
          {/* mobile menu */}
          {/* We're making menu for phone users once opened on a phone the mennu will not show itll show an icone  */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"   onClick={()=> setMenuOpen((prev)=>!prev)}>
            &#9776;
          </div>
          {/* laptop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a
            href="/douaatech-portfolio/RealCv.pdf"
            download
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Download my CV
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
