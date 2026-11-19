import AboutEvent from "@/app/components/(enkelt_event_side)/AboutEvent";
import CommentSection from "@/app/components/(enkelt_event_side)/CommentSection";
import CommentForm from "@/app/components/(forms)/CommentForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default async function BookTable({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/events/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente event ${id}: ${response.status}`);
  }

  const event = await response.json();

  return (
    <>
      <Header />
      <MiniHero />
      <section>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </section>
      <AboutEvent />
      <CommentSection />
      <CommentForm />
    </>
  );
}
