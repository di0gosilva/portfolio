"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="transform -translate-x-1/2"
      animate={{ y: [0, 15, 0] }} // Animação de sobe e desce
      transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
    >
      <Image
        src="../../images/Icon-Arrow-Down-1.svg"
        alt="Ícone de seta para baixo"
        width={32}
        height={32}
        className="animate-pulse
          sm:h-16 sm:w-12 sm:-mt-2.5
          md:h-20 md:w-[3.625rem]
        "/>
    </motion.div>
  );
};

export default ScrollIndicator;
