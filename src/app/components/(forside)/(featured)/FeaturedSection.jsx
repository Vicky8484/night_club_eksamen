import FeaturedEvent from "@/app/components/(forside)/(featured)/FeaturedEvent";
import Title from "@/app/components/(alle_sider)/Title";

const FeaturedSection = async () => {
  const response = await fetch("http://localhost:4000/events", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente events: ${response.status}`);
  }

  const events = await response.json();
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <section className="full-bleed relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/slider_bg_overlay.png')] bg-cover
      bg-center
      bg-no-repeat opacity-40"
      />
      <Title overskrift="Featured Events" />

      <div className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar scrollbar-none md:grid md:grid-cols-2 md:overflow-visible md:snap-none">
        {featuredEvents.map((event) => (
          <FeaturedEvent key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
