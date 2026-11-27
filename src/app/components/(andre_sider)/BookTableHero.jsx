"use client";
import { useTableStore } from "@/app/store/useTableStore";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";

export default function BookTableHero() {
  const selectedEventTitle = useTableStore((state) => state.selectedEventTitle);

  return <MiniHero overskrift={selectedEventTitle || "BOOK TABLE"} />;
}
