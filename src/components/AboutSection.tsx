import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-muted/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Software Engineer with 4.5+ years of experience working in product-based and service-driven
                environments.
              </p>
              <p>
                Experienced in building end-to-end web and SaaS applications including product flow analysis,
                UI development, dashboard interfaces, and API integrations.
              </p>
              <p>
                Strong experience building React-based dashboards, CMS-driven platforms, and scalable frontend
                systems while collaborating closely with backend teams.
              </p>
            </div>

            <div className="glass-hover rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Years of Experience</span>
                <span className="font-mono text-2xl font-bold text-foreground">4.5+</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Domains Worked In</span>
                <span className="font-mono text-2xl font-bold text-foreground">4</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Technologies</span>
                <span className="font-mono text-2xl font-bold text-foreground">15+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
