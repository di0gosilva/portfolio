import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <header className="mt-5 flex justify-between items-center">
        <h3 className="font-medium tracking-[-0.03rem]">Diogo Silva</h3>

        <nav className="text-xs flex gap-2">
          <a href="#">sobre mim</a>
          <a href="#">projetos</a>
          <a href="#" className="text-green flex items-center gap-1 "><FaArrowDown /> currículo</a>
        </nav>
      </header>

      <div className='mt-32 flex justify-center gap-5 items-center'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin size={40}/></a>
        <a href="https://github.com" target='_blank'><FaGithub size={40}/></a>
        <a href="https://instagram.com" target='_blank'><FaInstagram size={40}/></a>
        <a href="https://gmail.com" target='_blank'><FaEnvelope size={44}/></a>
      </div>

      <div className="mt-28 ml-4">
        <h2 className="text-5xl font-medium tracking-[-0.06rem]">Desenvolvedor</h2>
        <h2 className="text-5xl font-medium tracking-[-0.06rem]">Full Stack &</h2>
        <h2 className="text-5xl font-medium tracking-[-0.06rem]">Web Designer</h2>
      </div>

      <div className='mt-28 flex justify-center items-center'>
        <p className='text-xl font-normal tracking-[-0.0375rem] leading-[1.1]'>Seja visto.<br />
        Seja eficiente.<br />
        Eu <span className='text-green'>cuido</span> de ambos.</p>
      </div>


      <div className='mt-28 flex justify-center items-center'>
        <a href="#"><FaArrowDown size={32} className='text-green'/></a>
      </div>
    </>
  );
}
