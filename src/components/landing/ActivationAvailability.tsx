"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, AlertTriangle } from "lucide-react";
import { useActivationSlots } from "@/hooks/use-activation-slots";
import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

const CountdownDigit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <motion.div
      animate={{
        boxShadow: [
          "0 0 15px 0px hsl(var(--primary) / 0.15)",
          "0 0 25px 4px hsl(var(--primary) / 0.3)",
          "0 0 15px 0px hsl(var(--primary) / 0.15)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-16 h-18 sm:w-20 sm:h-22 rounded-xl bg-card border border-primary/20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 14, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -14, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="font-display text-3xl sm:text-4xl font-black text-foreground relative z-10"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </motion.div>
    <span className="text-[10px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-widest font-semibold">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <motion.span
    animate={{ opacity: [1, 0.3, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
    className="text-2xl sm:text-3xl font-black text-primary/60 mt-2 mx-1"
  >
    :
  </motion.span>
);

const ActivationAvailability = () => {
  const [mounted, setMounted] = useState(false);

  const { slotsAvailable, countdown } = useActivationSlots();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const timeString = `${pad(countdown.hours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mb-14"
    >
      <div className="relative rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] via-background to-background p-8 sm:p-10 text-center overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 gradient-hero text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-5"
        >
          <Zap size={14} className="fill-current" />
          OFERTA DE ACTIVACIÓN
        </motion.div>

        {/* Subtitle */}
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-8 relative z-10">
          <span className="text-gradient-hero">−75%</span> en la instalación de Tru Sales
        </h3>

        {/* Countdown label */}
        <div className="flex items-center justify-center gap-1.5 mb-4">
          <Clock size={14} className="text-muted-foreground" />
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            La oferta de activación termina en
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-1 sm:gap-2 mb-6 relative z-10">
          <CountdownDigit value={pad(countdown.days)} label="Días" />
          <Separator />
          <CountdownDigit value={pad(countdown.hours)} label="Horas" />
          <Separator />
          <CountdownDigit value={pad(countdown.minutes)} label="Min" />
          <Separator />
          <CountdownDigit value={pad(countdown.seconds)} label="Seg" />
        </div>

        {/* FOMO message */}
        <div className="space-y-2 mb-6">
          <p className="text-sm sm:text-base text-foreground/80 font-medium">
            Quedan <span className="text-primary font-bold font-display">{pad(countdown.days)}:{pad(countdown.hours)}:{pad(countdown.minutes)}:{pad(countdown.seconds)}</span> para activar Tru Sales con el precio de lanzamiento.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Cuando el contador llegue a cero, la instalación volverá a su{" "}
            <span className="font-semibold text-foreground/70">precio normal</span>.
          </p>
        </div>

        {/* Pain trigger */}
        <div className="flex items-center justify-center gap-2 mb-5 px-4 py-2.5 rounded-lg bg-destructive/[0.06] border border-destructive/15 max-w-lg mx-auto">
          <AlertTriangle size={15} className="text-destructive shrink-0" />
          <p className="text-xs sm:text-sm text-foreground/70 font-medium">
            Cada día sin Tru Sales es dinero que tu equipo deja sobre la mesa.
          </p>
        </div>

        {/* Scarcity */}
        <motion.div
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center gap-2"
        >
          <Zap size={16} className="text-primary fill-primary" />
          <p className="text-sm font-bold text-foreground/80">
            Solo quedan <span className="text-primary">{slotsAvailable}</span> activaciones disponibles esta semana.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ActivationAvailability;
