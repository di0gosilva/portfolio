import Image from "next/image"
import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="
      text-xs flex gap-2
      sm:text-base sm:gap-3
      md:text-[1.125rem] md:gap-4
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
        md:text-[1.125rem]
      ">
        <Image
          src="../../images/Icon-Arrow-Down-1.svg"
          alt="Ícone de seta para baixo"
          width={8}
          height={8}
          className="mr-1
            sm:w-4 sm:h-4
            md:w-[1.1rem] md:h-[1.1rem] md:-ml-0.5
          "/>
        currículo
      </a>
    </nav>
  )
}
