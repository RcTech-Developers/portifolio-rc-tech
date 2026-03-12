import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Oliveira",
    role: "CEO, Oliveira & Associados",
    text: "A RC Tech transformou nossa presença digital. O site ficou incrível e as conversões aumentaram mais de 200%.",
  },
  {
    name: "Ana Beatriz",
    role: "Gerente de Marketing, StartUp X",
    text: "Profissionalismo e qualidade impecáveis. O aplicativo entregue superou todas as nossas expectativas.",
  },
  {
    name: "Rafael Santos",
    role: "Diretor, Santos Imóveis",
    text: "Equipe dedicada e resultado excelente. Nosso sistema web otimizou processos internos de forma significativa.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            O que nossos <span className="text-primary">Clientes</span> dizem
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-card rounded-2xl p-6 card-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-foreground-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
