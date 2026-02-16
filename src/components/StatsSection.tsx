"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center py-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#228B22] mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium border-b-2 border-[#228B22] pb-4 mx-auto max-w-[150px]">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <StatItem value={21} suffix="+" label="Years of Experience" />
          <StatItem value={21000} suffix="+" label="Patients Treated" />
          <StatItem value={3500} suffix="+" label="Surgeries Avoided" />
        </div>
      </div>
    </section>
  );
}
