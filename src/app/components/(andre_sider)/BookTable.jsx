"use client";
import { useTableStore } from "@/app/store/useTableStore";

const BookTable = ({ reservations }) => {
  const setSelectedTable = useTableStore((state) => state.setSelectedTable);
  const selectedDate = useTableStore((state) => state.selectedDate);
  const selectedTable = useTableStore((state) => state.selectedTable);
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

  const groups = [
    { type: "small", label: "Table for 4" },
    { type: "medium", label: "Table for 6" },
    { type: "large", label: "Table for 8" },
  ];
  const tableImages = {
    small: "/assets/icon/table1.svg",
    medium: "/assets/icon/table2.svg",
    large: "/assets/icon/table3.svg",
  };
  const PinktableImages = {
    small: "/assets/icon/table1copy.svg",
    medium: "/assets/icon/table2copy.svg",
    large: "/assets/icon/table3copy.svg",
  };
  const numberOffset = {
    small: "-translate-x-11 ",
    medium: "-translate-x-6",
    large: "",
  };
  console.log(reservations);
  return (
    <>
      <section className="hidden md:grid grid-cols-5 gap-4">
        {tables.map((table) => {
          const isBooked = reservations.some((res) => res.table === String(table.number) && res.date.slice(0, 10) === selectedDate);
          const isSelected = selectedTable === table.number;
          return (
            <div
              className={`relative ${isBooked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${!isSelected ? "" : "border-2 border-(--accent1)"}`}
              key={table.number}
              onClick={() => {
                if (!isBooked) setSelectedTable(table.number);
              }}
            >
              <img src={!isSelected ? tableImages[table.type] : PinktableImages[table.type]} alt={`Table ${table.number}`} />
              <span className={`absolute inset-0 flex items-center justify-center ${numberOffset[table.type]}`}>{table.number}</span>
            </div>
          );
        })}
      </section>
      <div className="md:hidden flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.type}>
            <h3 className="mb-3">{group.label}</h3>

            <div className="grid grid-cols-5 gap-3">
              {tables
                .filter((table) => table.type === group.type)
                .map((table) => {
                  const isBooked = reservations.some((res) => res.table === String(table.number) && res.date.slice(0, 10) === selectedDate);
                  return (
                    <div
                      key={table.number}
                      onClick={() => {
                        if (!isBooked) setSelectedTable(table.number);
                      }}
                      className={`relative ${isBooked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <img src="/assets/table/TableMobile.svg" alt={`Table ${table.number}`} />
                      <span className="absolute inset-0 flex items-center justify-center">{table.number}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookTable;
