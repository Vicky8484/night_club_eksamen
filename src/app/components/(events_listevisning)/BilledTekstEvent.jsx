import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";
import Image from "next/image";

const BilledTekst = ({event, reverse}) => {
  //Kodestykke kopieret fra Gemini output

  const dateObj = new Date(event.date);

  const datePart = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const timePart = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = `${datePart} · ${timePart}`;

  //Slut

  return (
    <article className="group grid grid-cols-1 bg-(--subtle)/55 events:grid-cols-2 events:bg-[#090909] min-h-80 hover:bg-(--subtle)/55">
      <Image
        src={`http://localhost:4000${event.asset.url}`}
        alt={event.asset.alt}
        width={event.asset.width}
        height={event.asset.height}
        className={`w-full h-full aspect-video object-cover grayscale-50 group-hover:grayscale-0 ${
          reverse ? "events:order-2" : "events:order-1"
        }`}
      />
      <div
        className={`flex flex-col p-4 gap-3 ${reverse ? "events:order-1" : "events:order-2"}`}
      >
        <div>
          <h3 className="text-foreground">{event.title}</h3>
          <p>
            <span className="text-(--accent1)">{formattedDate}</span> |{" "}
            {event.location}
          </p>
          <br />
          <p className="text-foreground/75">{event.description}</p>
        </div>

        <BorderBlockBtn
          link={`/eventpage/${event.id}`}
          buttontxt="READ MORE"
          className="mt-6 events:mt-auto w-full events:w-fit events:self-end"
        />
      </div>
    </article>
  );
};

export default BilledTekst;
