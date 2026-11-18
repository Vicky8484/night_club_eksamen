import Image from "next/image";
import GradientBtn from "@/app/components/(knapper)/GradientBtn";
import NoFillBtn from "@/app/components/(knapper)/NoFillBtn";

const Hero = () => {
  return (
    <section className="full-bleed min-h-130 md:min-h-0 relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/header_bg_2.jpg')] bg-cover
      bg-center
      bg-no-repeat opacity-30"
      />
      <section className="flex flex-col relative z-10 gap-3 justify-center items-center">
        <div className="flex flex-col gap-3">
          <Image
            src="/assets/icon/Logo.svg"
            alt="Night Club"
            width={500}
            height={200}
          />
          <span className="block w-full text-2xl text-center tracking-[0.40em]">
            HAVE A GOOD TIME
          </span>
        </div>
        <Image
          src="/assets/bottom_line.png"
          alt="Night Club"
          width={500}
          height={200}
        />
        <div className="flex gap-3 justify-center">
          <NoFillBtn buttontxt="VIEW EVENTS" link="" />
          <GradientBtn buttontxt="BOOK TABLE" link="" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
