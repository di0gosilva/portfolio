type ProjectDescriptionProps = {
  projectType: string;
  description: string;
}

export default function ProjectDescription({ projectType, description }: ProjectDescriptionProps) {
  return (
    <div>
      <p className='mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-75'>{ projectType }</p>
      <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]'>{ description }</p>
    </div>
  )
}
