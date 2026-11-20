import { create } from "zustand";

export const useTableStore = create((set) => ({
  selectedTable: null,
  setSelectedTable: (number) => set({ selectedTable: number }),
}));
