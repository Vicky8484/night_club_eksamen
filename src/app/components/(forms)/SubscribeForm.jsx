import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";

const SubscribeForm = () => {
  return (
    <section className="my-15">
      <h1 className="my-4"> want the latest night club news</h1>
      <p className="mb-7 text-center">
        Subscribe to our newsletter and never miss an <span className="text-(--accent1)">Event</span>
      </p>
      <form action="" className=" flex items-end justify-center">
        <label className="" for="mail"></label>
        <input className=" p-4 border-b-2 border-white" placeholder="Enter Your Email" type="email" id="mail" />
        <BorderBlockBtn link="" buttontxt="Subscribe" />
      </form>
    </section>
  );
};

export default SubscribeForm;
