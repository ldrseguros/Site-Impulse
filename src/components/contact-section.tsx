import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { useRef } from "react";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(62) 99394-4540",
      action: () => window.open('https://wa.me/5562993944540', '_blank'),
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "impulsee.ag@gmail.com",
      action: () => window.open('mailto:impulsee.ag@gmail.com', '_blank'),
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@impulsee.ag",
      action: () => window.open('https://instagram.com/impulsee.ag', '_blank'),
      color: "text-pink-600"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-purple text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Vamos <span className="text-accent">impulsionar</span> sua marca?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
            Entre em contato conosco pelo e-mail <span className="underline">impulsee.ag@gmail.com</span> e descubra como podemos transformar seu marketing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={contact.action}
                className="group flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                  <contact.icon size={28} className="text-white group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">{contact.title}</h4>
                <p className="text-white/80 font-body text-lg">{contact.value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-white/80 text-lg font-body">
              Estamos prontos para impulsionar sua marca. Entre em contato!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};