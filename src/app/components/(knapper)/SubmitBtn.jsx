"use client";

import { motion } from "motion/react";

const lineVariants = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const SubmitBtn = ({ buttontxt, disabled }) => {
  return (
    <motion.button type="submit" disabled={disabled} className="disabled:opacity-50 disabled:cursor-not-allowed group relative inline-block border-y-2 border-white p-2 px-4 text-white transition-colors hover:text-(--accent1)" initial="rest" whileHover="hover">
      {buttontxt}

      <motion.span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-right bg-(--accent1)" variants={lineVariants} />

      <motion.span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-(--accent1)" variants={lineVariants} />
    </motion.button>
  );
};

export default SubmitBtn;
