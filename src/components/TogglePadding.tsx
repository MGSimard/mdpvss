import { useState, useRef, useEffect } from "react";
import { IconArrowsOut } from "@/components/Icons";

export function TogglePadding() {
  // Move this stuff into a context later
  const paddingValues = [16, 32, 64, 128] as const;
  type PaddingValue = (typeof paddingValues)[number];
  const [padding, setPadding] = useState<PaddingValue>(64);
  const [highlight, setHighlight] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = () => {
    const nextPadding = paddingValues[paddingValues.indexOf(padding) + 1] ?? paddingValues[0];
    setPadding(nextPadding);
    setHighlight(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setHighlight(false);
    }, 600);
  };

  return (
    <button
      type="button"
      className="setting"
      onClick={handleClick}
      aria-label={`Change padding (current: ${padding}px)`}>
      <span>
        <IconArrowsOut aria-hidden="true" /> PADDING{" "}
        <span className={`padding-value${highlight ? " highlight" : ""}`} aria-live="polite">
          {padding}
        </span>
      </span>
    </button>
  );
}
