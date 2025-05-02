import { create } from "zustand";

export interface SelectModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useSelectModalStore = create<SelectModalStore>()((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
