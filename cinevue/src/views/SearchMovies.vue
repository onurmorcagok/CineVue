<template>
  <div class="search">
    <div class="container my-3 pr-4">
        <div class="mt-5 mb-4">
        <searchBar></searchBar>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from '../components/Search'
export default {
    name: 'SearchMovies',
    components: {
        searchBar: Search,
    },
    computed: {
        ...mapGetters({ movies: 'movies/movies'})
    }
};
</script>

<style>
</style>