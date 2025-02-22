"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ImageProjectProps = {
  images: string[]
}

export default function ProjectImage({ images }: ImageProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isHovered) return; // Pausa animação no PC se hover for ativado

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className="relative w-full max-w-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            className="px-0.5
              md:w-[27.563rem] md:h-[16.875rem]
            "
            alt="Imagens do projeto Smartcash"
            width={350}
            height={180} />
        ))}
      </motion.div>
    </div>
  );
}
