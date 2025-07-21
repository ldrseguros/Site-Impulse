import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Impulse | Agência de Marketing Criativo com Foco em Performance";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Agência de marketing digital especializada em Instagram, tráfego pago, SEO local e landing pages. Conectamos criatividade com performance para fazer sua marca crescer de verdade.');
    }

    // Structured Data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Impulse Marketing",
      "description": "Agência de marketing criativo com foco em performance",
      "url": "https://impulse.com.br",
      "telephone": "+5562993944540",
      "email": "contato@impulse.com.br",
      "sameAs": ["https://instagram.com/impulse"],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "service": [
        "Gestão de Instagram",
        "Tráfego Pago",
        "SEO Local", 
        "Landing Pages"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <WhatsAppFloat />
      <footer className="bg-purple text-white py-12 mt-0 flex flex-col items-center justify-center">
        <p className="text-lg font-medium mb-2">Impulse Marketing © {new Date().getFullYear()}</p>
        <p className="text-sm opacity-80">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
