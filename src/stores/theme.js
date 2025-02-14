export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: "light",  // Default theme
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
      if (typeof window !== "undefined") {  // Check if we are in the browser
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      }
    },

    initializeTheme() {
      if (typeof window !== "undefined") {  // Check if we are in the browser
        const savedTheme = localStorage.getItem("theme");
        this.theme = savedTheme || "light";  // Fallback to light if no saved theme
        this.updateThemeInDOM(this.theme);
      }
    },
  },

  getters: {
    currentTheme: (state) => state.theme,
  },
});
