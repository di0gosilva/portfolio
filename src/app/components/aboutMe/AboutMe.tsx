"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Description from "./Description";
import ProfileImage from "./ProfileImage";
import TechnologiesFirstRow from "./TechnologiesFirstRow";
import TechnologiesSecondRow from "./TechnologiesSecondRow";
import Title from "./Title";
import SectionTitle from "@/app/SectionTitle";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true ,margin: "-100px" });

  return (
    <>
      <SectionTitle id="about" title="Sobre mim"/>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Title />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <ProfileImage />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Description />
        </motion.div>
      </div>

      <TechnologiesFirstRow />
      <TechnologiesSecondRow />
    </>
  )
}
