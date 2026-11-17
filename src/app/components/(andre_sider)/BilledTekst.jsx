import Link from "next/link";

const BilledTekst = ({event}) => {
  return (
    <article>
      <img src={event.imageUrl} alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <time dateTime={event.date}>{event.date}</time>
      </div>
      <Link href={`/eventpage/${event.id}`}>READ MORE</Link>
    </article>
  );
};

export default BilledTekst;
