import { useSettingsStore } from "@/store/useSettingsStore";
import { Markdown } from "@/components/Markdown";

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
              <input
                placeholder="PLACEHOLDER.MD"
                type="text"
                autoFocus
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck={false}
              />
              <Markdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
