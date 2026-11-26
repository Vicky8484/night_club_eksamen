"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookTableForms } from "@/app/components/(forms)/schema/BookTablZodSchema";
import Title from "@/app/components/(alle_sider)/Title";
import SubmitBtn from "@/app/components/(knapper)/SubmitBtn";
import { useEffect, useState } from "react";
import { useTableStore } from "@/app/store/useTableStore";

export default function BookTableForm({ events, reservations, initialEventId }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BookTableForms),
    defaultValues: {
      eventId: initialEventId || "",
    },
  });

  const selectedEventId = watch("eventId");
  const selectedEvent = events.find((event) => String(event.id) === selectedEventId);

  const selectedTable = useTableStore((state) => state.selectedTable);
  const setSelectedDate = useTableStore((state) => state.setSelectedDate);
  const setSelectedEventTitle = useTableStore((state) => state.setSelectedEventTitle);
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
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const result = await res.json();
        setStatus(result.error?.details?.[0]?.message || "Der gik noget galt, din reservation er ikke gået igennem :(");
        return;
      }
      setStatus("Flot klaret, Så er der Reserveret bord!!");
    } catch (error) {
      setStatus("Din Reservation gik ikke igennem :( prøv igen");
    }

    console.log(data);
  };

  return (
    <>
      <Title overskrift="book table" />
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 grid grid-cols-2 gap-7">
        <div>
          <label htmlFor="eventId">Choose an Event</label>
          <select id="eventId" {...register("eventId")}>
            <option value="">Choose an Event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
          {errors.eventId && <p>{errors.eventId.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="fname">
            Your name:
          </label>
          <input disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Your Name" type="text" id="fname" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Email">
            Your Email:
          </label>
          <input disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Your Email" type="email" id="Email" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Tblnr">
            Table Number:
          </label>
          <input readOnly disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Click on a table above" type="number" id="Tblnr" {...register("table")} />
          {errors.table && <p className="text-red-500">{errors.table.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="NrOfGuest">
            Number Of Guests:
          </label>
          <input disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Number of Guests" type="number" id="NrOfGuest" {...register("guests")} />
          {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Date">
            Choose Night:
          </label>
          <input readOnly disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Choose Night" type="date" id="Date" {...register("date")} />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="YrCtNr">
            Your Contact Number:
          </label>
          <input disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Your Contact Number" type="tel" id="YrCtNr" {...register("phone")} />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="col-span-2">
          <label className="sr-only" htmlFor="Comment">
            Comment:
          </label>
          <textarea disabled={!selectedEventId} className="w-full border p-7 border-white" placeholder="Your Comment" id="Comment" {...register("comment")} />
          {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
        </div>

        <div className="col-span-2 flex justify-end">
          <SubmitBtn disabled={!selectedEventId} buttontxt="Reserve" />
        </div>
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
