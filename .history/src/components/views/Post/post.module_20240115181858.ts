import { defineStore } from "pinia";
import { mande } from "mande";

const api = mande("/api/users");

export const useUsers = defineStore("users", {
  state: () => ({
    userData: null,
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password });
        showTooltip(`Welcome back ${this.userData.name}!`);
      } catch (error) {
        showTooltip(error);
        return error;
      }
    },
  },
});
function showTooltip(error: unknown) {
  throw new Error("Function not implemented.");
}
