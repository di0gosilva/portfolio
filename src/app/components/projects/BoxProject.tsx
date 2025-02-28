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
      sm:mt-12
      md:mt-14
      lg:mt-[4.5rem]
      xl:mt-20
      xlwin:mt-16'>
      {projects.map((project) => (
        <div
          ref={ref}
          key={project.id}
          className="mx-5 mb-10
            sm:mx-10 sm:mt-12
            md:mx-10 md:mb-14
            lg:mx-[3.75rem] lg:mt-[4.5rem]
            xl:mx-20 xl:mt-20
            xlwin:mt-16
            2xl:mx-[6.25rem]"
        >
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer md:flex"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/2 md:mr-8 lg:mr-12 2xl:mr-16"
            >
              <ProjectImage images={project.images} />
            </motion.div>

            <div className="md:w-1/2 md:flex md:flex-col md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="mt-8 flex items-center justify-between
                  md:mt-0
                  lg:flex-col lg:items-start lg:gap-5
                  xl:gap-9
                  2xl:gap-16"
              >
                <ProjectTitle title={project.title} />
                <ProjectTechs techs={project.techImages} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <p className="mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-65 uppercase
                  md:-mt-4 md:text-lg
                  lg:text-xl
                  xl:text-2xl
                  2xl:text-3xl">
                  {project.projectType}
                </p>
              </motion.div>

              {/* Descrição do Projeto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <ProjectDescription description={project.description} />
              </motion.div>
            </div>
          </a>
        </div>
      ))}
    </section>
  )
}
