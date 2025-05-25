import { useSettingsStore } from "@/store/useSettingsStore";
import { IconBolt } from "@/components/Icons";

export function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark mode"
      onClick={() => toggleDarkMode(!darkMode)}>
      <span>
        <IconBolt aria-hidden="true" /> DARK
      </span>
    </button>
  );
}
