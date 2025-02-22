type ProjectTitleProps = {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <h2 className='font-medium text-2xl tracking-[-0.03rem] leading-[0.41rem]
      sm:text-2xl sm:-mt-2
      md:text-[1.75rem] md:-mt-1
    '>
      {title}
    </h2>
  )
}
