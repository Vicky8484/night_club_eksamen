const Title = ({overskrift}) => {
  return (
    <section>
      <h1>{overskrift}</h1>
      <div className="underline-fade" aria-hidden="true"></div>
    </section>
  );
};

export default Title;
