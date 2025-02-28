"use client"
import { motion, useInView } from "framer-motion";
import EmailContact from './EmailContact'
import SocialLinks from './SocialLinks'
import Text from './Text'
import { useRef } from "react";

export default function ContactLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section ref={ref} className='mx-5 my-36
      xxxs:mt-32 xxxs:mb-36
      sm:mx-10
      md:mx-10 md:mt-12 md:mb-16
      lg:mx-[3.75rem] lg:mt-11 lg:mb-[4.75rem]
      xl:mx-20
      2xl:mx-[6.25rem]
    '>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <EmailContact />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Text />
        <SocialLinks />
      </motion.div>
    </section>
  )
}
