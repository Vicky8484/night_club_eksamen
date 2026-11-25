"use client";
import {useState} from "react";
import {FaTwitter, FaFacebookF, FaSnapchatGhost} from "react-icons/fa";
import Title from "@/app/components/(alle_sider)/Title";

const Testimonials = ({testimonials}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section className="full-bleed relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/footerbg.jpg')] bg-cover
      bg-center
      bg-no-repeat opacity-10"
      />

      <div className="flex flex-col relative z-10 items-center gap-5">
        <Title overskrift="Testimonials" />
        <img
          src={`http://localhost:4000${active.asset.url}`}
          alt={active.asset.alt}
        />
        <h1>{active.name}</h1>
        <p className="max-w-[64ch] text-center">{active.content}</p>
        <div className="flex gap-2">
          <a
            href={active.facebook}
            target="_blank"
            className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
          >
            <FaFacebookF className="size-5" />
          </a>
          <a
            href={active.twitter}
            target="_blank"
            className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
          >
            <FaTwitter className="size-5" />
          </a>
          <a
            href={active.snapchat}
            target="_blank"
            className="border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
          >
            <FaSnapchatGhost className="size-5" />
          </a>
        </div>
        <div className="flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`size-5 ${index === activeIndex ? "bg-(--accent1)" : "bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
