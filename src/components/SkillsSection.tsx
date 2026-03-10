import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Palette, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend & Product Development",
    icon: Code2,
    skills: ["React.js", "JavaScript (ES6+)", "HTML", "CSS", "Dashboard Development", "SaaS Application Development", "Product Flow Analysis"],
  },
  {
    title: "Backend & Integrations",
    icon: Server,
    skills: ["REST API Integration", "Data Handling", "Payment Gateway Integration", "CMS-Based Development"],
  },
  {
    title: "Product & Design Tools",
    icon: Palette,
    skills: ["Figma", "Adobe Illustrator", "Wireframing & Flow Design"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel Deployment", "Agile / Sprint-Based Development"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-hover rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <cat.icon size={18} className="text-primary" />
                  <h3 className="font-semibold text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {s}
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

export default SkillsSection;
