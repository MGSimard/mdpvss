import { useSettingsStore } from "@/store/useSettingsStore";
import { IconTransparent } from "@/components/Icons";

export function ToggleBackground() {
  const { visibleBackground, toggleVisibleBackground } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-label="Background visibility"
      aria-checked={visibleBackground}
      onClick={toggleVisibleBackground}>
      <span>
        <IconTransparent aria-hidden="true" /> BACKGROUND
      </span>
    </button>
  );
}
