import { create } from "zustand";


export const useWorkStore = create((set) => ({
  editedItem: null,
  setEditedItem: (item) => set({ editedItem: item }),
}));
