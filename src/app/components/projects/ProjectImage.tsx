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
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex w-full h-auto"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <Image
              src={src}
              className="object-contain w-full h-auto bg-white"
              alt={`Imagem ${i + 1} do projeto`}
              width={800}
              height={450}
              sizes="
                (max-width: 375px) 320px,
                (max-width: 390px) 335px,
                (max-width: 412px) 372px,
                (max-width: 425px) 385px,
                (max-width: 480px) 440px,
                (max-width: 640px) 334px,
                (max-width: 768px) 441px,
                (max-width: 1440px) 630px,
                (max-width: 1920px) 850px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
