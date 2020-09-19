<template>
    <div class="movie-card card mr-4 mb-4 justify-content-between">
      <router-link :to="{name: 'MovieDetail', params: { id: movie.id }}" class="card-link">
        <appmovieImages :movie="movie"></appmovieImages>
        <div class="card-body">
          <div class="rank-container">
            <span class="rank">{{movie.vote_average}}</span>
          </div>
          <h6 class="card-title text-dark"><b>{{movie.title}}</b></h6>
          <small class="card-average text-dark"><b>Release Date:</b> {{movie.release_date}}</small>
        </div>
      </router-link>
      <button
        v-if="$route.path ==='/watchlist'"
        @click="removeMovie"
        class="btn btn-sm text-white btn-block"
      >Remove</button>
    </div>
</template>

<script>
import MovieImages from "../components/MovieImages";
export default {
  name: "MovieCards",
  components: {
    appmovieImages: MovieImages,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeMovie() {
      this.$store.dispatch("user/REMOVE_FAVORITES", this.movie);
    },
  },
};
</script>

<style scoped>
.movie-card {
  width: 12.3rem;
  border-radius: 8px;
  border: none;
  box-shadow: black;
}
.movie-card:hover {
  opacity: 0.8;
  top: -10px;
}
.card-body {
  position: relative;
}
.rank-container {
  background-color: #000;
  border: 1px solid black;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
  position: absolute;
  top: 5px;
  left: 150px;
  right: 12px;
  padding: 4px;
}
.rank {
  color: rgb(255, 193, 7);
  font-weight: bold;
  font-size: 0.8em;
  margin-right: 4px;
}
.btn {
  background-color: #000;
  border-radius: 8px;
}
.card-title {
  margin-top: -5px;
}

</style>