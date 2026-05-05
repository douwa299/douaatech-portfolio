
import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";




function App() {



  const [isLoaded, setIsLoaded]=useState(false);
  const [menuOpen, setMenuOpen]=useState(false);

  // App loads
  // ↓
  // isLoaded = false
  // ↓
  // LoadingScreen appears
  // ↓
  // Typing animation starts
  // ↓
  // Text finishes
  // ↓
  // Wait 1 second
  // ↓
  // onComplete()
  // ↓
  // setIsLoaded(true)
  // ↓
  // App re-renders
  // ↓
  // LoadingScreen disappears
  return <>


  {/* We need to show the loadingscreen only  if the content is not shown yet 
    For that we nee da state to keep track of the content whether it was loaded or not */}
        {!isLoaded &&  <LoadingScreen onComplete={()=>{  setIsLoaded(true)}} />}
          <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100` }>
                <Navbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen}  setMenuOpen={setMenuOpen} />
                {isLoaded && <Home />}
                <About />
                <Projects />

                <Contact />
          </div>
  </>;
}

export default App;
