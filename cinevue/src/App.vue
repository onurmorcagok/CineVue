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
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>