type ProjectDescriptionProps = {
  description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div>
      <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]
        md:text-sm md:leading-[0.95rem] md:tracking-[0.02rem]
        lg:w-[25.875rem] lg:text-base lg:leading-[1.2rem] lg:tracking-[-0.03rem] lg:-mt-12
      '>{ description }</p>
    </div>
  )
}
