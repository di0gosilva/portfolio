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
    <section className='mt-10 sm:mt-12'>
      {
        projects.map((project) => (
          <div ref={ref} key={project.id} className="mx-5 mb-10
            sm:mx-10 sm:mb-12">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer
                sm:flex sm:justify-between
              "
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="sm:mr-8"
              >
                <ProjectImage images={project.images} />
              </motion.div>

              <div className="sm:flex sm:flex-col sm:justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className='mt-8 flex items-center justify-between
                    sm:mt-0
                  '>
                  <ProjectTitle title={project.title} />
                  <ProjectTechs techs={project.techImages} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
                  <p className='mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-75 uppercase
                    sm:-mt-3 sm:text-lg
                  '>{ project.projectType }</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
                  <ProjectDescription
                    description={project.description}
                  />
                </motion.div>
              </div>
            </a>
          </div>
        ))
      }

    </section>
  )
}
