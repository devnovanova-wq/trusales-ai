"use client";
import { useEffect } from "react";

export default function ScrollToPricing() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isMeta = params.get("utm_source") === "meta";

    if (!isMeta) return;

    let attempts = 0;
    const maxAttempts = 20;

    const interval = setInterval(() => {
      const el = document.getElementById("pricing");
      attempts++;

      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top > 10 || rect.top < -10) {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }
        if (Math.abs(rect.top) < 50 || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }

      if (attempts >= maxAttempts) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}