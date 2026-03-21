"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnalyticsBackground from "./AnalyticsBackground";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background móvil ligero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,95%)] via-[hsl(215,55%,91%)] to-[hsl(220,50%,88%)] md:hidden" />

      {/* Background SaaS visual SOLO desktop */}
      <div className="hidden md:block">
        <AnalyticsBackground />
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-xl">

          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Image
              src="/assets/trusales-logo-hero.webp"
              alt="Tru Sales"
              width={120}
              height={48}
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-[3.8rem] font-bold leading-[1.05] mb-6 tracking-tight"
          >
            <span className="whitespace-nowrap">
              Tu equipo pierde leads
            </span>
            <br />
            <span className="text-gradient-hero">
              aunque use CRM
            </span>
          </motion.h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-semibold text-foreground/80 mb-4">
  <span className="relative inline-block">
    Convierte oportunidades en ventas consistentes.
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 opacity-40"></span>
  </span>
</p>

          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-foreground/60 mb-8 leading-relaxed"
          >
            Detecta en tiempo real qué leads no están siendo atendidos 
            y actúa antes de perderlos.
          </motion.p>

          {/* Botones */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#pricing">
              <Button 
                variant="cta" 
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-lg hover:scale-105 transition"
              >
                Reservar Instalación (1€)
              </Button>
            </a>

            <a href="#video">
              <Button 
                variant="ctaOutline" 
                size="lg"
                className="rounded-full px-8 py-6 text-base hover:bg-primary/10 transition"
              >
                Agendar DEMO
              </Button>
            </a>
          </motion.div>

          {/* Trust / microcopy */}
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xs text-foreground/50"
          >
            Instalación en 48h · Sin compromiso · Compatible con tu CRM
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;