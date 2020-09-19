<template>
  <div class="upcoming">
    <div class="container my-4">
      <h2 class="title">Upcoming</h2>
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
  name: "Upcoming",
  components: {
    appMovieCards: MovieCards,
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" }),
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "upcoming");
  },
};
</script>

<style scoped>
</style>