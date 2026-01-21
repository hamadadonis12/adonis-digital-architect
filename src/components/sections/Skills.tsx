import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Backend & Full-Stack",
    color: "from-blue-500 to-cyan-500",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
  {
    title: "CMS & eCommerce",
    color: "from-purple-500 to-pink-500",
    skills: ["WordPress", "WooCommerce", "Shopify", "Custom CMS"],
  },
  {
    title: "ERP & Integrations",
    color: "from-orange-500 to-yellow-500",
    skills: ["Odoo ERP", "XML-RPC", "API Integration", "Inventory Sync"],
  },
  {
    title: "SEO & Marketing",
    color: "from-green-500 to-emerald-500",
    skills: ["Technical SEO", "On-Page SEO", "Keyword Research", "Google Tag Manager"],
  },
  {
    title: "Infrastructure & Tools",
    color: "from-red-500 to-orange-500",
    skills: ["Cloudflare", "Linux Servers", "cPanel", "Git", "Microsoft 365"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-mono text-sm tracking-wider">02 / SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit refined over years of building production-grade systems.
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative p-6 rounded-2xl glass overflow-hidden transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Category title */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-4 relative z-10">
                  {category.title}
                </h3>
                
                {/* Skills list */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono bg-secondary/50 text-muted-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />
              </div>
            ))}
          </div>
          
          {/* Additional tools row */}
          <div 
            className={`mt-12 p-6 rounded-2xl glass transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="font-display font-semibold text-center text-muted-foreground mb-4">
              Also experienced with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["SEMrush", "Ubersuggest", "Analytics", "SPF/DKIM/DMARC", "DNS Management", "Email Infrastructure"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-mono bg-secondary/30 text-muted-foreground rounded-full border border-border/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
