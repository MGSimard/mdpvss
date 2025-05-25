import { useState } from "react";
import { useShikiHighlighter } from "react-shiki";

export function Markdown() {
  const [textareaContent, setTextareaContent] = useState("");
  const highlightedCode = useShikiHighlighter(textareaContent, "markdown", "github-dark");

  return (
    <>
      <textarea
        autoFocus
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
        spellCheck={false}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}></textarea>
      <div>{highlightedCode}</div>
    </>
  );
}
