import { create } from "zustand";


export const useFeedbackStore = create((set) => ({
  editedItem: null,
  setEditedItem: (item) => set({ editedItem: item }),
}));
