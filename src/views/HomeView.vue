<template lang="pug">
Fragment
  .top
    .Box
      .imgBox
        .img
        .bg
      .wordBox
        .title 李淯萱 Yu Xuan Lee
        .content I’m a Frontend Developer
        .school
          font-awesome-icon(:icon="['fas', 'graduation-cap']")
          span 國立臺北教育大學 玩具與遊戲設計碩士班
        .contact
          a(href="https://github.com/s110519018")
            font-awesome-icon(:icon="['fab', 'github']")
          a(href="https://www.facebook.com/profile.php?id=100005284330987")
            font-awesome-icon(:icon="['fab', 'facebook']")
          a(href="mailto:dsi020070@gmail.com")
            font-awesome-icon(:icon="['fas', 'envelope']")
    .wave
      img(src="../assets/img/Wave.svg", alt="")
  .about 
    .title About Me
    .AboutMeBoxes
      AboutMeBox(vertical=false title="Skills")
        .skill-item
          font-awesome-icon(:icon="['fas', 'laptop-code']")
          span Web
          span Development
        .skill-item
          font-awesome-icon(:icon="['fas', 'pen-ruler']")
          span UI 
          span Design
        .skill-item
          font-awesome-icon(:icon="['fas', 'globe']")
          span TOEIC 735 
          span TOPIK 二級
      AboutMeBox(vertical=true title="Work Experience")
        p 2020/9 - 2022/8 資策會 企劃與推廣處 工讀  
        p 2019/7 - 2019/12 Digi+ Talent 計畫 實習
        p 2017/7 - 2019/8 吉的堡美語 工讀 
      AboutMeBox(vertical=true title="Accomplishment")
        p 2022 交通數據應用競賽 晉級決賽
        p 2021 資訊應用服務競賽 資訊應用組 第二名
        p 2020 APP 移動應用創新賽 晉級決賽
    ButtonBox(action="router" path="about" content="More About Me")
    .shortline
  .works
    .title Recent Works
    .RecentWorksBoxes
      .loading_block(v-if="loading")
        Skeletor(width="360" height="600" )
        Skeletor(width="360" height="600" )
        Skeletor(width="360" height="600" )
      Fragment(v-if="!loading" v-for="data in displayedWorks")
        PortfolioWorksBox(:key="data.id" :obj="data" :title="data.title" :image="data.img" :category="data.category")
    ButtonBox(action="router" path="portfolio" content="More Works")
</template>

<script>
// @ is an alias to /src
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
import PortfolioWorksBox from "@/components/PortfolioWorksBox.vue";
import AboutMeBox from "@/components/AboutMeBox.vue";
import ButtonBox from "@/components/ButtonBox.vue";

export default {
  name: "HomeView",
  components: {
    Skeletor,
    PortfolioWorksBox,
    AboutMeBox,
    ButtonBox,
  },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
    displayedWorks() {
      return this.$store.state.worksData.slice(0, 3);
    },
  },
  created() {
    console.clear();
    // 讀取firebase資料
    this.$store.dispatch("getWorksData");
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
.title
  @include H1_Bold
  @include mobile
    @include H2_Bold
.top
  position: relative
  background-color: $color-background
  padding-top: 116px
  min-height: 640px
  @include pad
    padding-top: 64px
    min-height: 880px
  @include mobile
    padding-top: 40px
    min-height: 640px
  .Box
    display: flex
    justify-content: center
    flex-wrap: wrap
    position: relative
    z-index: 1
    gap: 0px 124px
    width: 100%
    .imgBox
      position: relative
      width: 400px
      height: 400px
      @include mobile
        width: 200px
        height: 200px
      .img
        width: 100%
        height: 100%
        border-radius: 100%
        background-image: url(../assets/img/main_photo.jpg)
        background-size: cover
        border: 8px solid #fff
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      .bg
        position: absolute
        z-index: -1
        left: -48px
        top: -20px
        width: 100%
        height: 100%
        border-radius: 100%
        background-image: url(../assets/img/img_bg.svg)
        background-size: cover
        @include mobile
          display: none
    .wordBox
      margin-top: 28px
      color: $color_blue
      @include H2_Bold
      display: flex
      flex-direction: column
      gap: 24px
      @include pad
        align-items: center
        padding: 0px 12px
      @include mobile
        @include P_Bold
        align-items: center
      .school
        display: flex
        flex-direction: row
        gap: 12px
        align-items: center
        @include mobile
          @include miniP
          svg
            display: none
        @include pad
          svg
            display: none
      .contact
        display: flex
        flex-direction: row
        gap: 32px
        align-items: center
        a
          width: 24px
          height: 24px
          color: $color_blue
  .wave
    position: absolute
    bottom: 0
    z-index: 0
    img
      width: 100vw

.about,.works
  padding: 0 80px
  display: flex
  flex-direction: column
  align-items: center
  gap: 60px
  @include mobile
    padding: 0 36px
  .title
    align-self: start
    @include mobile
      align-self: center
      text-align: center
  .shortline
    width: 64px
    height: 6px
    background-color: $color_blue
    border-radius: 32px
    margin-bottom: 64px

.about
  padding-top: 32px
.AboutMeBoxes
  display: flex
  justify-content: center
  gap: 84px
  flex-wrap: wrap
  @include mobile
    gap: 36px
  .skill-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    @include H2
    svg
      flex-grow: 1
      width: 80px
      height: 80px
      @include mobile
        width: 40px
        height: 40px

.RecentWorksBoxes
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  gap: 20px 100px
  .loading_block
    display: flex
    gap: 20px 100px
.vue-skeletor
  position: relative
  overflow: hidden
  background-color: rgba(0, 0, 0, 0.12)

  &:not(.vue-skeletor--shimmerless):after
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform: translateX(-100%)
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(37, 22, 22, 0))
    animation: shimmer 1.5s infinite
    content: ''

.vue-skeletor--rect
  display: block
  border-radius: 20px

.vue-skeletor--circle
  display: block
  border-radius: 50%

.vue-skeletor--pill
  border-radius: 9999px

.vue-skeletor--text
  border-radius: 9999px
  line-height: 1
  display: inline-block
  width: 100%
  height: inherit
  vertical-align: middle
  top: -1px

@keyframes shimmer
  100%
    transform: translateX(100%)
</style>
