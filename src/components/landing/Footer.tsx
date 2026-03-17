"use client";

import { Shield, Lock, Settings } from "lucide-react";

const productLinks = [
  { label: "Funciones", href: "#funciones" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Pricing", href: "#pricing" },
  { label: "Ver demo", href: "#video" },
];

const resourceLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Calcula tu pérdida", href: "#calculadora" },
  { label: "Guía de implementación", href: "#" },
];

const companyLinks = [
  { label: "Sobre Tru Sales", href: "#" },
  { label: "Contacto", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Seguridad", href: "#" },
];

const crmNames = ["HubSpot", "Pipedrive", "Salesforce", "Monday", "Odoo"];

const trustItems = [
  { icon: Shield, label: "Datos seguros" },
  { icon: Lock, label: "Sin migraciones" },
  { icon: Settings, label: "Instalación guiada" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "https://novaone.io/privacy-policy/" },
  { label: "Términos y condiciones", href: "#" },
  { label: "Cookies", href: "#" },
];

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-4">
      {title}
    </h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-primary-foreground/50 hover:text-primary-foreground/90 transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <img
  src="/assets/trusales-logo-footer.png"
  alt="Tru Sales"
  className="h-12 brightness-200"
/>
            </a>
            <p className="text-sm text-primary-foreground/40 max-w-xs leading-relaxed">
              Sistema de control comercial para equipos que usan CRM.
            </p>
          </div>

          {/* Navigation columns */}
          <LinkColumn title="Producto" links={productLinks} />
          <LinkColumn title="Recursos" links={resourceLinks} />
          <LinkColumn title="Empresa" links={companyLinks} />
        </div>
      </div>

      {/* CRM compatibility line */}
      <div className="container mx-auto px-4">
        <div className="border-t border-primary-foreground/[0.06] py-5">
          <p className="text-xs text-primary-foreground/30 text-center tracking-wide">
            Compatible con{" "}
            {crmNames.map((name, i) => (
              <span key={name}>
                <span className="text-primary-foreground/45">{name}</span>
                {i < crmNames.length - 1 && (
                  <span className="mx-1.5 text-primary-foreground/20">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="container mx-auto px-4">
        <div className="border-t border-primary-foreground/[0.06] py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="size-3.5 text-primary-foreground/30" strokeWidth={1.5} />
                <span className="text-xs text-primary-foreground/35">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal + copyright */}
      <div className="container mx-auto px-4">
        <div className="border-t border-primary-foreground/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © 2026 Tru Sales — Nova One. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
