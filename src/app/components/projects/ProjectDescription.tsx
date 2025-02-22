type ProjectDescriptionProps = {
  description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div>
      <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]
        sm:w-[20.125rem] sm:text-sm sm:leading-[0.95rem] sm:tracking-[0.02rem]
      '>{ description }</p>
    </div>
  )
}
