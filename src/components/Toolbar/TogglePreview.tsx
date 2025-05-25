import { useSettingsStore } from "@/store/useSettingsStore";
import { IconEye } from "@/components/Icons";

export function TogglePreview() {
  const { previewRenderedMarkdown, togglePreviewRenderedMarkdown } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-label="Preview rendered markdown"
      aria-checked={previewRenderedMarkdown}
      onClick={togglePreviewRenderedMarkdown}>
      <span>
        <IconEye aria-hidden="true" /> PREVIEW
      </span>
    </button>
  );
}
