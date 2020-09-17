<template>
    <div class="search">
        <input
        type="text"
        class="search-box search-bar form-control p-4 my-4"
        placeholder="Search by movie title"
        v-model="searchMovie">
    </div>
</template>

<script>
import debounce from "lodash/debounce";
    export default {
        name: 'Search',
        data() {
            return {
                searchMovie: '',
            }
        },
        watch: {
            searchMovie: debounce(function(newVal){
                this.$store.dispatch("movies/search_movie", newVal);
                this.$router.push({name: 'Search', params: { name: newVal }});
            },500)
        }
    }
</script>

<style scoped>

.search-box {
  display: block;
  width: 100%;
  padding: 10px;
  color: #000;
  font-size: 20px;
  appearance: none;
  outline: none;
  background: none;
  background-color:#fff;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  border-radius:25px;
  
}
.search-box:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color:#fff;
  border-radius: 16px 0px 16px 0px;
}
</style>