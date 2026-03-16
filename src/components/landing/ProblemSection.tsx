"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, UserX } from "lucide-react";

const problems = [
  { icon: Clock, text: "Leads que no se responden a tiempo" },
  { icon: TrendingDown, text: "Seguimientos que nunca se hacen" },
  { icon: UserX, text: "Comerciales que parecen trabajar igual… pero no lo hacen" },
  { icon: AlertTriangle, text: "Nadie sabe realmente quién convierte más" },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6">
            La mayoría de equipos comerciales{" "}
            <span className="text-gradient-accent">pierde leads</span> sin darse cuenta.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Los leads llegan al CRM. Se asignan a comerciales.
            <br />Y luego empiezan los problemas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card p-5 rounded-xl shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <p.icon size={20} className="text-destructive" />
              </div>
              <span className="text-foreground font-medium">{p.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-foreground font-display font-semibold">
            El CRM registra datos.
          </p>
          <p className="text-muted-foreground text-lg">
            Pero no controla el comportamiento comercial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
