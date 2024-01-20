import { defineStore } from "pinia";
import { mande } from "mande";

const api = mande("/api/users");
function showTooltip(error: unknown) {
  throw new Error("Function not implemented.");
}
interface LoginForm {
  login: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
  createdAt: string;
}

interface UserState {
  userData: null | UserData;
}

export const useUsers = defineStore("users", {
  state: () => ({
    userData: null,
  }),

  actions: {
    async registerUser(
      login: LoginForm["login"],
      password: LoginForm["password"]
    ) {
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
