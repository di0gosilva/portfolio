"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Text from "./Text";
import Title from "./Title";
import ScrollIndicator from "./ScrollIndicator";
import SocialsHero from "./SocialsHero";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <SocialsHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <Title />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <Text />
      </motion.div>

      <section className='mt-16 flex justify-center items-center mb-3'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <ScrollIndicator />
        </motion.section>
      </section>
    </div>
  )
}
