<template>
  <div>
    <div class="header">
      <div class="header-content container py-5 pr-5">
        <h1 class="header-title font-weight-bold text-white">Welcome.</h1>
        <h3
          class="header-description font-weight-bold my-4 mx-auto text-white"
        >Welcome CineVue</h3>
        <searchBar></searchBar>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from "../components/Search";
export default {
  name: "Home",
  components: {
    searchBar: Search,
  },
  computed: {
      ...mapGetters({ movies: 'movies/movies' })
  },
  created(){
      this.$store.dispatch('movies/set_movie','popular');
  }
};
</script>

<style>
</style>