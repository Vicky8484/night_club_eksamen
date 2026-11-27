"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ContactForms} from "@/app/components/(forms)/schema/ContactZodSchema";
import Title from "@/app/components/(alle_sider)/Title";
import SubmitBtn from "@/app/components/(knapper)/SubmitBtn";
import {useState} from "react";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
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
      const res = await fetch(
        "https://night-club-api-2026-1nvc.onrender.com/contact_messages",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) {
        const result = await res.json();
        setStatus(
          result.error?.details?.[0]?.message || "Something went wrong :(",
        );
        return;
      }
      setStatus("Thank you for your message!");
      reset();
    } catch (error) {
      setStatus("your message did not get through :( try again");
    }
  };

  return (
    <section className="py-(--big-block-space)">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-4 max-w-150"
      >
        <div>
          <label className="sr-only" htmlFor="fname">
            Your name:
          </label>
          <input
            className="border-2 border-foreground p-2 text-foreground w-full focus:outline-none focus:border-(--accent1) transition-colors duration-800 ease-in-out"
            placeholder="Your Name"
            type="text"
            id="fname"
            {...register("name")}
          />
          {errors.name && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="Email">
            Your Email:
          </label>
          <input
            className="border-2 border-foreground p-2 text-foreground w-full focus:outline-none focus:border-(--accent1) transition-colors duration-800 ease-in-out"
            placeholder="Your Email"
            type="email"
            id="Email"
            {...register("email")}
          />
          {errors.email && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="">
          <label className="sr-only" htmlFor="content">
            comment:
          </label>
          <textarea
            rows="5"
            maxLength={1000}
            className="resize-y border-2 border-foreground p-2 text-foreground w-full focus:outline-none focus:border-(--accent1) transition-colors duration-800 ease-in-out"
            placeholder="What's on your chest?"
            id="content"
            {...register("content")}
          />
          {errors.content && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.content.message}
            </p>
          )}
        </div>

        <SubmitBtn buttontxt="Send" className="w-full md:w-fit self-end" />
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}
