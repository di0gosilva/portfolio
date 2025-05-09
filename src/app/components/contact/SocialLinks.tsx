import { motion } from "framer-motion"

const socials = [
  {
    src: "https://www.linkedin.com/in/diogo-silva-ba702495/",
    title: "Linkedin"
  },
  {
    src: "https://github.com/di0gosilva",
    title: "Github"
  },
  {
    src: "https://instagram.com/di0gosilva",
    title: "Instagram"
  },
]

export default function SocialLinks() {
  const green = "#0CA45A"
  const duration = 0.4

  return (
    <>
      {socials.map((social, index) => (
        <motion.a
          whileHover={{ color: green}}
          transition={{ duration: duration }}
          key={index}
          href={social.src}
          target='_blank'
          rel="noopener noreferrer"
        >
          <h2 className='inline-block mt-5 text-5xl uppercase tracking-[-0.05rem] mb-[-0.5rem]
            xxxs:text-[2.5rem] xxxs:mt-6
            sm:text-[3.25rem] sm:mt-6
            md:text-[3.5rem] md:mt-4
            lg:text-7xl lg:mt-5
            xl:text-8xl
            xlwin:text-[5rem]
          '>{social.title}</h2><br />
        </motion.a>
      ))}
    </>
  )
}
