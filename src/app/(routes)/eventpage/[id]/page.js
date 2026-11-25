import CommentSection from "@/app/components/(enkelt_event_side)/CommentSection";
import CommentForm from "@/app/components/(forms)/CommentForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";
import GradientBtn from "@/app/components/(knapper)/GradientBtn";
import {LoadingUI} from "@/app/components/(loading_ui)/LoadingUIEvents";

import Image from "next/image";

export default async function BookTable({params}) {
  const lineupSizes = [
    "text-5xl font-bold",
    "text-3xl font-bold",
    "text-xl text-foreground/75",
  ];

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
      <MiniHero overskrift={event.title} />

      <section className="full-bleed gap-4 p-4 rounded-xl">
        <Image
          src={`http://localhost:4000${event.heroAsset.url}`}
          alt={event.heroAsset.alt}
          width={event.heroAsset.width}
          height={event.heroAsset.height}
          className="full-bleed w-full object-cover aspect-16/4"
        />
        <article className="gap-4">
          <h1 className="text-[clamp(3rem,4vw,4rem)]">{event.title}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <p className="bg-(--subtle) text-foreground py-1 px-3 rounded-full">
              {event.category.toUpperCase()}
            </p>
            <p className="bg-(--subtle) text-foreground py-1 px-3 rounded-full">
              {formattedDate}
            </p>
            <p className="bg-(--subtle) text-foreground py-1 px-3 rounded-full">
              DOORS {formattedTime}
            </p>
            <p className="bg-(--subtle) text-foreground py-1 px-3 rounded-full">
              {event.ageLimit}
            </p>
            <p className="flex gap-2 bg-(--subtle) text-foreground py-1 px-3 rounded-full">
              <Image
                src="/assets/icon/Map.svg"
                alt="Night Club"
                width={10}
                height={10}
              />
              {event.location}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            <article className="flex flex-col gap-4">
              <div>
                <h3>DESCRIPTION</h3>
                <p>{event.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div>
                  <h3 className="text-2xl mb-2">LINEUP</h3>
                  <ul>
                    {event.lineup.map((artist, index) => (
                      <li
                        key={artist}
                        className={lineupSizes[index] ?? "text-xl"}
                      >
                        {artist.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">SCHEDULE</h4>
                  <ul className="flex flex-col gap-3">
                    {event.schedule.map(({time, label}) => (
                      <li key={time} className="flex py-2 gap-2 items-center">
                        <div className="flex gap-2 items-center">
                          <span
                            className="inline-block size-2.5 rounded-full bg-(--accent1) ring-2 ring-(--accent1)/40 shadow-[0_0_10px_2px_var(--accent1)]"
                            aria-hidden="true"
                          />
                          {/* <span className="text-(--accent1)">⬤</span> */}
                          <time dateTime={time}>{time}</time>
                          <span>—</span>
                        </div>

                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article
              className="bg-(--subtle) border-2 text-xl h-fit p-4 flex flex-col gap-3"
              style={{borderImage: "var(--border-gradient) 1"}}
            >
              <h4 className="font-bold text-foreground/75">TICKETS & ENTRY</h4>
              <h4 className="flex justify-between">
                PRICE <span>{event.price}</span>
              </h4>
              <h4 className="flex justify-between">
                AGE LIMIT <span>{event.ageLimit}</span>
              </h4>
              <span className="bg-red-400 p-1 w-full text-foreground text-sm text-center rounded-full">
                ID REQUIRED
              </span>
              <GradientBtn
                link={`/booktable?eventId=${event.id}`}
                buttontxt="BOOK NOW"
              />
            </article>
          </div>
        </article>
      </section>

      <CommentSection comments={comments} eventId={event.id} />
      <CommentForm eventId={event.id} />
    </>
  );
}
