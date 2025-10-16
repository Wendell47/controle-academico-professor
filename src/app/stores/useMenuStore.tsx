import { create } from "zustand";

type MenuState = {
	isOpen: boolean;
	mainMenu: boolean;
	toggleMenu: () => void;
	toggleMainMenu: () => void;
	closeMenu: () => void;
	closeMainMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
	isOpen: false,
	mainMenu: false,
	toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
	toggleMainMenu: () => set((state) => ({ mainMenu: !state.mainMenu })),
	closeMenu: () => set({ isOpen: false }),
	closeMainMenu: () => set({ mainMenu: false }),
}));
