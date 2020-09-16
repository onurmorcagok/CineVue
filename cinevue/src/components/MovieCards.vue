<template>
  <div class="movie-card card mr-4 mb-4 justify-content-between">
    <router-link :to="{name: 'MovieDetail', params: { id: movie.id}}" class="card-link">
      <appmovieImages :movie="movie"></appmovieImages>
      <div class="card-body">
        <div class="rank-container">
          <span class="rank">{{movie.vote_average}}</span>
        </div>
        <h6 class="card-title">{{movie.title}}</h6>
        <small class="card-average">{{movie.release_date}}</small>
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
import MovieImages from '../components/MovieImages'
export default {
  name: "MovieCards",
  components: {
      appmovieImages: MovieImages,
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
      removeMovie(){
          this.$store.dispatch('user/REMOVE_FAVORITES', this.movie);
      }
  }
};
</script>

<style>
</style>