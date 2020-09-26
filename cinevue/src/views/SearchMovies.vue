<template>
  <div class="search">
    <div class="container my-3 pr-4">
      <div class="search-component mb-4">
        <Search></Search>
      </div>
      <h2 class="title text-white">Searched Movies</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap mt-5">
      <MovieCards
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></MovieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "../components/Search";
import MovieCards from "../components/MovieCards";
export default {
  name: "SearchMovies",
  components: {
    Search,
    MovieCards,
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" }),
  },
};
</script>

<style>
.search-component {
  margin-top: 150px;
}
@media (max-width: 575.98px) {
  .movie-list {
    justify-content: center;
  }
  .title {
    text-align: center;
  }
}
</style>