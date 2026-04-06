"use client";
import { useEffect } from "react";

export default function ScrollToPricing() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isMeta = params.get("utm_source") === "meta";
    const hash = window.location.hash;
    const targetId = hash ? hash.replace("#", "") : (isMeta ? "pricing" : null);

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 1500); // ← aumentado a 1500ms
      }
    }
  }, []);

  return null;
}