import { create } from "zustand";

export const useTableStore = create((set) => ({
  selectedTable: null,
  setSelectedTable: (number) => set({ selectedTable: number }),

  selectedDate: null,
  setSelectedDate: (date) =>
    set({
      selectedDate: date,
    }),
  selectedEventTitle: null,
  setSelectedEventTitle: (title) =>
    set({
      selectedEventTitle: title,
    }),
}));
