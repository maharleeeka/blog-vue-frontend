import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    email: "",
  }),
  actions: {
    clear() {
      this.name = "";
      this.email = "";
    },
    setUserData({ name, email }: { name: string; email: string }) {
      this.name = name;
      this.email = email;
    },
  },
});
