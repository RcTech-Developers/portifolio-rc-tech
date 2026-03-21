import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Loja virtual completa com painel administrativo e integração de pagamento.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    link: "https://rsportsrj.com.br/"
  },
  {
    title: "App de Filme",
    description: "Aplicativo mobile para exibir sinopses, filtrá-los por gênero, buscar por título e marcar favoritos.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=340&fit=crop",
    link: "https://www.canva.com/design/DAHEiBA9j98/4K-193cKlFQWuD2rdLBAmQ/edit?utm_content=DAHEiBA9j98&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    title: "Dashboard Financeiro",
    description: "Painel de controle financeiro com gráficos e relatórios automatizados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    link: "https://bakery-manager-cz7c.onrender.com/"
  },
  {
    title: "Design Profissional",
    description: "Design profissional focado em atrair atenção, comunicar valor e gerar resultados.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=340&fit=crop",
    link: "https://drive.google.com/file/d/1f8xgdF78mNJnd2Szp1TGRdQx3Z2tLGID/preview"
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Projects = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground-muted mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-150 flex items-center gap-1.5 font-medium"
                >
                  Ver Projeto <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
