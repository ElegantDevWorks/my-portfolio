import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-pic.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="section-container relative z-10 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl flex-1"
          >
            <p className="font-mono text-sm text-primary mb-4">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
              Prabhakaran
              {/* <br /> */}
              <span className="gradient-text-accent"> Mani</span>
            </h1>
            <p className="font-mono text-sm text-muted-foreground mb-6">Frontend Developer(React.js) | SaaS Applications | Dashboards & Admin Panels</p>
            <p className="text-muted-foreground max-w-xl leading-relaxed mb-10">
              {/* Software Engineer with 4.5+ years of experience building scalable web and SaaS applications.
              Specialized in React development, dashboard interfaces, and API integrations across finance,
              transportation, and analytics domains. */}
              Frontend Developer with 6+ years of experience, specializing in React.js development with strong knowledge of hooks, component architecture & modern JavaScript, experienced in building scalable dashboards, API-driven applications & performant UIs
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button variant="default" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Resume.pdf" download>Download Resume</a>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/prabha-karan-m/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:prabhakarankmani@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
              <img
                src={profilePhoto}
                alt="Prabhakaran Mani"
                className="relative w-full h-full rounded-full object-cover border-2 border-border/50 shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground animate-float block">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
