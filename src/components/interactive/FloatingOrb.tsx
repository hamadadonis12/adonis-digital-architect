import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";

const sectionLabels: Record<string, string> = {
  hero: "Home",
  about: "Profile",
  skills: "Stack",
  projects: "Builds",
  process: "Method",
  why: "Value",
  contact: "Connect",
};

const FloatingOrb = () => {
  const { activeSection, scrollProgress } = useActiveSection();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to orb's resting position
      const orbX = window.innerWidth - 80;
      const orbY = window.innerHeight - 80;
      
      // Subtle magnetic effect
      const deltaX = (e.clientX - orbX) * 0.02;
      const deltaY = (e.clientY - orbY) * 0.02;
      
      setMousePos({ x: deltaX, y: deltaY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth interpolation for magnetic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [mousePos]);

  // Calculate the stroke dashoffset for progress ring
  const circumference = 2 * Math.PI * 28;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center"
      style={{
        transform: `translate(${orbPos.x}px, ${orbPos.y}px)`,
      }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
      
      {/* Main orb */}
      <div className="relative w-20 h-20 rounded-full glass border border-primary/30 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300">
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 64 64"
        >
          {/* Background ring */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          {/* Progress ring */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300"
          />
        </svg>
        
        {/* Label */}
        <div className="relative z-10 text-center">
          <span className="text-xs font-mono text-primary">
            {sectionLabels[activeSection] || "Home"}
          </span>
        </div>
        
        {/* Inner glow on hover */}
        <div className="absolute inset-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Floating particles around orb */}
      <div className="absolute w-2 h-2 bg-primary/40 rounded-full animate-orbit" style={{ animationDelay: "0s" }} />
      <div className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-orbit" style={{ animationDelay: "-7s", animationDuration: "15s" }} />
      <div className="absolute w-1 h-1 bg-primary/20 rounded-full animate-orbit" style={{ animationDelay: "-14s", animationDuration: "25s" }} />
    </div>
  );
};

export default FloatingOrb;
