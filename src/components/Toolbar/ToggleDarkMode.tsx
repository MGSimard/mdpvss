import { useSettingsStore } from "@/store/useSettingsStore";
import { IconBolt } from "@/components/Icons";

export function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-label="Toggle dark mode"
      aria-role="switch"
      aria-checked={darkMode}
      onClick={toggleDarkMode}>
      <span>
        <IconBolt aria-hidden="true" /> DARK
      </span>
    </button>
  );
}
