import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-foreground-muted">
          © {new Date().getFullYear()} RC<span className="text-primary font-semibold">Tech</span>. Todos os direitos reservados.
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
