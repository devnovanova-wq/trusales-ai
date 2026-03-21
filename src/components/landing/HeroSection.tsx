"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnalyticsBackground from "./AnalyticsBackground";

/* ─── HeroSection ─── */
const HeroSection = () => {

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── Mobile gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,95%)] via-[hsl(215,55%,91%)] to-[hsl(220,50%,88%)] md:hidden" />
      {/* ── Analytics-style product background (desktop only) ── */}
      <AnalyticsBackground />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
            <img
  src="/assets/trusales-logo-hero.png"
  alt="Tru Sales"
  className="h-12 w-auto"
/>
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-foreground leading-[1.06] tracking-tight mb-4 md:mb-6"
>
  <span className="whitespace-nowrap">
    Tu equipo pierde leads
  </span>
  <br />
  <span className="text-gradient-hero">
    aunque use CRM
  </span>
</motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground/80 mb-4 md:mb-5">
            Convierte oportunidades <span className="text-gradient-hero">en ventas consistentes</span>.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-lg text-foreground/60 mb-8 md:mb-10 leading-relaxed max-w-lg">
            Tru Sales se conecta a tu CRM y detecta oportunidades antes de que las pierdas.<br/> Cada comercial sabe cuándo responder. <br/> Ninguna oportunidad se vuelve a escapar.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
            <a href="#pricing">
              <Button variant="cta" size="lg" className="rounded-full px-8 py-6 text-base gap-2">
                Reservar Instalación (1€) <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#video">
              <Button variant="ctaOutline" size="lg" className="rounded-full px-8 py-6 text-base">
                Agendar DEMO
              </Button>
            </a>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 text-xs text-foreground/30 tracking-widest uppercase">
            Compatible con tu CRM y Equipo de Ventas - Sea cual sea
          </motion.p>
        </div>
      </div>
    </section>);

};

export default HeroSection;