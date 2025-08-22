import { create } from "zustand";

export const useFiltredState = create((set) => ({
    filtred: '',
    setFiltred: (value) => set({ filtred: value })
}))