import { create } from "zustand";

export const useFiltredState = create((set) => ({
    filtred: null,
    setFiltred: (value) => set({ filtred: value })
}))