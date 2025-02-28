"use client"
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialsHeader from "./SocialsHeader";

export default function Header() {
  return (
      <motion.header
        className="
          mx-5 mt-5 relative flex justify-between items-center
          sm:mx-10 sm:mt-7
          md:mx-10 md:mt-10
          lg:mx-[3.75rem] lg:mt-11
          xl:mx-20 xl:mt-12
          xlwin:mt-7
          2xl:mx-[6.25rem]
          "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SocialsHeader />
        <Logo />
        <Navbar />
      </motion.header>
  )
}
