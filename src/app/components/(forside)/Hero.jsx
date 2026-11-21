"use client";

import {useState, useEffect} from "react";
import {motion} from "motion/react";
import Image from "next/image";
import GradientBtn from "@/app/components/(knapper)/GradientBtn";
import NoFillBtn from "@/app/components/(knapper)/NoFillBtn";

const backgrounds = [
  "/assets/bg/header_bg_1.jpg",
  "/assets/bg/header_bg_2.jpg",
];

const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [hasLoadedBackground, setHasLoadedBackground] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Kopieret fra Copilot output

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundIndex(randomIndex);
  }, []);

  // Slut

  return (
    <section className="full-bleed min-h-130 md:min-h-0 relative isolate py-(--big-block-space)">
      {backgroundIndex !== null && (
        <motion.div
          initial={{
            opacity: 0,
            rotateX: -80,
          }}
          animate={
            hasLoadedBackground
              ? {opacity: 0.3, rotateX: 0}
              : {opacity: 0, rotateX: -80}
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "top",
            transformPerspective: 1000,
          }}
          className="full-bleed absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        >
          <Image
            src={backgrounds[backgroundIndex]}
            alt="Hero-billede fra natklub"
            fill
            priority
            onLoad={() => setHasLoadedBackground(true)}
            className="object-cover"
          />
        </motion.div>
      )}

      {!hasLoadedBackground && (
        <div
          role="status"
          aria-label="Indlæser baggrund"
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <Image
            src="/assets/loader/madbars.gif"
            alt=""
            width={30}
            height={30}
            unoptimized
          />
        </div>
      )}

      <section className="flex flex-col relative z-10 gap-3 justify-center items-center">
        <motion.div
          onAnimationComplete={() => setShowTagline(true)}
          initial={{
            opacity: 0,
            rotateX: 70,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "top",
            transformPerspective: 1000,
          }}
          className="flex flex-col gap-3"
        >
          <Image
            src="/assets/icon/Logo.svg"
            alt="Night Club"
            width={500}
            height={200}
          />
        </motion.div>

        <motion.div
          onAnimationComplete={() => {
            if (showTagline) {
              setShowButtons(true);
            }
          }}
          initial={{opacity: 0, y: -10}}
          animate={showTagline ? {opacity: 1, y: 0} : {opacity: 0, y: -10}}
          transition={{
            duration: 0.8,
            delay: showTagline ? 0.1 : 0,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "top",
            transformPerspective: 1000,
          }}
        >
          <span className="block w-full text-2xl text-center tracking-[0.40em]">
            HAVE A GOOD TIME
          </span>
          <Image
            src="/assets/bottom_line.png"
            alt="Night Club"
            width={500}
            height={200}
          />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={showButtons ? {opacity: 1, y: 0} : {opacity: 0, y: -10}}
          transition={{
            duration: 0.8,
            delay: showButtons ? 0.1 : 0,
            ease: "easeOut",
          }}
          className="flex gap-3 justify-center"
        >
          <NoFillBtn buttontxt="VIEW EVENTS" link="" />
          <GradientBtn buttontxt="BOOK TABLE" link="" />
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;
