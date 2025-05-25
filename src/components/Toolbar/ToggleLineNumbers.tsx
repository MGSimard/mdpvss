import { useSettingsStore } from "@/store/useSettingsStore";
import { IconNumberedLines } from "@/components/Icons";

export function ToggleLineNumbers() {
  const { lineNumbersVisible, toggleLineNumbersVisible } = useSettingsStore();

  return (
    <button
      type="button"
      className="setting"
      aria-role="switch"
      aria-checked={lineNumbersVisible}
      aria-label="Toggle line numbers"
      onClick={toggleLineNumbersVisible}>
      <span>
        <IconNumberedLines aria-hidden="true" /> LINE NUMBERS
      </span>
    </button>
  );
}
