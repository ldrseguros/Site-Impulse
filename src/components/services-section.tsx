import { motion, useInView } from "framer-motion";
import { Instagram, Target, Search, Monitor } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Instagram,
    title: "Gestão de Instagram",
    description: "Estética, conteúdo e conversão real para engajar seu público e gerar resultados."
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Alcance qualificado e otimizado para maximizar ROI e conversões."
  },
  {
    icon: Search,
    title: "SEO Local",
    description: "Ranqueamento estratégico para quem procura por você na sua região."
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    description: "Páginas focadas em conversão e performance para seus negócios."
  }
];

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--impulse-blue)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-white">Serviços de </span><span className="text-accent">Performance</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-body">
            Estratégias integradas que conectam criatividade com resultados mensuráveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30 h-full">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                >
                  <service.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold font-heading text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};