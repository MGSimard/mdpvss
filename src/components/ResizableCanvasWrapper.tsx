import { useRef, useState, useEffect } from "react";

const MIN_WIDTH = 285;
const MAX_WIDTH = 1440;
const WIDTH_DISPLAY_TIMEOUT = 600;

function clampWidth(width: number, maxWidth: number) {
  return Math.max(MIN_WIDTH, Math.min(maxWidth, width));
}

const getMaxAllowedWidth = () => Math.min(MAX_WIDTH, window.innerWidth - 40);

const getInitialWidth = () => {
  return clampWidth(Math.min(720, window.innerWidth - 20), getMaxAllowedWidth());
};

export function ResizableCanvasWrapper({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState<number>(() => getInitialWidth());
  const [showWidth, setShowWidth] = useState(false);
  const hideWidthTimer = useRef<number | null>(null);
  const dragging = useRef<"left" | "right" | null>(null);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const prevUserSelect = useRef<string | null>(null);

  const setBodyUserSelect = (value: string) => {
    document.body.style.userSelect = value;
    document.body.style.webkitUserSelect = value;
  };

  const showWidthTemporarily = () => {
    setShowWidth(true);
    if (hideWidthTimer.current) window.clearTimeout(hideWidthTimer.current);
    hideWidthTimer.current = window.setTimeout(() => setShowWidth(false), WIDTH_DISPLAY_TIMEOUT);
  };

  const onPointerDown = (side: "left" | "right") => (e: React.PointerEvent) => {
    dragging.current = side;
    startX.current = e.clientX;
    startWidth.current = width;
    prevUserSelect.current = document.body.style.userSelect;
    setBodyUserSelect("none");
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    setShowWidth(true);
    if (hideWidthTimer.current) window.clearTimeout(hideWidthTimer.current);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging.current) return;
    let delta = e.clientX - startX.current;
    if (dragging.current === "left") delta = -delta;
    let maxAllowed = getMaxAllowedWidth();
    let newWidth = clampWidth(startWidth.current + delta * 2, maxAllowed);
    setWidth(Math.round(newWidth));
    showWidthTemporarily();
  };

  const onPointerUp = () => {
    dragging.current = null;
    setBodyUserSelect(prevUserSelect.current || "");
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    if (hideWidthTimer.current) window.clearTimeout(hideWidthTimer.current);
    hideWidthTimer.current = window.setTimeout(() => setShowWidth(false), WIDTH_DISPLAY_TIMEOUT);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      if (hideWidthTimer.current) window.clearTimeout(hideWidthTimer.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const maxAllowed = getMaxAllowedWidth();
      setWidth((w) => clampWidth(Math.min(w, maxAllowed), maxAllowed));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = (side: "left" | "right") => (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setWidth((w) => {
        let delta = e.key === "ArrowLeft" ? (side === "left" ? 10 : -10) : side === "left" ? -10 : 10;
        let maxAllowed = getMaxAllowedWidth();
        let newW = clampWidth(w + delta, maxAllowed);
        return newW;
      });
      showWidthTemporarily();
    }
  };

  return (
    <div
      id="resizable-canvas-wrapper"
      style={{
        minWidth: MIN_WIDTH,
        maxWidth: MAX_WIDTH,
        width,
        position: "relative",
      }}>
      <div
        id="handle-left"
        tabIndex={0}
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={width}
        aria-valuemin={MIN_WIDTH}
        aria-valuemax={MAX_WIDTH}
        aria-label="Resize canvas (left handle)"
        onPointerDown={onPointerDown("left")}
        onKeyDown={handleKeyDown("left")}
      />
      <div
        id="handle-right"
        tabIndex={0}
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={width}
        aria-valuemin={MIN_WIDTH}
        aria-valuemax={MAX_WIDTH}
        aria-label="Resize canvas (right handle)"
        onPointerDown={onPointerDown("right")}
        onKeyDown={handleKeyDown("right")}
      />
      {children}
      <div id="width-display" className={showWidth ? "visible" : ""} aria-live="polite">
        Width: {width}px
      </div>
    </div>
  );
}
