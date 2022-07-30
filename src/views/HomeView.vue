<template lang="pug">
Fragment
  .top
    .Box
      .imgBox
      .wordBox
        .title 李淯萱 Yu Xuan Lee
        .content I’m a Frontend Developer
        .school 國立臺北教育大學 玩具與遊戲設計碩士班
        .contact
    .wave
      img(src="../assets/img/Wave.svg", alt="")
  .about
  .works
    RecentWorksBox(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import RecentWorksBox from "@/components/RecentWorksBox.vue";

export default {
  name: "HomeView",
  components: {
    RecentWorksBox,
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
.top
  position: relative
  background-color: $color-background
  padding-top: 116px
  min-height: 640px
  .Box
    display: flex
    justify-content: center
    position: absolute
    z-index: 1
    gap: 124px
    width: 100%
    .imgBox
      position: relative
      width: 400px
      height: 400px
      border-radius: 100%
      background-image: url(../assets/img/main_photo.jpg)
      background-size: cover
      border: 8px solid #fff
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      &:before
        content: ""
        position: absolute
        z-index: -1
        width: 400px
        height: 400px
        border-radius: 100%
        background-image: url(../assets/img/img_bg.svg)
        background-size: cover
    .wordBox
      margin-top: 28px
      color: $color_blue
      @include H2_Bold
      .title
        @include H1_Bold
  .wave
    position: absolute
    bottom: 0
    z-index: 0
    img
      width: 100vw
</style>
