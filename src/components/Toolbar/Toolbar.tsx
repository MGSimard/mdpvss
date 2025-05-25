import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { CyclePadding } from "./CyclePadding";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { ToggleBackground } from "./ToggleBackground";
import { ToggleLineNumbers } from "./ToggleLineNumbers";
import { TogglePreview } from "./TogglePreview";

gsap.registerPlugin(useGSAP, Draggable, Flip, InertiaPlugin);

export function Toolbar() {
  const toolbarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!toolbarRef.current) return;
    let draggableInstance: Draggable[] | undefined;
    draggableInstance = Draggable.create(toolbarRef.current, {
      type: "x,y",
      bounds: window,
      inertia: true,
      throwProps: true,
    });
  });

  return (
    <div id="toolbar" ref={toolbarRef} aria-role="toolbar">
      <div id="toolbar-inner">
        <div id="toolbar-left">
          <div id="toolbar-left-inner"></div>
        </div>
        <div id="toolbar-right">
          <ToggleDarkMode />
          <ToggleBackground />
          <ToggleLineNumbers />
          <CyclePadding />
          <TogglePreview />
        </div>
      </div>
    </div>
  );
}
