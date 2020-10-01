<template>
  <div class="movie-detail">
    <div
      class="backdrop text-white"
      :style="`background-image: url(${API.IMAGE_URL}${movieDetail.backdrop_path});
           background-repeat:no-repeat;
           background-size:cover;
           background-position:center;`"
    >
      <div class="body">
        <div class="body-container d-flex py-4">
          <div class="body-poster mr-5">
            <MovieImages :movie="movieDetail"></MovieImages>
          </div>
          <div class="body-content">
            <h2 class="font-weight-bold">{{ movieDetail.title }}</h2>
            <br />
            <div class="rank-container d-flex align-items-center">
              <div class="d-flex align-items-center">
                <span class="rank">{{ movieDetail.vote_average }}</span>
              </div>
              <div class="ml-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                  class="img-size"
                />
              </div>
              <small class="font-weight-bold ml-1">Rank</small>
              <FavoriteButton
                :movie="movieDetail"
                class="ml-4"
                v-if="isSignIn"
              ></FavoriteButton>
              <div class="buttons ml-1 d-flex align-items-center">
              <a class="play ml-4 text-white" @click="showTrailer">
                <i class="fas fa-play text-success"></i>
                Trailer
              </a>
            </div>
            </div>
            <div class="list d-flex mt-3 ml-0">
              <li class="list-item mr-4">
                <small class="mr-2"
                  >Release Date: {{ movieDetail.release_date }}</small
                >
              </li>
              <li class="list-item mr-4">
                <small>Genres: </small>
                <small
                  class="card-text mr-2"
                  v-for="(genre, index) in movieDetail.genres"
                  :key="index"
                  >{{ genre.name }}</small
                >
              </li>
              <li class="list-item">
                <small>Duration: {{ movieDetail.runtime }} minute</small>
              </li>
            </div>
            <div class="select d-flex align-items-center mt-4"></div>
            <h4 class="tagline font-weight-light font-italic">
              {{ movieDetail.tagline }}
            </h4>
            <h4 class="summary font-weight-bold mt-4">Summary</h4>
            <p class="card-text">{{ movieDetail.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cast-container mt-5">
      <h3 class="cast-title text-center text-white my-3">Cast</h3>
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
  methods: {
    showTrailer() {
      this.$store.dispatch("movies/SET_TRAILER_STATUS", true);
    },
  },
  components: {
    MovieImages,
    FavoriteButton,
    Cast,
    Trailer,
  },
  computed: {
    ...mapGetters({
      movieDetail: "movies/movieDetail",
      cast: "movies/cast",
      isSignIn: "user/isSignIn",
      trailerShowing: "movies/trailerShowing",
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
  min-width: 13rem;
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

.img-size {
  width: 50px;
}

.list {
  margin-left: 20px;
}

a {
  text-decoration: none;
}

@media (max-width: 575.98px) {
  .body {
    padding-right: 0;
    padding-left: 0;
  }
  .body-poster {
    margin-left: 5em;
  }
  .body-container {
    flex-direction: column;
  }
  .body-content {
    min-width: 100%;
    margin: 2em 0;
  }
  .rank-container {
    margin-left: 3em;
  }
  h2 {
    font-size: 1rem;
    margin-left: 5em;
  }
  h3 {
    margin-left: 0em;
  }
  h5,
  p,
  a {
    font-size: 0.8rem;
  }
  .tagline {
    font-size: 0.7em;
    margin-left: 7.5em;
  }
  .list {
    flex-direction: column;
    margin-left: 5em;
  }
  .list-item {
    margin-left: 4em;
  }
  .summary {
    margin-left: 5.5em;
  }
  .card-text {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .cast-list {
    justify-content: center;
  }
  .buttons {
    margin-left:3em;
  }
}
</style>