import { createStore } from "vuex";
import { changeTheme } from "@/store/changeTheme";

const store = createStore({
  modules: {
    changeTheme,
  },
});
export default store;
