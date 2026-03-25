"use client";

import { useEffect, useState } from "react";

const PopupDemo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem("popup_seen");
    const sessionSeen = sessionStorage.getItem("popup_seen_session");

    // ❌ Si ya se vio en esta sesión → NO mostrar
    if (sessionSeen) return;

    // ❌ Si se vio en últimas 24h → NO mostrar
    if (lastSeen && Date.now() - parseInt(lastSeen) < 86400000) return;

    const isMobile = window.innerWidth < 768;

    // 📱 MOBILE → delay 15s
    if (isMobile) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popup_seen", Date.now().toString());
        sessionStorage.setItem("popup_seen_session", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }

    // 💻 DESKTOP → exit intent (SOLO UNA VEZ)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);

        localStorage.setItem("popup_seen", Date.now().toString());
        sessionStorage.setItem("popup_seen_session", "true");

        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl relative">

        {/* ❌ Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3">
          ¿Quieres ver como funciona?
        </h3>

        <p className="text-gray-600 mb-4">
          Te lo enseñamos en 15 minutos. Reserva Ahora.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Mostramos en directo. Sin Compromisos.
        </p>

        {/* 🚀 CTA */}
        <a
          href="https://calendly.com/novau-info/demo-tru-sales"
          target="_blank"
          onClick={() => {
            setShow(false);
          }}
          className="block text-center bg-gradient-to-r from-[#00d4d4] to-[#0066ff] text-white rounded-lg py-3 font-semibold hover:opacity-90 transition"
        >
          Agendar DEMO
        </a>

      </div>
    </div>
  );
};

export default PopupDemo;