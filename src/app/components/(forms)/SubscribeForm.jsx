"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubscribeSchema} from "@/app/components/(forms)/schema/subscribeSchema";
import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {email: ""},
  });

  async function onSubmit({email}) {
    setStatus(null);

    try {
      const response = await fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email}),
      });

      if (!response.ok) {
        const result = await response.json();
        setStatus(
          result.error?.details?.[0]?.message ??
            result.error?.message ??
            "Could not subscribe",
        );
        return;
      }

      setStatus("Thanks for subscribing!");
      reset();
    } catch {
      setStatus("Could not connect to the server, please try again");
    }
  }

  return (
    <section className="py-(--big-block-space) flex flex-col gap-4">
      <h3 className="text-center"> want the latest night club news?</h3>
      <p className="font-medium text-center">
        Subscribe to our newsletter and never miss an{" "}
        <span className="text-(--accent1)">event</span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex items-end justify-center mt-4"
      >
        <label className="flex gap-3" htmlFor="email">
          <input
            {...register("email")}
            className="border-b-2 border-white px-3 w-full md:min-w-80"
            placeholder="Enter Your Email"
            type="email"
            id="email"
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
          <BorderBlockBtn type="submit" link="" buttontxt="Subscribe" />
        </label>
      </form>
      {status && <p role="status">{status}</p>}
    </section>
  );
};

export default SubscribeForm;
