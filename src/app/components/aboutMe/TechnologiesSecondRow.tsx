import Image from "next/image"
import { motion } from "framer-motion";
import { technologies } from "../../data/technologies";

export default function TechnologiesSecondRow() {
  const secondRow = technologies.slice(8, 16);
  return (
    <>
      <div className="mt-5 mb-10 overflow-hidden whitespace-nowrap relative w-full
        xs:gap-3.5
        sm:mt-4
        md:mb-10
        xlwin:mt-8
        2xl:mt-7
      ">
        <motion.div
          className="flex min-w-max justify-start"
          animate={{ x: ['-30%', '0%'] }}
          transition={{ repeat: Infinity, duration: 300, ease: 'linear' }}
        >
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-4 items-center
              md:gap-7
              lg:gap-10
            ">
              {[...Array(40)].map((_, i) =>
                secondRow.map((item, index) => (
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


