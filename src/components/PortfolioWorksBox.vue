<template lang="pug">
.portfolioWorksBox
  h1 {{ title }}
</template>

<script>
export default {
  name: "PortfolioWorksBox",
  props: {
    title: String,
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
  background: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)),url('https://www.placecage.com/c/460/300')
  background-position: center
  color: $color_white
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transition: 0.5s
  position: relative
  &:before,&:after
    content: ''
    position: absolute
    transition: all .5s ease-in
  &:before
    width: 80%
    height: 60%
    left: 10%
    top: 20%
    border-top: 1px solid transparent
    border-bottom: 1px solid transparent
    transform: scale(0,1)
  &:after
    width: 60%
    height: 80%
    top: 10%
    left: 20%
    border-right: 1px solid transparent
    border-left: 1px solid transparent
    transform: scale(1,0)
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
    &:before
      border-top: 1px solid white
      border-bottom: 1px solid white
      transform: scale(1,1)
    &:after
      border-right: 1px solid white
      border-left: 1px solid white
      transform: scale(1,1)
    h1
      opacity: 1
</style>
