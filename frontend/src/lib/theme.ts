export type ThemeMode = "light" | "dark";

export const applyTheme = (mode: ThemeMode) => {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = mode;
  try {
    window.localStorage.setItem("theme", mode);
  } catch {
    // ignore storage errors
  }
};

