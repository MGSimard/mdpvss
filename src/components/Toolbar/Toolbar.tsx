import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { CyclePadding } from "./CyclePadding";
import { ToggleTheme } from "./ToggleTheme";
import { ToggleBackground } from "./ToggleBackground";
import { ToggleLineNumbers } from "./ToggleLineNumbers";
import { TogglePreview } from "./TogglePreview";
import { IconEllipsis, IconMinus } from "@/components/Icons";

gsap.registerPlugin(useGSAP, Draggable, Flip, InertiaPlugin);

export function Toolbar() {
  const [isOpen, setIsOpen] = useState(true);
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
    <div id="toolbar" ref={toolbarRef} role="toolbar" data-open={isOpen}>
      <div id="toolbar-inner">
        <div id="toolbar-trim">
          <div id="toolbar-trim-inner">
            <button
              id="toolbar-control"
              type="button"
              aria-label="Close toolbar"
              className="icon-button"
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IconMinus aria-hidden="true" /> : <IconEllipsis aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div id="toolbar-content" inert={isOpen ? false : true}>
          <div>
            <ToggleTheme />
            <ToggleBackground />
            <ToggleLineNumbers />
            <CyclePadding />
            <TogglePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
