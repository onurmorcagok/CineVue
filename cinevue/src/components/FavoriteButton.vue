<template>
  <div class="favorite-button">
    <a class="fav text-white" @click="addFavorites(movie)">
      <span>{{
        isInWatchlist().length > 0
          ? "Remove from watchlist"
          : "Add to watchlist"
      }}</span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FavoriteButton",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addFavorites(selectedMovie) {
      if (this.isInWatchlist().length > 0) {
        this.$store.dispatch("user/REMOVE_FAVORITES", selectedMovie);
      } else {
        this.$store.dispatch("user/ADD_FAVORITES", selectedMovie);
      }
    },
    isInWatchlist() {
      const item = this.favorites.filter(
        (object) => object.id === this.movie.id
      );
      return item;
    },
  },
  computed: {
    ...mapGetters({
      favorites: "user/favorites",
    }),
    bookmarkStatus() {
      const movie = this.favorites.filter(
        (object) => object.id === this.selectedMovie.id
      );
      if (movie.length > 0) {
        return movie;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>

a {
  text-decoration: none;
}

.fav:hover {
  opacity: 0.9;
  cursor: pointer;
}
.icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
@media (max-width: 575.98px) {
  a {
    font-size: 0.8rem;
  }
}
</style>