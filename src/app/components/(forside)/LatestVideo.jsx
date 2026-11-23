"use client";

import {useRef} from "react";
import Title from "@/app/components/(alle_sider)/Title";
import ScrollBtns from "../(knapper)/ScrollBtns";

const LatestVideo = () => {
  const scrollRef = useRef(null);

  return (
    <section
      className="full-bleed bg-[url('/assets/bg/pattern_bg.jpg')] bg-cover bg-center
      bg-no-repeat py-(--big-block-space)"
    >
      <Title overskrift="Latest videos" />
      <div className="flex flex-col gap-5">
        <div
          ref={scrollRef}
          className="hide-scrollbar scrollbar-none flex w-full snap-x snap-mandatory gap-4 overflow-x-auto"
        >
          <video
            className="block h-auto w-full shrink-0 snap-center md:snap-start"
            poster="/assets/content-img/blog_full1.jpg"
            controls
            preload="none"
          >
            <source src="/assets/media/video-crowd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="block h-auto w-full shrink-0 snap-center md:snap-start"
            poster="/assets/content-img/blog_full1.jpg"
            controls
            preload="none"
          >
            <source src="/assets/media/video-dj-crowd2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="block h-auto w-full shrink-0 snap-center md:snap-start"
            poster="/assets/content-img/blog_full1.jpg"
            controls
            preload="none"
          >
            <source src="/assets/media/video-dj-crowd1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <ScrollBtns scrollRef={scrollRef} />
        </div>
      </div>
    </section>
  );
};

export default LatestVideo;
