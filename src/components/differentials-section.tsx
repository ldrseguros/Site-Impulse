import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, Award, Shield } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Foco em ROI Real",
    description: "Não prometemos milagres. Entregamos resultados mensuráveis e sustentáveis."
  },
  {
    icon: Zap,
    title: "Agilidade Estratégica",
    description: "Implementação rápida sem perder qualidade. Seus concorrentes não vão esperar."
  },
  {
    icon: Users,
    title: "Time Especializado",
    description: "Profissionais certificados em cada área, não generalistas fazendo de tudo."
  },
  {
    icon: TrendingUp,
    title: "Otimização Contínua",
    description: "Monitoramento 24/7 e ajustes constantes para maximizar performance."
  },
  {
    icon: Award,
    title: "Transparência Total",
    description: "Relatórios detalhados, acesso às contas e comunicação direta sempre."
  },
  {
    icon: Shield,
    title: "Compromisso com Resultado",
    description: "Somos parceiros do seu sucesso, não apenas prestadores de serviço."
  }
];

export const DifferentialsSection = () => {
  return (
    <section id="differentials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple mb-4">
            Por que escolher a <span className="text-accent">Impulse</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não somos mais uma agência. Somos seus parceiros de crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};