import Image from "next/image";

const WelcomeFeatured = ({src, alt, ikon, overskrift, beskrivelse}) => {
  return (
    <article>
      <div className="group relative isolate block aspect-3/4 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute border-2 border-x-0 border-t-(--accent1) border-b-(--accent1) z-20 inset-0 flex translate-x-full flex-col bg-black/75 text-white p-6 transition-transform duration-300 group-hover:translate-x-0 group-focus-visible:translate-x-0 justify-center items-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-10 h-10 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-10 h-10 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)]"
          />

          <div className="flex w-20 h-20 border-2 border-(--accent1) justify-center items-center">
            {ikon}
          </div>
          <br />
          <div className="text-center opacity-0 transition-opacity delay-0 duration-500 group-hover:opacity-100 group-hover:delay-300">
            <h4 className="text-2xl font-bold">{overskrift}</h4>
            <p className="text-center">{beskrivelse}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WelcomeFeatured;
