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
    <div className='flex items-center gap-3'>
      {techs.map((tech, index) => (
        <Image
          key={index}
          src={tech.src}
          alt={tech.alt}
          width={tech.width}
          height={tech.height}
        />
      ))}
    </div>
  )
}
