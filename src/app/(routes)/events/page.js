import Header from "@/app/components/(alle_sider)/Header";
import EventsClient from "@/app/components/EventsClient";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default async function EventsList() {
  // Events fetch

  const response = await fetch("http://localhost:4000/events", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente events: ${response.status}`);
  }

  const events = await response.json();

  return (
    <>
      <Header />
      <MiniHero overskrift="Events" id="startHer" />
      <EventsClient events={events} />
    </>
  );
}
