"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Zap, Target, Play } from "lucide-react";


const microBenefits = [
  { icon: RefreshCw, label: "Sin cambiar de CRM" },
  { icon: Zap, label: "Activación en menos de 48h" },
  { icon: Target, label: "Seguimiento automático de leads" },
];

/* ── Shape layers: back (blurred), mid, front (glass) ── */
type Layer = "back" | "mid" | "front";

interface ShapeConfig {
  w: number;
  h: number;
  rx: number;
  rotate: number;
  left: string;
  top: string;
  layer: Layer;
  duration: number;
  delay: number;
}

const floatingShapes: ShapeConfig[] = [
  // Back layer
  { w: 160, h: 100, rx: 20, rotate: 8, left: "4%", top: "10%", layer: "back", duration: 14, delay: 0 },
  { w: 120, h: 120, rx: 60, rotate: 0, left: "85%", top: "60%", layer: "back", duration: 16, delay: 2 },
  { w: 140, h: 80, rx: 18, rotate: -5, left: "65%", top: "5%", layer: "back", duration: 13, delay: 3 },
  // Mid layer
  { w: 110, h: 70, rx: 14, rotate: 6, left: "10%", top: "55%", layer: "mid", duration: 12, delay: 1 },
  { w: 100, h: 66, rx: 14, rotate: -4, left: "78%", top: "25%", layer: "mid", duration: 11, delay: 2 },
  { w: 80, h: 80, rx: 40, rotate: 0, left: "92%", top: "48%", layer: "mid", duration: 13, delay: 0.5 },
  { w: 90, h: 58, rx: 12, rotate: -7, left: "45%", top: "82%", layer: "mid", duration: 14, delay: 3.5 },
  // Front layer — glass cards
  { w: 100, h: 66, rx: 14, rotate: 5, left: "3%", top: "35%", layer: "front", duration: 10, delay: 0.5 },
  { w: 120, h: 76, rx: 16, rotate: -3, left: "74%", top: "12%", layer: "front", duration: 11, delay: 1.5 },
  { w: 88, h: 56, rx: 12, rotate: -6, left: "84%", top: "70%", layer: "front", duration: 12, delay: 3 },
  { w: 76, h: 50, rx: 12, rotate: 10, left: "16%", top: "8%", layer: "front", duration: 10, delay: 0.8 },
  { w: 64, h: 64, rx: 32, rotate: 0, left: "55%", top: "76%", layer: "front", duration: 11, delay: 4 },
];

const layerStyles: Record<Layer, { peakOpacity: number; blur: string; borderAlpha: number; bgAlpha: number }> = {
  back: { peakOpacity: 0.35, blur: "blur-[4px]", borderAlpha: 0.12, bgAlpha: 0.08 },
  mid: { peakOpacity: 0.5, blur: "blur-[1px]", borderAlpha: 0.18, bgAlpha: 0.1 },
  front: { peakOpacity: 0.65, blur: "", borderAlpha: 0.22, bgAlpha: 0.12 },
};

const FloatingShape = ({ shape }: { shape: ShapeConfig }) => {
  const style = layerStyles[shape.layer];
  const rotDrift = shape.layer === "back" ? 2 : shape.layer === "mid" ? 2.5 : 3;

  return (
    <motion.div
      className={`absolute pointer-events-none will-change-transform ${style.blur}`}
      style={{
        left: shape.left,
        top: shape.top,
        width: shape.w,
        height: shape.h,
      }}
      initial={{ opacity: 0, rotate: shape.rotate }}
      animate={{
        opacity: [0, style.peakOpacity, style.peakOpacity, 0],
        y: [0, -8, -14, 0],
        rotate: [shape.rotate, shape.rotate + rotDrift, shape.rotate - rotDrift, shape.rotate],
      }}
      transition={{
        duration: shape.duration,
        delay: shape.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full backdrop-blur-sm"
        style={{
          borderRadius: shape.rx,
          background: `rgba(200, 230, 255, ${style.bgAlpha})`,
          border: `1px solid rgba(255, 255, 255, ${style.borderAlpha})`,
          boxShadow: `0 0 20px rgba(200, 230, 255, ${style.bgAlpha * 0.5})`,
        }}
      />
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <section
      className="py-28 md:py-36 gradient-hero relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground/[0.03] blur-3xl" />

      {/* Animated floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingShapes.map((shape, i) => (
          <FloatingShape key={i} shape={shape} />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            Deja de perder leads.
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/85 font-display mb-3">
            Convierte tu CRM en un sistema de control comercial real.
          </p>

          {/* Supporting text */}
          <p className="text-primary-foreground/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Tru Sales crea seguimiento automático, métricas de equipo y
            disciplina comercial sin cambiar tu CRM.
          </p>

          {/* Micro-benefits */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
            {microBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-foreground/[0.08] border border-primary-foreground/[0.12] backdrop-blur-sm hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/[0.18] transition-all duration-300 hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.15)]"
              >
                <b.icon
                  className="size-4 text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors"
                  strokeWidth={1.8}
                />
                <span className="text-sm font-medium text-primary-foreground/80 group-hover:text-primary-foreground/95 transition-colors">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <a href="#pricing">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-10 py-6 text-lg shadow-[0_0_30px_-4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_-2px_rgba(255,255,255,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                Activar Tru Sales
              </Button>
            </a>
            <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
              <button className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground/90 backdrop-blur-md bg-primary-foreground/[0.06] border border-primary-foreground/[0.15] transition-all duration-250 hover:-translate-y-[2px] hover:bg-primary-foreground/[0.10] hover:border-primary-foreground/[0.28] hover:text-primary-foreground hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.2),0_0_8px_-2px_hsl(180_100%_42%/0.25)]">
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none border border-transparent [background:linear-gradient(hsl(180_100%_55%/0.25),hsl(220_100%_60%/0.25))_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]" />
                <Play className="size-4 fill-primary-foreground/60 text-primary-foreground/60 group-hover:fill-primary-foreground/80 group-hover:text-primary-foreground/80 transition-colors duration-250" strokeWidth={1.5} />
                Agendar Demo primero
              </button>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 text-xs md:text-sm text-primary-foreground/40 tracking-wide"
          >
            Instalación guiada · Sin migraciones · Compatible con tu CRM actual
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
