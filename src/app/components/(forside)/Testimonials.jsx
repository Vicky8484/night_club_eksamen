"use client";
import { useState } from "react";
import SubscribeForm from "@/app/components/(forms)/SubscribeForm";
import { FaTwitter, FaFacebookF, FaSnapchatGhost } from "react-icons/fa";

const Testimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section className=" flex flex-col items-center gap-5">
      <img src={`http://localhost:4000${active.asset.url}`} alt={active.asset.alt} />
      <h1>{active.name}</h1>
      <p className="max-w-[64ch] text-center"> {active.content}</p>
      <div className="flex gap-5">
        <a href={active.facebook} target="_blank" className="border-3 border-white p-3 flex items-center justify-center">
          <FaFacebookF className="size-5" />
        </a>
        <a href={active.twitter} target="_blank" className="border-3 border-white p-3 flex items-center justify-center">
          <FaTwitter className="size-5" />
        </a>
        <a href={active.snapchat} target="_blank" className="border-3 border-white p-3 flex items-center justify-center">
          <FaSnapchatGhost className="size-5" />
        </a>
      </div>
      <div className="flex gap-2">
        {testimonials.map((testimonial, index) => (
          <button key={testimonial.id} onClick={() => setActiveIndex(index)} className={`size-5 ${index === activeIndex ? "bg-(--accent1)" : "bg-white"}`} />
        ))}
      </div>
      <SubscribeForm />
    </section>
  );
};

export default Testimonials;
