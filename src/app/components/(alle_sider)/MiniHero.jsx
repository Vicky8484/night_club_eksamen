import Title from "@/app/components/(alle_sider)/Title";

const MiniHero = () => {
  return (
    <section className="full-bleed relative flex items-center justify-center min-h-40 mb-4">
      <span className="absolute inset-0 bg-[url(/assets/bg/footerbg.jpg)] bg-cover bg-center opacity-25" />
      <Title overskrift="Neon Grand Lights" />
    </section>
  );
};

export default MiniHero;
