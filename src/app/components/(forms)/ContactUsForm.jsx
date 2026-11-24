"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactForms } from "@/app/components/(forms)/schema/ContactZodSchema";
import Title from "@/app/components/(alle_sider)/Title";
import SubmitBtn from "@/app/components/(knapper)/SubmitBtn";
import { useState } from "react";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactForms),
  });

  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      date: new Date().toISOString(),
    };
    try {
      const res = await fetch("http://localhost:4000/contact_messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const result = await res.json();
        setStatus(result.error?.details?.[0]?.message || "Something went wrong :(");
        return;
      }
      setStatus("Thank you for your message!");
      reset();
    } catch (error) {
      setStatus("your message did not get through :( try again");
    }
  };

  return (
    <>
      <Title overskrift="contact us" />
      <form onSubmit={handleSubmit(onSubmit)} className="border-white border">
        <div>
          <label className="sr-only" htmlFor="fname">
            Your name:
          </label>
          <input className="w-full border p-7 border-white" placeholder="Your Name" type="text" id="fname" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Email">
            Your Email:
          </label>
          <input className="w-full border p-7 border-white" placeholder="Your Email" type="email" id="Email" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="">
          <label className="sr-only" htmlFor="content">
            comment:
          </label>
          <textarea className="w-full border p-7 border-white" placeholder="Your content" id="content" {...register("content")} />
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}
        </div>

        <div className="">
          <SubmitBtn buttontxt="Send" />
        </div>
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
