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

      <h3 className="mt-8 font-medium tracking-[-0.03rem] relative">
        <span className='border-b-2 w-5 border-white absolute -bottom-px'></span>
        Sobre Mim
      </h3>

      <div className='mt-20'>
        <h2 className='font-medium text-lg tracking-[-0.03rem]'>Do conceito ao código:</h2>
        <h2 className='ml-7 -mt-1 font-medium text-lg tracking-[-0.03rem]'>Crio <span className='text-green'>experiências</span> digitais personalizadas.</h2>
      </div>

      <div className='mt-28 flex items-center justify-center'>
        <Image src="../../images/perfil.svg" alt='Imagem de Perfil' width={170} height={170} />
      </div>

      <div className='mt-24 font-normal text-xs tracking-[-0.04em] leading-[1.125rem]'>
        <p>Sou Diogo Silva, desenvolvedor full-stack, localizado em Florianópolis, Brasil. Especializado em criar interfaces web e mobile atraentes e funcionais, com foco na experiência do usuário e atenção aos detalhes. Sempre busco aprender novas habilidades e tendências para trazer resultados de alta qualidade a cada projeto.</p>

        <p className='mt-10'>Ferramentas e tecnologias que utilizo:</p>
      </div>

      <div className='mt-12 mb-10 flex flex-wrap gap-4 items-center'>
        <Image src="../../images/socials/figma.svg" alt="Ícone do Figma" width={30} height={30}/>
        <Image src="../../images/socials/Photoshop.svg" alt="Ícone do Photoshop" width={30} height={30}/>
        <Image src="../../images/socials/Illustrator.svg" alt="Ícone do Illustrator" width={30} height={30}/>
        <Image src="../../images/socials/Html5.svg" alt="Ícone do HTML5" width={25.71} height={30}/>
        <Image src="../../images/socials/CSS3.svg" alt="Ícone do CSS3" width={25.71} height={30}/>
        <Image src="../../images/socials/Javascript.svg" alt="Ícone do Javascript" width={30} height={30}/>
        <Image src="../../images/socials/Typescript.svg" alt="Ícone do Typescript" width={30} height={30}/>
        <Image src="../../images/socials/React.svg" alt="Ícone do React JS" width={30} height={30}/>
        <Image src="../../images/socials/Tailwind.svg" alt="Ícone do Tailwind" width={30} height={30}/>
        <Image src="../../images/socials/Next.js.svg" alt="Ícone do Next JS" width={30} height={30}/>
        <Image className='ml-[0.125rem]' src="../../images/socials/Node.js.svg" alt="Ícone do Node JS" width={26.6} height={30}/>
        <Image src="../../images/socials/Flutter.svg" alt="Ícone do Flutter" width={24.35} height={30}/>
        <Image className='ml-[0.168rem]' src="../../images/socials/Python.svg" alt="Ícone do Python" width={29.8} height={30}/>
        <Image className='ml-[-0.176rem]' src="../../images/socials/Postgresql.svg" alt="Ícone do PostgreSQL" width={26.83} height={26.83}/>
        <Image className='ml-[0.651rem]' src="../../images/socials/MongoDB.svg" alt="Ícone do MongoDB" width={14.03} height={30}/>
        <Image className='ml-[0.456rem]' src="../../images/socials/Github.svg" alt="Ícone do Github" width={30.5} height={29.76}/>
      </div>

      <h3 className="mt-8 font-medium tracking-[-0.03rem] relative">
        <span className='border-b-2 w-5 border-white absolute -bottom-px'></span>
        Projetos
      </h3>

      <div className='mt-10'>
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

      <div className='mt-10 mb-6'>
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

      <h3 className="mt-8 font-medium tracking-[-0.03rem] relative">
        <span className='border-b-2 w-5 border-white absolute -bottom-px'></span>
        Contato
      </h3>

      <div className='mt-48 mb-48'>
        <h2 className='text-[3.2rem] tracking-[-0.05rem] mb-[-0.5rem]'>ENVIAR EMAIL</h2>

        <p className='mt-12 tracking-[-0.05rem] mb-[-0.5rem]'>ou entre em contato no:</p>

        <h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>LINKEDIN</h2>
        <h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>INSTAGRAM</h2>
        <h2 className='mt-5 text-5xl tracking-[-0.05rem] mb-[-0.5rem]'>GITHUB</h2>
      </div>

      <div className='flex justify-between items-center'>
        <p className='text-xs tracking-[-0.03rem]'>COPYRIGHT &copy; DIOGO SILVA 2025</p>

        <div className='flex gap-3 items-center'>
          <a href="https://linkedin.com" target='_blank'><FaLinkedin size={15}/></a>
          <a href="https://github.com" target='_blank'><FaGithub size={15}/></a>
          <a href="https://instagram.com" target='_blank'><FaInstagram size={15}/></a>
          <a href="https://gmail.com" target='_blank'><FaEnvelope size={16}/></a>
        </div>
      </div>

      <span className='mt-3 border-b-[1px] w-[350px] border-white absolute'></span>

      <h2 className='text-center font-medium mt-3 mb-1 text-[3.2rem] tracking-[-0.05rem]'>DIOGO SILVA</h2>

    </>
  );
}
