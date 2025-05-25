import { useState, useRef } from "react";
import ShikiHighlighter from "react-shiki";
import { myTheme } from "@/utils/2077";

export function Markdown() {
  const [textareaContent, setTextareaContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div id="markdown-raw">
      <textarea
        ref={textareaRef}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        spellCheck={false}
        autoFocus
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
      <ShikiHighlighter
        className="markdown-raw-highlighted"
        language="markdown"
        theme={myTheme}
        addDefaultStyles={false}
        showLanguage={false}>
        {textareaContent}
      </ShikiHighlighter>
    </div>
  );
}
