<template lang="pug">
.portfolioWorksBox(:style="imageVars" @click.prevent="goDetail()")
  h1 {{ title }}
</template>

<script>
import router from "../router/index.js";
export default {
  name: "PortfolioWorksBox",
  props: {
    title: String,
    image: String,
    obj: Object,
  },
  computed: {
    imageVars() {
      return (
        "--image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(" +
        "'" +
        this.image +
        "')"
      );
    },
  },
  methods: {
    goDetail() {
      this.$store.commit("SET_WORK_DATA", this.obj);
      router.push("/portfoliodetail/" + this.obj.id);
    },
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.portfolioWorksBox
  cursor: pointer
  box-sizing: border-box
  text-align: center
  width: 100vw
  height: 100vh
  aspect-ratio: 10 / 9
  max-width: 400px
  max-height: 360px
  border-radius: 20px
  // background: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)),url('https://www.placecage.com/c/460/300')
  background: var(--image)
  background-position: center
  background-size: 100%
  color: $color_white
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transition: all 0.5s ease-in-out
  position: relative
  @include mobile
    width: calc( 100vw - 20px)
  h1
    opacity: 0.7
    transition: 0.5s
    @include H1_Bold
    word-break: break-all
    @include mobile
      @include H2_Bold
      max-width: 200px
  &:hover
    background-size: 130%
    h1
      opacity: 1
</style>
