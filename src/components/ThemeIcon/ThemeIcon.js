const localStorageKey = "theme";
const darkThemeClass = "dark";
const theme = (() => {
  const hasTheme =
    typeof localStorage !== "undefined" &&
    localStorage.getItem(localStorageKey);
  const isPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (hasTheme) {
    return localStorage.getItem(localStorageKey);
  }
  if (isPrefersDark) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.classList.remove(darkThemeClass);
} else {
  document.documentElement.classList.add(darkThemeClass);
}

window.localStorage.setItem(localStorageKey, theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle(darkThemeClass);
  const isDark = element.classList.contains(darkThemeClass);
  const theme = isDark ? "dark" : "light";
  localStorage.setItem(localStorageKey, theme);
};

document
  .getElementById("themeToggle")
  .addEventListener("click", handleToggleClick);
