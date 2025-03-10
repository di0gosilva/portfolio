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

        <div className="mx-5
          sm:mx-10
          md:mx-10 md:flex md:justify-between md:items-center
          lg:mx-[3.75rem]
          xl:mx-20
          2xl:mx-[6.25rem]
        ">
          <motion.div
            className="md:order-2"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <ProfileImage />
          </motion.div>

          <motion.div
            className="md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Description />
          </motion.div>
        </div>
      </div>

      <TechnologiesFirstRow />
      <TechnologiesSecondRow />
    </>
  )
}
