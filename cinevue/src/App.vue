<template>
  <div id="app">
    <appNavbar></appNavbar>
    <router-view name="navbar-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <appFooter></appFooter>
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
  margin: 0;
  padding: 0;
}

body {
  background-image: url("https://i.pinimg.com/originals/0b/97/b2/0b97b293ae7b54d6adc4b9332de9e484.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: relative;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>