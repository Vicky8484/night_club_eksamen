import Image from "next/image";
import {FaFacebookF} from "react-icons/fa6";
import {FaSnapchatGhost} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {VscTwitter} from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="full-bleed relative isolate py-(--big-block-space)">
      <span
        aria-hidden="true"
        className="full-bleed absolute inset-0 z-0 bg-[url('/assets/bg/footerbg.jpg')] bg-cover
      bg-center
      bg-no-repeat opacity-20"
      />
      <section className="flex flex-col gap-12">
        <section className="grid relative z-10 grid-cols-1 md:grid-cols-3 gap-8">
          <article className="flex flex-col items-center md:items-start gap-10">
            <Image
              src="/assets/icon/Logo_main.svg"
              alt="Night Club"
              width={180}
              height={60}
            />

            <div className="flex flex-col gap-6 text-center md:text-left">
              <div className="flex flex-col gap-3">
                <h3 className="text-(--accent1)">LOCATION</h3>
                <p>
                  Kompagnistræde 278 <br />
                  1265 København K
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-(--accent1)">OPENING HOURS</h3>
                <p>
                  WED - THU 10:30 PM TO 3 AM <br />
                  SAT - SUN: 11 PM TO 5 AM
                </p>
              </div>
            </div>
          </article>

          <article className="hidden md:flex flex-col gap-5">
            <h3>News</h3>
            <div className="flex flex-col gap-6">
              <div
                tabindex={0}
                className="focus flex gap-2 cursor-pointer transition duration-300 hover:bg-(--subtle)/75 p-1"
              >
                <Image
                  src="/assets/content-img/recent_post1.jpg"
                  alt="Recent post 1"
                  width={95}
                  height={95}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting. <br />
                  <span className="text-(--accent1)">April 17, 2026</span>
                </p>
              </div>
              <div
                tabindex={0}
                className="focus flex gap-2 cursor-pointer transition duration-300  hover:bg-(--subtle)/75 p-1"
              >
                <Image
                  src="/assets/content-img/recent_post2.jpg"
                  alt="Recent post 1"
                  width={95}
                  height={95}
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting. <br />
                  <span className="text-(--accent1)">April 17, 2026</span>
                </p>
              </div>
            </div>
          </article>
          <article className="hidden md:flex flex-col gap-5">
            <h3>Recent posts</h3>
            <div className="flex flex-col gap-6">
              <div
                tabindex={0}
                className="focus flex gap-2 cursor-pointer transition duration-300 hover:bg-(--subtle)/75 p-1"
              >
                <VscTwitter className="text-(--accent1) size-9" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting. <br />
                  <span className="text-(--accent1)">April 17, 2026</span>
                </p>
              </div>
              <div
                tabindex={0}
                className="focus flex gap-2 cursor-pointer transition duration-300 hover:bg-(--subtle)/75 p-1"
              >
                <VscTwitter className="text-(--accent1) size-9" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting. <br />
                  <span className="text-(--accent1)">April 17, 2026</span>
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="grid items-end relative z-10 grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          <p className="text-foreground/75 font-medium justify-self-center text-center md:justify-self-start md:text-left">
            Night Club - All Rights Reserved
          </p>
          <div className="flex flex-col items-center justify-center gap-2 justify-self-center">
            <p className="font-bold">Stay Connected With Us</p>
            <div className="flex gap-2">
              <div
                tabindex={0}
                aria-label="Facebook"
                className="focus border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaFacebookF />
              </div>
              <div
                tabindex={0}
                aria-label="Instagram"
                className="focus border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaInstagram />
              </div>
              <div
                tabindex={0}
                aria-label="Snapchat"
                className="focus border-2 border-foreground w-10 h-10 flex items-center justify-center transition duration-300 hover:border-(--accent1) hover:text-(--accent1)"
              >
                <FaSnapchatGhost />
              </div>
            </div>
          </div>
          <p className="text-foreground/75 font-medium justify-self-center text-center md:justify-self-end md:text-right">
            Copyright © NightClub
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
