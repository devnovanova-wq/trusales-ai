"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero"><img
  src="/assets/u-logo.png"
  alt="Logo"
  className="h-10 w-auto"
/></a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#calculadora" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Calcula tu pérdida</a>
          <a href="#funciones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funciones</a>
          <a href="#integraciones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integraciones</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#pricing"><Button variant="cta" size="sm">Conectar mi CRM</Button></a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#calculadora" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Calcula tu pérdida</a>
          <a href="#funciones" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Funciones</a>
          <a href="#integraciones" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Integraciones</a>
          <a href="#pricing" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#pricing" onClick={() => setOpen(false)}><Button variant="cta" size="sm">Conectar mi CRM</Button></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
