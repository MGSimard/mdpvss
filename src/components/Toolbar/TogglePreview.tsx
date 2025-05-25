import { useSettingsStore } from "@/store/useSettingsStore";
import { IconEye } from "@/components/Icons";

export function TogglePreview() {
  const { previewRenderedMarkdown, togglePreviewRenderedMarkdown } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-checked={previewRenderedMarkdown}
      aria-label="Toggle preview rendered markdown"
      onClick={togglePreviewRenderedMarkdown}>
      <span>
        <IconEye aria-hidden="true" /> PREVIEW
      </span>
    </button>
  );
}
