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
    <article className="grid grid-cols-2 bg-[#090909]">
      <Image
        src={`http://localhost:4000${event.asset.url}`}
        alt={event.asset.alt}
        width={event.asset.width}
        height={event.asset.height}
        className={`h-auto w-full aspect-video object-cover ${
          reverse ? "order-2" : "order-1"
        }`}
      />
      <div
        className={`flex flex-col p-4 gap-3 ${reverse ? "order-1" : "order-2"} hover:border-2 hover:border-(--accent1)`}
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
          className="mt-auto w-fit self-end"
        />
      </div>
    </article>
  );
};

export default BilledTekst;
