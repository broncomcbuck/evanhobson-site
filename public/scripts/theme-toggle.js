(function () {
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  // initial theme: stored > system > light
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    apply(stored);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(prefersDark ? "dark" : "light");
  }

  // expose toggle globally
  window.toggleTheme = function () {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  };
})();
