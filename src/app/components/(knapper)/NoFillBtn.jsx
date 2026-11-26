"use client";

import {motion} from "motion/react";
import Link from "next/link";

const borderVariants = {
  rest: {opacity: 0},
  hover: {opacity: 1},
};

const NoFillBtn = ({link, buttontxt}) => {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      className="focus relative inline-block border-2 border-solid border-transparent p-2 px-4"
      style={{borderImage: "var(--border-gradient) 1"}}
    >
      <motion.span
        aria-hidden="true"
        variants={borderVariants}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="pointer-events-none absolute -inset-0.5 border-2 border-solid border-white"
      />
      <Link href={link} className="block">
        {buttontxt}
      </Link>
    </motion.button>
  );
};

export default NoFillBtn;
