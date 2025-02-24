import Image from "next/image"
import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="
      text-xs flex gap-2
      md:text-base md:gap-3
      lg:text-[1.125rem] lg:gap-4
    ">
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">
        sobre mim
      </Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
        projetos
      </Link>
      <a href="#" className="
        text-green flex items-center border-b border-green pb-px
        md:text-base
        lg:text-[1.125rem]
      ">
        <Image
          src="../../images/Icon-Arrow-Down-1.svg"
          alt="Ícone de seta para baixo"
          width={8}
          height={8}
          className="mr-1
            md:w-4 md:h-4
            lg:w-[1.1rem] lg:h-[1.1rem] lg:-ml-0.5
          "/>
        currículo
      </a>
    </nav>
  )
}
