const user = {
  namespaced: true,
  state: {
    user: [],
    activeUser: null,
    isSignIn: false,
  },
  mutations: {
    ADD_USER(state, payload) {
      payload.favorites = [];
      state.user.push(payload);
    },
    SET_ACTIVE_USER(state, payload) {
      const index = state.user.findIndex(
        (object) =>
          object.username === payload.user.username &&
          object.password === payload.user.password
      );
      if (index !== -1) {
        state.activeUser = state.user[index];
        state.isSignIn = payload.status;
      }
    },
    SIGN_OUT(state, payload) {
      state.activeUser = null;
      state.isSignIn = payload;
    },
    ADD_FAVORITES(state, payload) {
      const index = state.user.findIndex(
        (object) => object.id === state.activeUser.id
      );
      state.user[index].favorites.push(payload);
    },
    REMOVE_FAVORITES(state, payload) {
      const index = state.user.findIndex(
        (object) => object.id === state.activeUser.id
      );
      const movieIndex = state.user[index].favorites.findIndex(
        (movie) => movie.id === payload.id
      );
      state.user[index].favorites.splice(movieIndex, 1);
    },
  },
  actions: {
    ADD_USER({ commit }, payload) {
      commit("ADD_USER", payload);
    },
    SET_ACTIVE_USER({ commit }, payload) {
      commit("SET_ACTIVE_USER", payload);
    },
    SIGN_OUT({ commit }, payload) {
      commit("SIGN_OUT", payload);
    },
    ADD_FAVORITES({ commit }, payload) {
      commit("ADD_FAVORITES", payload);
    },
    REMOVE_FAVORITES({ commit }, payload) {
      commit("REMOVE_FAVORITES", payload);
    },
  },
  getters: {
    activeUser: (state) => state.activeUser,
    isSignIn: (state) => state.isSignIn,
    favorites: (state) => {
      const index = state.user.findIndex(
        (object) => object.id === state.activeUser.id
      );

      return state.user[index].favorites;
    },
  },
};

export default user;
