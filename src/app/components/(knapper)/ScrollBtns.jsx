"use client";

import {useEffect, useState} from "react";
import {scrollX} from "@/app/scroll";

const ScrollBtns = ({scrollRef}) => {
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    // Kopieret fra Gemini output:

    const container = scrollRef.current;
    if (!container) return;

    const updateButtons = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setCanScrollBack(container.scrollLeft > 1);
      setCanScrollForward(container.scrollLeft < maxScrollLeft - 1);
    };

    updateButtons();
    container.addEventListener("scroll", updateButtons, {passive: true});
    window.addEventListener("resize", updateButtons);

    return () => {
      container.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [scrollRef]);

  // Slut

  const backDisabled = !canScrollBack;
  const forwardDisabled = !canScrollForward;

  return (
    <>
      <button
        type="button"
        onClick={() => scrollX(scrollRef, -1)}
        disabled={backDisabled}
        aria-label="Scroll tilbage"
        className="scroll-btn group transition-transform duration-300 
        border-2 w-10 h-10 p-2 flex items-center justify-center disabled:cursor-not-allowed"
      >
        <svg
          viewBox="0 0 357 357"
          className="-scale-x-100 w-4 h-4
    fill-current text-white
    transition-colors duration-300
    group-hover:text-(--accent1)"
        >
          <polygon points="38.25,0 38.25,357 318.75,178.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => scrollX(scrollRef, 1)}
        disabled={forwardDisabled}
        aria-label="Scroll frem"
        className="scroll-btn group transition-transform duration-300 border-2 w-10 h-10 p-2 flex items-center justify-center disabled:cursor-not-allowed"
      >
        <svg
          viewBox="0 0 357 357"
          className="w-4 h-4
    fill-current text-white
    transition-colors duration-300
    group-hover:text-(--accent1)"
        >
          <polygon points="38.25,0 38.25,357 318.75,178.5" />
        </svg>
      </button>
    </>
  );
};

export default ScrollBtns;

/*  <img
          src="/assets/icon/Play.svg"
          alt="ikon"
          className="group-disabled:opacity-40 group-hover:text-(--accent1)"
        /> */
