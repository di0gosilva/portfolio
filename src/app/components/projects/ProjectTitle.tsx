type ProjectTitleProps = {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <h2 className='font-medium text-2xl tracking-[-0.03rem] leading-[0.41rem]
      md:text-2xl md:-mt-2
      lg:text-[1.75rem] lg:-mt-1
      xl:text-3xl
      2xl:text-[2.4rem]
    '>
      {title}
    </h2>
  )
}
