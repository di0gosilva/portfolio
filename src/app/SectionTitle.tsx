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
        sm:text-2xl sm:mx-10
      "
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="
        border-b-2 w-5 border-white absolute -bottom-px
        sm:w-8
      "></span>
      {title}
    </motion.h3>
  );
}
