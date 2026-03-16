"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Bell,
  AlertTriangle,
  ListChecks,
  Target,
  Brain,
  TrendingUp,
  ShieldAlert,
  Trophy,
  Timer,
  UserX,
  BarChart3,
} from "lucide-react";

const blocks = [
  {
    problem: {
      headline: "Los leads entran…\ny nadie sabe quién debe responder.",
      description:
        "Leads llegan al CRM pero pasan horas o días sin respuesta. Las oportunidades se pierden simplemente porque nadie actúa a tiempo.",
      icon: Timer,
    },
    solution: {
      headline: "Control automático de respuesta a leads",
      points: [
        { text: "Cada lead inicia automáticamente un contador de respuesta", icon: Clock },
        { text: "Recordatorio a 12 horas", icon: Bell },
        { text: "Recordatorio a 4 horas", icon: Bell },
        { text: "Última alerta a 1 hora", icon: AlertTriangle },
        { text: "Registro automático si se incumple el SLA", icon: ShieldAlert },
      ],
    },
  },
  {
    problem: {
      headline: "El seguimiento depende de la memoria del comercial.",
      description:
        "Notas sueltas, tareas olvidadas y leads que nunca reciben seguimiento.",
      icon: Brain,
    },
    solution: {
      headline: "Seguimiento comercial automatizado",
      points: [
        { text: "Actividades automáticas en el CRM", icon: ListChecks },
        { text: "Recordatorios inteligentes", icon: Bell },
        { text: "Control de seguimiento lead a lead", icon: Target },
        { text: "Ningún contacto queda olvidado", icon: UserX },
      ],
    },
  },
  {
    problem: {
      headline: "No sabes quién realmente está vendiendo.",
      description:
        "Todos dicen que trabajan, pero casi nadie mide la velocidad de respuesta o la conversión real.",
      icon: BarChart3,
    },
    solution: {
      headline: "Sistema de medición del rendimiento comercial",
      points: [
        { text: "Cumplimiento de SLA", icon: ShieldAlert },
        { text: "Velocidad de respuesta", icon: TrendingUp },
        { text: "Ratio de conversión", icon: Trophy },
        { text: "Registro de incumplimientos", icon: AlertTriangle },
      ],
    },
  },
];

const FeaturesSection = () => {
  return (
    <section id="funciones" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Context line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground/70 font-medium mb-4"
        >
          Lo que ocurre en la mayoría de CRMs
        </motion.p>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Tu CRM no falla.
            <br />
            <span className="text-gradient-hero">Tu gestión comercial sí.</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14"
        >
          Tru Sales añade disciplina automática para que ningún lead quede sin
          seguimiento.
        </motion.p>

        {/* Comparison Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-4"
        >
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-destructive/5 border border-destructive/10">
            <AlertTriangle size={14} className="text-destructive/50" />
            <span className="text-xs font-semibold uppercase tracking-widest text-destructive/60">
              Problema actual
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/5 border border-primary/10">
            <Trophy size={14} className="text-primary/60" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
              Solución Tru Sales
            </span>
          </div>
        </motion.div>

        {/* Blocks */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {blocks.map((block, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Problem Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative bg-card border border-destructive/15 rounded-2xl p-8 flex flex-col justify-center group hover:border-destructive/30 hover:bg-destructive/[0.02] transition-all"
              >
                {/* Mobile-only badge */}
                <div className="md:hidden absolute top-5 right-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-destructive/60 bg-destructive/8 px-2.5 py-1 rounded-full">
                    Problema
                  </span>
                </div>
                <div className="w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center mb-5">
                  <block.problem.icon size={22} className="text-destructive/70" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 whitespace-pre-line leading-snug">
                  {block.problem.headline}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {block.problem.description}
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 + 0.15 }}
                className="relative bg-card border border-primary/15 rounded-2xl p-8 flex flex-col justify-center group hover:border-primary/30 hover:shadow-card-hover transition-all"
              >
                {/* Mobile-only badge */}
                <div className="md:hidden absolute top-5 right-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/70 bg-primary/8 px-2.5 py-1 rounded-full">
                    Solución
                  </span>
                </div>
                <div className="w-11 h-11 rounded-lg gradient-hero flex items-center justify-center mb-5">
                  {i === 0 && <Clock size={22} className="text-primary-foreground" />}
                  {i === 1 && <ListChecks size={22} className="text-primary-foreground" />}
                  {i === 2 && <TrendingUp size={22} className="text-primary-foreground" />}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  {block.solution.headline}
                </h3>
                <ul className="space-y-2.5">
                  {block.solution.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <point.icon size={11} className="text-primary" />
                      </div>
                      {point.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 flex flex-wrap justify-center gap-4"
        >
          <a href="#pricing">
            <Button variant="cta" size="lg" className="rounded-full px-8">
              Reservar Instalación (1€)
            </Button>
          </a>
          <a href="#video">
            <Button variant="ctaOutline" size="lg" className="rounded-full px-8">
              Ver Cómo Funciona
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
