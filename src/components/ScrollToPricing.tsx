"use client";
import { useEffect } from "react";

export default function ScrollToPricing() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isMeta = params.get("utm_source") === "meta";
    const hash = window.location.hash;

    // Funciona tanto con #pricing como si ya viene sin hash pero con utm_source=meta
    const targetId = hash ? hash.replace("#", "") : (isMeta ? "pricing" : null);

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 500); // 500ms da tiempo a que Next.js hidrate el DOM
      }
    }
  }, []);

  return null;
}