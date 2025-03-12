export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: "",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      this.updateThemeInDOM(this.theme);
    },

    setTheme(newTheme) {
      this.theme = newTheme;
      this.updateThemeInDOM(newTheme);
    },

    updateThemeInDOM(newTheme) {
      document.querySelector("html").setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    },

    initializeTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        // Use the saved theme if it exists
        this.theme = savedTheme;
      } else {
        // Fallback to system preference if no saved theme
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.theme = prefersDark ? "dark" : "light";
      }
      // this.updateThemeInDOM(this.theme);
    },
  },

  getters: {
    currentTheme: (state) => state.theme,
  },
});
