<template lang="pug">
.SkillsBox
  .icon
    font-awesome-icon(:icon="['fas', 'pen-ruler']")
  .title {{title}}
  .skills
    slot 哈囉
</template>

<script>
export default {
  name: "SkillsBox",
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.SkillsBox
  width: 100%
  max-width: 540px
  min-height: 280px
  border-radius: 20px
  background-color: $color_background
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px 24px
  @include H2
  @include mobile
    @include P
  .icon
    font-size: 100px
  .skills
    margin-top: 32px
    display: flex
    flex-wrap: wrap
    gap: 2px 0px
    p
      flex-basis: 50%
      text-align: center
      margin-bottom: 0
      @include mobile
        flex-basis: 100%
</style>
