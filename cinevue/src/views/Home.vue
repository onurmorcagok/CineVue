<template>
  <div>
    <searchBar></searchBar>
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