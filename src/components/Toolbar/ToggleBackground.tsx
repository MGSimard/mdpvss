import { IconTransparent } from "@/components/Icons";

export function ToggleBackground() {
  return (
    <button type="button" className="setting">
      <span>
        <IconTransparent aria-hidden="true" /> BACKGROUND
      </span>
    </button>
  );
}
