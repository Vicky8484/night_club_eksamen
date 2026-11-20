import BookTable from "@/app/components/(andre_sider)/BookTable";
import BookTableForm from "@/app/components/(forms)/BookTableForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import Header from "@/app/components/(alle_sider)/Header";

export default async function Book() {
  const reservations = await fetch("http://localhost:4000/reservations").then((r) => r.json());

  return (
    <>
      <Header />
      <MiniHero />
      <BookTable reservations={reservations} />
      <BookTableForm />
    </>
  );
}
