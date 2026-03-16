"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Users, UsersRound, Building2, ArrowRight } from "lucide-react";

const profiles = [
  {
    icon: User,
    badge: "1-3 personas",
    title: "Autónomos y microempresas",
    text: "Cuando el fundador gestiona leads directamente, es fácil perder oportunidades.",
    result: "Nunca más leads olvidados.",
  },
  {
    icon: Users,
    badge: "3-10 personas",
    title: "Equipos sin proceso comercial",
    text: "Cuando varias personas gestionan leads sin un proceso claro, el seguimiento se vuelve caótico.",
    result: "Orden real en tu proceso de ventas.",
  },
  {
    icon: UsersRound,
    badge: "10-50 personas",
    title: "Pymes con equipo comercial",
    text: "Cuando varios comerciales trabajan leads cada día, necesitas visibilidad real del pipeline.",
    result: "Control total del pipeline.",
  },
  {
    icon: Building2,
    badge: "50+ personas",
    title: "Departamentos comerciales",
    text: "Cuando los equipos crecen, el mayor riesgo es perder control sobre el seguimiento.",
    result: "Control del rendimiento comercial.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const AudienceSection = () => (
  <section id="audiencia" className="relative py-24 md:py-32 overflow-hidden">
    {/* Floating background elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-[8%] w-28 h-20 rounded-xl bg-primary/[0.04] border border-primary/[0.06] rotate-6 blur-[1px]" />
      <div className="absolute top-40 right-[10%] w-36 h-24 rounded-xl bg-secondary/[0.04] border border-secondary/[0.06] -rotate-3 blur-[1px]" />
      <div className="absolute bottom-32 left-[15%] w-24 h-16 rounded-lg bg-accent/[0.04] border border-accent/[0.06] rotate-2 blur-[1px]" />
      <div className="absolute bottom-20 right-[18%] w-20 h-14 rounded-lg bg-primary/[0.03] border border-primary/[0.05] -rotate-6 blur-[1px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Perfiles de uso
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-5">
          Tru Sales funciona para cualquier empresa que quiera{" "}
          <span className="text-gradient-hero">vender más y perder menos oportunidades</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Desde autónomos hasta empresas con grandes departamentos comerciales.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16">
        {profiles.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative flex flex-col rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.15)] hover:border-primary/30"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06] pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
              {/* Badge */}
              <span className="inline-flex self-start items-center text-[11px] font-semibold tracking-wide uppercase text-primary bg-primary/[0.08] border border-primary/[0.12] rounded-full px-2.5 py-0.5 mb-4">
                {p.badge}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-cta mb-4 transition-shadow duration-300 group-hover:shadow-[0_4px_24px_-2px_hsl(var(--primary)/0.5)]">
                <p.icon className="size-5 text-primary-foreground" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-display mb-2">{p.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.text}</p>

              {/* Result line */}
              <div className="flex items-start gap-2 pt-3 border-t border-border/50 mt-auto">
                <ArrowRight className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-gradient-hero">{p.result}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-base md:text-lg text-muted-foreground mb-3">
          Toda empresa que quiere vender necesita control sobre su proceso comercial.
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Si tu empresa genera leads pero el seguimiento depende de recordatorios manuales o de la memoria del equipo,
          <br />
          <span className="text-gradient-hero font-semibold">Tru Sales está diseñado para ti</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pricing">
            <Button variant="cta" size="lg">Conectar mi CRM</Button>
          </a>
          <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
            <Button variant="ctaOutline" size="lg">Agendar Demo</Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AudienceSection;
