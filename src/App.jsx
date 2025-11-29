import { useState } from "react";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/projectSection";
import ContactSection from "./components/contactSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToSection = (section) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    
    // Duração do efeito glitch
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 p-1 font-sans overflow-hidden">
      {/* Efeito de glitch overlay durante transição */}
      {isTransitioning && (
        <>
          {/* Scanlines e ruído APENAS durante transição */}
          <div className="scanlines"></div>
          <div className="noise"></div>
          
          <div className="fixed inset-0 z-50 glitch-overlay animate-glitch-1"></div>
          <div className="fixed inset-0 z-50 glitch-overlay animate-glitch-2"></div>
          <div className="fixed inset-0 z-50 glitch-overlay animate-glitch-3"></div>
          <div className="fixed inset-0 z-50 bg-black/60 animate-pulse"></div>
          
          {/* Flash de cores cyberpunk */}
          <div className="fixed inset-0 z-50 bg-gradient-to-br from-cyan-500/30 via-transparent to-magenta-500/30 animate-pulse"></div>
          
          {/* Linhas de interferência */}
          <div className="fixed inset-0 z-50 opacity-70">
            <div className="absolute w-full h-1 bg-cyan-400/80 top-1/4 animate-pulse"></div>
            <div className="absolute w-full h-1 bg-magenta-400/80 top-1/2 animate-pulse" style={{animationDelay: '0.15s'}}></div>
            <div className="absolute w-full h-1 bg-cyan-400/80 top-3/4 animate-pulse" style={{animationDelay: '0.3s'}}></div>
          </div>
        </>
      )}

      <div className="relative z-10 min-h-screen text-gray-200">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {activeSection === "hero" && <HeroSection onNavigate={navigateToSection} />}
          {activeSection === "about" && <AboutSection onNavigate={navigateToSection} />}
          {activeSection === "projects" && <ProjectsSection onNavigate={navigateToSection} />}
          {activeSection === "contact" && <ContactSection onNavigate={navigateToSection} />}
        </div>
      </div>
    </div>
  );
}