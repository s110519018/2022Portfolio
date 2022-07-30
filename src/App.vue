<template lang="pug">
Fragment
  NavBar
  .app
    router-view
  FooterBar
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style lang="sass">
@import "./assets/sass/global.sass";
*
  font-family: 'Concert One','微軟正黑體'
html,body
  margin: 0 !important
  padding: 0 !important
html
  overflow-x: hidden
.app
  min-height: calc(100vh - 60px)
  margin-top: 60px
  background-color: $color_white
</style>
