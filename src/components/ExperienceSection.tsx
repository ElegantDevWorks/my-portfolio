import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Bonbloc Technologies, Chennai",
    period: "June 2025 – Present",
    points: [
      "Contributing to end-to-end SaaS product development by translating product flows and Figma designs into scalable React-based UI implementations.",
      "Developing responsive interfaces using React.js (ES6+, Hooks) and integrating REST APIs for dynamic data handling.",
      "Collaborating with backend teams to define API contracts and ensure seamless frontend-backend integration.",
      "Building domain-driven modules and dashboards across transportation, finance, and analytics systems.",
    ],
  },
  {
    role: "Web Developer",
    company: "BT Infotech, Chennai",
    period: "Aug 2024 – May 2025",
    points: [
      "Developed and enhanced client-facing web applications with a focus on functional and scalable solutions.",
      "Implemented API integrations, data handling logic, and payment gateway workflows for business websites.",
      "Managed code versions using Git and supported application deployments on platforms like Vercel.",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Ennuviz Labs & Technology, Chennai",
    period: "Jun 2023 – Jun 2024",
    points: [
      "Engaged with clients to gather requirements, discuss workflows, and define functional flows using Figma-based designs.",
      "Implemented website revamps, headless CMS solutions (Sanity with Next.js), and handled website migrations.",
      "Collaborated with teams to maintain, enhance, and deploy applications across different hosting environments.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Reach Accountant, Chennai",
    period: "Apr 2021 – Mar 2023",
    points: [
      "Contributed to the development of a product-based automation and billing software platform.",
      "Built and enhanced application modules using Core PHP, Yii2 framework, MySQL, and AJAX.",
      "Worked closely with product and QA teams to implement features and resolve issues.",
    ],
  },
  {
    role: "IT Support Engineer",
    company: "Eagle Fleet Services, Coimbatore",
    period: "Nov 2018 – Apr 2020",
    points: [
      "Supported end users with system setup, user access assistance, and troubleshooting hardware and software issues.",
      "Coordinated with senior IT teams to ensure smooth day-to-day IT operations.",
    ],
  },
  {
    role: "Production Engineer",
    company: "Sakthi Engineering Works, Chennai",
    period: "Jun 2016 – Sep 2018",
    points: [
      "Supported production operations by monitoring processes, ensuring quality standards and coordinating with cross-functional teams.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-[26px] w-[11px] h-[11px] rounded-full border-2 border-primary bg-background" />

                  <div className="glass-hover rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                      <div>
                        <h3 className="font-semibold">{exp.role}</h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary shrink-0">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
