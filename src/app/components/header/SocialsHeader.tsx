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
    className: "sm:h-[1.063rem] sm:w-[1.063rem] md:h-5 md:w-5"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    size: 15,
    className: "sm:h-[1.063rem] sm:w-[1.063rem] md:h-5 md:w-5"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    size: 15,
    className: "sm:h-[1.125rem] sm:w-[1.125rem] md:h-[1.375rem] md:w-[1.375rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    size: 16,
    className: "sm:h-[1.125rem] sm:w-[1.125rem] md:h-[1.425rem] md:w-[1.425rem]"
  },
]

export default function SocialsHeader() {
  return (
    <section className='gap-3 items-center hidden
      md:flex md:gap-4
      lg:flex
      xl:flex
      2xl:flex
    '>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
