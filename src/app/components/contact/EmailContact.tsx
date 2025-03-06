import { motion } from "framer-motion"

export default function EmailContact() {
  const green = "#0CA45A"
  const duration = 0.4

  return (
    <motion.a
      whileHover={{ color: green}}
      transition={{ duration: duration }}
      href="mailto:diogo.silva8@estudante.sesisenai.org.br?subject=Assunto&body=Olá!"
      className="cursor-pointer inline-block">
      <h2 className='text-[3.2rem] uppercase tracking-[-0.05rem] mb-[-0.5rem]
        xxxs:text-[2.75rem]
        sm:text-6xl sm:-mt-5
        md:text-[4rem]
        lg:text-[5rem]
        xl:text-[6.5rem] xl:-mb-6
        xlwin:text-[5.5rem]
      '>Enviar Email</h2>
    </motion.a>
  )
}
