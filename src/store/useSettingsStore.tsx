import { create } from "zustand";

const paddingValues = [16, 32, 64, 128] as const;
type PaddingValue = (typeof paddingValues)[number];

interface SettingsStore {
  darkMode: boolean;
  toggleDarkMode: () => void;

  visibleBackground: boolean;
  toggleVisibleBackground: () => void;

  visibleLineNumbers: boolean;
  toggleVisibleLineNumbers: () => void;

  padding: PaddingValue;
  cyclePadding: () => void;

  previewRenderedMarkdown: boolean;
  togglePreviewRenderedMarkdown: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  visibleBackground: true,
  toggleVisibleBackground: () => set((state) => ({ visibleBackground: !state.visibleBackground })),

  visibleLineNumbers: true,
  toggleVisibleLineNumbers: () => set((state) => ({ visibleLineNumbers: !state.visibleLineNumbers })),

  padding: 64,
  cyclePadding: () =>
    set((state) => {
      const idx = paddingValues.indexOf(state.padding);
      const next = paddingValues[idx + 1] ?? paddingValues[0];
      return { padding: next };
    }),

  previewRenderedMarkdown: false,
  togglePreviewRenderedMarkdown: () => set((state) => ({ previewRenderedMarkdown: !state.previewRenderedMarkdown })),
}));
