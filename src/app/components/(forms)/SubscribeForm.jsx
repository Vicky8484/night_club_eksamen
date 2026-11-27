"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubscribeSchema} from "@/app/components/(forms)/schema/subscribeSchema";
import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";
import Title from "@/app/components/(alle_sider)/Title";

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
      const response = await fetch(
        "https://night-club-api-2026-1nvc.onrender.com/newsletters",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({email}),
        },
      );

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
      <Title overskrift="want the latest night club news?" />
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
          <p className="sr-only">Your email address</p>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <input
              {...register("email")}
              className="border-2 md:border-b-2 md:border-x-0 md:border-t-0 border-white p-3 md:px-3 md:py-0 w-full md:min-w-80 focus:outline-none focus:border-(--accent1) transition-colors duration-800 ease-in-out"
              placeholder="Enter Your Email"
              type="email"
              id="email"
            />
            <BorderBlockBtn type="submit" link="" buttontxt="Subscribe" />
          </div>

          {errors.email && (
            <p
              role="alert"
              className="timedMessageBox mt-2 rounded p-3 w-full md:max-w-2/3 flex mx-auto justify-center items-center text-center bg-red-400 text-foreground"
            >
              {errors.email.message}
            </p>
          )}
        </label>
      </form>

      {status && (
        <p
          role={status.success ? "status" : "alert"}
          className={`timedMessageBox mt-2 rounded p-3 w-full md:max-w-2/3 flex mx-auto justify-center items-center ${
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
