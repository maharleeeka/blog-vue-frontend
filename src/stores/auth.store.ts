import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: "",
    isAuthenticated: false,
  }),
  actions: {
    clear() {
      this.accessToken = "";
      this.isAuthenticated = false;
    },
    setAccessToken(token: string) {
      this.accessToken = token;
      this.isAuthenticated = true;
    },
  },
});
