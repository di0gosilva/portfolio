import Image from 'next/image'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <header className="mt-5 flex justify-between items-center">
        <h3 className="font-medium tracking-[-0.03rem]">Diogo Silva</h3>

        <nav className="text-xs flex gap-2">
          <a href="#">sobre mim</a>
          <a href="#">projetos</a>
          <a href="#" className="text-green flex items-center border-b border-green pb-px">
            <Image src="../../images/Icon-Arrow-Down.svg" alt="Ícone de seta para baixo" width={8} height={8} className="mr-1"/>
            currículo
          </a>
        </nav>
      </header>

      <div className='mt-32 flex justify-center gap-5 items-center'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin size={40}/></a>
        <a href="https://github.com" target='_blank'><FaGithub size={40}/></a>
        <a href="https://instagram.com" target='_blank'><FaInstagram size={40}/></a>
        <a href="https://gmail.com" target='_blank'><FaEnvelope size={44}/></a>
      </div>

      <div className="mt-28 flex items-center justify-center">
        <h1 className="text-5xl font-medium tracking-[-0.06rem]">
          Desenvolvedor<br />
          Full Stack &<br />
          Web Designer
        </h1>
      </div>

      <div className='mt-28 flex justify-center items-center'>
        <p className='text-xl font-normal tracking-[-0.0375rem] leading-[1.1]'>Seja visto.<br />
        Seja eficiente.<br />
        Eu <span className='text-green'>cuido</span> de ambos.</p>
      </div>


      <div className='mt-28 flex justify-center items-center mb-3'>
        <Image src="../../images/Icon-Arrow-Down-2.svg" alt="Ícone de seta para baixo" width={32} height={32}/>
      </div>

      <h3 className="mt-5 font-medium tracking-[-0.03rem] relative">
        <span className='border-b-2 w-5 border-white absolute -bottom-px'></span>
        Sobre Mim
      </h3>

      <div className='mt-24'>
        <h2 className='font-medium text-lg tracking-[-0.03rem]'>Do conceito ao código:</h2>
        <h2 className='ml-7 -mt-1 font-medium text-lg tracking-[-0.03rem]'>Crio <span className='text-green'>experiências</span> digitais personalizadas.</h2>
      </div>

      <div className='mt-28 flex items-center justify-center'>
        <Image src="../../images/profile.svg" alt='Imagem de Perfil' width={153} height={153} />
      </div>
    </>
  );
}
