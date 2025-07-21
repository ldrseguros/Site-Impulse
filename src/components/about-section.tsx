import { motion, useInView } from "framer-motion";
import { Heart, Lightbulb, Users, Shield } from "lucide-react";
import { useRef } from "react";

const values = [
  { icon: Shield, title: "Ética", description: "Transparência e honestidade em todas as relações" },
  { icon: Lightbulb, title: "Inovação", description: "Sempre buscando soluções criativas e eficientes" },
  { icon: Users, title: "Colaboração", description: "Parceria verdadeira com nossos clientes" },
  { icon: Heart, title: "Paixão", description: "Amor genuíno pelo que fazemos" }
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple mb-8">
            Quem <span className="text-accent">Somos</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="p-8 bg-card rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-bold font-heading text-primary mb-4">Missão</h3>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Entregar soluções de marketing que gerem <strong className="text-accent">valor real</strong> e 
                  conexão genuína com o público.
                </p>
              </div>

              <div className="p-8 bg-card rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-bold font-heading text-primary mb-4">Visão</h3>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Inspirar um novo jeito de fazer marketing: mais <strong className="text-accent">humano</strong>, 
                  mais <strong className="text-accent">inteligente</strong> e mais <strong className="text-accent">eficiente</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-10 blur-xl" />
              <div className="relative bg-card p-8 rounded-3xl shadow-xl border border-border/50">
                <h3 className="text-2xl font-bold font-heading text-primary mb-8 text-center">Nossos Valores</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center group"
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                      >
                        <value.icon size={24} />
                      </motion.div>
                      <h4 className="font-semibold font-heading text-primary mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground font-body leading-tight">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};