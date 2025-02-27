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
          md:h-16 md:w-12 md:-mt-2.5
          lg:h-20 lg:w-[3.625rem]
          xl:h-24 xl:w-[4.25rem]
        "/>
    </motion.div>
  );
};

export default ScrollIndicator;
