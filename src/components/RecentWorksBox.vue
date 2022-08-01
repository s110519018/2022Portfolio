<template lang="pug">
.recentWorksBox
  h1 {{ msg }}
  .shortline
  p {{msg}}
</template>

<script>
export default {
  name: "RecentWorksBox",
  props: {
    msg: String,
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.recentWorksBox
  cursor: pointer
  box-sizing: border-box
  padding: 20px
  text-align: center
  width: 360px
  min-height: 600px
  border-radius: 20px
  background: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)),url('https://www.placecage.com/c/460/300')
  color: $color_white
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: center
  gap: 28px 0px
  @include mobile
    padding: 2px
  h1
    @include H1_Bold
    word-break: break-all
    @include mobile
      @include H2_Bold
  .shortline
    transition: width 1s;
    width: 0px
    height: 6px
    background-color: $color_white
    border-radius: 32px
  p
    transition: opacity 1s;
    opacity: 0
    @include P
  &:hover
    justify-content: center
    .shortline
      width: 64px
    p
      opacity: 1
</style>
