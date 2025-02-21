"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import ProjectTechs from "./ProjectTechs";
import ProjectDescription from "./ProjectDescription";

export default function BoxProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true ,margin: "-100px" });

  return (
    <section id="projects" className='mx-5 mt-10'>
      {
        projects.map((project) => (
          <div ref={ref} key={project.id} className="mb-10">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <ProjectImage images={project.images} />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className='mt-8 flex items-center justify-between'>
                <ProjectTitle title={project.title} />
                <ProjectTechs techs={project.techImages} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className='mt-8 flex items-center justify-between'>
                <ProjectDescription
                  projectType={project.projectType}
                  description={project.description}
                />
              </motion.div>
            </a>
          </div>
        ))
      }

    </section>
  )
}
