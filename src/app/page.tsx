import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaMailBulk} from 'react-icons/fa'

export default function Home() {
  return (
    <>

      <header className="mt-5 flex justify-between items-center">
        <h3 className="font-medium tracking-[-0.48px]">Diogo Silva</h3>

        <nav className="text-xs flex gap-2">
          <a href="#">sobre mim</a>
          <a href="#">projetos</a>
          <a href="#" className="text-green">currículo</a>
        </nav>
      </header>

      <div className='mt-32 flex justify-center gap-4'>
        <a href="https://linkedin.com" target='_blank' className='text-4xl'><FaLinkedin /></a>
        <a href="https://github.com" target='_blank' className='text-4xl'><FaGithub /></a>
        <a href="https://instagram.com" target='_blank' className='text-4xl'><FaInstagram /></a>
        <a href="https://gmail.com" target='_blank' className='text-4xl'><FaMailBulk /></a>
      </div>

      <div className="mt-28">
        <h2 className="text-5xl font-medium tracking-[-0.96px]">Desenvolvedor</h2>
        <h2 className="text-5xl font-medium tracking-[-0.96px]">Full Stack &</h2>
        <h2 className="text-5xl font-medium tracking-[-0.96px]">Web Designer</h2>
      </div>

      <p className='mt-28 text-xl font-normal tracking-[-0.6px]'>Seja visto.<br />
      Seja eficiente.<br />
      Eu <span className='text-green'>cuido</span> de ambos.</p>
    </>
  );
}
