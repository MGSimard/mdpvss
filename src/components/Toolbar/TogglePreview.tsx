import { IconEye } from "@/components/Icons";

export function TogglePreview() {
  return (
    <button type="button" className="setting">
      <span>
        <IconEye aria-hidden="true" /> PREVIEW
      </span>
    </button>
  );
}
