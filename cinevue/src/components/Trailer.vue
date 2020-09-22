<template>
  <div class="trailer container d-flex flex-column pb-4">
    <div class="row">
      <a @click="closeTrailer" class="close-btn text-white">
        <svg class="icon icon-cancel-circle">
          <use xlink:href="#icon-cancel-circle" />
        </svg>
        <symbol id="icon-cancel-circle" viewBox="0 0 32 32">
          <path
            d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
          ></path>
          <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
        </symbol>
      </a>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="`${API.TRAILER_URL}${movie.videos.results[0].key}`"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import API from "../api/api";
export default {
  name: "Trailer",
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
  methods: {
    closeTrailer() {
      this.$store.dispatch("movies/SET_TRAILER_STATUS", false);
    },
  },
};
</script>

<style scoped>
.trailer {
  position: absolute;
  width: 90%;
  top: 2%;
  left: 4%;
  background-color: black;
  border-radius: 8px;
}
.icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.close-btn:hover {
  opacity: 0.9;
  cursor: pointer;
}
@media (max-width: 575.98px) {
  .trailer {
    top: 50%;
  }
}
</style>