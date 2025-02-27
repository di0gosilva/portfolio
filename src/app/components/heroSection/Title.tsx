export default function Title() {
  return (
    <section className="
      mt-20 flex items-center justify-center
      md:mt-40
      lg:mt-[11.188rem]
      xl:mt-[13.375rem]
    ">
      <h1 className="text-5xl font-medium tracking-[-0.06rem]">
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
        ">
          Desenvolvedor Full Stack <br />
          <span className="md:block md:ml-52 md:mt-8 lg:ml-[17rem] xl:ml-[23rem] xl:mt-10">& Web Designer</span>
        </span>
      </h1>
    </section>
  )
}
