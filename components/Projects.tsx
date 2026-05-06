"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { stagger } from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="relative py-16 md:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo seleccionado"
          description="Plataformas, APIs e integraciones que están en producción y resuelven problemas concretos."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          {featured && <FeaturedProject project={featured} />}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
