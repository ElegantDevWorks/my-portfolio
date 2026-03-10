import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "React-based dashboard with API integrations and dynamic data visualization for real-time analytics tracking across transportation, finance, and analytics systems.",
    tech: ["React", "REST API", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "ChinmayaGita Website",
    description: "Educational website built from scratch by coordinating with the client on requirements and content structure. Implemented using WordPress and Elementor with API integrations and AJAX.",
    tech: ["WordPress", "Elementor", "API Integration", "AJAX", "MySQL"],
  },
  {
    title: "Automation & Billing Software",
    description: "Product-based automation and billing platform with workflows supporting multiple business types and automated GST calculations for improved tax accuracy.",
    tech: ["Core PHP", "Yii2", "MySQL", "AJAX"],
  },
  {
    title: "Client Websites & Integrations",
    description: "Developed and managed multiple client-facing websites with API-based data exchange and payment gateway functionality.",
    tech: ["React", "Payment Gateway", "REST API", "Vercel"],
  },
  {
    title: "CMS Website Platform",
    description: "Content-driven platform with headless CMS integration using Sanity and Next.js for dynamic content delivery and website migrations.",
    tech: ["Next.js", "Sanity CMS", "React", "Tailwind CSS"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-muted/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-hover rounded-lg p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={16} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
