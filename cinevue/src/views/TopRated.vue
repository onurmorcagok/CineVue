<template>
  <div class="top-rated">
    <div class="container my-4">
      <h2 class="title">Top Rated</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap">
      <appMovieCards v-for="movie in movies" :key="movie.id" :movie="movie"></appMovieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCards from "../components/MovieCards";
export default {
  name: "TopRated",
  components: {
    appMovieCards: MovieCards,
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" }),
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "top-rated");
  },
};
</script>

<style scoped>
</style>