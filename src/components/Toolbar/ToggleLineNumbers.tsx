import { IconNumberedLines } from "@/components/Icons";

export function ToggleLineNumbers() {
  return (
    <button type="button" className="setting">
      <span>
        <IconNumberedLines aria-hidden="true" /> LINE NUMBERS
      </span>
    </button>
  );
}
