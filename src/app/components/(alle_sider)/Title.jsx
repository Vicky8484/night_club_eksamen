const Title = ({overskrift}) => {
  return (
    <section className="flex flex-col relative justify-center items-center">
      <h1>{overskrift}</h1>
      <div
        className="mx-auto mt-2 mb-6 h-1 w-40 md:w-50 rounded-full bg-linear-to-r from-transparent via-(--accent1) to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Title;
