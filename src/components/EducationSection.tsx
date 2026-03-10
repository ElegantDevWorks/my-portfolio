import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 bg-muted/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-hover rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Engineering (Mechanical Engineering)</h4>
                <p className="text-sm text-primary">JayaSurya College of Engineering</p>
                <span className="font-mono text-xs text-muted-foreground">Graduated: May 2016</span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-hover rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Award size={18} className="text-primary" />
                <h3 className="font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {["Diploma in Frontend Web Designing", "PHP Certification", "Python Certification"].map((cert) => (
                  <li key={cert} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary shrink-0">›</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
