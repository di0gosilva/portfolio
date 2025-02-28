type ProjectDescriptionProps = {
  description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div>
      <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]
        sm:text-sm
        md:text-sm md:leading-[0.95rem] md:tracking-[0.02rem]
        lg:text-base lg:leading-[1.2rem] lg:tracking-[-0.03em] lg:-mt-12
        xl:text-xl xl:tracking-[-0.03em]
        2xl:text-3xl
      '>{ description }</p>
    </div>
  )
}
