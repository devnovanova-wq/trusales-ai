"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, Info, CheckCircle2 } from "lucide-react";
import React from "react";

/* ─── Structured FAQ content ─── */
interface FaqBlock {
  type: "text" | "steps" | "bullets" | "highlight" | "note";
  content: string | string[];
}

interface FaqEntry {
  q: string;
  blocks: FaqBlock[];
}

const faqs: FaqEntry[] = [
  {
    q: "¿Necesito cambiar mi CRM para usar Tru Sales?",
    blocks: [
      { type: "text", content: "No. Tru Sales funciona sobre tu CRM actual." },
      { type: "text", content: "Se conecta a herramientas como Pipedrive, HubSpot, Salesforce, Zoho, Monday y otros CRMs populares." },
      { type: "highlight", content: "No necesitas migrar datos ni cambiar la forma en la que trabajas." },
    ],
  },
  {
    q: "¿Cuánto tarda la instalación?",
    blocks: [
      { type: "text", content: "La activación suele tardar menos de 30 minutos." },
      { type: "text", content: "Una vez conectado tu CRM, el sistema empieza a crear seguimiento automático de leads y métricas del equipo." },
      { type: "highlight", content: "En menos de una hora tu sistema comercial ya empieza a tener control real." },
    ],
  },
  {
    q: "¿Qué ocurre después de reservar la instalación por 1€?",
    blocks: [
      { type: "text", content: "Cuando reservas la instalación:" },
      {
        type: "steps",
        content: [
          "Programamos una reunión rápida contigo",
          "Conectamos Tru Sales a tu CRM",
          "Configuramos las reglas de seguimiento",
          "Activamos el panel de rendimiento comercial",
        ],
      },
      { type: "highlight", content: "Después de esa sesión tu sistema queda funcionando." },
      { type: "note", content: "El resto del pago se realiza tras la reunión de activación." },
    ],
  },
  {
    q: "¿Mi equipo tendrá que cambiar su forma de trabajar?",
    blocks: [
      { type: "text", content: "No. Tu equipo seguirá usando el mismo CRM que utiliza hoy." },
      { type: "text", content: "La diferencia es que Tru Sales añade:" },
      {
        type: "bullets",
        content: [
          "seguimiento automático",
          "recordatorios de leads",
          "métricas de rendimiento",
          "control del pipeline",
        ],
      },
      { type: "highlight", content: "Sin cambiar herramientas ni procesos." },
    ],
  },
  {
    q: "¿Qué CRMs son compatibles?",
    blocks: [
      { type: "text", content: "Tru Sales funciona con los principales CRMs del mercado:" },
      {
        type: "bullets",
        content: ["Pipedrive", "HubSpot", "Salesforce", "Zoho", "Monday", "Freshsales", "Odoo"],
      },
      { type: "note", content: "Si utilizas otro CRM también podemos revisarlo contigo." },
    ],
  },
  {
    q: "¿Qué pasa si no sé qué CRM utiliza mi empresa?",
    blocks: [
      { type: "text", content: "No hay problema." },
      { type: "highlight", content: "Durante la reunión inicial analizamos tu sistema comercial y te ayudamos a identificarlo o configurarlo." },
    ],
  },
  {
    q: "¿Qué pasa si Tru Sales no encaja con nuestro equipo?",
    blocks: [
      { type: "text", content: "Si después de la sesión de activación decides que Tru Sales no encaja, simplemente no continúas." },
      { type: "note", content: "La reserva de 1€ existe solo para confirmar la instalación." },
    ],
  },
  {
    q: "¿Necesito conocimientos técnicos para usarlo?",
    blocks: [
      { type: "text", content: "No. Tru Sales está diseñado para equipos comerciales." },
      { type: "highlight", content: "Una vez activado, el sistema funciona automáticamente y el equipo solo necesita usar su CRM como siempre." },
    ],
  },
  {
    q: "¿Para qué tipo de empresas está pensado Tru Sales?",
    blocks: [
      { type: "text", content: "Tru Sales está diseñado para empresas que:" },
      {
        type: "bullets",
        content: [
          "reciben leads constantemente",
          "utilizan un CRM",
          "tienen equipo comercial",
          "necesitan control real del seguimiento",
        ],
      },
      { type: "highlight", content: "Especialmente útil para directores comerciales y CEOs que quieren visibilidad del rendimiento de ventas." },
    ],
  },
  {
    q: "¿Por qué Tru Sales si ya usamos CRM?",
    blocks: [
      { type: "text", content: "Porque un CRM registra información, pero no garantiza disciplina comercial." },
      { type: "highlight", content: "Tru Sales convierte tu CRM en un sistema de seguimiento real." },
    ],
  },
];

