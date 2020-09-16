import httpService from "../../utils/axios";
import API from "../../api/api";

const movies = {
  namespaced: true,
  state: {
    movies: [],
    cast: [],
    movieDetail: {},
    trailerShowing: false,
  },
  mutations: {
    SET_MOVIE(state, payload) {
      state.movies = payload.filter((object) => object.poster_path !== null);
    },
    SET_CAST(state, payload) {
      state.cast = payload.filter((object) => object.profile_path !== null);
    },
    SET_MOVIE_DETAIL(state,payload){
        state.movieDetail = payload;
    },
    SET_TRAILER(state,payload){
        state.trailerShowing = payload;
    }
  },
  actions: {
      SET_MOVIE({ commit },payload){
          httpService
          .get(`${API.MOVIE}${payload}`, { params: { api_key: API.API_KEY } })
          .then((response) => {
            commit("SET_MOVIE", response.data.results);
          });
      }
  },
  getters: {
    movies: (state) => state.movies,
    cast: (state) => state.cast,
    movieDetail: (state) => state.movieDetail,
    trailerShowing: (state) => state.trailerShowing,
  },
};

export default movies;