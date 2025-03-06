"use client"
import { motion } from 'framer-motion'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import SocialLink from '../../SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    className: "xxxs:h-8 xxxs:w-8 h-10 w-10 md:h-6 md:w-6"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    className: "xxxs:h-8 xxxs:w-8 h-10 w-10 md:h-6 md:w-6"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    className: "xxxs:h-9 xxxs:w-9 h-10 w-10 md:h-[1.625rem] md:w-[1.625rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    className: "xxxs:h-9 xxxs:w-10 h-11 w-11 md:h-[1.438rem] md:w-[1.438rem] md:-mt-1"
  },
]

export default function SocialsHero() {
  const green = "#0CA45A"
  const duration = 0.4

  return (
    <section className='
      mt-20 flex justify-center gap-6 items-center
      xxxs:gap-5
      md:flex-col md:justify-center md:items-center md:gap-4 md:mt-40
      lg:hidden
      xl:hidden
      2xl:hidden
    '>
      {socials.map((social) => (
        <motion.div
          whileHover={{ color: green}}
          transition={{ duration: duration }}
          key={social.url}>
            <SocialLink social={social} />
        </motion.div>
      ))}
    </section>
  )
}
