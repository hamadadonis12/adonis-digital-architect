import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState, useRef } from "react";

const sectionCommands: Record<string, string[]> = {
  hero: ["$ whoami", ">> adonis_hamad", "$ status --available"],
  about: ["$ cat profile.md", ">> loading bio...", "$ years --exp 5+"],
  skills: ["$ npm run stack", ">> laravel init", "$ composer require odoo"],
  projects: ["$ git log --oneline", ">> brescia-erp", "$ deploy --prod"],
  process: ["$ flow --start", ">> strategy first", "$ optimize --seo"],
  why: ["$ diff --quality", ">> business-first", "$ test --reliable"],
  contact: ["$ ping client", ">> establishing...", "$ mailto --send"],
};

const TerminalWidget = () => {
  const { activeSection, scrollProgress } = useActiveSection();
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const commands = sectionCommands[activeSection] || sectionCommands.hero;

  // Reset and start typing when section changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentLineIndex(0);
    setIsTyping(true);
  }, [activeSection]);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    const currentCommand = commands[currentLineIndex];
    if (!currentCommand) {
      setIsTyping(false);
      return;
    }

    let charIndex = 0;
    const currentLineText = currentLineIndex > 0 
      ? displayedText + "\n" 
      : "";

    const typeChar = () => {
      if (charIndex <= currentCommand.length) {
        setDisplayedText(currentLineText + currentCommand.slice(0, charIndex));
        charIndex++;
        timeoutRef.current = setTimeout(typeChar, 30 + Math.random() * 20);
      } else {
        // Move to next line after a pause
        timeoutRef.current = setTimeout(() => {
          if (currentLineIndex < commands.length - 1) {
            setCurrentLineIndex((prev) => prev + 1);
          } else {
            setIsTyping(false);
            // Restart after delay
            timeoutRef.current = setTimeout(() => {
              setDisplayedText("");
              setCurrentLineIndex(0);
              setIsTyping(true);
            }, 3000);
          }
        }, 500);
      }
    };

    timeoutRef.current = setTimeout(typeChar, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTyping, currentLineIndex, commands]);

  // Dim when near bottom or scrolling fast
  const opacity = scrollProgress > 0.9 ? 0.3 : 1;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 hidden lg:block transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="w-64 glass rounded-lg overflow-hidden border border-border/50">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs font-mono text-muted-foreground ml-2">
            terminal
          </span>
        </div>
        
        {/* Terminal body */}
        <div className="p-3 h-24 font-mono text-xs">
          <pre className="text-primary/90 whitespace-pre-wrap">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
            )}
          </pre>
        </div>
        
        {/* Status bar */}
        <div className="px-3 py-1.5 bg-secondary/30 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-mono text-muted-foreground">
            @adonis
          </span>
          <span className="text-[10px] font-mono text-primary">
            {activeSection}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWidget;
