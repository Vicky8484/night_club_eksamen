"use client";

import {useRef} from "react";
import {motion} from "motion/react";
import ScrollBtns from "@/app/components/(knapper)/ScrollBtns";
import {GoPlay} from "react-icons/go";

const overlayVariants = {
  hidden: {y: "100%"},
  shown: {y: 0},
};

const AlbumScroll = ({tracks, setCurrentTrack, currentTrack}) => {
  const scrollRef = useRef(null);

  return (
    <section className="relative isolate flex flex-col items-center gap-2">
      <div
        ref={scrollRef}
        className="hide-scrollbar scrollbar-none flex overflow-x-auto"
      >
        {tracks.map((track) => {
          const isActive = track.name === currentTrack.name;
          return (
            <motion.article
              key={track.name}
              onClick={() => setCurrentTrack(track)}
              tabIndex={0}
              initial="hidden"
              animate={isActive ? "shown" : "hidden"}
              whileHover="shown"
              whileFocus="shown"
              whileTap="shown"
              aria-pressed={isActive}
              className="group isolate block overflow-hidden relative shrink-0 cursor-pointer"
            >
              <img
                src={track.image}
                alt={track.name}
                className="w-45 h-45 md:w-65 md:h-65 object-cover"
              />

              <motion.div
                data-active={isActive ? "true" : undefined}
                variants={overlayVariants}
                transition={{duration: 0.2}}
                className={`group absolute z-20 inset-0 flex flex-col justify-center items-center bg-black/75 text-white`}
              >
                <span
                  aria-hidden="true"
                  className="z-10 pointer-events-none absolute top-0 left-0 w-5 h-5 md:w-10 md:h-10 origin-top-left scale-0 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)] transition-transform duration-500 ease-out group-hover:scale-100 group-focus-visible:scale-100 group-data-[active=true]:scale-100"
                />
                <span
                  aria-hidden="true"
                  className="z-10 pointer-events-none absolute bottom-0 right-0 w-5 h-5 md:w-10 md:h-10 origin-bottom-right scale-0 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)] transition-transform duration-500 ease-out group-hover:scale-100 group-focus-visible:scale-100 group-data-[active=true]:scale-100"
                />
                {isActive && <GoPlay className="text-(--accent1) size-15" />}

                {!isActive && (
                  <p className="text-center py-1 bg-background/75 w-full border-y border-(--accent1)">
                    {track.name}
                  </p>
                )}
              </motion.div>
            </motion.article>
          );
        })}{" "}
      </div>
      <></>

      <div className="pointer-events-none xl:absolute gap-4 inset-x-14 xl:-inset-x-15 inset-y-0 z-10 flex items-center justify-between [&_button]:pointer-events-auto">
        <ScrollBtns scrollRef={scrollRef} />
      </div>
    </section>
  );
};

export default AlbumScroll;
