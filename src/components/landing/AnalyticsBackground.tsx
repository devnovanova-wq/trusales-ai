"use client";

import { motion } from "framer-motion";

/* ─── Floating analytics cards that form a product-style hero background ─── */

const floatAnimation = (duration: number, delay: number, range = 8) => ({
  y: [-range, range, -range],
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

/* ─── Metric Card ─── */
const MetricCard = ({
  title,
  value,
  subtitle,
  trend,
  trendUp,
  x,
  y,
  width,
  delay,
  blur,
  scale,
  sparkData,
}: {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  x: string;
  y: string;
  width: string;
  delay: number;
  blur?: boolean;
  scale?: number;
  sparkData?: number[];
}) => (
  <motion.div
    className={`absolute pointer-events-none select-none ${blur ? "blur-[1.5px]" : ""}`}
    style={{ left: x, top: y, scale: scale ?? 1 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: blur ? 0.5 : 0.85, y: 0 }}
    transition={{ duration: 0.9, delay: 0.3 + delay }}
  >
    <motion.div
      className="rounded-2xl border border-border/30 bg-card/70 backdrop-blur-xl shadow-card"
      style={{ width, padding: "16px 20px" }}
      animate={floatAnimation(6 + delay * 2, delay)}
    >
      <p className="text-[10px] font-medium text-muted-foreground/70 tracking-wider uppercase mb-1.5">
        {title}
      </p>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xl font-bold text-foreground/90 font-display leading-none">
            {value}
          </p>
          {subtitle && (
            <p className="text-[9px] text-muted-foreground/50 mt-1">{subtitle}</p>
          )}
        </div>
        {trend && (
          <span
            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
              trendUp
                ? "text-primary bg-primary/10"
                : "text-destructive bg-destructive/10"
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      {/* Mini sparkline */}
      {sparkData && (
        <svg viewBox="0 0 100 28" className="w-full h-5 mt-2 overflow-visible">
          <defs>
            <linearGradient id={`spark-${title.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M0,${28 - sparkData[0]! * 2.5} ${sparkData
              .map((v, i) => `L${(i / (sparkData.length - 1)) * 100},${28 - v * 2.5}`)
              .join(" ")} L100,28 L0,28 Z`}
            fill={`url(#spark-${title.replace(/\s/g, "")})`}
          />
          <polyline
            points={sparkData
              .map((v, i) => `${(i / (sparkData.length - 1)) * 100},${28 - v * 2.5}`)
              .join(" ")}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
          />
        </svg>
      )}
    </motion.div>
  </motion.div>
);

/* ─── AI Insight Card ─── */
const AIInsightCard = () => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ right: "4%", top: "38%" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 0.9, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <motion.div
      className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl shadow-lg"
      style={{ width: "280px", padding: "18px 22px" }}
      animate={floatAnimation(8, 1.5, 6)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"
              stroke="hsl(var(--primary))"
              strokeWidth="1.2"
              fill="hsl(var(--primary))"
              fillOpacity="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-[10px] font-semibold text-primary tracking-wider uppercase">
          AI Insight
        </p>
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-primary ml-auto"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      {/* Body */}
      <p className="text-xs text-foreground/80 leading-relaxed mb-3">
        <span className="font-semibold text-foreground/90">Patrón detectado:</span> Los leads
        contactados en &lt;2h tienen un{" "}
        <span className="text-primary font-bold">3.2× más</span> probabilidad de cierre.
      </p>
      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-8">
        {[35, 55, 45, 80, 70, 95, 60, 85].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-primary/20"
            style={{ height: `${h}%` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[8px] text-muted-foreground/40">Lun</span>
        <span className="text-[8px] text-muted-foreground/40">Dom</span>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Connection Lines SVG ─── */
const ConnectionLines = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ duration: 1.5, delay: 1.5 }}
  >
    <defs>
      <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Horizontal connections */}
    <motion.line
      x1="55%" y1="18%" x2="78%" y2="25%"
      stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4"
      animate={{ strokeDashoffset: [0, -16] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
    <motion.line
      x1="62%" y1="55%" x2="80%" y2="45%"
      stroke="url(#lineGrad1)" strokeWidth="1" strokeDasharray="4 4"
      animate={{ strokeDashoffset: [0, -16] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    <motion.line
      x1="72%" y1="72%" x2="88%" y2="58%"
      stroke="url(#lineGrad2)" strokeWidth="1" strokeDasharray="4 4"
      animate={{ strokeDashoffset: [0, -16] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
    />
    {/* Nodes */}
    {[
      { cx: "55%", cy: "18%" },
      { cx: "78%", cy: "25%" },
      { cx: "62%", cy: "55%" },
      { cx: "72%", cy: "72%" },
      { cx: "88%", cy: "58%" },
    ].map((pos, i) => (
      <motion.circle
        key={i}
        cx={pos.cx}
        cy={pos.cy}
        r="3"
        fill="hsl(var(--primary))"
        fillOpacity="0.4"
        animate={{ r: [3, 4, 3], fillOpacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
  </motion.svg>
);

/* ─── Main Background Component ─── */
const AnalyticsBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
    {/* Soft gradient base */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,95%)] via-[hsl(215,55%,91%)] to-[hsl(220,50%,88%)]" />

    {/* Depth blurs */}
    <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[hsl(200,80%,90%)] blur-[180px] opacity-70" />
    <div className="absolute bottom-[-5%] left-[30%] w-[500px] h-[500px] rounded-full bg-[hsl(220,70%,92%)] blur-[160px] opacity-50" />
    <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-[hsl(180,60%,90%)] blur-[140px] opacity-40" />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(220 60% 40%/0.2) 1px,transparent 1px),linear-gradient(90deg,hsl(220 60% 40%/0.2) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* ── Floating Metric Cards ── */}
    {/* Right side — clear, foreground */}
    <MetricCard
      title="Win Rate"
      value="79.8%"
      trend="+4.2%"
      trendUp
      x="58%"
      y="8%"
      width="190px"
      delay={0}
      sparkData={[4, 5, 3, 7, 6, 8, 7, 9, 8, 10]}
    />
    <MetricCard
      title="Response Time"
      value="1h 42m"
      subtitle="avg. this week"
      trend="-18min"
      trendUp
      x="82%"
      y="16%"
      width="180px"
      delay={0.3}
    />
    <MetricCard
      title="Leads Responded"
      value="94%"
      trend="+7%"
      trendUp
      x="68%"
      y="68%"
      width="170px"
      delay={0.6}
      sparkData={[6, 7, 5, 8, 9, 7, 10, 9, 8, 11]}
    />
    <MetricCard
      title="Conversion Rate"
      value="23.5%"
      subtitle="last 30 days"
      trend="+1.3%"
      trendUp
      x="88%"
      y="72%"
      width="175px"
      delay={0.9}
    />

    {/* Background — blurred, further away */}
    <MetricCard
      title="Follow-ups"
      value="17"
      subtitle="pending today"
      x="50%"
      y="50%"
      width="160px"
      delay={1.2}
      blur
      scale={0.9}
    />
    <MetricCard
      title="Active Opps"
      value="€284K"
      subtitle="pipeline value"
      x="92%"
      y="45%"
      width="165px"
      delay={1.5}
      blur
      scale={0.85}
    />

    {/* ── AI Insight Card ── */}
    <AIInsightCard />

    {/* ── Connection Lines ── */}
    <ConnectionLines />
  </div>
);

export default AnalyticsBackground;
