import BookTable from "@/app/components/(andre_sider)/BookTable";
import BookTableForm from "@/app/components/(forms)/BookTableForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";
import BookTableHero from "@/app/components/(andre_sider)/BookTableHero.jsx";

export default async function Book({ searchParams }) {
  const [reservations, events] = await Promise.all([fetch("http://localhost:4000/reservations").then((r) => r.json()), fetch("http://localhost:4000/events").then((r) => r.json())]);
  const { eventId } = await searchParams;
  return (
    <>
      <Header />
      <BookTableHero />
      <section className="flex flex-col gap-(--big-block-space) py-(--big-block-space)">
        <BookTable reservations={reservations} />
        <BookTableForm events={events} reservations={reservations} initialEventId={eventId} />
      </section>
    </>
  );
}
