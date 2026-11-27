import Title from "@/app/components/(alle_sider)/Title";
import FeaturedCarousel from "./FeaturedCarousel";

const FeaturedSection = async () => {
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
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <section className="full-bleed relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="pointer-events-none full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/slider_bg_overlay.png')] bg-cover
      bg-center
      bg-no-repeat opacity-40"
      />
      <Title overskrift="Featured Events" />

      <FeaturedCarousel events={featuredEvents} />
    </section>
  );
};

export default FeaturedSection;
