import { Github, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="RC Tech Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-foreground font-bold text-lg">
              RC<span className="text-primary">Tech</span>
            </span>
          </div>
          <p className="text-sm text-foreground-muted text-center md:text-left">
            RC Tech – Desenvolvimento de Sites e Aplicativos Profissionais
          </p>
          <p className="text-xs text-foreground-muted/70">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Github, href: "#" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={Icon.displayName}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-card card-shadow flex items-center justify-center text-foreground-muted hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
