<template>
  <div>
    <a class="fav text-white" @click="addFavorites(movie)">
      <svg class="icon icon-bookmark">
        <use xlink:href="#icon-bookmark" />
      </svg>
      <symbol id="icon-bookmark" viewBox="0 0 32 32">
        <path d="M6 0v32l10-10 10 10v-32z"></path>
      </symbol>
      {{isInWatchlist().length > 0 ? 'Remove from watchlist' : 'Add to watchlist'}}
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
        this.$store.dispatch("users/REMOVE_FAVORITES", selectedMovie);
      } else {
        this.$store.dispatch("users/ADD_FAVORITES", selectedMovie);
      }
    },
    isInWatchlist() {
      const item = this.favorites.filter((obj) => obj.id === this.movie.id);
      return item;
    },
  },
  computed: {
    ...mapGetters({
      favorites: "users/favorites",
    }),
    bookmarkStatus() {
      const movie = this.favorites.filter(
        (obj) => obj.id === this.selectedMovie.id
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