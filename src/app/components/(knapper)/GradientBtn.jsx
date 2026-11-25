"use client";

import {motion} from "motion/react";
import Link from "next/link";

const hoverLayer = {
  rest: {opacity: 0},
  hover: {opacity: 1},
};

const GradientBtn = ({link, buttontxt}) => {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      className="relative isolate inline-block border-2 border-solid border-transparent bg-(image:--gradient) p-2 px-4"
      style={{borderImage: "var(--border-gradient2) 1"}}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute border-2 border-solid border-transparent -inset-0.5 bg-(image:--gradient2)"
        variants={hoverLayer}
        transition={{duration: 0.5, ease: "easeInOut"}}
        style={{borderImage: "var(--border-gradient3) 1"}}
      />

      <Link href={link} className="relative z-10 block">
        {buttontxt}
      </Link>
    </motion.button>
  );
};

export default GradientBtn;
