'use client';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex min-w-max justify-start"
        animate={{ x: ['0%', '-30%'] }}
        transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
      >
        {[...Array(2)].map((_, j) => (
          <div key={j} className="flex">
            {[...Array(40)].map((_, i) => (
              <h3
                key={`${j}-${i}`}
                className='text-center px-2 font-medium mt-3 mb-1 text-[3.2rem] tracking-[-0.05rem]
                  sm:text-6xl sm:mt-5 sm:mb-4
                  md:text-7xl md:mt-6 md:mb-[1.125rem]
                  lg:text-[5rem] lg:mt-7 lg:mb-6
                  xl:text-8xl xl:mt-8 xl:mb-7
                  xlwin:text-[5.5rem] xlwin:mt-7 xlwin:mb-6
                '
              >
                DIOGO SILVA
              </h3>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
