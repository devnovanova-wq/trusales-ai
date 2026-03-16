"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo funciona Tru Sales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            En 3 minutos verás cómo Tru Sales convierte tu CRM en una máquina de rendimiento comercial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card aspect-video mb-12"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/RySichnmmk8?si=XEsk3xjA1Jdj44hZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#pricing">
            <Button variant="cta" size="lg" className="rounded-full px-8">
              Reservar Instalación (1€)
            </Button>
          </a>
          <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
            <Button variant="ctaOutline" size="lg" className="rounded-full px-8">
              Agendar DEMO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
