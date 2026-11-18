import Link from "next/link";
import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";

const BilledTekst = ({event}) => {
  return (
    <article>
      <img src={event.imageUrl} alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <time dateTime={event.date}>{event.date}</time>
      </div>

      <BorderBlockBtn link={`/eventpage/${event.id}`} buttontxt="READ MORE" />
    </article>
  );
};

export default BilledTekst;
