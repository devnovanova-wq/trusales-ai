"use client";

import { motion } from "framer-motion";
import { Users, Link, Rocket } from "lucide-react";
import Image from "next/image";

const crmLogos = [
  "/assets/crm-logos/hubspot.png",
  "/assets/crm-logos/pipedrive.png",
  "/assets/crm-logos/salesforce.svg",
  "/assets/crm-logos/zoho.png",
  "/assets/crm-logos/monday.png",
  "/assets/crm-logos/odoo.png",
  "/assets/crm-logos/freshsales.png",
  "/assets/crm-logos/zendesk.png",
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


const credibilityCards = [
  {
    icon: Users,
    title: "+1.500 equipos comerciales",
    text: "La experiencia acumulada trabajando con equipos de ventas nos permitió diseñar un sistema que crea disciplina comercial real.",
  },
  {
    icon: Link,
    title: "CRM - Sistemas Propio",
    text: "Tru Sales funciona sobre tu CRM actual sin migrar datos ni cambiar herramientas.",
  },
  {
    icon: Rocket,
    title: "Activación rápida",
    text: "En menos de 48 horas tu sistema comercial empieza a funcionar con control real.",
  },
];

const CRMCarouselSection = () => {
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Social proof header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Experiencia real con equipos de ventas
            </span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Más de{" "}
            <span className="text-gradient-hero">1.500 equipos comerciales</span>{" "}
            en España
            <br className="hidden md:block" /> ya han trabajado con nuestros sistemas.
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative overflow-hidden mb-4"
        >
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-muted/40 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-muted/40 to-transparent" />

          {/* Scrolling track */}
          <div className="flex items-center gap-16 md:gap-24 w-max animate-[scroll_35s_linear_infinite] group hover:[animation-play-state:paused]">
            {allLogos.map((logo, i) => (
              <motion.img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-7 md:h-9 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
                whileHover={{ y: -3 }}
                draggable={false}
              />
            ))}
          </div>
        </motion.div>

        {/* Subtitle below carousel */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground/70 mb-14"
        >
          Compatible con los principales CRMs del mercado.
        </motion.p>

        {/* Credibility cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {credibilityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 40px -8px hsl(180 100% 42% / 0.12)",
              }}
              className="group relative rounded-2xl p-6 bg-card/80 backdrop-blur-sm border border-border/50 shadow-card transition-all duration-300 hover:border-primary/30 cursor-default"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/[0.04]" />

              <div className="relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <card.icon className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_6px_hsl(180_100%_42%/0.5)] transition-all duration-300" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMCarouselSection;
