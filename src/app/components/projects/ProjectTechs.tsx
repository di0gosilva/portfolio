import Image from "next/image"

type ProjectTechsProps = {
  techs: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function ProjectTechs({ techs }: ProjectTechsProps) {
  return (
    <div className='flex items-center gap-3 xl:-ml-0.5'>
      {techs.map((tech, index) => (
        <Image
          key={index}
          src={tech.src}
          alt={tech.alt}
          width={tech.width}
          height={tech.height}
          className="lg:w-[1.75rem] lg:h-[1.75rem]
            xl:w-[2.188rem] xl:h-[2.188rem]"
        />
      ))}
    </div>
  )
}
