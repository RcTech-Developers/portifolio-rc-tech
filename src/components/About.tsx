import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Sites profissionais e responsivos",
  "Aplicativos para iOS e Android",
  "Sistemas personalizados sob medida",
  "Suporte técnico dedicado",
];

const About = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Sobre a <span className="text-primary">RC Tech</span>
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6 max-w-lg">
              Somos uma empresa especializada em desenvolvimento digital, criando sites profissionais, aplicativos móveis e sistemas personalizados que impulsionam resultados reais para nossos clientes.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-8 max-w-lg">
              Com foco em qualidade, performance e design moderno, transformamos ideias em soluções digitais que geram valor para o seu negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "Projetos Entregues" },
                { number: "99.8%", label: "Uptime Garantido" },
                { number: "+200%", label: "Em Conversões" },
                { number: "24/7", label: "Suporte Técnico" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 card-shadow text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-xs text-foreground-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
