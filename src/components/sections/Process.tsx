import { Lightbulb, Layout, Code, Search, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Strategy & Architecture",
    description: "Understanding business goals, defining technical requirements, and planning scalable architecture.",
  },
  {
    number: "02",
    icon: Layout,
    title: "UX & System Planning",
    description: "Designing user flows, database schemas, and integration blueprints before writing code.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Integration",
    description: "Building with clean, maintainable code. Integrating APIs, ERPs, and third-party services.",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO & Performance",
    description: "Technical SEO implementation, performance optimization, and analytics setup.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch, Monitor & Scale",
    description: "Deployment, monitoring, and ongoing optimization as the project grows.",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-mono text-sm tracking-wider">04 / PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              My Way of <span className="text-primary">Working</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A structured approach that balances speed with quality, ensuring every project succeeds.
            </p>
          </div>
          
          {/* Process timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
            
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    marginTop: index > 0 ? '-4rem' : '0',
                    paddingTop: index > 0 ? '4rem' : '0'
                  }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`glass p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-300 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-primary font-mono text-sm">{step.number}</span>
                        <h3 className="font-display font-semibold text-lg text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center glow-sm">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
