export default function Text() {
  return (
    <section className='mt-20 flex justify-center items-center
      md:mt-40
      lg:mt-[11.7rem]
      xl:mt-[13.375rem]
      xlwin:mt-[7.75rem]
      2xl:mt-[11.25rem]
    '>
      <p className='text-xl font-normal tracking-[-0.0375rem] leading-[1.1]
        sm:text-2xl sm:leading-[1.65rem] sm:tracking-[-0.045rem]
        lg:text-2xl lg:leading-[1.65rem] lg:tracking-[-0.045rem]
        xl:text-3xl xl:leading-[1.1] xl:tracking-[-0.03em]
        xlwin:text-2xl xlwin:leading-[1.65rem]
        2xl:text-[2rem]
      '>
        Seja visto.<br />
        Seja eficiente.<br />
        Eu <span className='text-green'>cuido</span> de ambos.
      </p>
    </section>
  )
}

