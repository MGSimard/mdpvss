import { useTheme } from "next-themes";
import { IconBolt } from "@/components/Icons";

export function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="setting"
      aria-label="Dark mode"
      role="switch"
      aria-checked={theme === "dark"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <span>
        <IconBolt aria-hidden="true" /> DARK
      </span>
    </button>
  );
}
