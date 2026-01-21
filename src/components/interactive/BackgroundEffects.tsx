import { useEffect, useState } from "react";

interface BackgroundElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  type: "line" | "dot" | "bracket" | "grid";
}

const BackgroundEffects = () => {
  const [elements, setElements] = useState<BackgroundElement[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // Generate random background elements
  useEffect(() => {
    const newElements: BackgroundElement[] = [];
    const types: BackgroundElement["type"][] = ["line", "dot", "bracket", "grid"];

    for (let i = 0; i < 30; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 60,
        rotation: Math.random() * 360,
        opacity: 0.02 + Math.random() * 0.05,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setElements(newElements);
  }, []);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderElement = (el: BackgroundElement) => {
    const parallaxY = scrollY * (0.1 + el.opacity * 2);
    const style = {
      left: `${el.x}%`,
      top: `${el.y}%`,
      transform: `translateY(${parallaxY}px) rotate(${el.rotation}deg)`,
      opacity: el.opacity,
    };

    switch (el.type) {
      case "line":
        return (
          <div
            key={el.id}
            className="absolute pointer-events-none"
            style={style}
          >
            <div 
              className="bg-primary/30"
              style={{ width: el.size, height: 1 }}
            />
          </div>
        );
      case "dot":
        return (
          <div
            key={el.id}
            className="absolute pointer-events-none rounded-full bg-primary/30"
            style={{
              ...style,
              width: el.size / 10,
              height: el.size / 10,
            }}
          />
        );
      case "bracket":
        return (
          <div
            key={el.id}
            className="absolute pointer-events-none font-mono text-primary/30"
            style={{
              ...style,
              fontSize: el.size / 3,
            }}
          >
            {"</>"}
          </div>
        );
      case "grid":
        return (
          <div
            key={el.id}
            className="absolute pointer-events-none border border-primary/10"
            style={{
              ...style,
              width: el.size,
              height: el.size,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated elements */}
      {elements.map(renderElement)}
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundEffects;
