"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,95%)] via-[hsl(215,55%,91%)] to-[hsl(220,50%,88%)]" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">

          <div className="mb-8">
            <Image
              src="/assets/trusales-logo-hero.png"
              alt="Tru Sales"
              width={120}
              height={48}
              priority
            />
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.06] mb-6">
            <span className="whitespace-nowrap">Tu equipo pierde leads</span>
            <br />
            <span className="text-gradient-hero">aunque use CRM</span>
          </h1>

          <p className="text-lg md:text-xl font-semibold mb-4">
            Convierte oportunidades en ventas consistentes.
          </p>

          <p className="text-base text-foreground/70 mb-8 max-w-lg">
            Detecta en tiempo real qué leads no están siendo atendidos y actúa antes de perderlos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#pricing">
              <Button variant="cta" size="lg">
                Reservar Instalación (1€)
              </Button>
            </a>
            <a href="#video">
              <Button variant="ctaOutline" size="lg">
                Agendar DEMO
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;