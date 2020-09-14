<template>
<div>
  <body>
    <appNavbar></appNavbar>
    <appFooter></appFooter>
  </body>
</div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
  },
};
</script>

<style>
body {
  background-image: url("https://i0.wp.com/harborhonolulu.org/wp-content/uploads/2019/05/movie-theater-background.jpg?ssl=1");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>