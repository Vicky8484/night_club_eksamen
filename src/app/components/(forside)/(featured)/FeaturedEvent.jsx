import Link from "next/link";

const Event = ({event}) => {
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
    <article>
      <Link href={`/eventpage/${event.id}`}>
        <img
          src={`http://localhost:4000${event.asset.url}`}
          alt={event.asset.alt}
          className="w-full"
        />
        <div className="bg-(--accent1) flex justify-between p-2">
          <h4 className="text-foreground font-normal">{event.title}</h4>
          <p>{formattedDate}</p>
        </div>
      </Link>
    </article>
  );
};

export default Event;
