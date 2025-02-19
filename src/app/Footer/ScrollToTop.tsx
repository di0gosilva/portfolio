"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-4 ounded-full transition-opacity z-10 duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src="../../images/Icon-Arrow-Up.svg" alt="Ícone Seta para Cima" width={34} height={35} />
    </button>
  );
};

export default ScrollToTop;
