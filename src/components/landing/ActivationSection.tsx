"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link, Shield, BarChart3, Rocket, Check, Clock, TrendingUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, MouseEvent } from "react";
import Image from "next/image";

const crmLogos = [
  "/assets/crm-logos/hubspot.png",
  "/assets/crm-logos/pipedrive.png",
  "/assets/crm-logos/salesforce.svg",
];

const logos = [
  { src: "/assets/crm-logos/hubspot.png", alt: "HubSpot" },
  { src: "/assets/crm-logos/pipedrive.png", alt: "Pipedrive" },
  { src: "/assets/crm-logos/salesforce.svg", alt: "Salesforce" },
  { src: "/assets/crm-logos/zoho.png", alt: "Zoho" },
  { src: "/assets/crm-logos/monday.png", alt: "Monday" },
  { src: "/assets/crm-logos/odoo.png", alt: "Odoo" },
  { src: "/assets/crm-logos/freshsales.png", alt: "Freshsales" },
  { src: "/assets/crm-logos/close.png", alt: "Close CRM" },
  { src: "/assets/crm-logos/copper.png", alt: "Copper" },
  { src: "/assets/crm-logos/zendesk.png", alt: "Zendesk" },
  { src: "/assets/crm-logos/calendly.png", alt: "Calendly" },
  { src: "/assets/crm-logos/tally.png", alt: "Tally" },
  { src: "/assets/crm-logos/typeform.png", alt: "Typeform" },
  { src: "/assets/crm-logos/notion.png", alt: "Notion" },
  { src: "/assets/crm-logos/intercom.png", alt: "Intercom" },
  { src: "/assets/crm-logos/segment.png", alt: "Segment" },
  { src: "/assets/crm-logos/stripe.png", alt: "Stripe" },
  { src: "/assets/crm-logos/shopify.png", alt: "Shopify" },
  { src: "/assets/crm-logos/microsoft365.png", alt: "Microsoft 365" },
  { src: "/assets/crm-logos/google-workspace.png", alt: "Google Workspace" },
  { src: "/assets/crm-logos/slack.png", alt: "Slack" },
  { src: "/assets/crm-logos/whatsapp.webp", alt: "WhatsApp" },
  { src: "/assets/crm-logos/google-sheets-full.svg", alt: "Google Sheets" },
  { src: "/assets/crm-logos/airtable.svg", alt: "Airtable" },
  { src: "/assets/crm-logos/insightly.svg", alt: "Insightly" },
  { src: "/assets/crm-logos/klaviyo.png", alt: "Klaviyo" },
  { src: "/assets/crm-logos/activecampaign.png", alt: "ActiveCampaign" },
  { src: "/assets/crm-logos/mailchimp.png", alt: "Mailchimp" },
  { src: "/assets/crm-logos/make.webp", alt: "Make" },
  { src: "/assets/crm-logos/zapier.png", alt: "Zapier" },
  { src: "/assets/crm-logos/teams.png", alt: "Microsoft Teams" }
];

<div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
  {crmLogos.map((logo, index) => (
    <Image
      key={index}
      src={logo}
      alt="Integration logo"
      width={120}
      height={40}
      className="opacity-80 hover:opacity-100 transition"
    />
  ))}
</div>

/* ─── Card data ─── */
const steps = [
  {
    icon: Link,
    headline: "Conectas tu CRM",
    text: "Tru Sales se conecta a Pipedrive, HubSpot o tu CRM actual sin migrar datos.",
    visual: "crm",
  },
  {
    icon: Shield,
    headline: "Se activa el control de seguimiento",
    text: "Cada lead inicia automáticamente un contador de respuesta y el sistema evita que oportunidades se pierdan.",
    visual: "timer",
  },
  {
    icon: BarChart3,
    headline: "Aparece el panel de rendimiento",
    text: "Empiezas a ver quién responde rápido, quién convierte más y quién está perdiendo leads.",
    visual: "dashboard",
  },
  {
    icon: Rocket,
    headline: "Tu equipo comercial cambia su comportamiento",
    text: "Cada lead tiene seguimiento.\nCada comercial tiene métricas.\nEl sistema empieza a trabajar para ti.",
    visual: "team",
  },
];

/* ─── Mini visuals ─── */
const CRMVisual = () => (
  <div className="mt-4 flex items-center gap-3">
    {[
    "/assets/crm-logos/pipedrive.png",
    "/assets/crm-logos/hubspot.png",
    "/assets/crm-logos/salesforce.svg",
  ].map((logo, i) => (
      <motion.div
        key={i}
        className="w-8 h-8 rounded-lg bg-background/60 backdrop-blur border border-border/30 flex items-center justify-center p-1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
      >
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </motion.div>
    ))}
    <motion.div
      className="text-[9px] text-muted-foreground/60 font-medium"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.1 }}
    >
      +30 más
    </motion.div>
  </div>
);

const TimerVisual = () => (
  <motion.div
    className="mt-4 flex items-center gap-2"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.9 }}
  >
    <div className="rounded-lg bg-background/60 backdrop-blur border border-border/30 px-3 py-1.5 flex items-center gap-2">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Bell size={12} className="text-primary" />
      </motion.div>
      <div className="font-mono text-xs font-bold text-foreground/80">00:12:34</div>
    </div>
    <div className="text-[9px] text-primary font-semibold">SLA activo</div>
  </motion.div>
);

