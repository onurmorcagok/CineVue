<template>
  <div>
    <nav
      class="navigation navbar navbar-expand-lg navbar-light bg-warning text-dark"
    >
      <router-link class="nav-link" to="/">
        <label class="label">CineVue</label>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-thumbs-up">
                <span>Popular</span>
              </i>
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/now-playing">
              <i class="fas fa-play-circle">
                <span>Now Playing</span>
              </i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/top-rated">
              <i class="fas fa-list-alt">
                <span>Top Rated</span>
              </i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/upcoming">
              <i class="fas fa-file-video">
                <span>Upcoming</span>
              </i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="isSignIn" class="nav-link" to="/favorite-movies">
              <i class="fas fa-star">
                <span>My Favorites</span>
              </i>
            </router-link>
          </li>
        </ul>
        <div class="sign-in my-2 my-lg-0 mx-lg-5 mr-5">
          <button
            class="btn btn-danger my-2 my-sm-0 text-white"
            type="button"
            @click="signHandler"
          >
            {{ isSignIn ? "SIGN OUT" : "SIGN IN" }}
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      status: "SIGN IN",
    };
  },
  methods: {
    signHandler() {
      if (this.isSignIn) {
        if (confirm("Are you sure you want to sign out?")) {
          this.$store.dispatch("user/SIGN_OUT", false);
        }
      } else {
        this.$router.push("/sign-in");
      }
    },
  },
  computed: {
    ...mapGetters({ isSignIn: "user/isSignIn" }),
  },
};
</script>

<style>
.img {
  border-radius: 50%;
}

.label {
  margin-left: 10px;
  font-family: "Racing Sans One", cursive;
  font-size: 30px;
  color: black;
}

.icon {
  margin-right: 80px;
}

span {
  margin-left: 3px;
}

li {
  font-size: 20px;
}
li:hover {
  color: #000;
}
</style>