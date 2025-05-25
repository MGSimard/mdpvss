import { useSettingsStore } from "@/store/useSettingsStore";

export function Debug() {
  const { darkMode, padding, visibleBackground, visibleLineNumbers, previewRenderedMarkdown } = useSettingsStore();

  return (
    <div>
      <h1>Debug</h1>
      <ul>
        <li>Dark mode: {darkMode ? "true" : "false"}</li>
        <li>Padding: {padding}</li>
        <li>Visible background: {visibleBackground ? "true" : "false"}</li>
        <li>Visible line numbers: {visibleLineNumbers ? "true" : "false"}</li>
        <li>Preview rendered markdown: {previewRenderedMarkdown ? "true" : "false"}</li>
      </ul>
    </div>
  );
}
