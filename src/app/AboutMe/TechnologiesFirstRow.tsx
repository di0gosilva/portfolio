import Image from "next/image"
import { technologies } from "../data/technologies";
import { motion } from "framer-motion";

export default function TechnologiesFirstRow() {
  const firstRow = technologies.slice(0, 8);
  return (
    <>
      <div className='mx-5 mt-12 font-normal text-xs tracking-[-0.04em] leading-[1.125rem]'>
        <p>Ferramentas e tecnologias que utilizo:</p>
      </div>

      <div className="mt-8 overflow-hidden whitespace-nowrap relative w-full xs:gap-3.5">
        <motion.div
          className="flex min-w-max justify-start"
          animate={{ x: ['0%', '-30%'] }}
          transition={{ repeat: Infinity, duration: 200, ease: 'linear' }}
        >
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-4">
              {[...Array(40)].map((_, i) =>
                firstRow.map((item, index) => (
                  <Image
                    key={`${j}-${i}-${index}`} // Garante chaves únicas
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className={item.classname}
                  />
                ))
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

