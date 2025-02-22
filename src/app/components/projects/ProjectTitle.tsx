type ProjectTitleProps = {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <h2 className='font-medium text-2xl tracking-[-0.03rem] leading-[0.41rem]
      sm:text-3xl sm:-mt-2
    '>
      {title}
    </h2>
  )
}
