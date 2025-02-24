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
    <section className='mt-10
      md:mt-12
      lg:mt-16
    '>
      {
        projects.map((project) => (
          <div ref={ref} key={project.id} className="mx-5 mb-10
            md:mx-10 md:mb-12
            lg:mx-[3.75rem] lg:mt-16
          ">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer
                md:flex md:justify-between
              "
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="md:mr-8
                  lg:mr-12
                "
              >
                <ProjectImage images={project.images} />
              </motion.div>

              <div className="md:flex md:flex-col md:justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className='mt-8 flex items-center justify-between
                    md:mt-0
                    lg:flex-col lg:items-start lg:gap-10
                  '>
                  <ProjectTitle title={project.title} />
                  <ProjectTechs techs={project.techImages} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
                  <p className='mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-65 uppercase
                    md:-mt-10 md:text-lg
                    lg:text-xl
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
