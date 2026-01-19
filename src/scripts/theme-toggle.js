(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  if (stored === "light" || stored === "dark") {
    apply(stored);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(prefersDark ? "dark" : "light");
  }

  window.toggleTheme = function () {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  };
})();
