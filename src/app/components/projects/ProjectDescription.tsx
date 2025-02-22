type ProjectDescriptionProps = {
  description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div>
      <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]
        sm:w-[20.125rem] sm:text-sm sm:leading-[0.95rem] sm:tracking-[0.02rem]
        md:w-[25.875rem] md:text-base md:leading-[1.2rem] md:tracking-[-0.03rem] md:-mt-4
      '>{ description }</p>
    </div>
  )
}
