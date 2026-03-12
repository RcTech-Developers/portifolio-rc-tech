import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="RC Tech Logo" 
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            RC<span className="text-primary">Tech</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-150"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground-muted hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center hover:bg-primary/90 transition-colors duration-150"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
