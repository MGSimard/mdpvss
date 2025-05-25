import { useSettingsStore } from "@/store/useSettingsStore";
import { IconTransparent } from "@/components/Icons";

export function ToggleBackground() {
  const { transparentBackground, toggleTransparentBackground } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-checked={transparentBackground}
      aria-label="Toggle background"
      onClick={toggleTransparentBackground}>
      <span>
        <IconTransparent aria-hidden="true" /> BACKGROUND
      </span>
    </button>
  );
}
