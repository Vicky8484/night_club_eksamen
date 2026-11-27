import Testimonials from "@/app/components/(forside)/Testimonials";

export default async function TestimonialSEction() {
  const testimonials = await fetch("http://localhost:4000/testimonials").then((r) => r.json());

  return <Testimonials testimonials={testimonials} />;
}
