import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { IconArrowsOut, IconBolt, IconEye, IconNumberedLines, IconTransparent } from "@/components/Icons";
import { TogglePadding } from "./TogglePadding";

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

  const handleChange = () => {
    console.log("handleChange");
  };

  return (
    <div id="toolbar" ref={toolbarRef}>
      <div id="toolbar-inner">
        <div id="toolbar-left">
          <div id="toolbar-left-inner"></div>
        </div>
        <div id="toolbar-right">
          <ToggleButton
            label="DARK"
            icon={<IconBolt aria-hidden="true" />}
            aria-label="Toggle dark mode"
            defaultChecked={true}
            onChange={handleChange}
          />
          <ToggleButton
            label="BACKGROUND"
            icon={<IconTransparent aria-hidden="true" />}
            aria-label="Toggle background transparency"
            defaultChecked={false}
            onChange={handleChange}
          />
          <ToggleButton
            label="LINE NUMBERS"
            icon={<IconNumberedLines aria-hidden="true" />}
            aria-label="Toggle line numbers"
            defaultChecked={true}
            onChange={handleChange}
          />
          <TogglePadding />
          <ToggleButton
            label="PREVIEW"
            icon={<IconEye aria-hidden="true" />}
            aria-label="Toggle rendered markdown"
            defaultChecked={false}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

interface ToggleButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

function ToggleButton({ label, icon, ...props }: ToggleButtonProps) {
  return (
    <label className="setting">
      <span>
        {icon} {label}
      </span>
      <input type="checkbox" {...props} />
    </label>
  );
}
