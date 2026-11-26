import WelcomeCard from "@/app/components/(forside)/(welcome)/WelcomeCard";
import Title from "@/app/components/(alle_sider)/Title";
import {IoRestaurant} from "react-icons/io5";
import {BiSolidDrink} from "react-icons/bi";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="full-bleed relative py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/pattern_bg.jpg')] bg-cover
      bg-center
      bg-no-repeat opacity-20"
      />
      <Title overskrift="Welcome in the club" />

      <div
        className="relative grid grid-cols-1 gap-4
  welcome:flex welcome:overflow-x-auto welcome:snap-x welcome:snap-mandatory welcome:hide-scrollbar welcome:scrollbar-none
  md:grid md:grid-cols-3 md:overflow-visible md:snap-none"
      >
        <WelcomeCard
          src="/assets/content-img/thumb1.jpg"
          alt="Et bord på klubben fyldt med drinks og konfekt"
          ikon={
            <Image
              src="/assets/icon/favicon.png"
              height={45}
              width={45}
              alt="Ikon"
            />
          }
          overskrift="NIGHT CLUB"
          beskrivelse="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        <WelcomeCard
          src="/assets/content-img/reastaurant_1.jpg"
          alt="God mad fra restauranten"
          ikon={<IoRestaurant className="text-(--accent1) size-10" />}
          overskrift="RESTAURANT"
          beskrivelse="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
        />
        <WelcomeCard
          src="/assets/content-img/thumb2.jpg"
          alt="Et bord på klubben fyldt med drinks og konfekt"
          ikon={<BiSolidDrink className="text-(--accent1) size-10" />}
          overskrift="BAR"
          beskrivelse="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin."
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
