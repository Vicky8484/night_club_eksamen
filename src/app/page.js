import Hero from "@/app/components/(forside)/Hero";
import Header from "@/app/components/(alle_sider)/Header";
import WelcomeFeatured from "@/app/components/(forside)/WelcomeFeatured";
import Gallery from "@/app/components/(forside)/Gallery";
import MusicPlayer from "@/app/components/(forside)/MusicPlayer";
import Video from "@/app/components/(forside)/LatestVideo";
import OwnerSoMe from "@/app/components/(forside)/OwnerSoMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <WelcomeFeatured />
      <Gallery />
      <MusicPlayer />
      <Video />
      <OwnerSoMe />
    </>
  );
}
