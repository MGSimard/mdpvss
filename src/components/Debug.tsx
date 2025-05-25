import { useSettingsStore } from "@/store/useSettingsStore";

export function Debug() {
  const { darkMode, padding, transparentBackground, lineNumbersVisible, previewRenderedMarkdown } = useSettingsStore();

  return (
    <div>
      <h1>Debug</h1>
      <ul>
        <li>Dark mode: {darkMode ? "true" : "false"}</li>
        <li>Padding: {padding}</li>
        <li>Transparent background: {transparentBackground ? "true" : "false"}</li>
        <li>Line numbers visible: {lineNumbersVisible ? "true" : "false"}</li>
        <li>Preview rendered markdown: {previewRenderedMarkdown ? "true" : "false"}</li>
      </ul>
    </div>
  );
}
