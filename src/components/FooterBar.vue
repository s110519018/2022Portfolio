<template lang="pug">
footer.d-flex.justify-content-center.align-items-center -YuXuan-
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
footer
  background-color: $color_blue
  color: $color_white
  height: 180px
  @include H1_Bold
</style>
