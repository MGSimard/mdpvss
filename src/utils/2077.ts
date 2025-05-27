import { Theme } from "react-shiki";

export const myTheme: Theme = {
  name: "2077",
  type: "dark",
  colors: {
    "editor.background": "none",
    "editor.foreground": "oklch(0.6565 0.2298 24.01)",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "oklch(0.4701 0.0112 285.96)",
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
      ],
      settings: {
        foreground: "oklch(0.8624 0.0066 17.29)",
      },
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: "#b392f0",
      },
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: "#85e89d",
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#f97583",
      },
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: "#f97583",
      },
    },
    {
      scope: ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      settings: {
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      settings: {
        foreground: "#9ecbff",
      },
    },
    {
      scope: "support",
      settings: {
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: "#fff",
      },
    },
    {
      scope: "variable",
      settings: {
        foreground: "oklch(0.8072 0.1498 81.8)",
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "oklch(0.8072 0.1498 81.8)",
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7",
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7",
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7",
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7",
      },
    },
    {
      scope: "carriage-return",
      settings: {
        background: "#f97583",
        /* @ts-ignore */
        content: "^M",
        fontStyle: "italic underline",
        foreground: "#24292e",
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#fdaeb7",
      },
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: "#dbedff",
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: "#dbedff",
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: "#85e89d",
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "oklch(0.8965 0.1273 200.71)",
      },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: "oklch(0.8965 0.1273 200.71)",
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "oklch(0.8314 0.2088 153.08)",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.strikethrough"],
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: "oklch(0.8072 0.1498 81.8)",
      },
    },
    {
      scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      settings: {
        foreground: "oklch(0.6565 0.2298 24.01)",
      },
    },
    {
      scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      settings: {
        foreground: "oklch(0.8314 0.2088 153.08)",
      },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        foreground: "oklch(0.7583 0.1638 59.01)",
      },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        background: "#79b8ff",
        foreground: "#2f363d",
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        fontStyle: "bold",
        foreground: "#b392f0",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "#79b8ff",
      },
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: "#d1d5da",
      },
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#fdaeb7",
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        fontStyle: "underline",
        foreground: "oklch(0.8965 0.1273 200.71)",
      },
    },
  ],
} satisfies Theme;
