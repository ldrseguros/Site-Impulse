import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowDown } from "lucide-react";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Menu de navegação */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md py-3 px-6 flex items-center text-white font-medium shadow-md">
        <a href="#" className="flex items-center gap-2 group mr-8">
          <img src="/Logo_Impulse_Branca-02.png" alt="Logo Impulse" className="h-10 w-auto drop-shadow-lg transition-transform duration-200 group-hover:scale-105" />
        </a>
        <div className="flex-1 flex justify-center">
          <div className="flex gap-6">
            <a href="#services" className="hover:text-accent transition-colors duration-200">Serviços</a>
            <a href="#differentials" className="hover:text-accent transition-colors duration-200">Diferenciais</a>
            <a href="#process" className="hover:text-accent transition-colors duration-200">Processo</a>
            <a href="#about" className="hover:text-accent transition-colors duration-200">Sobre</a>
            <a href="#faq" className="hover:text-accent transition-colors duration-200">FAQ</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-200">Contato</a>
          </div>
        </div>
      </nav>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video_landing_page.mp4"
        autoPlay
        muted
        playsInline
      />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-30">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-white/15 backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-40 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-6 leading-tight"
        >
          Impulso certo,
          <br />
          <span className="text-accent">no momento certo</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-body leading-relaxed"
        >
          Conectamos criatividade com performance para fazer sua marca crescer de verdade.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 items-center w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button 
              variant="whatsapp" 
              size="lg"
              className="px-8 py-4 text-lg hover-glow"
              onClick={() => window.open('https://wa.me/5562993944540', '_blank')}
            >
              <MessageCircle className="mr-2" />
              FALE NO WHATSAPP
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => window.open('mailto:impulsee.ag@gmail.com', '_blank')}
            >
              <Mail className="mr-2" />
              ENVIE UM E-MAIL
            </Button>
          </div>
          {/* Seta animada */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center w-full mt-2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 cursor-pointer"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};