"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookTableForms } from "@/app/components/(forms)/schema/BookTablZodSchema";
import Title from "@/app/components/(alle_sider)/Title";
import SubmitBtn from "@/app/components/(knapper)/SubmitBtn";
import { useEffect } from "react";
import { useTableStore } from "@/app/store/useTableStore";

const BookTableForm = () => {
  export default function BookTableForm({ events, reservations, initialEventId }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BookTableForms),
  });

  const selectedTable = useTableStore((state) => state.selectedTable);
  useEffect(() => {
    if (selectedTable) {
      setValue("table", String(selectedTable));
    }
  }, [selectedTable, setValue]);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Title overskrift="book table" />
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 grid grid-cols-2 gap-7">
        <div>
          <label htmlFor="eventId">Choose an Event</label>
          <select id="eventId" {...register("events, reservations, initialEventId")}>
            <option value="" placeholder="Choose an Event"></option>
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
          <input className="w-full border p-7 border-white" placeholder="Your Name" type="text" id="fname" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Email">
            Your Email:
          </label>
          <input className="w-full border-1 p-7 border-white" placeholder="Your Email" type="email" id="Email" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Tblnr">
            Table Number:
          </label>
          <input className="w-full border-1 p-7 border-white" placeholder="Table Number" type="number" id="Tblnr" {...register("table")} />
          {errors.table && <p className="text-red-500">{errors.table.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="NrOfGuest">
            Number Of Guests:
          </label>
          <input className="w-full border-1 p-7 border-white" placeholder="Number of Guests" type="number" id="NrOfGuest" {...register("guests")} />
          {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="Date">
            Choose Night:
          </label>
          <input className="w-full border-1 p-7 border-white" placeholder="Choose Night" type="date" id="Date" {...register("date")} />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="YrCtNr">
            Your Contact Number:
          </label>
          <input className="w-full border-1 p-7 border-white" placeholder="Your Contact Number" type="tel" id="YrCtNr" {...register("phone")} />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="col-span-2">
          <label className="sr-only" htmlFor="Comment">
            Comment:
          </label>
          <textarea className="w-full border-1 p-7 border-white" placeholder="Your Comment" id="Comment" {...register("comment")} />
          {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
        </div>

        <div className="col-span-2 flex justify-end">
          <SubmitBtn buttontxt="Reserve" />
        </div>
      </form>
    </>
  );
};

export default BookTableForm;
