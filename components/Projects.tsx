"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { stagger } from "@/lib/motion";
import Section from "./Section";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Trabajo seleccionado"
      description="Plataformas, APIs e integraciones que están en producción y resuelven problemas concretos."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-8"
      >
        {featured && <FeaturedProject project={featured} index={1} />}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 2} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
