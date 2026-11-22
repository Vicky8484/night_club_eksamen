"use client";

import {scrollX} from "@/app/scroll";

const ScrollBtns = ({scrollRef}) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <button
        type="button"
        onClick={() => scrollX(scrollRef, -1)}
        aria-label="Scroll tilbage"
        className="border-2 border-foreground w-fit h-10 flex items-center justify-center"
      >
        Tilbage
      </button>

      <button
        type="button"
        onClick={() => scrollX(scrollRef, 1)}
        aria-label="Scroll frem"
        className="border-2 border-foreground w-fit h-10 flex items-center justify-center"
      >
        Frem
      </button>
    </div>
  );
};

export default ScrollBtns;
