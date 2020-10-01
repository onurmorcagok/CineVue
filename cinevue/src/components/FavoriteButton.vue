<template>
  <div class="favorite-button">
    <a class="fav text-white" @click="addFavorites(movie)">
      <span>{{
        isInWatchlist().length > 0
          ? "Remove from favorites"
          : "Add to favorites"
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
      let message = "";
      if (this.isInWatchlist().length > 0) {
        if(confirm(`Do you want to remove the ${selectedMovie.original_title} from favorites ?`)) {
          message = `${selectedMovie.original_title} has been removed from favorites.`;
          this.$store.dispatch("user/REMOVE_FAVORITES", selectedMovie);
        }
      } else {
        message = `${selectedMovie.original_title} has been added from favorites.`;
        this.$store.dispatch("user/ADD_FAVORITES", selectedMovie);
      }

      this.$bvToast.toast(message, {
        title: "ALERT",
        autoHideDelay: 2000,
      });
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