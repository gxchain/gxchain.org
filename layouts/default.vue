<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar
  }
};
</script>
<style>
body {
  padding-top: 3.6rem;
}
</style>

