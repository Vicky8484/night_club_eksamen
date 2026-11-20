import Title from "@/app/components/(alle_sider)/Title";

const MiniHero = () => {
  return (
    <section className="full-bleed relative mb-4">
      <div className="relative flex items-center justify-center min-h-40">
        <span className="absolute inset-0 bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center opacity-25" />
        <Title overskrift="Neon Grand Lights" />
      </div>
    </section>
  );
};

export default MiniHero;
