"use client";
import { useTableStore } from "@/app/store/useTableStore";

const BookTable = ({ reservations }) => {
  const setSelectedTable = useTableStore((state) => state.setSelectedTable);
  const selectedDate = useTableStore((state) => state.selectedDate);
  const tables = [
    { number: 1, type: "small" },
    { number: 2, type: "small" },
    { number: 3, type: "medium" },
    { number: 4, type: "small" },
    { number: 5, type: "large" },
    { number: 6, type: "small" },
    { number: 7, type: "small" },
    { number: 8, type: "medium" },
    { number: 9, type: "small" },
    { number: 10, type: "large" },
    { number: 11, type: "small" },
    { number: 12, type: "small" },
    { number: 13, type: "medium" },
    { number: 14, type: "small" },
    { number: 15, type: "large" },
  ];
  const tableImages = {
    small: "/assets/icon/table1.svg",
    medium: "/assets/icon/table2.svg",
    large: "/assets/icon/table3.svg",
  };
  const numberOffset = {
    small: "-translate-x-11 ",
    medium: "-translate-x-6",
    large: "",
  };
  console.log(reservations);
  return (
    <section className="grid grid-cols-5 gap-4">
      {tables.map((table) => {
        const isBooked = reservations.some((res) => res.table === String(table.number) && res.date.slice(0, 10) === selectedDate);
        return (
          <div
            className={`relative ${isBooked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            key={table.number}
            onClick={() => {
              if (!isBooked) setSelectedTable(table.number);
            }}
          >
            <img src={tableImages[table.type]} alt={"Table ${table.number}"} />
            <span className={`absolute inset-0 flex items-center justify-center ${numberOffset[table.type]}`}>{table.number}</span>
          </div>
        );
      })}
    </section>
  );
};

export default BookTable;
