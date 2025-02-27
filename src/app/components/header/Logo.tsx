"use client"
import { motion } from "framer-motion"

export default function Logo() {
  const text = "Diogo Silva";

  // Função para gerar as letras com animação
  const letters = text.split("").map((letter, index) => {
    // Verifica se o índice está no espaço e não aplica animação a ele
    if (letter === " ") {
      return (
        <span key={index}>&nbsp;</span> // Adiciona um espaço no lugar do motion.span
      );
    }

    // Adiciona animação para as letras
    return (
      <motion.span
        key={index}
        style={{ display: "inline-block" }}
        initial={{ color: "#0CA45A" }}
        animate={{ color: "#F7F1D7" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeInOut",
        }}
      >
        {letter}
      </motion.span>
    );
  });

  return (
    <h1 className="
      font-medium tracking-[-0.03rem]
      md:text-2xl
      lg:text-[1.75rem] lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2
      xl:text-[2rem]
    ">
      {letters}
    </h1>
  );
}
