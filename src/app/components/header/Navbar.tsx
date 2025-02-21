import Image from "next/image"
import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="text-xs flex gap-2">
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">
        sobre mim
      </Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
        projetos
      </Link>
      <a href="#" className="text-green flex items-center border-b border-green pb-px">
        <Image src="../../images/Icon-Arrow-Down.svg" alt="Ícone de seta para baixo" width={8} height={8} className="mr-1"/>
        currículo
      </a>
    </nav>
  )
}
