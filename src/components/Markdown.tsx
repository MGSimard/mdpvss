import { useState, useRef } from "react";
import { useSettingsStore } from "@/store/useSettingsStore";
import ShikiHighlighter, { rehypeInlineCodeProperty } from "react-shiki";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRemoveComments from "remark-remove-comments";
import { darkTheme, lightTheme } from "@/utils/2077";
import { useTheme } from "next-themes";

export function Markdown() {
  const { previewRenderedMarkdown, visibleLineNumbers } = useSettingsStore();
  const { theme } = useTheme();
  const [textareaContent, setTextareaContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <div id="markdown-rendered" className={previewRenderedMarkdown ? "" : "hide"}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkRemoveComments]}
          rehypePlugins={[rehypeInlineCodeProperty]}
          components={{
            code: CodeHighlight,
          }}>
          {textareaContent}
        </ReactMarkdown>
      </div>
      <div id="markdown-raw" className={previewRenderedMarkdown ? "hide" : ""}>
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
          className={`markdown-raw-highlighted${visibleLineNumbers ? "" : " hide-numbers"}`}
          language="markdown"
          theme={theme === "dark" ? darkTheme : lightTheme}
          addDefaultStyles={false}
          showLanguage={false}>
          {textareaContent
            .split("\n")
            .map((line) => (line === "" ? "\u00A0" : line))
            .join("\n")}
        </ShikiHighlighter>
      </div>
    </>
  );
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any;
}

const CodeHighlight = ({ inline, className, children }: CodeProps) => {
  const { theme } = useTheme();
  const match = className?.match(/language-(\w+)/);
  const language = match ? match[1] : undefined;
  let code = "";
  if (Array.isArray(children)) {
    code = children.map(String).join("").trim();
  } else if (typeof children === "string" || typeof children === "number") {
    code = String(children).trim();
  }

  return !inline ? (
    <ShikiHighlighter
      language={language || "markdown"}
      theme={theme === "dark" ? darkTheme : lightTheme}
      addDefaultStyles={false}
      showLanguage={false}>
      {code}
    </ShikiHighlighter>
  ) : (
    <code className={className}>{code}</code>
  );
};
