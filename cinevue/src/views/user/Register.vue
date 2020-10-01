<template>
  <div class="container mt-4 col-6 p-3">
    <h2 class="mb-5 text-center text-white">Register</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onRegister)">
      <div class="form-group">
        <label class="text-white">E-Mail Address:</label>
        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter e-mail address"
          v-model="user.email"
        />
         <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <label class="text-white">Username:</label>
        <ValidationProvider name="username" rules="required" v-slot="{ errors }">
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter username"
          v-model="user.username"
        />
        <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <label class="text-white">Password:</label>
        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
          v-model="user.password"
        />
        <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <button
        type="submit"
        class="btn font-weight-bold text-white bg-danger btn-block"
      >
        Register
      </button>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Register",
  data() {
    return {
      user: {
        id: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    generateId() {
      this.user.id = uuidv4();
    },
    onRegister() {
      this.generateId();
      this.$store.dispatch("user/ADD_USER", this.user).then(() => {
        this.$router.push("/sign-in");
      });
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 340px;
}
</style>