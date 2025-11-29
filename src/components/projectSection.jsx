const projects = [
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe"
  },
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe"
  },
  {
    title: "Incomplete",
    description: "soon",
    tags: ["Web App", "Saúde", "IA"],
    link: "https://exemplo.com/apohe"
  },
];

export default function ProjectsSection({ onNavigate }) {
  return (
    <section id="projects" className="py-50 px-6 bg-gray-900/50 relative">
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
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border-2 border-cyan-400/30 bg-gray-900 p-6 transition-all hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {/* Efeito de hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Conteúdo do card */}
              <div className="relative z-10">
                {/* Título com efeito */}
                <h3 className="text-2xl font-mono font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
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
                      className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-300 border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Botão */}
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-200 transition-colors">
                  <span className="mr-2 font-mono text-sm">ACESSAR</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
              
              {/* Efeito nos cantos */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}