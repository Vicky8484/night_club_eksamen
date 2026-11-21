"use client";

import Link from "next/link";
import {useState} from "react";
import {motion} from "motion/react";
import GradientBtn from "../../(knapper)/GradientBtn";

const buttonVariants = {
  rest: {opacity: 0, y: -90},
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
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

const Event = ({event}) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  //Kodestykke kopieret fra Gemini output

  const dateObj = new Date(event.date);

  const datePart = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const timePart = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = `${datePart} · ${timePart}`;

  //Slut

  return (
    <article className="w-full shrink-0 snap-center md:snap-start">
      <motion.div
        animate={cardIsOpen ? "hover" : "rest"}
        onClick={() => setCardIsOpen((open) => !open)}
        data-open={cardIsOpen}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        tabIndex={0}
        className="group relative isolate block overflow-hidden"
      >
        <img
          src={`http://localhost:4000${event.asset.url}`}
          alt={event.asset.alt}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105 group-data-[open=true]:scale-105"
        />

        <div className="absolute border-2 border-x-0 border-t-(--accent1) border-b-(--accent1) z-20 inset-0 flex flex-col translate-y-full bg-black/75 text-white transition-transform duration-200 group-hover:translate-y-0 group-data-[open=true]:translate-y-0 justify-center items-center">
          <span
            aria-hidden="true"
            className="z-10 pointer-events-none absolute top-0 left-0 w-5 h-5 md:w-10 md:h-10 origin-top-left scale-0 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)] transition-transform duration-500 ease-out group-hover:scale-200 group-focus-visible:scale-200 group-data-[open=true]:scale-200"
          />
          <span
            aria-hidden="true"
            className="z-10 pointer-events-none absolute bottom-0 right-0 w-5 h-5 md:w-10 md:h-10 origin-bottom-right scale-0 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)] transition-transform duration-500 ease-out group-hover:scale-200 group-focus-visible:scale-200 group-data-[open=true]:scale-200"
          />

          <motion.div
            variants={buttonVariants}
            className="absolute top-4 md:top-1/3 md:-translate-y-1/3 left-0 right-0 flex justify-center"
          >
            <GradientBtn link={`/booktable/${event.id}`} buttontxt="BOOK NOW" />
          </motion.div>

          <br />

          <motion.div className="absolute bottom-0 flex flex-col text-left gap-4 bg-black/65 p-4 min-h-[40%] translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-data-[open=true]:translate-y-0 origin-bottom">
            <h4 className="text-xl font-bold">{event.title}</h4>

            <p className="text-left">{event.excerpt}</p>
          </motion.div>
        </div>
      </motion.div>

      <Link href={`/eventpage/${event.id}`}>
        <div className="bg-(--accent1) flex justify-between p-2">
          <h4 className="text-foreground font-normal">{event.title}</h4>
          <p>{formattedDate}</p>
        </div>
      </Link>
    </article>
  );
};

export default Event;
