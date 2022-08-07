<template lang="pug">
.SkillsBox
  .icon
    font-awesome-icon(:icon="['fas', 'laptop-code']" v-if="title =='Web Development'")
    font-awesome-icon(:icon="['fas', 'pen-ruler']" v-if="title =='UI Design'")
    font-awesome-icon(:icon="['fas', 'lightbulb']" v-if="title =='Others'")
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
    padding-top: 4px
    @include P
  .title
    @include H2_Bold
    @include mobile
      text-align: center
      @include H2
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
