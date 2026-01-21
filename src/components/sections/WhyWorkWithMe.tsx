import { Target, Code2, Search, Clock, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: Target,
    title: "Business-First Development",
    description: "Every technical decision is made with your business goals in mind. Code serves the mission.",
  },
  {
    icon: Code2,
    title: "Clean, Scalable Code",
    description: "Maintainable architecture that your team can understand and extend for years to come.",
  },
  {
    icon: Search,
    title: "SEO Built-In",
    description: "Search optimization isn't an afterthought — it's baked into every project from the start.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description: "Solutions designed to grow with you. No quick fixes that become technical debt.",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    description: "Clear updates, honest timelines, and no surprises. You'll always know where we stand.",
  },
];

const WhyWorkWithMe = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-mono text-sm tracking-wider">05 / WHY ME</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Why <span className="text-primary">Work With Me</span>
            </h2>
          </div>
          
          {/* Reasons grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group p-8 rounded-2xl glass hover:bg-secondary/30 transition-all duration-500 hover:scale-[1.02] ${
                  index === 4 ? "lg:col-span-1 lg:col-start-2" : ""
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
