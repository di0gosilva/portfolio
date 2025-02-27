import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    className: "h-10 w-10 md:h-6 md:w-6"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    className: "h-10 w-10 md:h-6 md:w-6"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    className: "h-10 w-10 md:h-[1.625rem] md:w-[1.625rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    className: "h-11 w-11 md:h-[1.438rem] md:w-[1.438rem] md:-mt-1"
  },
]

export default function SocialsHero() {
  return (
    <section className='
      mt-20 flex justify-center gap-6 items-center
      md:flex-col md:justify-center md:items-center md:gap-4 md:mt-40
      lg:hidden
      xl:hidden
      2xl:hidden
    '>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
