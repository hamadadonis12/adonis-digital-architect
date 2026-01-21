import { Code2, TrendingUp, Settings, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Architecture",
    description: "Laravel, PHP, MySQL, REST APIs — building robust backends that scale.",
  },
  {
    icon: TrendingUp,
    title: "SEO-First Development",
    description: "Technical SEO, on-page optimization, and analytics built from the ground up.",
  },
  {
    icon: Settings,
    title: "ERP & Integration Expert",
    description: "Deep Odoo experience, API integrations, inventory sync, and workflow automation.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Clean code, fast load times, and maintainable systems that last.",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-mono text-sm tracking-wider">01 / ABOUT</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Digital Architect & <span className="text-primary">Problem Solver</span>
            </h2>
          </div>
          
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Bio */}
            <div 
              className={`space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a hands-on developer and system architect with years of experience 
                building web platforms that don't just work — they <span className="text-foreground font-medium">perform, scale, and convert</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans the full stack: from <span className="text-primary">Laravel</span> backends 
                and complex <span className="text-primary">eCommerce architectures</span> to deep 
                <span className="text-primary"> Odoo ERP integrations</span>, inventory synchronization, 
                and custom CMS solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                What sets me apart? <span className="text-foreground font-medium">SEO and performance aren't afterthoughts</span> — 
                they're built into every project from day one. I combine technical SEO expertise 
                with clean architecture to create systems that rank well and run fast.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I think beyond code. Every decision considers business impact, long-term maintainability, 
                and scalability. Whether it's a startup MVP or an enterprise platform, 
                I build with the future in mind.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Remote Ready</div>
                </div>
              </div>
            </div>
            
            {/* Right: Highlight cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`group p-6 rounded-xl glass hover:bg-secondary/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
