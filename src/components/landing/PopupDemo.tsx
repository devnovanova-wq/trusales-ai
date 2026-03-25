"use client";

import { useEffect, useState } from "react";

const PopupDemo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem("popup_seen");

    // ⏱️ 24 horas = 86400000 ms
    if (lastSeen && Date.now() - parseInt(lastSeen) < 86400000) {
      return;
    }

    const isMobile = window.innerWidth < 768;

    // 📱 MOBILE → delay 15s
    if (isMobile) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popup_seen", Date.now().toString());
      }, 15000);

      return () => clearTimeout(timer);
    }

    // 💻 DESKTOP → exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        localStorage.setItem("popup_seen", Date.now().toString());
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

        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3">
          Antes de irte...
        </h3>

        <p className="text-gray-600 mb-4">
          ¿Quieres ver en 10 minutos cuántos leads estás perdiendo ahora mismo?
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Te lo enseño en directo. Sin compromiso.
        </p>

        {/* CTA */}
        <a
          href="#video"
          className="block text-center bg-black text-white rounded-lg py-3 font-semibold hover:opacity-90 transition"
        >
          Agendar demo
        </a>

      </div>
    </div>
  );
};

export default PopupDemo;