import axios from 'axios';


export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    snackbar: {
      active: false,
      text: "",
      color: "",
    },  // Stores global snackbar properties
  }),
  actions: {
    updateMessage(msg) {
      // Close eventually open snackbar
      this.snackbar.active = false;
      // Open new snackbar
      setTimeout(() => {
        this.snackbar.text = msg.text;
        this.snackbar.color = msg.color;
        this.snackbar.active = true;
      }, 250);
      return;
    },
  },
  getters: {
  },
});
