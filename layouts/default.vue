<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt class="main"/>
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
.main {
  padding-top: 5rem;
}
@media (max-width: 768px) {
  .main {
    padding-top: 3.6rem;
  }
}
</style>

