"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Text from "./Text";
import Title from "./Title";
import ScrollIndicator from "./ScrollIndicator";
import SocialsHero from "./SocialsHero";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true ,margin: "-100px" });

  return (
    <div ref={ref}>
      <div className="md:mx-10 md:flex md:flex-row md:justify-between
        lg:mx-[3.75rem]
        xl:mx-20
        2xl:mx-[6.25rem]
      ">
        <motion.div
          className="md:order-last"
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
      </div>

      <div className="md:mx-10 md:flex md:justify-between md:mb-10
        lg:mx-[3.75rem]
        xl:mx-20
        2xl:mx-[6.25rem]
      ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Text />
        </motion.div>

        <section className="
          mt-16 flex justify-center items-center mb-3
          sm:mt-20
          md:mt-40
          lg:mt-[11.7rem]
          xl:mt-[13.375rem]
          xlwin:mt-[7.75rem]
          2xl:mt-[11.25rem]
        ">
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <ScrollIndicator />
          </motion.section>
        </section>
      </div>
    </div>
  )
}
