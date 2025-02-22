"use client"
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
      <motion.header
        className="
          mx-5 mt-5 flex justify-between items-center
          sm:mx-10 sm:mt-10
          "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Logo />
        <Navbar />
      </motion.header>
  )
}
