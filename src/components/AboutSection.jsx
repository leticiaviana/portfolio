import { TechCarousel } from "./tech-stakc";

export default function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="py-10 px-6 max-w-6xl mx-auto relative mt-20">
      {/* Botão de voltar */}
      <button 
        onClick={() => onNavigate('hero')}
        className="absolute top-4 left-4 z-20 px-4 py-2 bg-black border-2 border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-500/20 transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] flex items-center gap-2 font-bold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        BACK
      </button>

      {/* Efeito de borda neon ao redor de toda a seção */}
      <div className="absolute -inset-3 rounded-xl border-2 border-cyan-400/50 pointer-events-none z-0">
        {/* Cantos decorados */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
      </div>

      {/* Conteúdo existente (sem alterações) */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-cyan-400 pb-2 text-yellow-100 drop-shadow-cyan-500/100">
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Card original (sem modificações) */}
          <div className="card w-[250px] h-[330px] shrink-0">
            <figure className="relative z-10 w-full h-full flex justify-center items-center">
              <img
                src={
                  new URL("../assets/me-cyberpunk.png", import.meta.url).href
                }
                alt="Cyberpunk portrait"
                className="max-w-[85%] max-h-[85%] object-contain"
              />
            </figure>
          </div>

          {/* Texto original (sem modificações) */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed  text-yellow-100 md:text-left text-center">
              Hi, I’m Letícia Viana — a software developer focused on crafting
              impactful and scalable web experiences. With a strong background
              in front-end development and a growing expertise in full stack
              technologies, I bring together clean code, thoughtful design, and
              a passion for solving real-world problems through technology. I’m
              deeply committed to continuous learning, clean architecture, and
              building systems that are not only functional, but also intuitive
              and meaningful. I value autonomy, creativity, and technical
              excellence. My approach combines logic with empathy, aiming to
              deliver software that serves both users and business goals with
              clarity and purpose. I believe good software is not just about how
              it works — but also about how it feels, communicates, and evolves.
              I’m currently looking for opportunities to collaborate with
              forward-thinking teams on challenging projects, where I can grow
              as a developer and contribute to building the future — one
              meaningful solution at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Efeito de brilho sutil */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-cyan-400/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-cyan-400/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="my-16 text-center relative">
        <blockquote className="text-xl italic text-cyan-300 max-w-2xl mx-auto relative z-10">
          "Like what you do, and then you will do your best."
          <footer className="mt-4 not-italic text-yellow-100 text-sm">
            — Katherine Johnso
          </footer>
  </blockquote>
</div>
    

      <TechCarousel />
    </section>
  );
}


