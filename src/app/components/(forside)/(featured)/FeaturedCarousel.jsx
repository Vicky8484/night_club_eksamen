"use client";

import {useRef, useState} from "react";
import FeaturedEvent from "./FeaturedEvent";
import ActiveBtns from "../../(knapper)/ActiveBtns";

const FeaturedCarousel = ({events}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Kopieret fra Copilot output:

  const handleSelect = (index) => {
    const slide = scrollRef.current?.children[index];

    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  const handleScroll = (event) => {
    const container = event.currentTarget;
    setActiveIndex(Math.round(container.scrollLeft / container.clientWidth));
  };

  // Slut

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar scrollbar-none featured:grid featured:grid-cols-2 md:grid md:overflow-visible md:snap-none"
      >
        {events.map((event) => (
          <FeaturedEvent key={event.id} event={event} />
        ))}
      </div>

      <ActiveBtns
        className="featured:hidden"
        events={events}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      />
    </>
  );
};

export default FeaturedCarousel;
