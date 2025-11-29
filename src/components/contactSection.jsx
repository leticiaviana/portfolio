import React, { useState } from "react";

export default function ContactSection({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio (substitua pela sua API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-50 px-6 bg-gray-900/80 relative overflow-hidden"
    >
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
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-400/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título com efeito de terminal */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-cyan-300 mb-2 font-mono">
            $ contact --submit
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent"></div>
        </div>

        {/* Container do formulário */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div className="relative group">
              <label
                htmlFor="name"
                className="block text-cyan-300 text-sm font-mono mb-1"
              >
                /name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-800 border-b-2 border-cyan-400/50 py-2 px-1 text-yellow-100 focus:border-cyan-400 focus:outline-none transition-colors"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Campo Email */}
            <div className="relative group">
              <label
                htmlFor="email"
                className="block text-cyan-300 text-sm font-mono mb-1"
              >
                /email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-800 border-b-2 border-cyan-400/50 py-2 px-1 text-yellow-100 focus:border-cyan-400 focus:outline-none transition-colors"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Campo Mensagem */}
            <div className="relative group">
              <label
                htmlFor="message"
                className="block text-cyan-300 text-sm font-mono mb-1"
              >
                /menssage
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-gray-800 border-b-2 border-cyan-400/50 py-2 px-1 text-yellow-100 focus:border-cyan-400 focus:outline-none transition-colors"
                required
              ></textarea>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 border-2 ${
                isSubmitting
                  ? "border-purple-400 text-purple-400"
                  : "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              } rounded-lg font-mono flex items-center gap-2 transition-all`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">ENVIANDO...</span>
                  <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                </>
              ) : (
                <>
                  <span>EXECUTE</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    ></path>
                  </svg>
                </>
              )}
            </button>

            {/* Status do envio */}
            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-400 text-green-300 rounded-lg animate-fade-in">
                ✓ Mensagem transmitida com sucesso!
              </div>
            )}
          </form>

          {/* Informações de contato alternativas */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-mono text-cyan-300 mb-6">
                OUTROS CANAIS_
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:leticia.dev@exemplo.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-400/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/20 transition">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-yellow-100 group-hover:text-cyan-300 transition">
                    leticia.paulams@gmail.com
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/leticia-paixao"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-400/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/20 transition">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-yellow-100 group-hover:text-cyan-300 transition">
                    /in/leticiaviana
                  </span>
                </a>

                <a
                  href="https://github.com/leticiaviana"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-400/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/20 transition">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-yellow-100 group-hover:text-cyan-300 transition">
                    /leticiaviana
                  </span>
                </a>
              </div>
            </div>

            {/* QR Code estilizado */}
            <div className="mt-8 p-4 bg-gray-800/50 border border-cyan-400/30 rounded-lg inline-flex flex-col items-center self-end">
              <div className="w-30 h-30 bg-white p-1 mb-2">
                {/* Substitua pelo seu QR Code real */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-center">
                  <figure className="relative z-10 w-full h-full flex justify-center items-center">
                    <img
                      src={
                        new URL(
                          "../assets/unitag_qrcode_linkedin.png",
                          import.meta.url
                        ).href
                      }
                      alt="Cyberpunk portrait"
                      className="max-w-[100%] max-h-[100%] object-contain"
                    />
                  </figure>
                </div>
              </div>
              <span className="text-xs text-cyan-300 font-mono">SCAN ME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
