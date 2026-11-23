"use client";

import Image from "next/image";
import {motion} from "motion/react";
import {useState} from "react";

const h4Variants = {
  rest: {opacity: 0, scale: 0.75},
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

const pVariants = {
  rest: {opacity: 0, x: 80},
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: 0.45,
      ease: "easeOut",
    },
  },
};

const WelcomeFeatured = ({src, alt, ikon, overskrift, beskrivelse}) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  return (
    <article>
      <motion.div
        animate={cardIsOpen ? "hover" : "rest"}
        onClick={() => setCardIsOpen((open) => !open)}
        data-open={cardIsOpen}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        tabIndex={0}
        className="group relative isolate block aspect-3/4 overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-data-[open=true]:scale-105"
        />

        <div className="absolute border-2 border-x-0 border-t-(--accent1) border-b-(--accent1) z-20 inset-0 flex flex-col translate-x-full bg-black/75 text-white p-6 transition-transform duration-600 group-hover:translate-x-0 group-data-[open=true]:translate-x-0 justify-center items-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-10 h-10 origin-top-left scale-0 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)] transition-transform duration-500 ease-out group-hover:scale-200 group-focus-visible:scale-200 group-data-[open=true]:scale-200"
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-10 h-10 origin-bottom-right scale-0 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)] transition-transform duration-500 ease-out group-hover:scale-200 group-focus-visible:scale-200 group-data-[open=true]:scale-200"
          />

          <div className="flex w-20 h-20 border-2 border-(--accent1) justify-center items-center">
            {ikon}
          </div>
          <br />

          <div className="flex flex-col text-center gap-4">
            <motion.h4 variants={h4Variants} className="text-2xl font-bold">
              {overskrift}
            </motion.h4>

            <motion.p variants={pVariants} className="text-center">
              {beskrivelse}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default WelcomeFeatured;
