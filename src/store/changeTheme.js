export const changeTheme = {
  state: () => ({
    theme: "dark-mode",
  }),
  getters: {},
  mutations: {
    changeTheme(state) {
      if (state.theme === "dark-mode") {
        state.theme = "light-mode";
      } else {
        state.theme = "dark-mode";
      }
    },
  },
  actions: {},
};
