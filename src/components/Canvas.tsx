import { useSettingsStore } from "@/store/useSettingsStore";
import { Markdown } from "@/components/Markdown";
import { FileName } from "./FileName";

export function Canvas() {
  const { padding, visibleLineNumbers } = useSettingsStore();

  return (
    <div id="canvas" style={{ padding: `${padding}px` }}>
      <div id="card">
        <div id="card-inner">
          <div id="card-trim">
            <div id="card-trim-inner"></div>
          </div>
          <div id="card-content">
            {/* <div id="line-numbers">handle this later</div> */}
            <div id="card-editable">
              <FileName />
              <Markdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
