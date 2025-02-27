import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    size: 15,
    className: "md:h-[1.063rem] md:w-[1.063rem] lg:h-5 lg:w-5 xl:h-[1.625rem] xl:w-[1.625rem]"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    size: 15,
    className: "md:h-[1.063rem] md:w-[1.063rem] lg:h-5 lg:w-5 xl:h-[1.625rem] xl:w-[1.625rem]"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    size: 15,
    className: "md:h-[1.125rem] md:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem] xl:h-[1.75rem] xl:w-[1.75rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    size: 16,
    className: "md:h-[1.125rem] md:w-[1.125rem] lg:h-[1.425rem] lg:w-[1.425rem] xl:h-[1.75rem] xl:w-[1.875rem]"
  },
]

export default function SocialsFooter() {
  return (
    <section className='flex gap-3 items-center
      lg:gap-4
    '>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
