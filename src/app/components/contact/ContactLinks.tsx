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
    <section ref={ref} className='mx-5 my-36 sm:mx-10 sm:mt-12 sm:mb-16'>
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
