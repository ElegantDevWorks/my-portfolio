import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-muted/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a question or just want to say hello, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="default" size="lg" asChild>
              <a href="mailto:prabhakarankmani@gmail.com">
                <Mail size={16} />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:prabhakarankmani@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} /> Email
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/prabha-karan-m/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://github.com/dummy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} /> GitHub
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
