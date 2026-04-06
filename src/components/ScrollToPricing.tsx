"use client";
import { useEffect } from "react";

export default function ScrollToPricing() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isMeta = params.get("utm_source") === "meta";
    const hash = window.location.hash?.replace("#", "");
    const targetId = hash || (isMeta ? "pricing" : null);

    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 20;

    const interval = setInterval(() => {
      const el = document.getElementById(targetId);
      attempts++;

      if (el) {
        const rect = el.getBoundingClientRect();
        // Solo hace scroll si el elemento no está ya visible
        if (rect.top > 10 || rect.top < -10) {
          window.scrollTo({
            top: el.offsetTop - 80, // 80px de margen para el navbar
            behavior: "smooth",
          });
        }
        // Para el intervalo cuando el elemento está en pantalla o tras muchos intentos
        if (Math.abs(rect.top) < 50 || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }

      if (attempts >= maxAttempts) clearInterval(interval);
    }, 200); // cada 200ms durante un máximo de 4 segundos

    return () => clearInterval(interval);
  }, []);

  return null;
}