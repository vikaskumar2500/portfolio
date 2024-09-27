import { create } from "zustand";

type SectionState = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const useActiveSection = create<SectionState>((set, get) => ({
  activeSection: "Home",
  setActiveSection: (section) => set({ activeSection: section }),
  
}));
