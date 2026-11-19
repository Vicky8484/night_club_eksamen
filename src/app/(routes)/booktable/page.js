import BookTable from "@/app/components/(andre_sider)/BookTable";
import BookTableForm from "@/app/components/(forms)/BookTableForm";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default function Book() {
  return (
    <>
      <Header />
      <MiniHero />
      <BookTable />
      <BookTableForm />
    </>
  );
}
