import { projects } from "../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import ProjectTechs from "./ProjectTechs";
import ProjectDescription from "./ProjectDescription";

export default function BoxProject() {
  return (
    <section className='mx-5 mt-14'>
      {
        projects.map((project) => (
          <div key={project.id} className="mb-10">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <ProjectImage images={project.images} />

              <div className='mt-8 flex items-center justify-between'>
                <ProjectTitle title={project.title} />
                <ProjectTechs techs={project.techImages} />
              </div>

              <ProjectDescription
                projectType={project.projectType}
                description={project.description}
              />
            </a>
          </div>
        ))
      }

    </section>
  )
}
