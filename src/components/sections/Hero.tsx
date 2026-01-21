import { ArrowDown, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for projects</span>
            <span className="text-border">•</span>
            <MapPin className="w-3 h-3" />
            <span>Lebanon · Remote</span>
          </div>
          
          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Adonis</span>{" "}
            <span className="text-primary glow-text">Hamad</span>
          </h1>
          
          {/* Role */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground font-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Full-Stack Web Developer · eCommerce Architect · SEO Specialist
          </p>
          
          {/* Tagline */}
          <p 
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Building scalable, SEO-ready systems with performance baked in from day one.
            Business-first development that grows with you.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 glow-sm hover:glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
      
      {/* Decorative code lines */}
      <div className="absolute left-8 top-1/3 hidden lg:block opacity-20">
        <pre className="font-mono text-xs text-primary/60">
{`const developer = {
  name: "Adonis Hamad",
  focus: "Full-Stack",
  passion: "Clean Code"
};`}
        </pre>
      </div>
      
      <div className="absolute right-8 bottom-1/3 hidden lg:block opacity-20">
        <pre className="font-mono text-xs text-primary/60">
{`// Build. Scale. Succeed.
await deployProject({
  performance: "optimized",
  seo: "built-in"
});`}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
