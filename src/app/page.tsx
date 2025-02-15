import Image from 'next/image'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import Marquee from './Marquee'
import ScrollToTop from './ScrollToTop'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import AboutMe from './AboutMe.tsx/AboutMe'
import SectionTitle from './SectionTitle'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />

      <SectionTitle title='Projetos' />

      <div className='mx-5 mt-10'>
        <Image src="../../images/logo-smartcash.svg" alt="Logo do projeto Smartcash" width={350} height={215} />

        <div className='mt-4 flex items-center justify-between'>
          <h2 className='font-medium text-2xl tracking-[-0.03rem] leading-[0.41rem]'>SmartCash</h2>

          <div className='flex items-center gap-3'>
            <Image src="../../images/project-icons/html.svg" alt="Ícone do HTML5" width={23} height={23} />
            <Image src="../../images/project-icons/css.svg" alt="Ícone do CSS3" width={21.88} height={25} />
            <Image src="../../images/project-icons/js.svg" alt="Ícone do Javascript" width={25} height={25} />
          </div>
        </div>

        <p className='mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-75'>WEBSITE</p>

        <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]'>Um website que apresente um dashboard com entrada e saída de dados, um balanço total de gastos mensais com gráficos para controle financeiro.</p>
      </div>

      <div className='mx-5 mt-10 mb-6'>
        <Image src="../../images/logo-infomotor.svg" alt="Logo do projeto Info Motor" width={350} height={215} />

        <div className='mt-4 flex items-center justify-between'>
          <h2 className='font-medium text-2xl tracking-[-0.03rem] leading-[0.41rem]'>Info Motor</h2>

          <div className='flex items-center gap-3'>
            <Image src="../../images/project-icons/figma.svg" alt="Ícone do Figma" width={15.50} height={22.98} />
            <Image src="../../images/project-icons/flutter.svg" alt="Ícone do Flutter" width={23} height={23} />
            <Image src="../../images/project-icons/postgresql.svg" alt="Ícone do PostgreSQL" width={25} height={25} />
          </div>
        </div>

        <p className='mt-3 tracking-[-0.03rem] leading-[0.44rem] opacity-75'>APLICATIVO ANDROID/IOS</p>

        <p className='mt-8 text-xs tracking-[0.01rem] leading-[1.1rem]'>Um SIG - Sistema de Gerenciamento Inteligente que apresente um dashboard com dados de estoque, produção e manutenção para uma fábrica de veículos.</p>
      </div>

      <SectionTitle title="Contato" />

      <div className='mx-5 mt-28 mb-28'>
        <h2 className='text-[3.2rem] tracking-[-0.05rem] mb-[-0.5rem]'>ENVIAR EMAIL</h2>

        <p className='mt-12 tracking-[-0.05rem] mb-[-0.5rem]'>ou entre em contato no:</p>

        <a href="https://www.linkedin.com/in/diogo-silva-ba702495/" target='_blank' rel="noopener noreferrer"><h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>LINKEDIN</h2></a>
        <a href="https://github.com/di0gosilva" target='_blank' rel="noopener noreferrer"><h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>GITHUB</h2></a>
        <a href="https://instagram.com/di0gosilva" target='_blank' rel="noopener noreferrer"><h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>INSTAGRAM</h2></a>
      </div>

      <div className='mx-5 flex justify-between items-center'>
        <p className='text-xs tracking-[-0.03rem]'>COPYRIGHT &copy; DIOGO SILVA 2025</p>

        <div className='flex gap-3 items-center'>
          <a href="https://www.linkedin.com/in/diogo-silva-ba702495/" target='_blank' rel="noopener noreferrer"><FaLinkedin size={15}/></a>
          <a href="https://github.com/di0gosilva" target='_blank' rel="noopener noreferrer"><FaGithub size={15}/></a>
          <a href="https://instagram.com/di0gosilva" target='_blank' rel="noopener noreferrer"><FaInstagram size={15}/></a>
          <a href="https://gmail.com" target='_blank' rel="noopener noreferrer"><FaEnvelope size={16}/></a>
        </div>
      </div>

      <span className='mt-3 border-b-[1px] w-full border-white absolute'></span>
      <ScrollToTop />
      <Marquee />
    </>
  );
}
