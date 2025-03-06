"use client"
import { motion } from 'framer-motion'
import {FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa'
import SocialLink from './SocialLink'

const socials = [
  {
    url: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    icon: FaLinkedin,
    size: 15,
    className: "md:h-[1.063rem] md:w-[1.063rem] lg:h-5 lg:w-5 xl:h-[1.625rem] xl:w-[1.625rem] xlwin:h-6 xlwin:w-6"
  },
  {
    url: "https://github.com/di0gosilva",
    icon: FaGithub,
    size: 15,
    className: "md:h-[1.063rem] md:w-[1.063rem] lg:h-5 lg:w-5 xl:h-[1.625rem] xl:w-[1.625rem] xlwin:h-6 xlwin:w-6"
  },
  {
    url: "https://instagram.com/di0gosilva",
    icon: FaInstagram,
    size: 15,
    className: "md:h-[1.125rem] md:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem] xl:h-[1.75rem] xl:w-[1.75rem] xlwin:h-[1.625rem] xlwin:w-[1.625rem]"
  },
  {
    url: "mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!",
    icon: FaEnvelope,
    size: 16,
    className: "md:h-[1.125rem] md:w-[1.125rem] lg:h-[1.425rem] lg:w-[1.425rem] xl:h-[1.75rem] xl:w-[1.875rem] xlwin:h-[1.625rem] xlwin:w-[1.7rem]"
  },
]

const Socials = ({ className = '' }) => {
  const green = "#0CA45A"
  const duration = 0.4

  return (
    <section className={`gap-3 items-center ${className}`}>
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

export const SocialsHeader = () => <Socials className='hidden lg:flex lg:gap-4 xl:gap-[1.125rem] 2xl:gap-5' />
export const SocialsFooter = () => <Socials className='flex gap-3 lg:gap-4 xl:gap-[1.125rem] 2xl:gap-5' />

export default Socials
