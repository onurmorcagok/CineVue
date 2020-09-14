<template>
  <div>
    <appNavbar></appNavbar>
    <appFooter></appFooter>
  </div>

</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
  export default {
    name: 'App',
    components: {
      appNavbar: Navbar,
      appFooter: Footer,
    }
  }
</script>

<style>

</style>