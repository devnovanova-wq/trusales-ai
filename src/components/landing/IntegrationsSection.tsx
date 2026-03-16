"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const crmLogos = [
  "/assets/crm-logos/hubspot.png",
  "/assets/crm-logos/pipedrive.png",
  "/assets/crm-logos/salesforce.svg",
  "/assets/crm-logos/zoho.png",
  "/assets/crm-logos/monday.png",
  "/assets/crm-logos/odoo.png",
  "/assets/crm-logos/freshsales.png",
  "/assets/crm-logos/close.png",
  "/assets/crm-logos/copper.png",
  "/assets/crm-logos/zendesk.png",
  "/assets/crm-logos/calendly.png",
  "/assets/crm-logos/tally.png",
  "/assets/crm-logos/typeform.png",
  "/assets/crm-logos/notion.png",
  "/assets/crm-logos/intercom.png",
  "/assets/crm-logos/segment.png",
  "/assets/crm-logos/stripe.png",
  "/assets/crm-logos/shopify.png",
  "/assets/crm-logos/microsoft365.png",
  "/assets/crm-logos/google-workspace.png",
  "/assets/crm-logos/slack.png",
  "/assets/crm-logos/whatsapp.webp",
  "/assets/crm-logos/google-sheets-full.svg",
  "/assets/crm-logos/airtable.svg",
  "/assets/crm-logos/insightly.svg",
  "/assets/crm-logos/klaviyo.png",
  "/assets/crm-logos/activecampaign.png",
  "/assets/crm-logos/mailchimp.png",
  "/assets/crm-logos/make.webp",
  "/assets/crm-logos/zapier.png",
  "/assets/crm-logos/teams.png",
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


const reassurancePoints = [
"Sin migraciones",
"Sin cambiar de CRM",
"Instalación a medida"];


const ITEM_WIDTH = 160; // card + gap approx
const SPEED = 0.5; // px per frame

const IntegrationsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const totalWidth = logos.length * ITEM_WIDTH;

  // Auto-scroll when not hovered
  useAnimationFrame(() => {
    if (isHovered || isDragging) return;
    let newX = x.get() - SPEED;
    if (newX <= -totalWidth) {
      newX += totalWidth;
    }
    x.set(newX);
  });

  // Wrap x value on drag to create infinite feel
  const handleDrag = useCallback(() => {
    let current = x.get();
    if (current <= -totalWidth) {
      current += totalWidth;
      x.set(current);
    } else if (current > 0) {
      current -= totalWidth;
      x.set(current);
    }
  }, [x, totalWidth]);

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section id="integraciones" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14">
          
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Funciona con tu{" "}
            <span className="text-gradient-hero">Sistema Actual</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-3">Instalamos Tru Sales en menos de 48 horas y activamos el sistema de control SIN cambiar tu forma de trabajar.

          </p>
          <p className="text-sm text-muted-foreground/70 max-w-md mx-auto">
            No necesitas migrar datos.
            <br />
            No necesitas cambiar de CRM.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden mb-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}>
          
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-muted/30 to-transparent" />

          {/* Draggable track */}
          <motion.div
            ref={trackRef}
            className="flex items-center gap-6 md:gap-10 w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDrag={handleDrag}
            onDragEnd={() => setIsDragging(false)}>
            
            {allLogos.map((logo, i) =>
            <div
              key={`${logo.alt}-${i}`}
              className="group/logo flex-shrink-0 flex items-center justify-center w-28 h-16 md:w-36 md:h-20 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
              
                <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto max-w-[80%] object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300 select-none pointer-events-none"
                draggable={false} />
              
              </div>
            )}
            {/* "muchos otros" card */}
            <div className="flex-shrink-0 flex items-center justify-center gap-2 w-36 h-16 md:w-44 md:h-20 rounded-xl bg-primary/5 border border-primary/20 shadow-sm">
              <Plus size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">muchos otros</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6">
          
          {reassurancePoints.map((point) =>
          <div key={point} className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                <Check size={12} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{point}</span>
            </div>
          )}
        </motion.div>

        {/* Final line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/60 mb-10">
          
          Compatible con el stack que tu equipo ya utiliza.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-wrap justify-center gap-4"
        >
          <a href="#pricing">
            <Button variant="cta" size="lg" className="rounded-full px-8">
              Conectar mi CRM
            </Button>
          </a>
          <a href="#video">
            <Button variant="ctaOutline" size="lg" className="rounded-full px-8">
              Ver Cómo Funciona
            </Button>
          </a>
        </motion.div>
      </div>
    </section>);

};

export default IntegrationsSection;