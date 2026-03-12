import { motion } from "framer-motion";
import { Send, MessageCircle, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${form.name}. ${form.message}`
    );
    window.open(`https://wa.me/5500000000000?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Pronto para transformar sua ideia em realidade? Fale conosco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition-all duration-150"
            />
            <input
              type="email"
              placeholder="Seu email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition-all duration-150"
            />
            <textarea
              placeholder="Sua mensagem"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 transition-all duration-150 resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-150 flex items-center justify-center gap-2"
            >
              Enviar Mensagem <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col gap-6 justify-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-green-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                <div className="text-xs text-foreground-muted">Fale conosco agora</div>
              </div>
            </a>

            <a
              href="mailto:contato@rctech.com.br"
              className="flex items-center gap-4 bg-card rounded-2xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-250"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Email</div>
                <div className="text-xs text-foreground-muted">contato@rctech.com.br</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
