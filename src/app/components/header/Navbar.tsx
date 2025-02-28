import Image from "next/image"
import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="
      text-xs flex gap-2 tracking-[-0.03rem]
      sm:text-base sm:gap-3
      md:text-base md:gap-3
      lg:text-[1.125rem] lg:gap-4
      xl:text-xl xl:gap-5
      2xl:text-2xl
      xlwin:gap-4
    ">
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">
        sobre mim
      </Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
        projetos
      </Link>
      <a href="#" className="
        text-green flex items-center border-b border-green pb-px
        sm:text-base
        md:text-base
        lg:text-[1.125rem]
        xl:text-xl
        2xl:text-2xl
      ">
        <Image
          src="../../images/Icon-Arrow-Down-1.svg"
          alt="Ícone de seta para baixo"
          width={8}
          height={8}
          className="mr-1
            sm:w-4 sm:h-4 sm:-ml-0.5
            md:w-4 md:h-4
            lg:w-[1.1rem] lg:h-[1.1rem] lg:-ml-0.5
            xl:w-[1.25rem] xl:h-[1.25rem]
            2xl:w-6 2xl:h-6
          "/>
        currículo
      </a>
    </nav>
  )
}
