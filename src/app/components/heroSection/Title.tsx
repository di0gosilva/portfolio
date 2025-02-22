export default function Title() {
  return (
    <section className="
      mt-20 flex items-center justify-center
      sm:mt-40
    ">
      <h1 className="text-5xl font-medium tracking-[-0.06rem]">
        <span className="block sm:hidden">
          Desenvolvedor<br />
          Full Stack &<br />
          Web Designer
        </span>

        <span className="
          hidden
          sm:block sm:text-[3.5rem] sm:-ml-0.5 sm:-mt-1.5
        ">
          Desenvolvedor Full Stack <br />
          <span className="sm:block sm:ml-52 sm:mt-8">& Web Designer</span>
        </span>
      </h1>
    </section>
  )
}
