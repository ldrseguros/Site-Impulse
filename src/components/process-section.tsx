import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Análise profunda do seu negócio, concorrência e oportunidades de mercado.",
    duration: "1-2 semanas",
    deliverables: ["Auditoria completa", "Análise da concorrência", "Mapeamento de oportunidades"]
  },
  {
    step: "02", 
    icon: Lightbulb,
    title: "Estratégia",
    description: "Desenvolvimento da estratégia personalizada baseada nos dados coletados.",
    duration: "1 semana",
    deliverables: ["Plano estratégico", "Cronograma de execução", "KPIs definidos"]
  },
  {
    step: "03",
    icon: Rocket,
    title: "Execução",
    description: "Implementação das ações com acompanhamento diário e ajustes em tempo real.",
    duration: "Contínuo",
    deliverables: ["Campanhas ativas", "Conteúdo criativo", "Otimizações diárias"]
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Otimização",
    description: "Análise de resultados e refinamento constante para maximizar performance.",
    duration: "Contínuo",
    deliverables: ["Relatórios semanais", "Análise de ROI", "Melhorias implementadas"]
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple mb-4">
            Nosso Processo de <span className="text-accent">Trabalho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia testada e aprovada para entregar resultados consistentes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-purple text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>

                <div className="bg-card border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <span className="text-accent font-semibold text-sm">
                        Duração: {step.duration}
                      </span>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Entregas:
                      </h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};