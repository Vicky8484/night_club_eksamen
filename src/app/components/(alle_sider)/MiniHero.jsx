import Title from "@/app/components/(alle_sider)/Title";

const MiniHero = ({overskrift}) => {
  return (
    <section className="full-bleed relative mb-4 min-h-40">
      <div
        className="full-bleed absolute inset-0 bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-40 items-center justify-center">
        <Title overskrift={overskrift} />
      </div>
    </section>
  );
};

export default MiniHero;
