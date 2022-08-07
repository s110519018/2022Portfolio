<template lang="pug">
button.buttonBox(v-if="action=='router'" @click="changePage(this.path)") {{ content }}
a.buttonBox(v-if="action=='link'" :href='path' target="_blank") {{ content }}
</template>

<script>
import router from "../router/index.js";
export default {
  name: "ButtonBox",
  props: {
    content: String,
    action: String,
    path: String,
  },
  methods: {
    changePage(path) {
      router.push("/" + path);
    },
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
a.buttonBox
  text-decoration: none
  &:active,&:focus,&:hover
    color: $color_blue
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
