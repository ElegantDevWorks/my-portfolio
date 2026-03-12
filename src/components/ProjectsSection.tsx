// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "SaaS Analytics Dashboard",
//     description: "React-based dashboard with API integrations and dynamic data visualization for real-time analytics tracking across transportation, finance, and analytics systems.",
//     tech: ["React", "REST API", "Chart.js", "Tailwind CSS"],
//   },
//   {
//     title: "ChinmayaGita Website",
//     description: "Educational website built from scratch by coordinating with the client on requirements and content structure. Implemented using WordPress and Elementor with API integrations and AJAX.",
//     tech: ["WordPress", "Elementor", "API Integration", "AJAX", "MySQL"],
//   },
//   {
//     title: "Automation & Billing Software",
//     description: "Product-based automation and billing platform with workflows supporting multiple business types and automated GST calculations for improved tax accuracy.",
//     tech: ["Core PHP", "Yii2", "MySQL", "AJAX"],
//   },
//   {
//     title: "Client Websites & Integrations",
//     description: "Developed and managed multiple client-facing websites with API-based data exchange and payment gateway functionality.",
//     tech: ["React", "Payment Gateway", "REST API", "Vercel"],
//   },
//   {
//     title: "CMS Website Platform",
//     description: "Content-driven platform with headless CMS integration using Sanity and Next.js for dynamic content delivery and website migrations.",
//     tech: ["Next.js", "Sanity CMS", "React", "Tailwind CSS"],
//   },
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-32 bg-muted/40">
//       <div className="section-container">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             {projects.map((p, i) => (
//               <motion.div
//                 key={p.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="glass-hover rounded-lg p-6 flex flex-col justify-between group"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="font-semibold text-lg">{p.title}</h3>
//                     <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                         <Github size={16} />
//                       </a>
//                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                         <ExternalLink size={16} />
//                       </a>
//                     </div>
//                   </div>
//                   <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <span key={t} className="font-mono text-xs text-primary/80">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;





import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Finfit – Financial SaaS Platform",
    description: "Developed analytics dashboards and financial monitoring modules enabling real-time data visualization and reporting features.",
    tech: ["React.js", "JavaScript", "Chart.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "PixelAI & Carryex – AI Design Platform / Transport Management System",
    description: "Built interactive UI modules for an AI-powered design platform and developed dashboards supporting logistics workflow management and operational data visualization.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Client Websites – Service-Based Web Platforms",
    description: "Developed and maintained multiple client websites implementing responsive UI components, API integrations, and WordPress customizations.",
    tech: ["React.js", "Javascript", "WordPress", "Python", "TailwindCSS", "REST APIs"],
  },
  {
    title: "ChinmayaGita – Educational Platform",
    description: "Developed and maintained a WordPress-based educational website including AJAX interactions, MySQL database handling, and website migration.",
    tech: ["WordPress", "AJAX", "MySQL", "REST APIs"],
  },
  {
    title: "Client Website Revamps – Headless CMS Platforms",
    description: "Modernized client websites by implementing Next.js frontend architecture with Sanity CMS for scalable content management.",
    tech: ["Next.js", "Sanity CMS", "Vercel", "JavaScript", "Git"],
  },
  {
    title: "Automation Billing & Financial Analysis Platform",
    description: "Product-based platform used by service centers, restaurants, and retail businesses to manage billing automation and financial reporting.",
    tech: ["Core PHP", "Yii2 Framework", "MySQL", "Bootstrap", "AJAX", "REST APIs", "Asana"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  };

  const p = projects[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  return (
    <section id="projects" className="py-32 bg-muted/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-muted-foreground font-mono min-w-[3ch] text-center">
                {current + 1}/{projects.length}
              </span>
              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass-hover rounded-lg p-8 sm:p-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl">{p.title}</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
