"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { TrendingDown, AlertTriangle } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "" }: {value: number;prefix?: string;suffix?: string;}) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString("es-ES")}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [display]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const CalculatorSection = () => {
  const [leads, setLeads] = useState(100);
  const [ticket, setTicket] = useState(800);
  const [noFollowUp, setNoFollowUp] = useState(20);

  const leadsLost = Math.round(leads * (noFollowUp / 100));
  const revenueLost = leadsLost * ticket;
  const dailyLoss = Math.round(revenueLost / 30);

  return (
    <section id="calculadora" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Cuánto dinero estás perdiendo
            <br />
            <span className="text-gradient-accent">por falta de seguimiento?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            La mayoría de equipos comerciales deja oportunidades sin responder o sin seguimiento.
            <br />
            Calcula cuánto puede estar costándole a tu empresa cada mes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Leads */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Leads recibidos al mes
                </label>
                <div className="text-3xl font-display font-bold text-foreground">
                  {leads}
                </div>
                <Slider
                  value={[leads]}
                  onValueChange={([v]) => setLeads(v)}
                  min={10}
                  max={500}
                  step={5}
                  className="mt-2" />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Ticket */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Ticket medio (€)
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={ticket}
                    onChange={(e) => setTicket(Math.max(0, Number(e.target.value)))}
                    className="text-2xl font-display font-bold h-auto py-1 text-foreground border-border bg-background" />
                  
                </div>
              </div>

              {/* No follow-up % */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  % de leads sin seguimiento
                </label>
                <div className="text-3xl font-display font-bold text-foreground">
                  {noFollowUp}%
                </div>
                <Slider
                  value={[noFollowUp]}
                  onValueChange={([v]) => setNoFollowUp(v)}
                  min={5}
                  max={50}
                  step={1}
                  className="mt-2" />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-10" />

            {/* Results */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-destructive/5 border border-destructive/10 p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle size={20} className="text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Leads potencialmente perdidos</p>
                <p className="text-4xl font-display font-black text-destructive">
                  <AnimatedNumber value={leadsLost} />
                </p>
              </div>

              <div className="rounded-xl bg-destructive/5 border border-destructive/10 p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                  <TrendingDown size={20} className="text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Valor estimado de oportunidades perdidas</p>
                <p className="text-4xl font-display font-black text-destructive">
                  <AnimatedNumber value={revenueLost} suffix=" €/mes" />
                </p>
              </div>
            </div>

            {/* Daily loss highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/10 border border-primary/20 p-6 text-center mb-8">
              
              <p className="text-sm text-muted-foreground mb-1">
                Cada día sin Tru Sales podrías estar perdiendo
              </p>
              <p className="text-5xl font-display font-black text-primary">
                <AnimatedNumber value={dailyLoss} suffix=" €/día" />
              </p>
            </motion.div>

            {/* CTA */}
            <div className="text-center space-y-3">
              <a href="#pricing">
                <Button variant="cta" size="lg" className="rounded-full px-10">
                  Reservar instalación (1€)
                </Button>
              </a>
              <a href="#video">
                <Button variant="ctaOutline" size="lg" className="rounded-full px-10 mt-2">
                  Ver Cómo Funciona
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">Instalación guiada · 45 minutos · Sin compromiso</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CalculatorSection;