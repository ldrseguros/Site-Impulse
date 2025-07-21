import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Qual o investimento mínimo para começar?",
    answer: "O investimento varia conforme o escopo do projeto. Nossos pacotes começam a partir de R$ 2.500/mês e incluem estratégia, execução e relatórios. Fazemos uma proposta personalizada após o diagnóstico inicial gratuito."
  },
  {
    question: "Em quanto tempo vejo os primeiros resultados?",
    answer: "Resultados iniciais aparecem entre 30-60 dias, dependendo da estratégia. Para tráfego pago, os primeiros leads chegam em 7-14 dias. SEO local demora 2-3 meses. Sempre definimos expectativas realistas no início do projeto."
  },
  {
    question: "Vocês trabalham com qual tipo de empresa?",
    answer: "Atendemos empresas de todos os portes: startups, PMEs e grandes corporações. Nossos melhores resultados são com negócios que valorizam marketing estratégico e têm foco em crescimento sustentável."
  },
  {
    question: "Como é feito o acompanhamento dos resultados?",
    answer: "Relatórios semanais detalhados, dashboards em tempo real e reuniões mensais de alinhamento. Você tem acesso direto às ferramentas e pode acompanhar a performance 24/7."
  },
  {
    question: "Posso cancelar o serviço a qualquer momento?",
    answer: "Sim, trabalhamos sem fidelidade. Acreditamos que bons resultados falam por si só. Pedimos apenas 30 dias de aviso prévio para organizar a transição adequada dos projetos."
  },
  {
    question: "Vocês criam o conteúdo ou eu preciso fornecer?",
    answer: "Criamos todo o conteúdo: textos, imagens, vídeos e designs. Temos uma equipe criativa completa. Você só precisa aprovar e fornecer informações sobre seu negócio quando solicitado."
  },
  {
    question: "Como funciona a gestão do Instagram?",
    answer: "Cuidamos de tudo: estratégia de conteúdo, criação de posts, stories, reels, interação com seguidores, análise de métricas e otimização constante. Você só precisa aprovar o cronograma mensal."
  },
  {
    question: "Garantem algum resultado específico?",
    answer: "Não prometemos números mágicos, mas garantimos dedicação total, transparência completa e estratégias baseadas em dados. Nosso histórico mostra média de 300% de ROI para clientes que seguem nossas recomendações."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-purple mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-purple">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e processos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 font-heading">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? "auto" : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Não encontrou sua pergunta? Fale conosco diretamente!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/5562993944540', '_blank')}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              WhatsApp Direto
            </button>
            <button
              onClick={() => window.open('mailto:contato@impulse.com.br', '_blank')}
              className="px-6 py-3 border border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Enviar E-mail
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};