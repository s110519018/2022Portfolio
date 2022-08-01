<template lang="pug">
button.buttonBox(@click="changePage(this.path)") {{ content }}
</template>

<script>
import router from "../router/index.js";
export default {
  name: "ButtonBox",
  props: {
    content: String,
    path: String,
  },
  methods: {
    changePage(path) {
      // Do your stuff
      router.push("/" + path);
    },
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.buttonBox
  padding: 10px 24px
  background-color: $color_yellow
  color: $color_blue
  @include H2_Bold
  text-align: center
  border-radius: 32px
  @include mobile
    @include P_Bold
</style>
