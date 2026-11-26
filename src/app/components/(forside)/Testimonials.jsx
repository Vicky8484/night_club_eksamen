"use client";
import {useState, useRef} from "react";
import {FaTwitter, FaFacebookF, FaSnapchatGhost} from "react-icons/fa";
import Title from "@/app/components/(alle_sider)/Title";
import ActiveBtns from "@/app/components/(knapper)/ActiveBtns";

const Testimonials = ({testimonials}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Kopieret fra Copilot output:

  const handleSelect = (index) => {
    const container = scrollRef.current;
    const slide = container?.children[index];

    if (!container || !slide) return;

    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  // Slut

  const handleScroll = (event) => {
    const container = event.currentTarget;
    setActiveIndex(Math.round(container.scrollLeft / container.clientWidth));
  };

  return (
    <section className="full-bleed relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="pointer-events-none full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/footerbg.jpg')] bg-cover
      bg-center
      bg-no-repeat opacity-10"
      />
      <Title overskrift="Testimonials" />
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar scrollbar-none overflow-visible snap-none"
      >
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="w-full shrink-0 snap-center flex flex-col justify-start items-center gap-4"
          >
            <img
              src={`http://localhost:4000${testimonial.asset.url}`}
              alt={testimonial.asset.alt}
            />
            <h1>{testimonial.name}</h1>
            <p className="max-w-[64ch] text-center">{testimonial.content}</p>

            <div className="flex gap-2">
              <a
                href=""
                className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaFacebookF className="size-5" />
              </a>
              <a
                href=""
                target="_blank"
                className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaTwitter className="size-5" />
              </a>
              <a
                href=""
                target="_blank"
                className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaSnapchatGhost className="size-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <ActiveBtns
        events={testimonials.map(({id, name}) => ({id, title: name}))}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      />
    </section>
  );
};

export default Testimonials;
