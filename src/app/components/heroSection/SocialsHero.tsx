import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    className: "h-10 w-10 sm:h-6 sm:w-6"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    className: "h-10 w-10 sm:h-6 sm:w-6"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    className: "h-10 w-10 sm:h-[1.625rem] sm:w-[1.625rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    className: "h-11 w-11 sm:h-[1.438rem] sm:w-[1.438rem] sm:-mt-1"
  },
]

export default function SocialsHero() {
  return (
    <section className='
      mt-20 flex justify-center gap-6 items-center
      sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:mt-40
    '>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
