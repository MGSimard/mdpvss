import { useState, useRef, useEffect } from "react";
import { IconArrowsOut } from "@/components/Icons";
import { useSettingsStore } from "@/store/useSettingsStore";

export function CyclePadding() {
  const { padding, cyclePadding } = useSettingsStore();
  const [highlight, setHighlight] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    cyclePadding();
    setHighlight(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setHighlight(false);
    }, 600);
  };

  return (
    <button type="button" className="setting" aria-label="Padding" onClick={handleClick}>
      <span>
        <IconArrowsOut aria-hidden="true" /> PADDING{" "}
        <span className={`padding-value${highlight ? " highlight" : ""}`} aria-live="polite">
          {padding}
        </span>
      </span>
    </button>
  );
}
