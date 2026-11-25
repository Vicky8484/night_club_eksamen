"use client";

import {useRef} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ScrollBtns from "@/app/components/(knapper)/ScrollBtns";

const AlbumScroll = ({tracks, setCurrentTrack, currentTrack}) => {
  const scrollRef = useRef(null);
  // const scrollLeft = () => {
  //   scrollRef.current.scrollBy({left: -300, behavior: "smooth"});
  // };
  // const scrollRight = () => {
  //   scrollRef.current.scrollBy({left: 300, behavior: "smooth"});
  // };

  return (
    <div className="relative isolate flex flex-col items-center gap-2">
      {/* <button onClick={scrollLeft}>
        <FaChevronLeft />
      </button> */}

      <div
        ref={scrollRef}
        className="hide-scrollbar scrollbar-none flex overflow-x-auto"
      >
        {tracks.map((track) => {
          const isActive = track.name === currentTrack.name;
          return (
            <div
              key={track.name}
              onClick={() => setCurrentTrack(track)}
              className={`relative shrink-0 cursor-pointer ${isActive ? "border-2 border-(--accent1)" : ""}`}
            >
              <img
                src={track.image}
                alt={track.name}
                className="w-45 h-45 md:w-65 md:h-65 object-cover"
              />
            </div>
          );
        })}{" "}
      </div>
      <></>

      <div className="pointer-events-none md:absolute gap-4 inset-x-14 sm:-inset-x-10 inset-y-0 z-10 flex items-center justify-between [&_button]:pointer-events-auto">
        <ScrollBtns scrollRef={scrollRef} />
      </div>
      {/* <button onClick={scrollRight}>
        <FaChevronRight />
      </button> */}
    </div>
  );
};

export default AlbumScroll;
