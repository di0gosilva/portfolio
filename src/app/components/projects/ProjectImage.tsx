"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

type ImageProjectProps = {
  images: string[]
}

export default function ProjectImage({ images }: ImageProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 overflow-hidden">
            <Image
              src={src}
              className="w-full aspect-video object-cover"
              alt={`Imagem ${i + 1} do projeto`}
              width={1920}
              height={1080}
              quality={100}
              priority={i === 0}
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1440px) 80vw,
                850px
              "
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
