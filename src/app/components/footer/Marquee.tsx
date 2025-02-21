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
                className='text-center px-2 font-medium mt-3 mb-1 text-[3.2rem] tracking-[-0.05rem]'
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
