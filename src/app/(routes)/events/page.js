import BilledTekst from "@/app/components/(andre_sider)/BilledTekstEvent";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default async function EventsList() {
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
      <MiniHero />
      <section>
        {events.map((event) => (
          <BilledTekst key={event.id} event={event} />
        ))}
      </section>
    </>
  );
}
