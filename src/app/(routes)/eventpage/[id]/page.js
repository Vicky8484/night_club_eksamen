import CommentSection from "@/app/components/(enkelt_event_side)/CommentSection";
import CommentForm from "@/app/components/(forms)/CommentForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";
import GradientBtn from "@/app/components/(knapper)/GradientBtn";

import Image from "next/image";

export default async function BookTable({params}) {
  const {id} = await params;

  // Events fetch

  const response = await fetch(
    `http://localhost:4000/events/${encodeURIComponent(id)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente event ${id}: ${response.status}`);
  }

  const event = await response.json();

  // Kommentarer fetch

  const commentsResponse = await fetch(
    `http://localhost:4000/comments?eventId=${event.id}`,
    {cache: "no-store"},
  );

  if (!commentsResponse.ok) {
    throw new Error(`Kunne ikke hente kommentarer: ${commentsResponse.status}`);
  }

  const comments = await commentsResponse.json();

  // Dato og tidpunkt formatering

  // Kodestykke kopieret fra Copilot output

  const eventDate = new Date(event.date);
  const doorsOpenDate = new Date(event.doorsOpen);

  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    timeZone: "Europe/Copenhagen",
  });

  const formattedTime = doorsOpenDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Europe/Copenhagen",
  });

  // Slut

  return (
    <>
      <Header />
      <MiniHero />

      <section className="flex flex-col">
        <Image
          src={`http://localhost:4000${event.heroAsset.url}`}
          alt={event.heroAsset.alt}
          width={event.heroAsset.width}
          height={event.heroAsset.height}
        />
        <article className="py-(--big-block-space) gap-4">
          <div className="flex gap-4 items-center">
            <h2>{event.title}</h2>
            <p className="text-foreground/75 text-xl">{formattedDate}</p>
          </div>
          <p className="my-4 text-foreground/75">
            {event.category.toUpperCase()}
          </p>

          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h4 className="border-2 border-dashed border-(--accent1) w-fit p-2">
                  DOORS OPEN AT {formattedTime}
                </h4>
                <h4 className="text-2xl text-foreground/75">
                  {event.ageLimit}
                </h4>
              </div>

              <h4 className="flex gap-3">
                <span className="font-bold">LOCATION</span> <span>•</span>
                {event.location}
              </h4>
              <h3>LINEUP</h3>
              <ul>
                {event.lineup.map((artist) => (
                  <li
                    key={artist}
                    className="border-b-2 py-2 border-(--accent1)"
                  >
                    {artist}
                  </li>
                ))}
              </ul>

              <h4 className="font-bold">SCHEDULE</h4>
              <ul>
                {event.schedule.map(({time, label}) => (
                  <li
                    key={time}
                    className="flex py-2 justify-between gap-4 border-b-2 border-(--accent1)/60"
                  >
                    <span>{label}</span>
                    <time dateTime={time}>{time}</time>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 md:border-l-2 md:pl-4">
              <h3>DESCRIPTION</h3>
              <p>{event.description}</p>

              <div className="flex w-full mt-auto justify-end">
                <h4 className="border-2 border-dashed border-(--accent1) border-r-0 p-2">
                  TICKET PRICE {event.price}
                </h4>

                <GradientBtn link="/booktable" buttontxt="BOOK NOW" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <CommentSection comments={comments} />
      <CommentForm />
    </>
  );
}
