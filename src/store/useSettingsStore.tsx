import { create } from "zustand";

const paddingValues = [16, 32, 64, 128] as const;
type PaddingValue = (typeof paddingValues)[number];

interface SettingsState {
  darkMode: boolean;
  toggleDarkMode: (value: boolean) => void;

  transparentBackground: boolean;
  setTransparentBackground: (value: boolean) => void;

  lineNumbersVisible: boolean;
  setLineNumbersVisible: (value: boolean) => void;

  padding: PaddingValue;
  cyclePadding: () => void;

  previewRenderedMarkdown: boolean;
  setPreviewRenderedMarkdown: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  darkMode: true,
  toggleDarkMode: (value) => set({ darkMode: value }),

  transparentBackground: false,
  setTransparentBackground: (value) => set({ transparentBackground: value }),

  lineNumbersVisible: false,
  setLineNumbersVisible: (value) => set({ lineNumbersVisible: value }),

  padding: 64,
  cyclePadding: () => {
    const current = get().padding;
    const idx = paddingValues.indexOf(current);
    const next = paddingValues[idx + 1] ?? paddingValues[0];
    set({ padding: next });
  },

  previewRenderedMarkdown: false,
  setPreviewRenderedMarkdown: (value) => set({ previewRenderedMarkdown: value }),
}));
