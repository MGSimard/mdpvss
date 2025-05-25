import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { IconArrowsOut, IconBolt, IconEye, IconNumberedLines, IconTransparent } from "@/components/Icons";

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
            defaultChecked={false}
            onChange={handleChange}
          />
          <ToggleButton
            label="BACKGROUND"
            icon={<IconTransparent aria-hidden="true" />}
            defaultChecked={false}
            onChange={handleChange}
          />
          <ToggleButton
            label="LINE NUMBERS"
            icon={<IconNumberedLines aria-hidden="true" />}
            defaultChecked={false}
            onChange={handleChange}
          />
          <ToggleButton
            label="PADDING"
            icon={<IconArrowsOut aria-hidden="true" />}
            defaultChecked={false}
            onChange={handleChange}
          />
          <ToggleButton
            label="PREVIEW"
            icon={<IconEye aria-hidden="true" />}
            defaultChecked={false}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

function ToggleButton({
  label,
  icon,
  defaultChecked,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  defaultChecked: boolean;
  onChange: () => void;
}) {
  return (
    <label>
      <span>
        {icon} {label}
      </span>
      <input type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
    </label>
  );
}
