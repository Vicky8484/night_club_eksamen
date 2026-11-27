import BookTable from "@/app/components/(andre_sider)/BookTable";
import BookTableForm from "@/app/components/(forms)/BookTableForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";

export default async function Book({searchParams}) {
  const [reservations, events] = await Promise.all([
    fetch("https://night-club-api-2026-1nvc.onrender.com/reservations").then(
      (r) => r.json(),
    ),
    fetch("https://night-club-api-2026-1nvc.onrender.com/events").then((r) =>
      r.json(),
    ),
  ]);
  const {eventId} = await searchParams;
  return (
    <>
      <Header />
      <MiniHero overskrift="Book Table" />
      <section className="flex flex-col gap-(--big-block-space) py-(--big-block-space)">
        <BookTable reservations={reservations} />
        <BookTableForm
          events={events}
          reservations={reservations}
          initialEventId={eventId}
        />
      </section>
    </>
  );
}
