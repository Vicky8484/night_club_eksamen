import EventsClient from "@/app/components/(events_listevisning)/EventsClient";

const EventsData = async () => {
  // Events fetch

  const response = await fetch(
    "https://night-club-api-2026-1nvc.onrender.com/events",
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente events: ${response.status}`);
  }

  const events = await response.json();

  return <EventsClient events={events} />;
};

export default EventsData;
