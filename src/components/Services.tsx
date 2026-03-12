import { motion } from "framer-motion";
import { Globe, Smartphone, Settings, FileText, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description: "Sites modernos, responsivos e otimizados para conversão e performance.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Apps nativos e híbridos para iOS e Android com design intuitivo.",
  },
  {
    icon: Settings,
    title: "Sistemas Web Personalizados",
    description: "Soluções sob medida para automatizar e escalar o seu negócio.",
  },
  {
    icon: FileText,
    title: "Landing Pages para Marketing",
    description: "Páginas de alta conversão para campanhas e captação de leads.",
  },
  {
    icon: Zap,
    title: "Otimização e Performance",
    description: "Melhorias de velocidade, SEO e experiência do usuário.",
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

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Soluções completas para levar o seu negócio ao próximo nível digital.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-150">
                <service.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
