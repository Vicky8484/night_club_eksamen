"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BookTableForms} from "@/app/components/(forms)/schema/BookTablZodSchema";
import Title from "@/app/components/(alle_sider)/Title";
import SubmitBtn from "@/app/components/(knapper)/SubmitBtn";
import {useEffect, useState, useRef} from "react";
import {useTableStore} from "@/app/store/useTableStore";

export default function BookTableForm({events, reservations, initialEventId}) {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm({
    resolver: zodResolver(BookTableForms),
    defaultValues: {
      eventId: initialEventId || "",
    },
  });

  const selectedEventId = watch("eventId");
  const selectedEvent = events.find(
    (event) => String(event.id) === selectedEventId,
  );
  const setSelectedTable = useTableStore((state) => state.setSelectedTable);
  const selectedTable = useTableStore((state) => state.selectedTable);
  const setSelectedDate = useTableStore((state) => state.setSelectedDate);
  const setSelectedEventTitle = useTableStore(
    (state) => state.setSelectedEventTitle,
  );
  useEffect(() => {
    if (selectedTable) {
      setValue("table", String(selectedTable));
    }
  }, [selectedTable, setValue]);
  useEffect(() => {
    if (selectedEvent) {
      const dateOnly = selectedEvent.date.slice(0, 10);
      setValue("date", dateOnly);
      setSelectedDate(dateOnly);
      setSelectedEventTitle(selectedEvent.title);
    }
  }, [selectedEvent, setValue, setSelectedDate, setSelectedEventTitle]);

  useEffect(() => {
    if (selectedTable) {
      formRef.current?.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }, [selectedTable]);

  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    console.log("isSubmitSuccessful:", isSubmitSuccessful);
    if (isSuccess) {
      console.log("reset kører nu");
      reset({
        eventId: selectedEventId,
        date: selectedEvent?.date.slice(0, 10),
        name: "",
        email: "",
        table: "",
        guests: "",
        phone: "",
        comment: "",
      });
    }
  }, [isSuccess, reset, selectedEventId, selectedEvent]);

  const [status, setStatus] = useState(null);

  const [notificationKey, setNotificationKey] = useState(0);
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/reservations", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const result = await res.json();
        setIsSuccess(false);
        setStatus(
          result.error?.details?.[0]?.message ||
            "Something went wrong, your reservation has not been placed :(",
        );
        return;
      }
      setIsSuccess(true);
      setStatus("Good job, you reserved a table!");

      setSelectedTable(null);
    } catch (error) {
      setIsSuccess(false);
      setStatus("Your reservation failed :( try again");
    }

    console.log(data);
  };

  return (
    <section>
      <div ref={formRef}>
        <label className="sr-only" htmlFor="eventId">
          Choose an Event
        </label>
        <select
          id="eventId"
          {...register("eventId")}
          className=" border-2 p-2 bg-(--accent1) text-white"
        >
          <option className=" " value="">
            Choose an Event
          </option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </select>
        {errors.eventId && <p>{errors.eventId.message}</p>}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="sr-only" htmlFor="fname">
            Your name:
          </label>
          <input
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
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
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
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

        <div>
          <label className="sr-only" htmlFor="Tblnr">
            Table Number:
          </label>
          <input
            readOnly
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
            placeholder="Click on a table above"
            type="number"
            id="Tblnr"
            {...register("table")}
          />
          {errors.table && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.table.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="NrOfGuest">
            Number Of Guests:
          </label>
          <input
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
            placeholder="Number of Guests"
            type="number"
            id="NrOfGuest"
            {...register("guests")}
          />
          {errors.guests && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.guests.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="Date">
            Choose Night:
          </label>
          <input
            readOnly
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
            placeholder="Choose Night"
            type="date"
            id="Date"
            {...register("date")}
          />
          {errors.date && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.date.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="YrCtNr">
            Your Contact Number:
          </label>
          <input
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
            placeholder="Your Contact Number"
            type="tel"
            id="YrCtNr"
            {...register("phone")}
          />
          {errors.phone && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="sr-only" htmlFor="Comment">
            Comment:
          </label>
          <textarea
            disabled={!selectedEventId}
            className="w-full border-2 p-2"
            placeholder="Your Comment"
            id="Comment"
            {...register("comment")}
          />
          {errors.comment && (
            <p
              role={status.success ? "status" : "alert"}
              className="text-red-500"
            >
              {errors.comment.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 flex justify-end">
          <SubmitBtn
            disabled={!selectedEventId}
            buttontxt="Reserve"
            className="w-full md:w-fit self-end"
          />
        </div>
      </form>
      {status && (
        <p
          key={notificationKey}
          className={` mt-4 rounded p-3 ${isSuccess === true ? "text-center bg-green-500 text-foreground" : "text-center bg-red-400 text-foreground"}`}
        >
          {status}
        </p>
      )}
    </section>
  );
}
