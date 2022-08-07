<template lang="pug">
.portfolioWorksBox(@click.prevent="goDetail()")
  h1 {{ title }}
  .shortline
  p {{ category }}
  img(:src='image')
</template>

<script>
import router from "../router/index.js";
export default {
  name: "PortfolioWorksBox",
  props: {
    title: String,
    image: String,
    category: String,
    obj: Object,
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
  padding-top: 40px
  padding-bottom: 0
  text-align: center
  width: 360px
  border-radius: 20px
  background-color: $color_background
  color: $color_blue
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center
  gap: 12px 0px
  transition: 0.5s
  @include mobile
    padding-top: 20px
    width: calc( 100vw - 40px)
  h1
    padding: 0 20px
    @include H2_Bold
    word-break: break-all
  .shortline
    width: 64px
    height: 6px
    background-color: $color_blue
    border-radius: 32px
  p
    margin-bottom: 0
  img
    width: 100%
    height: 100%
    object-fit: cover
    margin: auto
  &:hover
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
</style>
