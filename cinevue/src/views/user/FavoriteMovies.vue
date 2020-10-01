<template>
  <div class="favorite-movies">
    <div class="container my-4">
      <h2 class="title text-white text-center">My Favorite Movies</h2>
    </div>
    <div v-show="favorites.length == 0" class="container my-5">
      <p class="text-danger">There are no movies in your favorites list.</p>
    </div>
    <div class="movie-list container my-5 d-flex flex-wrap">
      <MovieCards
        v-for="movie in favorites"
        :key="movie.id"
        :movie="movie"
      ></MovieCards>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCards from "../../components/MovieCards";
export default {
  name: "FavoriteMovies",
  components: {
    MovieCards,
  },
  computed: {
    ...mapGetters({ favorites: "user/favorites" }),
  },
};
</script>

<style scoped>

p {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}
.favorite-movies {
  margin-bottom: 573px;
}

@media (max-width: 575.98px) {
  .movie-list {
    margin-left: 4.5em;
  }
  .title {
    text-align: center;
  }
}

</style>