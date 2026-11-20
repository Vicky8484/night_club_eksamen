import Title from "@/app/components/(alle_sider)/Title";

const MiniHero = ({overskrift, id}) => {
  return (
    <section className="full-bleed relative min-h-40" id={id}>
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
