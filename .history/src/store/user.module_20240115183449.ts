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

export const useUserData = defineStore("user", {
  state: (): UserState => ({
    userData: null,
  }),
  actions: {
    async loginUser(
      login: LoginForm["login"],
      password: LoginForm["password"]
    ) {
      try {
        this.userData = await api.post({ login, password });
        showTooltip(`Welcome ${this.userData?.name}!`);
      } catch (error) {
        showTooltip(error);
        return error;
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.userData,
    userData: (state) => state.userData,
  },
});
