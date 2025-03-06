// import Image from "next/image"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

export default function Navbar() {
  const green = "#0CA45A"
  const duration = 0.4

  return (
    <nav className="
      text-xs flex gap-2 tracking-[-0.03rem]
      sm:text-base sm:gap-3
      md:text-base md:gap-3
      lg:text-[1.125rem] lg:gap-4
      xl:text-xl xl:gap-5
      2xl:text-2xl
      xlwin:gap-4
    ">
      <motion.div
        whileHover={{ color: green}}
        transition={{ duration: duration }}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer">
          sobre mim
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ color: green}}
        transition={{ duration: duration }}
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          projetos
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ color: green}}
        transition={{ duration: duration }}
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          contato
        </Link>
      </motion.div>
    </nav>
  )
}
