import { motion } from "framer-motion";
import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 section-heading lg:hidden">About</h2>

        <div className="space-y-4">
          <p>
            I'm a full-stack developer who thrives on building{" "}
            <span className="text-slate-200">scalable, cloud-based web applications</span>{" "}
            that make a real impact. With over 2 years of professional experience, I've worked
            across startups and product companies — from{" "}
            <a
              href="https://prevalentware.com"
              className="highlight-link"
              target="_blank"
              rel="noreferrer"
            >
              PrevalentWare
            </a>{" "}
            in Colombia to{" "}
            <a
              href="#experience"
              className="highlight-link"
            >
              Mayfly Ventures
            </a>{" "}
            in Australia.
          </p>

          <p>
            My main focus these days is crafting robust applications with{" "}
            <span className="text-slate-200">Next.js, TypeScript, and AWS</span>,
            shipping clean architecture backed by test-driven development and CI/CD automation.
            I enjoy the full spectrum — from designing intuitive interfaces to deploying
            scalable cloud infrastructure.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open-source projects, or working on side projects that challenge me to learn
            something new.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
