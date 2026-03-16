import { useState, useEffect, useMemo } from "react";

function getWeekNumber(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}

function getVisitorSeed(): number {
  if (typeof window === "undefined") {
    return Math.floor(Math.random() * 1000);
  }

  const key = "trusales_visitor_seed";
  let seed = localStorage.getItem(key);

  if (!seed) {
    seed = String(Math.floor(Math.random() * 1000));
    localStorage.setItem(key, seed);
  }

  return Number(seed);
}

function getEndOfWeek(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const daysUntilSunday = day === 0 ? 0 : 7 - day;
  const end = new Date(now);
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);
  return end;
}

export interface ActivationData {
  slotsAvailable: number;
  countdown: { days: number; hours: number; minutes: number; seconds: number };
}

export function useActivationSlots(): ActivationData {
  const visitorVariation = useMemo(() => {
    const seed = getVisitorSeed();
    return (seed % 3) - 1; // -1, 0, or 1
  }, []);

  const calculateSlots = (): number => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon...
    const weekNum = getWeekNumber();
    
    // Base slots by day: Mon=9, Tue=8, ... Sun=3
    const daySlots: Record<number, number> = {
      1: 9, 2: 8, 3: 7, 4: 6, 5: 5, 6: 4, 0: 3,
    };
    
    let base = daySlots[day] ?? 5;
    
    // Weekly variation: alternate weeks start slightly lower
    if (weekNum % 2 === 0) {
      base = Math.max(3, base - 1);
    }
    
    // Visitor variation
    const result = base + visitorVariation;
    return Math.max(3, Math.min(9, result));
  };

  const calculateCountdown = () => {
    const now = new Date();
    const end = getEndOfWeek();
    const diff = Math.max(0, end.getTime() - now.getTime());
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [slots, setSlots] = useState(calculateSlots);
  const [countdown, setCountdown] = useState(calculateCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    
    // Recalculate slots every hour
    const slotInterval = setInterval(() => {
      setSlots(calculateSlots());
    }, 60 * 60 * 1000);

    return () => {
      clearInterval(interval);
      clearInterval(slotInterval);
    };
  }, []);

  return { slotsAvailable: slots, countdown };
}
