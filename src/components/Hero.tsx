import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🔥 scroll suave (mesmo padrão do navbar)
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-backgroun to-background/80"
    >
      {/* 🔥 GLOW (AGORA ATRÁS DE TUDO) */}
      <div
        ref={glowRef}
        className="glow-effect absolute z-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: "transform 0.3s ease-out",
          opacity: 0.6,
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={logo}
            alt="RC Tech Logo"
            className="h-40 md:h-56 w-auto mx-auto mb-8 object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6 text-balance"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          RC Tech – Serviços{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            E-commerce
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Criamos soluções digitais modernas, rápidas e profissionais para o seu negócio.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() => handleScroll("#projetos")}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-150 flex items-center gap-2"
          >
            Ver Projetos <ArrowRight size={18} />
          </button>

          <button
            onClick={() => handleScroll("#contato")}
            className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors duration-150"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;