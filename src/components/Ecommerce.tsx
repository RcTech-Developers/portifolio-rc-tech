import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import novaGeracao from "@/assets/logoo-bg.png";
import Rsports from "@/assets/Rsports.png";

const projects = [
  {
    title: "R'Sports",
    description: "Número 1 em vendas de camisas de time Rj",
    image: Rsports,
    link: "https://rsportsrj.com.br/",
  },
  {
    title: "Nova Geração - Landing Page",
    description: "Melhor time Fut7 da região",
    image: novaGeracao,
    link: "https://nova-geracao-landing.vercel.app/",
  },
];

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto">
          
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            E-commerce <span className="text-primary">Moderno</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="text-sm text-primary hover:text-primary/80 flex items-center gap-1.5 font-medium"
                  >
                    Ver Projeto <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;