const DashboardVisual = () => {
  const rows = [
    { name: "María L.", rate: "34%", bar: 34, status: "good" as const },
    { name: "Carlos R.", rate: "18%", bar: 18, status: "warn" as const },
    { name: "Ana G.", rate: "41%", bar: 41, status: "good" as const },
  ];
  return (
    <motion.div
      className="mt-4 rounded-xl bg-background/60 backdrop-blur border border-border/30 p-3 space-y-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {rows.map((row, i) => (
        <div key={row.name} className="flex items-center gap-2 text-[10px]">
          <span className="text-foreground/80 font-medium w-14 truncate">{row.name}</span>
          <div className="flex-1 h-1.5 rounded-full bg-border/40 overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${row.status === "good" ? "gradient-hero" : "bg-amber-400"}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${row.bar}%` }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <span className="text-foreground/60 font-semibold w-8 text-right">{row.rate}</span>
        </div>
      ))}
    </motion.div>
  );
};

const TeamVisual = () => (
  <motion.div
    className="mt-4 flex items-center gap-1"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 1 }}
  >
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="w-7 h-7 rounded-full gradient-hero flex items-center justify-center text-[9px] font-bold text-primary-foreground border-2 border-background -ml-1.5 first:ml-0"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1 + i * 0.08 }}
      >
        {["ML", "CR", "AG", "JP"][i]}
      </motion.div>
    ))}
    <motion.div
      className="ml-2 flex items-center gap-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[9px] text-primary font-semibold">Activo</span>
    </motion.div>
  </motion.div>
);

const visuals: Record<string, React.FC> = {
  crm: CRMVisual,
  timer: TimerVisual,
  dashboard: DashboardVisual,
  team: TeamVisual,
};

/* ─── Floating background elements ─── */
const FloatingElement = ({
  children,
  x,
  y,
  delay,
  duration,
}: {
  children: React.ReactNode;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute pointer-events-none select-none hidden lg:block"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 0.4, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const BackgroundElements = () => (
  <>
    <FloatingElement x="5%" y="15%" delay={0.5} duration={7}>
      <div className="rounded-xl border border-border/20 bg-card/40 backdrop-blur-xl px-3 py-2 shadow-card">
        <p className="text-[8px] text-muted-foreground/50 uppercase tracking-wider mb-0.5">Resp. Time</p>
        <p className="text-sm font-bold text-foreground/40 font-display">1h 42m</p>
      </div>
    </FloatingElement>
    <FloatingElement x="88%" y="20%" delay={0.8} duration={8}>
      <div className="rounded-xl border border-border/20 bg-card/40 backdrop-blur-xl px-3 py-2 shadow-card">
        <p className="text-[8px] text-muted-foreground/50 uppercase tracking-wider mb-0.5">Conversion</p>
        <p className="text-sm font-bold text-foreground/40 font-display">23.5%</p>
        <svg viewBox="0 0 60 16" className="w-12 h-3 mt-1">
          <polyline
            points="0,14 10,10 20,12 30,6 40,8 50,3 60,5"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
    </FloatingElement>
    <FloatingElement x="92%" y="65%" delay={1.2} duration={6}>
      <div className="rounded-xl border border-border/20 bg-card/40 backdrop-blur-xl px-3 py-2 shadow-card">
        <p className="text-[8px] text-muted-foreground/50 uppercase tracking-wider mb-0.5">Win Rate</p>
        <p className="text-sm font-bold text-foreground/40 font-display">79.8%</p>
      </div>
    </FloatingElement>
    <FloatingElement x="3%" y="70%" delay={1} duration={9}>
      <div className="flex items-end gap-0.5 h-6">
        {[35, 55, 45, 80, 70, 95].map((h, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-sm bg-primary/15"
            style={{ height: `${h}%` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>
    </FloatingElement>
  </>
);

/* ─── Step Card ─── */
const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) => {
  const Visual = visuals[step.visual];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500 blur-sm" />

      {/* Card */}
      <div className="relative rounded-2xl border border-border/40 bg-card/70 backdrop-blur-xl p-6 shadow-card group-hover:shadow-card-hover group-hover:border-primary/25 transition-all duration-500 flex flex-col h-full">
        {/* Step badge + icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-sm group-hover:shadow-cta transition-shadow duration-500">
            <step.icon size={18} className="text-primary-foreground" />
          </div>
          <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.15em] uppercase">
            Paso {index + 1}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
          {step.headline}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line flex-1">
          {step.text}
        </p>

        {Visual && <Visual />}
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const ActivationSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-muted" />
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[160px]" />

      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wide">
              Activación simple
            </span>
          </motion.div>

          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Qué ocurre después de activar{" "}
            <span className="text-gradient-hero">Tru Sales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Activar Tru Sales es simple.
            <br />
            En menos de una hora tu sistema comercial empieza a funcionar con control real.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {["Sin migraciones", "Sin cambiar de CRM", "Instalación guiada"].map(
            (point) => (
              <div key={point} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {point}
                </span>
              </div>
            )
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Empieza hoy mismo
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing">
              <Button
                variant="cta"
                size="lg"
                className="rounded-full px-10 py-6 text-base shadow-cta"
              >
                Reservar instalación por 1€
              </Button>
            </a>
            <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ctaOutline"
                size="lg"
                className="rounded-full px-10 py-6 text-base"
              >
                Agendar DEMO
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Paga el resto de la instalación después de la reunión.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivationSection;
