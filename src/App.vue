<template>
  <div id="app">
    <Navbar />
    <router-view class="container text-center mt-5" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "~bootstrap";
</style>
