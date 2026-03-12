import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Bonbloc Technologies, Chennai",
    period: "Jun 2025 – Feb 2026",
    points: [
      "Designed and developed scalable React.js dashboards and product modules for SaaS platforms.",
      "Translated Figma designs and product workflows into reusable UI components using React Hooks and modern frontend practices.",
      "Integrated REST APIs, authentication systems, and role-based access control for dynamic application workflows.",
      "Collaborated with product, design, and backend teams in Agile Scrum environment using Jira.",
    ],
  },
  {
    role: "Web Developer",
    company: "BT Infotech, Chennai",
    period: "Aug 2024 – May 2025",
    points: [
      "Developed responsive web applications using React.js, JavaScript, and TailwindCSS.",
      "Implemented REST API integrations and dynamic frontend logic to support client platforms.",
      "Built and customized WordPress websites with plugin integrations and feature enhancements.",
      "Collaborated with development teams using Git version control across multiple service-based projects.",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Ennuviz Labs & Technology, Chennai",
    period: "Jun 2023 – Jun 2024",
    points: [
      "Collaborated with clients to gather requirements and convert Figma designs into functional web interfaces.",
      "Implemented website revamps using Next.js integrated with Sanity Headless CMS.",
      "Managed application deployments using Vercel hosting and Git-based development workflows.",
      "Worked with US-based teams to deliver scalable frontend solutions for client platforms.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Reach Accountant, Chennai",
    period: "Apr 2021 – Mar 2023",
    points: [
      "Developed backend modules for a financial analysis and automation billing software platform.",
      "Implemented GST calculations, billing workflows, and invoice management features.",
      "Integrated REST APIs and AJAX-based interactions to support dynamic application operations.",
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
