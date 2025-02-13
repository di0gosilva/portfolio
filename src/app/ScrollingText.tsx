"use client"

import { motion } from 'framer-motion';

const ScrollingText = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        {/* Primeira parte do texto */}
        <motion.h2
          animate={{
            x: ['0%', '-100%'], // Move da posição inicial até a tela inteira
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop', // Animação infinita
            duration: 10, // Tempo de movimento
            ease: 'linear', // Movimento contínuo
          }}
          className="text-4xl font-semibold whitespace-nowrap text-blue-500"
        >
          Texto rolando horizontalmente de forma contínua.
        </motion.h2>

        {/* Segunda parte do texto, logo após o primeiro */}
        <motion.h2
          animate={{
            x: ['5%', '100%'], // Começa a segunda instância do texto da direita
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop', // Animação infinita
            duration: 10, // Mesmo tempo para ambas as animações
            ease: 'linear', // Movimento contínuo
            delay: 1, // Começa meio caminho depois do primeiro
          }}
          className="text-4xl font-semibold whitespace-nowrap text-blue-500"
        >
          Texto rolando horizontalmente de forma contínua.
        </motion.h2>
      </div>
    </div>
  );
};

export default ScrollingText;
