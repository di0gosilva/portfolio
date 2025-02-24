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
      className="relative w-[350px] h-[180px] overflow-hidden
        md:w-[441px] md:h-[270px]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              className="object-contain w-full h-full bg-white"
              alt={`Imagem ${i + 1} do projeto`}
              width={800}
              height={450}
              sizes="(max-width: 640px) 350px, (max-width: 768px) 441px, 27.563rem"
              />
        ))}
      </motion.div>
    </div>
  );
}
