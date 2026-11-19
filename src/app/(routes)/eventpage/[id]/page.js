import AboutEvent from "@/app/components/(enkelt_event_side)/AboutEvent";
import CommentSection from "@/app/components/(enkelt_event_side)/CommentSection";
import CommentForm from "@/app/components/(forms)/CommentForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";

export default async function BookTable({params}) {
  const {id} = await params;

  // Events fetch

  const response = await fetch(
    `http://localhost:4000/events/${encodeURIComponent(id)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Kunne ikke hente event ${id}: ${response.status}`);
  }

  const event = await response.json();

  // Kommentarer fetch

  const commentsResponse = await fetch(
    `http://localhost:4000/comments?eventId=${event.id}`,
    {cache: "no-store"},
  );

  if (!commentsResponse.ok) {
    throw new Error(`Kunne ikke hente kommentarer: ${commentsResponse.status}`);
  }

  const comments = await commentsResponse.json();

  return (
    <>
      <Header />
      <MiniHero />
      <section>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </section>
      <AboutEvent />
      <CommentSection comments={comments} />
      <CommentForm />
    </>
  );
}
