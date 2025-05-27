import { useState, useRef } from "react";
import { useSettingsStore } from "@/store/useSettingsStore";
import ShikiHighlighter, { rehypeInlineCodeProperty } from "react-shiki";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRemoveComments from "remark-remove-comments";
import { myTheme } from "@/utils/2077";

export function Markdown() {
  const { previewRenderedMarkdown, visibleLineNumbers } = useSettingsStore();
  const [textareaContent, setTextareaContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return previewRenderedMarkdown ? (
    <div id="markdown-rendered">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkRemoveComments]}
        rehypePlugins={[rehypeInlineCodeProperty]}
        components={{
          code: CodeHighlight,
        }}>
        {textareaContent}
      </ReactMarkdown>
    </div>
  ) : (
    <div id="markdown-raw" className={visibleLineNumbers ? "" : "hide"}>
      <textarea
        ref={textareaRef}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        spellCheck={false}
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
        {textareaContent
          .split("\n")
          .map((line) => (line === "" ? "\u00A0" : line))
          .join("\n")}
      </ShikiHighlighter>
    </div>
  );
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any;
}

const CodeHighlight = ({ inline, className, children }: CodeProps) => {
  const match = className?.match(/language-(\w+)/);
  const language = match ? match[1] : undefined;
  let code = "";
  if (Array.isArray(children)) {
    code = children.map(String).join("").trim();
  } else if (typeof children === "string" || typeof children === "number") {
    code = String(children).trim();
  }

  return !inline ? (
    <ShikiHighlighter language={language || "markdown"} theme={myTheme} addDefaultStyles={false} showLanguage={false}>
      {code}
    </ShikiHighlighter>
  ) : (
    <code className={className}>{code}</code>
  );
};
