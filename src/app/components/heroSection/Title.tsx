export default function Title() {
  return (
    <section className="
      mt-20 flex items-center justify-center
      md:mt-40
      lg:mt-[11.188rem]
    ">
      <h1 className="text-5xl font-medium tracking-[-0.06rem]">
        <span className="block md:hidden">
          Desenvolvedor<br />
          Full Stack &<br />
          Web Designer
        </span>

        <span className="
          hidden
          md:block md:text-[3.5rem] md:-ml-0.5 md:-mt-1.5
          lg:text-7xl lg:-ml-1
        ">
          Desenvolvedor Full Stack <br />
          <span className="md:block md:ml-52 md:mt-8 lg:ml-[17rem]">& Web Designer</span>
        </span>
      </h1>
    </section>
  )
}
