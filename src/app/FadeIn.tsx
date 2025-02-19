"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  threshold?: number;
}

const FadeIn = ({ children, threshold = 0.5 }: FadeInProps) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={elementRef}
      className="w-full"
      initial={{ opacity: 0 }} // Começa com opacidade 0 e ligeiramente abaixo
      animate={{
        opacity: inView
          ? [0, 0.3, 0.6, 1] // Definindo breakpoints para a opacidade
          : 0,  // Se não estiver em vista, a opacidade será 0
      }}
      transition={{
        duration: 1.3, // Animação mais suave
        ease: "easeOut",
        times: [0, 0.3, 0.6, 1], // O tempo que cada breakpoint será atingido
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
