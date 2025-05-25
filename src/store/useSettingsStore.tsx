import { create } from "zustand";

const paddingValues = [16, 32, 64, 128] as const;
type PaddingValue = (typeof paddingValues)[number];

interface SettingsStore {
  darkMode: boolean;
  toggleDarkMode: () => void;

  transparentBackground: boolean;
  toggleTransparentBackground: () => void;

  lineNumbersVisible: boolean;
  toggleLineNumbersVisible: () => void;

  padding: PaddingValue;
  cyclePadding: () => void;

  previewRenderedMarkdown: boolean;
  togglePreviewRenderedMarkdown: () => void;
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  transparentBackground: false,
  toggleTransparentBackground: () => set((state) => ({ transparentBackground: !state.transparentBackground })),

  lineNumbersVisible: false,
  toggleLineNumbersVisible: () => set((state) => ({ lineNumbersVisible: !state.lineNumbersVisible })),

  padding: 64,
  cyclePadding: () => {
    const current = get().padding;
    const idx = paddingValues.indexOf(current);
    const next = paddingValues[idx + 1] ?? paddingValues[0];
    set({ padding: next });
  },

  previewRenderedMarkdown: false,
  togglePreviewRenderedMarkdown: () => set((state) => ({ previewRenderedMarkdown: !state.previewRenderedMarkdown })),
}));
