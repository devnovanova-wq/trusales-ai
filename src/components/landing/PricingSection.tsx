"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, ArrowDown, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useActivationSlots } from "@/hooks/use-activation-slots";
import ActivationAvailability from "./ActivationAvailability";
import { useEffect, useState } from "react";

const plans = [
{
  subtitle: "Si tu CRM es:",
  title: "Pipedrive / HubSpot",
  originalPrice: "600€",
  finalPrice: "1€",
  suscripcion: "5€ / comercial / mes",
  highlight: true
},
{
  subtitle: "Si utilizas:",
  title: "Otros CRM",
  originalPrice: "1.200€",
  finalPrice: "300€",
  suscripcion: "10€ / comercial / mes",
  highlight: false
}];


const features = [
"Control de SLA",
"Seguimiento automatizado",
"Score de rendimiento",
"Soporte 24/7 Activo"];


const steps = [
"Reserva tu instalación (1€)",
"Configuramos Tru Sales contigo",
"Decides si quieres activarlo"];


const PricingSection = () => {
  const [mounted, setMounted] = useState(false);

  const isMobile = useIsMobile();
  const { slotsAvailable } = useActivationSlots();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-3">
            Activa Tru Sales en tu equipo{" "}
            <span className="text-gradient-hero">en menos de 48h</span>
          </h2>
          <p className="text-lg font-semibold text-foreground/80 mb-2">
            Elige el plan dependiendo de tu CRM
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Si no sabes qué CRM utilizas o aún no tienes uno, nosotros te ayudamos a configurarlo.
          </p>
        </motion.div>

        {/* Activation Availability & Countdown */}
        <ActivationAvailability />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {plans.map((plan, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={
            !isMobile ?
            {
              scale: 1.04,
              transition: { duration: 0.25, ease: "easeInOut" }
            } :
            undefined
            }
            className={`rounded-2xl p-8 border-2 flex flex-col transition-shadow duration-300 ease-in-out ${
            plan.highlight ?
            "border-primary shadow-cta bg-card hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.4)] hover:border-primary" :
            "border-border bg-card shadow-card hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)] hover:border-primary/50"}`
            }>
            
              <span className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full mb-4 ${
            plan.highlight ?
            "gradient-hero text-primary-foreground" :
            "bg-primary/10 text-primary border border-primary/20"}`
            }>
                Recomendado
              </span>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                {plan.subtitle}
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                {plan.title}
              </h3>

              {/* Price with discount */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Precio instalación</p>
                <p className="text-lg text-muted-foreground line-through font-display font-semibold">
                  {plan.originalPrice}
                </p>
                <div className="inline-flex items-center gap-2 mt-1 mb-2">
                  <span className="gradient-hero text-primary-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">
                    −99%
                  </span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">DESCUENTO ACTIVACIÓN</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Instala hoy por tan solo:</p>
                <p className="text-3xl font-display font-black text-foreground">
                  {plan.finalPrice}
                </p>
              </div>

              {/* Reserva hoy */}
              <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 mb-3">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Reserva hoy con tan solo
                </p>
                <p className="text-5xl font-display font-black text-primary">
                  1€
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  para asegurar tu activación.
                </p>
              </div>

              {/* Micro-trust indicators */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShieldCheck size={13} className="text-primary" />
                  Sin compromiso
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Check size={13} className="text-primary" />
                  Cancelación gratuita
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Check size={13} className="text-primary" />
                  Instalación guiada
                </span>
              </div>

              {/* Scarcity line inside card */}
              <div className="flex items-center gap-1.5 mb-6 px-3 py-2 rounded-lg bg-primary/[0.06] border border-primary/10">
                <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                
                  <Zap size={14} className="text-primary fill-primary" />
                </motion.div>
                <p className="text-xs font-semibold text-foreground/80">
                  Solo quedan <span className="text-primary">{slotsAvailable}</span> activaciones esta semana
                </p>
              </div>

              {/* Suscripción */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-1">Suscripción</p>
                <p className="text-xl font-display font-semibold text-primary">
                  {plan.suscripcion}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {features.map((f) =>
              <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary" />
                    {f}
                  </div>
              )}
              </div>

              {/* CTA */}
              <div className="mt-auto text-center space-y-3">
                <a href={i === 0 ? "https://calendly.com/novau-info/setup-tru-sales-1" : "https://calendly.com/novau-info/setup-tru-sales-2"} target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg" className="rounded-full px-8 w-full">
                    Reservar instalación (1€)
                  </Button>
                </a>
                <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
                  <Button variant="ctaOutline" size="lg" className="rounded-full px-8 w-full mt-2">
                    Agendar DEMO
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-3">Instalación guiada · 45 minutos · Sin compromiso</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Third Block – No CRM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16">
          
          <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-card">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 bg-primary/10 text-primary border border-primary/20">
              Sin CRM
            </span>
            <p className="text-sm text-muted-foreground font-medium mb-1">Si no tienes CRM o no sabes cuál usas:</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Te ayudamos a empezar
            </h3>

            {/* Reserva hoy */}
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 mb-4">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Reserva hoy con tan solo
              </p>
              <p className="text-5xl font-display font-black text-primary">
                1€
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                para asegurar tu activación.
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-1 font-medium">Durante la sesión:</p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6 max-w-md mx-auto text-left">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-primary shrink-0" />
                Montamos tu CRM para integrarlo en tu día a día
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-primary shrink-0" />
                Organizamos tu proceso comercial actual
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-primary shrink-0" />
                Activamos Tru Sales en tu sistema
              </li>
            </ul>

            <div className="space-y-3">
              <a href="https://calendly.com/novau-info/setup-tru-sales-2" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="rounded-full px-8 w-full">
                  Reservar instalación (1€)
                </Button>
              </a>
              <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
                <Button variant="ctaOutline" size="lg" className="rounded-full px-8 w-full mt-2">
                  Agendar DEMO
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">Instalación guiada · 45 minutos · Sin compromiso</p>
            </div>
          </div>
        </motion.div>

        {/* Risk Reversal Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16">
          
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <ShieldCheck size={36} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Sin riesgo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Reservas tu instalación por{" "}
              <span className="text-primary font-bold">1€</span>.
              <br /><br />
              Durante la sesión configuramos Tru Sales en tu CRM y revisamos cómo encaja en tu flujo comercial.
              <br /><br />
              Si decides no continuar, te devolvemos el euro.
              <br />
              <span className="font-semibold text-foreground">Sin compromiso.</span>
            </p>
          </div>
        </motion.div>

        {/* 3-Step Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto">
          
          <div className="flex flex-col items-center gap-2">
            {steps.map((step, i) =>
            <div key={i} className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-center">
                  <span className="text-sm font-semibold text-foreground">{step}</span>
                </div>
                {i < steps.length - 1 &&
              <ArrowDown size={20} className="text-primary my-1" />
              }
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default PricingSection;