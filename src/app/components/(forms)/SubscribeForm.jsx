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
        setStatus({
          success: false,
          message:
            result.error?.details?.[0]?.message ??
            result.error?.message ??
            "Could not subscribe",
        });
        return;
      }

      setStatus({success: true, message: "Thanks for subscribing!"});

      reset();
    } catch {
      setStatus({
        success: false,
        message: "Could not connect to the server, please try again",
      });
    }
  }

  return (
    <section className="py-(--big-block-space) flex flex-col gap-4">
      <h3 className="text-center">want the latest night club news?</h3>
      <p className="font-medium text-center">
        Subscribe to our newsletter and never miss an{" "}
        <span className="text-(--accent1)">event</span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex items-end justify-center mt-4"
      >
        <label className="flex flex-col gap-3" htmlFor="email">
          <div className="flex gap-3">
            <input
              {...register("email")}
              className="border-b-2 border-white px-3 w-full md:min-w-80"
              placeholder="Enter Your Email"
              type="email"
              id="email"
            />
            <BorderBlockBtn type="submit" link="" buttontxt="Subscribe" />
          </div>

          {errors.email && (
            <p
              role="alert"
              className="mt-2 rounded p-3 w-full md:max-w-2/3 flex mx-auto justify-center items-center text-center bg-red-400 text-foreground"
            >
              {errors.email.message}
            </p>
          )}
        </label>
      </form>

      {status && (
        <p
          role={status.success ? "status" : "alert"}
          className={`mt-2 rounded p-3 w-full md:max-w-2/3 flex mx-auto justify-center items-center ${
            status.success
              ? "text-center bg-green-500 text-foreground"
              : "text-center bg-red-400 text-foreground"
          }`}
        >
          {status.message}
        </p>
      )}
    </section>
  );
};

export default SubscribeForm;
