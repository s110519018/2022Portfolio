<template lang="pug">
.AboutMeBox(:style="titleVars" :class="{ vertical: vertical,horizontal: !vertical }")
  slot 哈囉
</template>

<script>
export default {
  name: "AboutMeBox",
  props: {
    vertical: Boolean,
    title: String,
  },
  data() {
    return {
      init_title: this.title,
    };
  },
  computed: {
    titleVars() {
      return "--title: " + "'" + this.init_title + "'";
    },
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.AboutMeBox
  position: relative
  width: 100%
  max-width: 540px
  min-height: 280px
  border-radius: 20px
  background-color: $color_background
  display: flex
  padding: 20px 24px
  padding-top: 80px
  @include H2
  @include mobile
    @include P
  &:before
    content: var(--title)
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 60px
    border-radius: 20px 20px 0 0
    background-color: $color_pink
    color: $color_white
    @include H2_Bold
    text-align: center
    line-height: 60px
    @include mobile
      @include P_Bold
.vertical
  display: flex
  flex-direction: column
  justify-content: center
  gap: 10px
.horizontal
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  gap: 10px
</style>
