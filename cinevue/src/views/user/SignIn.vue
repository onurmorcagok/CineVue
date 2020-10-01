<template>
  <div class="container mt-4 col-6 p-3">
    <h2 class="mb-5 text-center text-white">Sign In</h2>
    <div v-if="alert" class="mb-3 bg-danger p-2 text-center">
      <p class="text-white mb-0">{{ alert }}</p>
    </div>
    <form @submit.prevent="onSignIn">
      <div class="form-group">
        <label class="text-white">Username:</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label class="text-white">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <button
        type="submit"
        class="btn font-weight-bold text-white bg-danger btn-block"
      >
        Sign In
      </button>
      <div class="mt-4 text-center">
        <router-link to="/register">
          <label class="text-white">Not an User?</label>
          <b class="text-white"> Create account</b>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("user");
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      alert: "",
    };
  },
  computed: {
    ...mapGetters({ activeUser: "activeUser" }),
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("user/SET_ACTIVE_USER", {
        user: this.user,
        status: true,
      });
      if (this.activeUser !== null) {
        this.$router.push("/");
      } else {
        this.alert = "User not found. Please check the sign in information";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 370px;
}
</style>