<template>
  <div class="now-playing">
    <div class="container my-5">
      <h2 class="title text-white">Now Playing</h2>
      <hr>
    </div>
    <div class="movie-cards container d-flex flex-wrap">
      <appMovieCards v-for="movie in movies" :key="movie.id" :movie="movie"></appMovieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCards from "../components/MovieCards";
export default {
  name: "NowPlaying",
  components: {
    appMovieCards: MovieCards,
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" }),
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "now_playing");
  },
};
</script>

<style scoped>
.title{
  margin-top:125px;
}
</style>