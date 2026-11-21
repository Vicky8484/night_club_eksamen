"use client";

import {motion} from "motion/react";
import Link from "next/link";

const lineVariants = {
  rest: {scaleX: 0},
  hover: {
    scaleX: 1,
    transition: {duration: 0.25, ease: "easeOut"},
  },
};

const BorderBlockBtn = ({link, buttontxt, className = ""}) => {
  return (
    <motion.button
      className={`group relative inline-block ${className}`}
      initial="rest"
      whileHover="hover"
    >
      <Link
        href={link}
        className="block border-y-2 border-white p-2 px-4 text-white transition-colors group-hover:text-(--accent1)"
      >
        {buttontxt}
      </Link>

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-right bg-(--accent1)"
        variants={lineVariants}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-(--accent1)"
        variants={lineVariants}
      />
    </motion.button>
  );
};

export default BorderBlockBtn;
