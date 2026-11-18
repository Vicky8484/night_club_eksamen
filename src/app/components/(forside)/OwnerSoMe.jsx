import SubscribeForm from "@/app/components/(forms)/SubscribeForm";
import { FaTwitter, FaFacebookF, FaSnapchatGhost } from "react-icons/fa";

const OwnerSoMe = () => {
  return (
    <section className=" flex flex-col items-center gap-5">
      <img src="/assets/OwnerSoMe.png" alt="owner of the clurrb" />
      <h1>ALEX</h1>
      <p className="max-w-[64ch] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text.</p>
      <div className="flex gap-5">
        <div className="border-3 border-white p-3 flex items-center justify-center">
          <FaFacebookF className="size-5" />
        </div>
        <div className="border-3 border-white p-3 flex items-center justify-center">
          <FaTwitter className="size-5" />
        </div>
        <div className="border-3 border-white p-3 flex items-center justify-center">
          <FaSnapchatGhost className="size-5" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="size-5 bg-white"></div>
        <div className="size-5 bg-white"></div>
        <div className="size-5 bg-(--accent1)"></div>
      </div>
      <SubscribeForm />
    </section>
  );
};

export default OwnerSoMe;
