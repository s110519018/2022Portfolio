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
button, input[type="submit"], input[type="reset"]
	background: none
	color: inherit
	border: none
	padding: 0
	font: inherit
	cursor: pointer
	outline: inherit
p
  margin: 0
.app
  min-height: calc(100vh - 60px)
  margin-top: 60px
  background-color: $color_white
  padding-bottom: 60px
</style>
