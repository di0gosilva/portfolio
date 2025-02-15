import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="text-xs flex gap-2">
      <a href="#">sobre mim</a>
      <a href="#">projetos</a>
      <a href="#" className="text-green flex items-center border-b border-green pb-px">
        <Image src="../../images/Icon-Arrow-Down.svg" alt="Ícone de seta para baixo" width={8} height={8} className="mr-1"/>
        currículo
      </a>
    </nav>
  )
}

