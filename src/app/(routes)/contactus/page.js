import ContactUsForm from "@/app/components/(forms)/ContactUsForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";

export default function ContactUs() {
  return (
    <>
      <Header />
      <MiniHero overskrift="Contact us" />
      <ContactUsForm />
    </>
  );
}
