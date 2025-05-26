import { create } from "zustand";

const paddingValues = [16, 32, 64, 128] as const;
type PaddingValue = (typeof paddingValues)[number];

interface SettingsStore {
  visibleBackground: boolean;
  toggleVisibleBackground: () => void;

  visibleLineNumbers: boolean;
  toggleVisibleLineNumbers: () => void;

  padding: PaddingValue;
  cyclePadding: () => void;

  previewRenderedMarkdown: boolean;
  togglePreviewRenderedMarkdown: () => void;

  width: number;
  setWidth: (width: number) => void;
}

// Could be separate stores to localize re-renders but it's fine
export const useSettingsStore = create<SettingsStore>((set) => ({
  visibleBackground: true,
  toggleVisibleBackground: () => set((state) => ({ visibleBackground: !state.visibleBackground })),

  visibleLineNumbers: true,
  toggleVisibleLineNumbers: () => set((state) => ({ visibleLineNumbers: !state.visibleLineNumbers })),

  padding: 32,
  cyclePadding: () =>
    set((state) => {
      const idx = paddingValues.indexOf(state.padding);
      const next = paddingValues[idx + 1] ?? paddingValues[0];
      return { padding: next };
    }),

  previewRenderedMarkdown: false,
  togglePreviewRenderedMarkdown: () => set((state) => ({ previewRenderedMarkdown: !state.previewRenderedMarkdown })),

  width: 520,
  setWidth: (width: number) => set({ width }),
}));
