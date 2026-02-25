import { motion } from "framer-motion";
import Section from "../layout/Section";
import { skillCategories } from "../../data/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function About() {
  return (
    <Section id="about" title="About" number="01.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <p>
            I started my journey in tech studying{" "}
            <span className="text-heading">Systems Engineering</span> at{" "}
            <span className="text-heading">UNAB</span> in Colombia, and quickly
            found my passion in building things for the web. What began as small
            freelance projects turned into a career spanning startups across
            continents.
          </p>

          <p>
            Today I work as a Full Stack Developer at{" "}
            <a
              href="https://prevalentware.com"
              className="highlight-link"
              target="_blank"
              rel="noreferrer"
            >
              PrevalentWare
            </a>
            , where I build scalable web apps with{" "}
            <span className="text-heading">Next.js, TypeScript, and AWS</span>.
            I've also worked remotely for{" "}
            <span className="text-heading">Mayfly Ventures</span> in Australia
            and helped build{" "}
            <a
              href="https://spracheapp.com"
              className="highlight-link"
              target="_blank"
              rel="noreferrer"
            >
              SpracheApp
            </a>
            , a German learning platform.
          </p>

          <p>
            I care deeply about{" "}
            <span className="text-heading">clean architecture</span>,{" "}
            <span className="text-heading">test-driven development</span>, and
            shipping products that are both well-crafted and performant. When I'm
            not coding, I'm exploring new technologies or working on side
            projects that push me out of my comfort zone.
          </p>
        </div>

        {/* Skills Overview */}
        <motion.div
          className="mt-12 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="tech-badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
