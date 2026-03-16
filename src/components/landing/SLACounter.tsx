"use client";

import { useState, useEffect } from "react";

const SLACounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="bg-foreground/90 backdrop-blur rounded-xl px-4 py-2 font-mono text-primary text-lg font-bold tracking-widest">
      <span className="text-xs text-primary-foreground/60 block mb-0.5 font-body tracking-normal">SLA Timer</span>
      {hrs}:{mins}:<span className="animate-counter-tick">{secs}</span>
    </div>
  );
};

export default SLACounter;
