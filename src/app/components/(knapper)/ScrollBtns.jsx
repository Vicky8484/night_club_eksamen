"use client";

import {scrollX} from "@/app/scroll";

const ScrollBtns = ({scrollRef}) => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={() => scrollX(scrollRef, -1)}
        aria-label="Scroll tilbage"
        className="bg-white text-black p-2"
      >
        tilbage
      </button>
      <button
        type="button"
        onClick={() => scrollX(scrollRef, 1)}
        aria-label="Scroll frem"
        className="bg-white text-black p-2"
      >
        frem
      </button>
    </div>
  );
};

export default ScrollBtns;
