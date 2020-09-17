<template>
  <div>
    <img :src="`${API.IMAGE_URL}${movie.poster_path}`" class="movie-image" :alt="`${movie.title}`" />
  </div>
</template>

<script>
import API from "../api/api";
export default {
  name: "MovieImages",
  data() {
    return {
      API,
    };
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.movie-image {
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
</style>