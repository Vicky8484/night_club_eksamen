import Hero from "@/app/components/(forside)/Hero";
import Header from "@/app/components/(alle_sider)/Header";
import WelcomeSection from "@/app/components/(forside)/(welcome)/WelcomeSection";
import FeaturedSection from "@/app/components/(forside)/(featured)/FeaturedSection";
import Gallery from "@/app/components/(forside)/(gallery)/Gallery";
import MusicPlayer from "@/app/components/(forside)/(night_club_track)/MusicPlayer";
import Video from "@/app/components/(forside)/LatestVideo";
import TestimonialSEction from "@/app/components/(forside)/Testimonialsfetchy";
import SubscribeForm from "@/app/components/(forms)/SubscribeForm";

export default async function Home() {
  const testimonials = await fetch(
    "https://night-club-api-2026-1nvc.onrender.com/testimonials",
  ).then((r) => r.json());

  return (
    <>
      <Hero />
      <Header />
      <WelcomeSection />
      <FeaturedSection />
      <Gallery />
      <MusicPlayer />
      <Video />
      <TestimonialSEction />
      <SubscribeForm />
    </>
  );
}
