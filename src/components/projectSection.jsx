import { useState, useEffect } from "react";

const projects = [
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe",
    locked: true
  },
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe",
    locked: true
  },
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe",
    locked: true
  },
];

export default function ProjectsSection({ onNavigate }) {
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (e, project) => {
    if (project.locked) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  return (
    <section id="projects" className="py-50 px-6 bg-gray-900/50 relative">
      {/* Modal Cyberpunk de Projeto Bloqueado - Versão Mobile-Friendly */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Container principal - mais compacto */}
            <div className="relative border-2 border-red-500 bg-gray-900 p-6 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
              {/* Cantos decorativos - menores */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-400"></div>
              
              {/* Ícone de bloqueio - menor */}
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              
              {/* Texto de aviso - mais compacto */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-red-400 font-mono">
                  [LOCKED]
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This project is still under development.
                </p>
                <p className="text-cyan-400 font-mono text-xs">
                  {'>'} return_later();
                </p>
              </div>
              
              {/* Botão de fechar - mais compacto */}
              <button
                onClick={closeModal}
                className="mt-6 w-full py-2 bg-red-900/50 border border-red-500 text-red-400 font-mono text-sm font-bold hover:bg-red-500/20 hover:text-red-300 transition-all active:scale-95"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botão de voltar */}
      <button 
        onClick={() => onNavigate('hero')}
        className="absolute top-8 left-8 z-20 px-4 py-2 bg-black border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-500/20 transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] flex items-center gap-2 font-bold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        BACK
      </button>

      {/* Efeitos de fundo */}
      <div className="absolute inset-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-cyan-300 border-b-2 border-cyan-400/50 pb-2 inline-block">
          PROJECTS_
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.locked ? "#" : project.link}
              onClick={(e) => handleProjectClick(e, project)}
              target={project.locked ? undefined : "_blank"}
              rel={project.locked ? undefined : "noopener noreferrer"}
              className={`group relative overflow-hidden rounded-lg border-2 ${
                project.locked 
                  ? 'border-red-400/30 bg-gray-900 cursor-not-allowed' 
                  : 'border-cyan-400/30 bg-gray-900 cursor-pointer'
              } p-6 transition-all ${
                project.locked 
                  ? 'hover:border-red-400 hover:shadow-lg hover:shadow-red-400/20' 
                  : 'hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
              }`}
            >
              {/* Badge de bloqueado */}
              {project.locked && (
                <div className="absolute top-3 right-3 z-20">
                  <div className="relative">
                    <svg className="w-6 h-6 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                </div>
              )}

              {/* Efeito de hover */}
              <div className={`absolute inset-0 ${
                project.locked 
                  ? 'bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1)_0%,_transparent_70%)]' 
                  : 'bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1)_0%,_transparent_70%)]'
              } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Conteúdo do card */}
              <div className="relative z-10">
                {/* Título com efeito */}
                <h3 className={`text-2xl font-mono font-bold mb-3 ${
                  project.locked 
                    ? 'text-red-400 group-hover:text-red-300' 
                    : 'text-cyan-400 group-hover:text-cyan-300'
                } transition-colors`}>
                  {project.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-300 mb-5 group-hover:text-gray-100 transition-colors">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs font-mono px-3 py-1 rounded-full ${
                        project.locked
                          ? 'bg-red-900/50 text-red-300 border border-red-400/30'
                          : 'bg-cyan-900/50 text-cyan-300 border border-cyan-400/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Botão */}
                <div className={`flex items-center ${
                  project.locked 
                    ? 'text-red-400 group-hover:text-red-200' 
                    : 'text-cyan-400 group-hover:text-cyan-200'
                } transition-colors`}>
                  <span className="mr-2 font-mono text-sm">
                    {project.locked ? 'LOCKED' : 'ACESSAR'}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {project.locked ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    )}
                  </svg>
                </div>
              </div>
              
              {/* Efeito nos cantos */}
              <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 ${
                project.locked ? 'border-red-400' : 'border-cyan-400'
              } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 ${
                project.locked ? 'border-red-400' : 'border-cyan-400'
              } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}