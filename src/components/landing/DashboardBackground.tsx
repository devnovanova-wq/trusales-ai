"use client";

import { motion } from "framer-motion";

/* SVG dashboard background inspired by a real analytics dashboard.
   Rendered in very low opacity blues so it reads as "data depth" without
   competing with the hero copy. */

const DashboardBackground = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="w-[110%] max-w-[1600px] aspect-[16/10]"
    >
      <svg
        viewBox="0 0 1200 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-[0.07]"
      >
        {/* ── Sidebar ── */}
        <rect x="0" y="0" width="200" height="750" rx="0" fill="hsl(215,50%,35%)" fillOpacity="0.5" />
        <rect x="20" y="30" width="120" height="14" rx="4" fill="hsl(210,60%,70%)" fillOpacity="0.6" />
        {[90, 130, 170, 210, 250, 290, 330].map((yy, i) => (
          <g key={i}>
            <rect x="20" y={yy} width="10" height="10" rx="2" fill="hsl(210,50%,60%)" fillOpacity="0.4" />
            <rect x="40" y={yy} width={70 + (i % 3) * 15} height="10" rx="3" fill="hsl(215,40%,55%)" fillOpacity="0.35" />
          </g>
        ))}

        {/* ── Top bar ── */}
        <rect x="200" y="0" width="1000" height="56" fill="hsl(210,50%,40%)" fillOpacity="0.25" />
        <rect x="220" y="18" width="180" height="20" rx="10" fill="hsl(210,40%,50%)" fillOpacity="0.2" />
        <circle cx="1150" cy="28" r="14" fill="hsl(210,50%,55%)" fillOpacity="0.25" />
        <circle cx="1110" cy="28" r="14" fill="hsl(200,50%,55%)" fillOpacity="0.2" />

        {/* ── KPI Cards Row ── */}
        {[
          { x: 220, color: "hsl(210,60%,50%)", val: "1,247", sub: "Total Leads" },
          { x: 460, color: "hsl(180,50%,45%)", val: "94%", sub: "Response Rate" },
          { x: 700, color: "hsl(150,45%,45%)", val: "€284K", sub: "Pipeline" },
          { x: 940, color: "hsl(220,55%,50%)", val: "31%", sub: "Win Rate" },
        ].map((card, i) => (
          <g key={i}>
            <rect x={card.x} y="76" width="220" height="90" rx="10" fill="hsl(215,50%,45%)" fillOpacity="0.15" stroke="hsl(210,50%,50%)" strokeOpacity="0.1" strokeWidth="1" />
            <rect x={card.x + 16} y="96" width="60" height="8" rx="3" fill={card.color} fillOpacity="0.3" />
            <rect x={card.x + 16} y="116" width="90" height="18" rx="4" fill={card.color} fillOpacity="0.45" />
            <rect x={card.x + 16} y="142" width="50" height="6" rx="2" fill="hsl(210,40%,55%)" fillOpacity="0.2" />
            {/* Mini sparkline */}
            <polyline
              points={`${card.x + 130},${140 - i * 3} ${card.x + 145},${130 - i * 2} ${card.x + 160},${135 - i} ${card.x + 175},${120 - i * 3} ${card.x + 190},${115 - i * 2} ${card.x + 205},${105}`}
              stroke={card.color}
              strokeOpacity="0.35"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}

        {/* ── Main Area Chart ── */}
        <rect x="220" y="186" width="500" height="270" rx="10" fill="hsl(215,50%,45%)" fillOpacity="0.1" stroke="hsl(210,50%,50%)" strokeOpacity="0.08" strokeWidth="1" />
        {/* Grid lines */}
        {[220, 260, 300, 340, 380, 420].map((yy, i) => (
          <line key={i} x1="240" y1={yy} x2="700" y2={yy} stroke="hsl(210,40%,50%)" strokeOpacity="0.08" strokeWidth="0.5" />
        ))}
        {/* Area fill */}
        <path
          d="M260,420 L300,390 L340,400 L380,360 L420,340 L460,355 L500,310 L540,290 L580,300 L620,260 L660,240 L700,220 L700,440 L260,440 Z"
          fill="hsl(210,60%,50%)"
          fillOpacity="0.12"
        />
        {/* Line */}
        <polyline
          points="260,420 300,390 340,400 380,360 420,340 460,355 500,310 540,290 580,300 620,260 660,240 700,220"
          stroke="hsl(210,60%,50%)"
          strokeOpacity="0.4"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Second line (green) */}
        <polyline
          points="260,430 300,420 340,415 380,400 420,390 460,385 500,370 540,360 580,355 620,340 660,330 700,310"
          stroke="hsl(160,50%,45%)"
          strokeOpacity="0.3"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Chart title */}
        <rect x="240" y="198" width="100" height="10" rx="3" fill="hsl(210,50%,50%)" fillOpacity="0.3" />

        {/* ── Bar Chart (right) ── */}
        <rect x="740" y="186" width="420" height="270" rx="10" fill="hsl(215,50%,45%)" fillOpacity="0.1" stroke="hsl(210,50%,50%)" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="760" y="198" width="80" height="10" rx="3" fill="hsl(210,50%,50%)" fillOpacity="0.3" />
        {/* Bars */}
        {[
          { x: 780, h: 120 },
          { x: 820, h: 160 },
          { x: 860, h: 100 },
          { x: 900, h: 180 },
          { x: 940, h: 140 },
          { x: 980, h: 190 },
          { x: 1020, h: 130 },
          { x: 1060, h: 170 },
          { x: 1100, h: 150 },
        ].map((bar, i) => (
          <g key={i}>
            <rect
              x={bar.x}
              y={440 - bar.h}
              width="24"
              height={bar.h}
              rx="3"
              fill={i % 2 === 0 ? "hsl(210,55%,50%)" : "hsl(180,45%,45%)"}
              fillOpacity="0.25"
            />
          </g>
        ))}

        {/* ── Data Table ── */}
        <rect x="220" y="476" width="500" height="260" rx="10" fill="hsl(215,50%,45%)" fillOpacity="0.1" stroke="hsl(210,50%,50%)" strokeOpacity="0.08" strokeWidth="1" />
        {/* Table header */}
        <rect x="220" y="476" width="500" height="36" rx="10" fill="hsl(210,50%,40%)" fillOpacity="0.12" />
        {[0, 1, 2, 3].map((col) => (
          <rect key={col} x={240 + col * 120} y="488" width={col === 0 ? 80 : 50} height="10" rx="3" fill="hsl(210,50%,50%)" fillOpacity="0.3" />
        ))}
        {/* Table rows */}
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <g key={row}>
            {row % 2 === 0 && (
              <rect x="220" y={512 + row * 36} width="500" height="36" fill="hsl(210,50%,50%)" fillOpacity="0.03" />
            )}
            {[0, 1, 2, 3].map((col) => (
              <rect
                key={col}
                x={240 + col * 120}
                y={522 + row * 36}
                width={col === 0 ? 90 : 40 + (col * 7)}
                height="8"
                rx="2"
                fill="hsl(210,45%,50%)"
                fillOpacity="0.18"
              />
            ))}
            {/* Status dot */}
            <circle cx={700} cy={526 + row * 36} r="4" fill={row < 3 ? "hsl(160,50%,45%)" : "hsl(210,50%,50%)"} fillOpacity="0.3" />
          </g>
        ))}

        {/* ── Donut Chart (bottom right) ── */}
        <rect x="740" y="476" width="420" height="260" rx="10" fill="hsl(215,50%,45%)" fillOpacity="0.1" stroke="hsl(210,50%,50%)" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="760" y="490" width="100" height="10" rx="3" fill="hsl(210,50%,50%)" fillOpacity="0.3" />
        {/* Donut arcs */}
        <circle cx="870" cy="620" r="60" stroke="hsl(210,55%,50%)" strokeOpacity="0.25" strokeWidth="14" fill="none" strokeDasharray="120 260" strokeLinecap="round" />
        <circle cx="870" cy="620" r="60" stroke="hsl(180,50%,45%)" strokeOpacity="0.2" strokeWidth="14" fill="none" strokeDasharray="80 300" strokeDashoffset="-120" strokeLinecap="round" />
        <circle cx="870" cy="620" r="60" stroke="hsl(150,45%,45%)" strokeOpacity="0.2" strokeWidth="14" fill="none" strokeDasharray="60 320" strokeDashoffset="-200" strokeLinecap="round" />
        {/* Legend items */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="1000" y={560 + i * 28} width="8" height="8" rx="2" fill={["hsl(210,55%,50%)", "hsl(180,50%,45%)", "hsl(150,45%,45%)", "hsl(220,50%,55%)"][i]} fillOpacity="0.35" />
            <rect x="1016" y={560 + i * 28} width={50 + i * 10} height="8" rx="2" fill="hsl(210,45%,50%)" fillOpacity="0.18" />
          </g>
        ))}
      </svg>
    </motion.div>
  </div>
);

export default DashboardBackground;
