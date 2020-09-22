<template>
  <div class="search">
    <div class="container my-3 pr-4">
        <div class="mt-5 mb-4">
        <searchBar></searchBar>
        </div>
        <h2 class="title">Searched Movies</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap">
      <movieCards v-for="movie in movies" :key="movie.id" :movie="movie"></movieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from '../components/Search'
import MovieCards from '../components/MovieCards'
export default {
    name: 'SearchMovies',
    components: {
        searchBar: Search,
        movieCards: MovieCards,
    },
    computed: {
        ...mapGetters({ movies: 'movies/movies'})
    }
};
</script>

<style>
@media (max-width: 575.98px) {
  .movie-list {
    justify-content: center;
  }
  .title {
    text-align: center;
  }
}
</style>