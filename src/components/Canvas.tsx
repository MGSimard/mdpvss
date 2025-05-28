import { useSettingsStore } from "@/store/useSettingsStore";
import { Markdown } from "@/components/Markdown";
import { FileName } from "@/components/FileName";

export function Canvas() {
  const { visibleBackground, padding } = useSettingsStore();

  return (
    <div id="canvas" className={visibleBackground ? "" : "bg-transparent"} style={{ padding: `${padding}px` }}>
      <div id="card">
        <div id="card-inner">
          <div id="card-trim">
            <div id="card-trim-inner"></div>
          </div>
          <div id="card-content">
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
