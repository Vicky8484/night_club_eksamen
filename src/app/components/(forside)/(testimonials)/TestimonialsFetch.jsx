import Testimonials from "@/app/components/(forside)/(testimonials)/Testimonials";

export default async function TestimonialSEction() {
  const testimonials = await fetch(
    "https://night-club-api-2026-1nvc.onrender.com/testimonials",
  ).then((r) => r.json());

  return <Testimonials testimonials={testimonials} />;
}
