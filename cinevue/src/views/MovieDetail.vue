<template>
  <div class="movie-detail mt-5">
    <div
      class="backdrop text-white"
      :style="`background-image: url(${API.IMAGE_URL}${movieDetail.backdrop_path});
           background-repeat:no-repeat;
           background-size:cover;
           background-position:center center;`"
    >
      <div class="body">
        <div class="body-container d-flex py-4">
          <div class="body-poster mr-5">
            <MovieImages :movie="movieDetail"></MovieImages>
          </div>
          <div class="body-content">
            <h2 class="font-weight-bold ml-0">{{ movieDetail.title }}</h2>

            <div class="select d-flex align-items-center mt-4">
              <div class="rank-container d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <span class="rank">{{ movieDetail.vote_average }}</span>
                </div>
                <div class="ml-4">
                  <small class="font-weight-bold">IMDb Rank</small>
                </div>
              </div>
              <div class="buttons ml-5 d-flex align-items-center">
                <!-- <a @click="showTrailer" class="play ml-4 text-white">
                  <svg class="icon icon-play3">
                    <use xlink:href="#icon-play3" />
                  </svg>
                  <symbol id="icon-play3" viewBox="0 0 32 32">
                    <path d="M6 4l20 12-20 12z"></path> </symbol
                  >Play Trailer
                </a> -->
                <div class="list d-flex mt-3">
                  <ul class="ml-0" type="none">
                    <li class="ml-0">
                      <small class="ml-0 mr-4"
                        >Release Date: {{ movieDetail.release_date }}</small
                      >
                    </li>
                    <li class="ml-0 mr-4">
                      <small
                        class="card-text- mr-2"
                        v-for="(genre, index) in movieDetail.genres"
                        :key="index"
                        >Genres: {{ genre.name }}</small
                      >
                    </li>
                    <li>
                      <small>Duration: {{ movieDetail.runtime }} minute</small>
                    </li>
                  </ul>
                </div>
                <FavoriteButton
                  :movie="movieDetail"
                  class="ml-4"
                  v-if="isLogin"
                ></FavoriteButton>
              </div>
            </div>
            <h4 class="font-weight-light font-italic mt-4">
              {{ movieDetail.tagline }}
            </h4>
            <h4 class="font-weight-bold mt-4">Summary</h4>
            <p class="card-text">{{ movieDetail.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cast-container mt-5">
      <h2 class="cast-title text-center ml-0">Cast</h2>
      <div class="cast-list d-flex flex-wrap mt-3 justify-content-center">
        <Cast v-for="actor in cast" :key="actor.id" :actor="actor"></Cast>
      </div>
    </div>
    <Trailer :movie="movieDetail" v-if="trailerShowing"></Trailer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import API from "../api/api";
import MovieImages from "../components/MovieImages";
import FavoriteButton from "../components/FavoriteButton";
import Cast from "../components/Cast";
import Trailer from "../components/Trailer";
export default {
  name: "MovieDetail",
  data() {
    return {
      API,
    };
  },
  components: {
    MovieImages,
    FavoriteButton,
    Cast,
    Trailer,
  },
  methods: {
    showTrailer() {
      this.$store.dispatch("movies/CHANGE_TRAILER_STATUS", true);
    },
  },
  computed: {
    ...mapGetters({
      movieDetail: "movies/movieDetail",
      cast: "movies/cast",
      trailerShowing: "movies/trailerShowing",
      isLogin: "user/isLogin",
    }),
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE_DETAIL", this.$route.params.id);
    this.$store.dispatch("movies/SET_CAST", this.$route.params.id);
  },
};
</script>

<style scoped>
.body {
  background-color: #000;
  opacity: 0.9;
  padding: 3rem;
}

.body-poster {
  max-width: 13rem;
  min-width: 32rem;
}

.rank-container {
  background-color: #000;
  border: 2px solid #fff;
  color: rgb(255, 193, 7);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
  padding-left: 10px;
}
.play:hover {
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

li {
  display: inline-block;
}

li:hover {
  color: white;
}

@media (max-width: 575.98px) {
  .body {
    padding-right: 0;
    padding-left: 0;
  }
  .body-container {
    flex-direction: column;
  }
  .body-content {
    min-width: 100%;
    margin: 2em 0;
  }
  h2 {
    font-size: 1rem;
    margin-left: 0px;
  }
  h5,
  p,
  a {
    font-size: 0.8rem;
  }
  .list {
    flex-direction: column;
  }
  .cast-list {
    justify-content: center;
  }
}
</style>