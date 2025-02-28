"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
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
      className={`fixed bottom-5 right-4 ounded-full transition-opacity z-10 duration-300
        xxxs:bottom-[1.3rem]
        xs:bottom-[1.313rem]
        sm:right-[2.2rem] sm:bottom-[1.188rem]
        md:right-[2.375rem] md:bottom-6
        lg:right-[3.75rem] lg:bottom-[1.875rem]
        xlwin:right-[4.7rem] xlwin:bottom-[1.8rem]
        xl:right-20 xl:bottom-[1.8rem]
        ${ isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="../../images/Icon-Arrow-Up.svg"
        alt="Ícone Seta para Cima"
        width={34}
        height={35}
        className="
          sm:h-11 sm:w-11
          md:h-12 md:w-12
          lg:h-14 lg:w-14
          xl:h-20 xl:w-16
          xlwin:h-16 xlwin:w-16
        "
      />
    </button>
  );
};

export default ScrollToTop;
