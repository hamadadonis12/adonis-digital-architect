import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Brescia Middle East",
    category: "eCommerce Platform",
    description:
      "Custom Laravel eCommerce platform with full Odoo ERP integration. Features inventory management, order approval workflows, CMS customization, and comprehensive SEO optimization.",
    role: "Lead Developer & Architect",
    stack: ["Laravel", "Odoo ERP", "MySQL", "REST APIs", "SEO"],
    gradient: "from-blue-600 to-cyan-600",
    features: ["Odoo Integration", "Inventory Sync", "Order Workflows", "CMS"],
  },
  {
    id: 2,
    title: "Worldwide Travel & Tourism",
    category: "Travel Platform & CRM",
    description:
      "Laravel-based travel platform with integrated CRM functionality. Dynamic package management, API integrations with travel services, and SEO-driven content architecture.",
    role: "Full-Stack Developer",
    stack: ["Laravel", "PHP", "MySQL", "API Integration", "CRM"],
    gradient: "from-purple-600 to-pink-600",
    features: ["Dynamic Packages", "CRM System", "API Integration", "SEO Structure"],
  },
  {
    id: 3,
    title: "LeoFirearms",
    category: "Service Platform",
    description:
      "Professional WordPress website with SEO-optimized structure. Service-focused platform designed for maximum visibility and conversion.",
    role: "WordPress Developer & SEO",
    stack: ["WordPress", "PHP", "SEO", "Performance"],
    gradient: "from-orange-600 to-red-600",
    features: ["SEO Optimized", "Service Pages", "Performance", "Analytics"],
  },
  {
    id: 4,
    title: "b-gate.org",
    category: "Magazine & Content Platform",
    description:
      "Magazine and content platform with comprehensive Google Tag Manager integration. Strategic SEO implementation and analytics tracking for content performance.",
    role: "Developer & SEO Strategist",
    stack: ["CMS", "GTM", "Analytics", "SEO Strategy"],
    gradient: "from-green-600 to-emerald-600",
    features: ["GTM Integration", "Content Platform", "Analytics", "SEO Strategy"],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary font-mono text-sm tracking-wider">03 / PROJECTS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real-world projects showcasing end-to-end development, from architecture to deployment.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 glass" />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left: Project info */}
                    <div className="space-y-4">
                      {/* Category badge */}
                      <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Role */}
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary">Role:</span> {project.role}
                      </p>
                    </div>
                    
                    {/* Right: Tech & features */}
                    <div className="space-y-6">
                      {/* Tech stack */}
                      <div>
                        <h4 className="text-sm font-mono text-muted-foreground mb-3">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-sm font-mono bg-secondary/50 text-foreground rounded-lg border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key features */}
                      <div>
                        <h4 className="text-sm font-mono text-muted-foreground mb-3">KEY FEATURES</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <ArrowUpRight className="w-3 h-3 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
