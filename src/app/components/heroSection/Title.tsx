export default function Title() {
  return (
    <section className="
      mt-20 flex items-center justify-center
      md:mt-40
      lg:mt-[11.7rem]
      xl:mt-[13.375rem]
      xlwin:mt-[7.75rem]
      2xl:mt-[11.25rem]
    ">
      <h1 className="text-5xl font-medium tracking-[-0.06rem]
        xxxs:text-[2.75rem]
        sm:text-6xl
      ">
        <span className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
          Desenvolvedor<br />
          Full Stack &<br />
          Web Designer
        </span>

        <span className="
          hidden
          md:block md:text-[3.5rem] md:-ml-0.5 md:-mt-1.5
          lg:text-7xl lg:-ml-1
          xl:text-8xl
          xlwin:text-[5.5rem]
          2xl:text-9xl 2xl:leading-none 2xl:tracking-[-0.03em]
        ">
          Desenvolvedor Full Stack <br />
          <span className="md:block md:ml-52 md:mt-8 lg:ml-[17rem] xl:ml-[23rem] xl:mt-10 xlwin:ml-[21rem] xlwin:mt-3 2xl:ml-[29rem] 2xl:mt-7">& Web Designer</span>
        </span>
      </h1>
    </section>
  )
}
