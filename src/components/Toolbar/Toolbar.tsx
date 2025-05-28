import { useRef, useState } from "react";
import { CyclePadding } from "./CyclePadding";
import { ToggleTheme } from "./ToggleTheme";
import { ToggleBackground } from "./ToggleBackground";
import { ToggleLineNumbers } from "./ToggleLineNumbers";
import { TogglePreview } from "./TogglePreview";
import { IconEllipsis, IconMinus } from "@/components/Icons";

export function Toolbar() {
  const [isOpen, setIsOpen] = useState(true);
  const toolbarRef = useRef<HTMLDivElement>(null);

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
            <CyclePadding />
            <ToggleBackground />
            <ToggleLineNumbers />
            <TogglePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
