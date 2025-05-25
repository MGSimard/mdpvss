import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";

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
    });
  });

  return (
    <div id="toolbar" ref={toolbarRef}>
      <label>
        <span>Dark mode</span>
        <input type="checkbox" />
      </label>
      <label>
        <span>Transparent</span>
        <input type="checkbox" />
      </label>
      <label>
        <span>Line numbers</span>
        <input type="checkbox" />
      </label>
      <label>
        <span>Padding</span>
        <input type="checkbox" />
      </label>
      <label>
        <span>Preview</span>
        <input type="checkbox" />
      </label>
    </div>
  );
}
