<template>
  <div class="home-page">
    <div class="header">
      <div class="header-content container mt-5 py-5 pr-5">
        <h1 class="header-title font-weight-bold mt-5 text-white">Welcome CineVue</h1>
        <h4 class="header-subtitle font-weight-bold mt-3 text-white">Search the movie you want, add it to your watch list if you wish.</h4>  
        <searchBar></searchBar> <!-- Search Component -->
      </div>
    </div>
    <div class="container mb-5">
      <h2 class="title font-weight-bold text-white">Popular Movies</h2>
      <hr>
    </div>
    <div class="movie-cards container d-flex flex-wrap">
      <movieCards v-for="movie in movies" :key="movie.id" :movie="movie"></movieCards> <!-- Movie Cards -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "../components/Search";
import MovieCards from "../components/MovieCards";
export default {
  name: "Home",
  components: {
    searchBar: Search,
    movieCards: MovieCards,
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" }),
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "popular");
  },
};
</script>

<style>
hr {
  background-color:#fff;
  width:800px;
}

h2{
  margin-left:450px;
}
</style>