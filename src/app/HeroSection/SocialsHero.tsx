import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    size: 40
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    size: 40
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    size: 40
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    size: 44
  },
]

export default function SocialsHero() {
  return (
    <section className='mt-20 flex justify-center gap-5 items-center'>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
