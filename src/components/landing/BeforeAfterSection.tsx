"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Clock, XCircle, AlertTriangle, BarChart3, Users, Bell, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Animated counter hook ─── */
const useAnimatedCounter = (end: number, duration = 800, delay = 400, active = true) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(eased * end);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [end, duration, delay, active]);
  return value;
};

/* ─── Mouse parallax hook ─── */
const useMouseParallax = (ref: React.RefObject<HTMLElement | null>, strength = 20) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(px * strength);
      y.set(py * strength);
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, [ref, strength, x, y]);

  return { x: springX, y: springY };
};

/* ─── Floating BG element ─── */
const FloatingBG = ({
  children,
  left,
  top,
  delay,
  dur,
  mouseX,
  mouseY,
  factor,
}: {
  children: React.ReactNode;
  left: string;
  top: string;
  delay: number;
  dur: number;
  mouseX: any;
  mouseY: any;
  factor: number;
}) => {
  const mx = useTransform(mouseX, (v: number) => v * factor);
  const my = useTransform(mouseY, (v: number) => v * factor);
  return (
    <motion.div
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{ left, top, x: mx, y: my }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 0.35, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* ─── Before cards data ─── */
const beforeCards = [
  { icon: Clock, title: "Lead recibido", sub: "Sin respuesta — 16h", rot: -2.5, ox: -6, oy: 4 },
  { icon: XCircle, title: "Pipeline sin responsable", sub: "Sin asignación", rot: 1.8, ox: 8, oy: -5 },
  { icon: AlertTriangle, title: "Seguimiento olvidado", sub: "3 días sin contacto", rot: -1.2, ox: -4, oy: 7 },
  { icon: BarChart3, title: "Performance sin datos", sub: "Sin métricas disponibles", rot: 2.2, ox: 5, oy: -3 },
];

/* ─── After cards data ─── */
const afterCards = [
  { icon: Clock, title: "Response Time", numValue: 48, unit: "min", badge: "-32%", type: "metric" as const },
  {
    icon: Users,
    title: "Team Performance",
    type: "bars" as const,
    rows: [
      { name: "Álvaro L.", pct: 41 },
      { name: "Rodrigo M.", pct: 32 },
      { name: "Amara G.", pct: 55 },
    ],
  },
  { icon: Bell, title: "Lead Follow-up", value: "Recordatorio enviado", type: "status" as const },
  { icon: TrendingUp, title: "Win Rate", numValue: 79.8, unit: "%", badge: "+4.2%", type: "metric" as const },
];

/* ─── Before Card ─── */
const BeforeCard = ({ card, i }: { card: (typeof beforeCards)[number]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate: card.rot, x: card.ox, translateY: card.oy }}
    exit={{ opacity: 0, scale: 0.92, y: 16, rotate: 0 }}
    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -8, rotate: 0, scale: 1.03, transition: { duration: 0.25 } }}
    className="group relative"
  >
    {/* hover glow */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive/0 to-destructive/0 group-hover:from-destructive/10 group-hover:to-destructive/5 transition-all duration-500 blur-sm" />

    <motion.div
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="relative rounded-2xl border border-destructive/15 bg-card/50 backdrop-blur-2xl p-5 shadow-card group-hover:shadow-card-hover group-hover:border-destructive/25 transition-all duration-400">
        {/* subtle inner gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-destructive/[0.03] to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-destructive/8 border border-destructive/10 flex items-center justify-center">
            <card.icon size={16} className="text-destructive/70" />
          </div>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-destructive/50"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <h4 className="relative font-display text-sm font-bold text-foreground/70 mb-1">{card.title}</h4>
        <p className="relative text-xs text-destructive/60 font-medium">{card.sub}</p>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── After Card ─── */
const AfterCard = ({ card, i }: { card: (typeof afterCards)[number]; i: number }) => {
  const counterVal = useAnimatedCounter(card.numValue ?? 0, 800, 400 + i * 100);
  const isWinRate = card.title === "Win Rate";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: 16 }}
      transition={{ delay: i * 0.1 + 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
      className="group relative"
    >
      {/* hover glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-secondary/8 group-hover:to-primary/12 transition-all duration-500 blur-sm" />

      <div className="relative rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-2xl p-5 shadow-card group-hover:shadow-card-hover group-hover:border-primary/30 transition-all duration-400 overflow-hidden">
        {/* inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.03] pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl gradient-hero flex items-center justify-center shadow-sm group-hover:shadow-cta transition-shadow duration-500">
              <card.icon size={16} className="text-primary-foreground" />
            </div>
            {card.type === "status" && (
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>

          <h4 className="font-display text-sm font-bold text-foreground mb-1">{card.title}</h4>

          {card.type === "metric" && (
            <div className="flex items-center gap-2 mt-1">
              <motion.p
                className="text-xl font-bold text-foreground font-display leading-none tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {isWinRate ? counterVal.toFixed(1) : Math.round(counterVal)}{card.unit}
              </motion.p>
              {card.badge && (
                <motion.span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-primary/10 text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {card.badge}
                </motion.span>
              )}
            </div>
          )}

          {card.type === "status" && (
            <motion.p
              className="text-sm text-primary font-semibold mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {card.value}
            </motion.p>
          )}

          {card.type === "bars" && card.rows && (
            <div className="space-y-2 mt-2">
              {card.rows.map((row, ri) => (
                <div key={row.name} className="flex items-center gap-2 text-xs">
                  <span className="text-foreground/60 font-medium w-16 truncate">{row.name}</span>
                  <div className="flex-1 h-2 rounded-full bg-border/30 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full gradient-hero"
                      initial={{ width: 0 }}
                      animate={{ width: `${row.pct}%` }}
                      transition={{ delay: 0.5 + ri * 0.15, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-foreground/50 font-semibold w-8 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── AI Insight Card ─── */
const AIInsightCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92, y: 16 }}
    transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
    className="group relative sm:col-span-2"
  >
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/12 group-hover:via-secondary/8 group-hover:to-primary/12 transition-all duration-500 blur-sm" />

    <div className="relative rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-2xl p-5 shadow-card group-hover:shadow-card-hover group-hover:border-primary/30 transition-all duration-400 overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/[0.05] via-transparent to-secondary/[0.04] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Sparkles size={16} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-display text-sm font-bold text-foreground">AI Insight</h4>
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Los leads contactados en menos de 2 horas tienen{" "}
            <span className="text-primary font-semibold">3.2x más probabilidad</span> de cierre.
          </p>
          {/* mini chart */}
          <svg viewBox="0 0 120 24" className="w-28 h-5 mt-3 opacity-60">
            <defs>
              <linearGradient id="insightGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,20 Q15,18 30,14 T60,8 T90,12 T120,4"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            />
            <motion.path
              d="M0,20 Q15,18 30,14 T60,8 T90,12 T120,4 V24 H0 Z"
              fill="url(#insightGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </svg>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Toggle ─── */
const Toggle = ({ active, onToggle }: { active: boolean; onToggle: () => void }) => (
  <div className="relative inline-flex items-center gap-3">
    {/* Nudge arrow animation — only visible in "SIN" state */}
    {!active && (
      <motion.div
        className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: [0, 1, 1, 0], x: [-8, 0, 0, 8] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    )}

    <div className="inline-flex rounded-full border border-border/40 bg-card/50 backdrop-blur-2xl p-1 shadow-card">
      {[false, true].map((isWithState) => {
        const label = isWithState ? "CON TRU SALES" : "SIN TRU SALES";
        const selected = active === isWithState;
        return (
          <button
            key={label}
            onClick={() => { if (!selected) onToggle(); }}
            className={`relative rounded-full px-6 py-2.5 text-xs font-bold tracking-wide transition-colors duration-300 ${
              selected ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {selected && (
              <motion.div
                layoutId="toggle-pill"
                className="absolute inset-0 rounded-full shadow-sm"
                style={{
                  background: active
                    ? "var(--gradient-hero)"
                    : undefined,
                  boxShadow: active
                    ? "var(--shadow-cta)"
                    : "0 0 18px -2px hsl(0 84% 60% / 0.5)",
                  backgroundColor: active ? undefined : "hsl(0 84% 60%)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>

    {/* Pulsing ring on SIN state */}
    {!active && (
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-destructive/30 pointer-events-none"
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}
  </div>
);

/* ─── Main Section ─── */
const BeforeAfterSection = () => {
  const [withTru, setWithTru] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { x: mouseX, y: mouseY } = useMouseParallax(sectionRef, 15);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />

      {/* Ambient blurs */}
      <motion.div
        className="absolute top-[-12%] right-[12%] w-[550px] h-[550px] rounded-full blur-[200px] transition-colors duration-700"
        animate={{ backgroundColor: withTru ? "hsl(180 100% 42% / 0.07)" : "hsl(0 84% 60% / 0.05)" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[18%] w-[450px] h-[450px] rounded-full blur-[180px] transition-colors duration-700"
        animate={{ backgroundColor: withTru ? "hsl(220 100% 50% / 0.05)" : "hsl(0 84% 60% / 0.03)" }}
      />

      {/* Floating BG analytics */}
      <FloatingBG left="4%" top="12%" delay={0.4} dur={7} mouseX={mouseX} mouseY={mouseY} factor={0.6}>
        <div className="rounded-xl border border-border/15 bg-card/30 backdrop-blur-xl px-3 py-2 shadow-card">
          <p className="text-[7px] text-muted-foreground/40 uppercase tracking-widest mb-0.5">Resp. Time</p>
          <p className="text-xs font-bold text-foreground/30 font-display">1h 42m</p>
        </div>
      </FloatingBG>
      <FloatingBG left="90%" top="18%" delay={0.7} dur={8} mouseX={mouseX} mouseY={mouseY} factor={0.4}>
        <div className="rounded-xl border border-border/15 bg-card/30 backdrop-blur-xl px-3 py-2 shadow-card">
          <p className="text-[7px] text-muted-foreground/40 uppercase tracking-widest mb-0.5">Pipeline</p>
          <p className="text-xs font-bold text-foreground/30 font-display">€284K</p>
          <svg viewBox="0 0 50 14" className="w-10 h-2.5 mt-1">
            <polyline points="0,12 8,9 16,11 24,5 32,7 40,2 50,4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.25" />
          </svg>
        </div>
      </FloatingBG>
      <FloatingBG left="92%" top="68%" delay={1} dur={6.5} mouseX={mouseX} mouseY={mouseY} factor={0.5}>
        <div className="rounded-xl border border-border/15 bg-card/30 backdrop-blur-xl px-3 py-2 shadow-card">
          <p className="text-[7px] text-muted-foreground/40 uppercase tracking-widest mb-0.5">Win Rate</p>
          <p className="text-xs font-bold text-foreground/30 font-display">79.8%</p>
        </div>
      </FloatingBG>
      <FloatingBG left="2%" top="72%" delay={0.9} dur={9} mouseX={mouseX} mouseY={mouseY} factor={0.7}>
        <div className="flex items-end gap-[3px] h-5">
          {[30, 50, 40, 75, 65, 90, 55].map((h, idx) => (
            <motion.div
              key={idx}
              className="w-[3px] rounded-sm bg-primary/10"
              style={{ height: `${h}%` }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3.5, delay: idx * 0.25, repeat: Infinity }}
            />
          ))}
        </div>
      </FloatingBG>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(220 60% 40%/0.15) 1px,transparent 1px),linear-gradient(90deg,hsl(220 60% 40%/0.15) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wide">Antes y Después</span>
          </motion.div>

          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Sin Tru Sales gestionas leads.
            <br />
            Con Tru Sales <span className="text-gradient-hero">controlas tu sistema comercial.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La diferencia entre usar un CRM y tener control real de tu equipo comercial.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <Toggle active={withTru} onToggle={() => setWithTru((v) => !v)} />
        </motion.div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!withTru ? (
              <motion.div
                key="before"
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {beforeCards.map((card, i) => (
                  <BeforeCard key={card.title} card={card} i={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="after"
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {afterCards.map((card, i) => (
                  <AfterCard key={card.title} card={card} i={i} />
                ))}
                <AIInsightCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Activa el control de tu equipo comercial
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing">
              <Button variant="cta" size="lg" className="rounded-full px-10 py-6 text-base shadow-cta">
                Reservar instalación por 1€
              </Button>
            </a>
            <a href="https://calendly.com/novau-info/demo-tru-sales" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaOutline" size="lg" className="rounded-full px-10 py-6 text-base">
                Agendar DEMO
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Instalación guiada · Sin migraciones · Activación rápida
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
