import { useTheme } from "next-themes";
import { IconBolt, IconBoltSlash } from "@/components/Icons";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="setting"
      aria-label={`Toggle theme (current: ${theme})`}
      role="switch"
      aria-checked={theme === "light"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <span>
        {theme === "light" ? <IconBolt aria-hidden="true" /> : <IconBoltSlash aria-hidden="true" />}
        THEME
      </span>
    </button>
  );
}
