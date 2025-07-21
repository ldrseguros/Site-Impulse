import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.4)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
        onClick={() => window.open('https://wa.me/5562993944540', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-200" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};