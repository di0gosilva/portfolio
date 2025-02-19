import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    size: 15
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    size: 15
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    size: 15
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    size: 16
  },
]

export default function SocialsFooter() {
  return (
    <section className='flex gap-4 items-center'>
      {socials.map((social, index) => (
        <SocialLink social={social} key={index}/>
      ))}
    </section>
  )
}
