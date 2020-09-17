<template>
<div id="app" class="container col-md-12">
  <body>
    <appNavbar></appNavbar>
    <router-view></router-view>
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
#app {
  box-sizing: border-box;
  margin:0;
  padding: 0;
}
body {
  background-image: url("https://i.pinimg.com/originals/0b/97/b2/0b97b293ae7b54d6adc4b9332de9e484.jpg");
  background-repeat: no-repeat;
  background-size: cover; 
}
</style>