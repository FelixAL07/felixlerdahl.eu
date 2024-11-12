// Toggle between light and dark themes
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-theme", "dark");
});
