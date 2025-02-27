"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionTitle = {
  title: string;
  id?: string;
}

export default function SectionTitle({ title, id }: SectionTitle) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true ,margin: "-40px" });

  return (
    <motion.h3
      id={id}
      ref={ref}
      className="
        mx-5 mt-24 font-medium tracking-[-0.03rem] relative
        md:text-2xl md:mx-10
        lg:text-[1.75rem] lg:text-center
        xl:text-[2rem]
      "
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="
        border-b-2 w-5 border-white absolute -bottom-px
        md:w-8
        lg:-bottom-1 lg:w-10
        xl:w-11
      "></span>
      {title}
    </motion.h3>
  );
}
