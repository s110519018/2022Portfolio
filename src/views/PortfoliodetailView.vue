<template lang="pug">
Fragment
  .portfoliodetail
    a.backBtn(@click.prevent="goBack()")
      font-awesome-icon(:icon="['fas', 'angle-left']")
      h1 Back
    .detailBox
      .Box_img
      .Box_content
        .content_title Title
        .content_time 2022/7
        .content_job 負責工作
        .content_content 參與從零到有的環境開發設置，與一名資深工程師開創後台系統，使用前端主流生態 React 與 Redux，搭配 RxJS 進行非同步請求處理，近期加入 React hooks 應用， 學習到模組化管理、前端框架應用、Webview 實作經驗與後端工程師討論 API 規格，構想多種錯誤情況處理，產品開發上獨自完成 UI / UX，聽取使用者回饋進行改善，細心特質可交付高完成度、低錯誤率的作品。透過其他學習網站 Udemy 課程和書籍精進與驗證技能， 閱覽 Medium 文章及加入社團接收新知，成為擁有設計觀感、提升使用者體驗的開發者。
        .content_skillsbox
          .skill Skill
        ButtonBox(action="router" path="portfolio" content="More Works")
</template>

<script>
import router from "../router/index.js";
import ButtonBox from "@/components/ButtonBox.vue";

export default {
  name: "PortfoliodetailView",
  components: {
    ButtonBox,
  },
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
