export default function HeroSection({ onNavigate }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b">
      <section>
        <div class="hero-container text-5xl md:text-7xl font-bold tracking-tight">
          <div class="environment"></div>
          <h2 class="hero glitch layers" data-text="LETICIA VIANA">
            <span>LETICIA VIANA</span>
          </h2>
        </div>
      </section>

      <p className="text-xl md:text-2xl mb-50 text-yellow-100 max-w-2xl drop-shadow-lg drop-shadow-cyan-500/100">
        Turning ideas into real life projects.
      </p>

      <div className="flex flex-wrap justify-center gap-6 buttons mb-20">
        <button 
          onClick={() => onNavigate('projects')}
          className="px-8 py-3 bg-black text-cyan-300 rounded-full border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-black/80 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 font-bold"
        >
          PROJECTS
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className="px-8 py-3 bg-black text-magenta-300 rounded-full border-2 border-magenta-500/50 hover:border-magenta-400 hover:bg-black/80 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:scale-105 font-bold"
        >
          ABOUT 
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-8 py-3 bg-black text-yellow-300 rounded-full border-2 border-yellow-500/50 hover:border-yellow-400 hover:bg-black/80 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:scale-105 font-bold"
        >
          CONTACT
        </button>
      </div>
    </section>
  );
}
