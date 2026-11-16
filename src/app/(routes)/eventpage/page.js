import AboutEvent from "@/app/components/(enkelt_event_side)/AboutEvent";
import CommentSection from "@/app/components/(enkelt_event_side)/CommentSection";
import CommentForm from "@/app/components/(forms)/CommentForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default function BookTable() {
  return (
    <>
      <MiniHero />
      <AboutEvent />
      <CommentSection />
      <CommentForm />
    </>
  );
}
