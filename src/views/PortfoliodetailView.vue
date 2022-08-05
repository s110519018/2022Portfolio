<template lang="pug">
Fragment
  .portfoliodetail
    a.backBtn(@click.prevent="goBack()")
      font-awesome-icon(:icon="['fas', 'angle-left']")
      h1 Back
    .detailBox
      .Box_img
      .Box_content
        .content_title {{workData.title}}
        .content_time {{workData.time}}
        .content_job {{workData.job}}
        .content_content(v-html="workData.content")
        .content_skillsbox
          .skill(v-for="skill in workData.skills") {{skill}}
        ButtonBox(action="router" path="portfolio" content="More Works")
</template>

<script>
import router from "../router/index.js";
import ButtonBox from "@/components/ButtonBox.vue";
import { mapState } from "vuex";
export default {
  name: "PortfoliodetailView",
  components: {
    ButtonBox,
  },
  props: {
    id: String,
  },
  computed: mapState([
    // 需要的state在這邊
    "isLoading",
    "workData",
  ]),
  methods: {
    goBack() {
      router.back();
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
.portfoliodetail
  padding: 108px 40px
  @include pad
    padding: 20px

  .backBtn
    display: flex
    gap: 10px
    align-items: center
    cursor: pointer
    color: $color_blue
    text-decoration: none
    @include H1_Bold
    svg
      font-size: 28px

  .detailBox
    margin-top: 12px
    display: flex
    justify-content: flex-start
    align-items: center
    gap: 20px 88px
    @include pad
      flex-wrap: wrap
      justify-content: space-around
    .Box_img
      width: 400px
      height: 400px
      background: url('https://www.placecage.com/c/460/300')
      background-position: center
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 20px
    .Box_content
      width: 70%
      display: flex
      flex-direction: column
      align-items: flex-start
      gap: 20px
      @include pad
          align-items: center
      @include mobile
        width: 70%
      .content_title
        @include H1_Bold
        &:after
          content: ''
          display: block
          width: 64px
          height: 6px
          background-color: $color_blue
          border-radius: 32px
          margin-top: 16px
        @include pad
          &:after
            width: 100%
      .content_time
        @include miniP
        word-break: break-all
      .content_job
        padding: 10px 12px
        background-color: $color_pink
        border-radius: 8px
      .content_skillsbox
        display: flex
        gap: 12px
        flex-wrap: wrap
        @include pad
          justify-content: center
      .skill
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        padding: 0px 24px
        border: 1px solid $color_blue
        color: $color_blue
        border-radius: 32px
</style>
