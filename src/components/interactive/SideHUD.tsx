import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIcons: Record<string, string> = {
  hero: "◈",
  about: "◇",
  skills: "⬡",
  projects: "◆",
  process: "◎",
  why: "✦",
  contact: "◉",
};

const SideHUD = () => {
  const { activeSection, sections, scrollProgress } = useActiveSection();

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
      {/* Top decorative line */}
      <div className="w-px h-8 bg-gradient-to-b from-transparent to-border mb-2" />
      
      {/* Section indicators */}
      <div className="glass rounded-full py-4 px-2 flex flex-col items-center gap-3">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className={`
                relative w-8 h-8 rounded-lg flex items-center justify-center
                transition-all duration-300 group
                ${isActive 
                  ? "bg-primary text-primary-foreground scale-110" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }
              `}
              aria-label={`Navigate to ${section} section`}
            >
              <span className={`text-sm ${isActive ? "animate-pulse" : ""}`}>
                {sectionIcons[section] || "○"}
              </span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-1 rounded-lg bg-secondary text-foreground text-xs font-mono whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-secondary" />
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -right-1 w-1 h-4 bg-primary rounded-full glow-sm" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <div className="w-px h-16 bg-border relative mt-2 overflow-hidden rounded-full">
        <div 
          className="absolute top-0 left-0 w-full bg-primary transition-all duration-300"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Scroll percentage */}
      <div className="mt-2 text-xs font-mono text-muted-foreground">
        {Math.round(scrollProgress * 100)}%
      </div>
      
      {/* Bottom decorative line */}
      <div className="w-px h-8 bg-gradient-to-t from-transparent to-border mt-2" />
    </div>
  );
};

export default SideHUD;
