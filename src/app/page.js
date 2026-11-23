import Hero from "@/app/components/(forside)/Hero";
import Header from "@/app/components/(alle_sider)/Header";
import WelcomeSection from "@/app/components/(forside)/(welcome)/WelcomeSection";
import FeaturedSection from "@/app/components/(forside)/(featured)/FeaturedSection";
import Gallery from "@/app/components/(forside)/Gallery";
import MusicPlayer from "@/app/components/(forside)/(night_club_track)/MusicPlayer";
import Video from "@/app/components/(forside)/LatestVideo";
import OwnerSoMe from "@/app/components/(forside)/OwnerSoMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <WelcomeSection />
      <FeaturedSection />
      <Gallery />
      <MusicPlayer />
      <Video />
      <OwnerSoMe />
    </>
  );
}
