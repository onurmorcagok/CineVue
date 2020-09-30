<template>
  <div class="favorite-movies">
    <div class="container my-4">
      <h2 class="title">My Favorite Movies</h2>
    </div>
    <div v-show="favorites.length == 0" class="container my-5">
      <p>There are no movies in your favorites list.</p>
    </div>
    <div class="movie-list container my-5 d-flex flex-wrap">
      <appMovieCards
        v-for="movie in favorites"
        :key="movie.id"
        :movie="movie"
      ></appMovieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCards from "../components/MovieCards";
export default {
  name: "FavoriteMovies",
  components: {
    appMovieCards: MovieCards,
  },
  computed: {
    ...mapGetters({ favorites: "user/favorites " }),
  },
};
</script>

<style scoped>
</style>