/* ─── Block renderers ─── */

const StepBadge = ({ n }: { n: number }) => (
  <span className="shrink-0 size-7 rounded-full gradient-hero flex items-center justify-center text-xs font-bold text-primary-foreground shadow-cta/30 shadow-sm">
    {n}
  </span>
);

const RenderBlocks = ({ blocks }: { blocks: FaqBlock[] }) => (
  <div className="space-y-3">
    {blocks.map((block, i) => {
      if (block.type === "text") {
        return (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {block.content as string}
          </motion.p>
        );
      }

      if (block.type === "steps") {
        const steps = block.content as string[];
        return (
          <div key={i} className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-0 overflow-hidden">
            {steps.map((step, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * si + 0.1, duration: 0.25 }}
                className={`flex items-center gap-3 py-2.5 px-1 rounded-md transition-colors duration-200 hover:bg-primary/[0.04] ${si < steps.length - 1 ? "border-b border-border/40" : ""}`}
              >
                <StepBadge n={si + 1} />
                <span className="text-sm text-foreground/80">{step}</span>
              </motion.div>
            ))}
          </div>
        );
      }

      if (block.type === "bullets") {
        const items = block.content as string[];
        return (
          <div key={i} className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-0">
            {items.map((item, bi) => (
              <motion.div
                key={bi}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * bi + 0.1, duration: 0.2 }}
                className={`flex items-center gap-2.5 py-2 px-1 rounded-md transition-colors duration-200 hover:bg-primary/[0.04] ${bi < items.length - 1 ? "border-b border-border/40" : ""}`}
              >
                <CheckCircle2 className="size-3.5 shrink-0 text-primary/60" />
                <span className="text-sm text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        );
      }

      if (block.type === "highlight") {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 + 0.15, duration: 0.25 }}
            className="border-l-2 border-primary/40 pl-3 py-1"
          >
            <p className="text-sm font-medium text-foreground/90 leading-relaxed">
              {block.content as string}
            </p>
          </motion.div>
        );
      }

      if (block.type === "note") {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 + 0.2, duration: 0.25 }}
            className="flex items-start gap-2 rounded-lg bg-primary/[0.04] border border-primary/10 px-3 py-2.5"
          >
            <Info className="size-3.5 shrink-0 mt-0.5 text-primary/60" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {block.content as string}
            </p>
          </motion.div>
        );
      }

      return null;
    })}
  </div>
);

/* ─── Section ─── */

const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/80 mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Preguntas{" "}
              <span className="text-gradient-hero">frecuentes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Respondemos las dudas más comunes de equipos comerciales que
              utilizan CRM y quieren activar Tru Sales.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-0 rounded-xl bg-card/60 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-shadow duration-300 px-5 group data-[state=open]:ring-1 data-[state=open]:ring-primary/20"
                >
                  <AccordionTrigger className="py-5 text-left text-[0.95rem] font-semibold text-foreground hover:no-underline gap-3 [&>svg]:text-primary/60 [&>svg]:size-5">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="size-4 shrink-0 text-primary/50" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-7">
                    <RenderBlocks blocks={faq.blocks} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            ¿Aún tienes dudas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nuestro equipo puede revisar tu sistema comercial y mostrarte cómo
            funcionaría Tru Sales en tu empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing">
              <Button variant="cta" size="lg" className="rounded-full px-8 py-6 text-base gap-2">
                Conectar mi CRM <ArrowRight size={18} />
              </Button>
            </a>
            <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaOutline" size="lg" className="rounded-full px-8 py-6 text-base">
                Agendar Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
