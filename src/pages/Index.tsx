import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingOrb from "@/components/interactive/FloatingOrb";
import SideHUD from "@/components/interactive/SideHUD";
import TerminalWidget from "@/components/interactive/TerminalWidget";
import BackgroundEffects from "@/components/interactive/BackgroundEffects";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background decorations */}
      <BackgroundEffects />
      
      {/* Viewport-fixed interactive elements */}
      <FloatingOrb />
      <SideHUD />
      <TerminalWidget />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <WhyWorkWithMe />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
