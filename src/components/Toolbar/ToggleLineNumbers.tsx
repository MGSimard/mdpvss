import { useSettingsStore } from "@/store/useSettingsStore";
import { IconNumberedLines } from "@/components/Icons";

export function ToggleLineNumbers() {
  const { visibleLineNumbers, toggleVisibleLineNumbers } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-label="Line numbers"
      aria-role="switch"
      aria-checked={visibleLineNumbers}
      onClick={toggleVisibleLineNumbers}>
      <span>
        <IconNumberedLines aria-hidden="true" /> LINE NUMBERS
      </span>
    </button>
  );
}
