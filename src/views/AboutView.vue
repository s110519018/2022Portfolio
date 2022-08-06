<template lang="pug">
Fragment
  .about
    .imgBox
      .img
      .bg
    .wordBox
      .title About Me
      .content 
        p 參與從零到有的環境開發設置，與一名資深工程師開創後台系統，使用前端主流生態 React 與 Redux，搭配 RxJS 進行非同步請求處理，近期加入 React hooks 應用， 學習到模組化管理、前端框架應用、Webview 實作經驗。
        p 與後端工程師討論 API 規格，構想多種錯誤情況處理，產品開發上獨自完成 UI / UX，聽取使用者回饋進行改善，細心特質可交付高完成度、低錯誤率的作品。
        p 透過其他學習網站 Udemy 課程和書籍精進與驗證技能， 閱覽 Medium 文章及加入社團接收新知，成為擁有設計觀感、提升使用者體驗的開發者。
      .ButtonBox
        ButtonBox(action="link" path="https://www.facebook.com/profile.php?id=100005284330987" content="Contact Me")
        ButtonBox(action="link" path="https://github.com/s110519018" content="Download Resume")
  .skills
    .title Skills
    .SkillsBoxes
      SkillsBox(title="Web Development")
        p HTML/CSS/JavaScript
        p jQuery
        p Sass/Scss
        p React
        p Git Version Control
        p Node.js
        p Npm & Yarn
        p Vue(學習中)
      SkillsBox(title="UI Design")
        p Figma
        p Photoshop
        p Illustrator
      SkillsBox(title="Others")
        p After Effects
        p Unity
        p Bottender
  .experience
    .title Experience
    Timeline(theme="#DC8EA4")
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2022 
        h1 以雙人合作機制改善拖延之 LINE 聊天機器人設計
        ul
          li  【畢業論文】指導教授：范丙林、俞齊山博士
          li 開發LINE 聊天機器人，以雙人合作的方式協助拖延者任務管理並透過對話干預錯誤觀念。
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2022 
        h1 交通數據應用競賽 晉級決賽
        ul
          li  協助行動不便者搭乘公車之PWA(漸進式網頁應用程式)【巴巴走】
          li  負責工作: 前端
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2020/9 - 2022/8 
        h1 資策會 企劃與推廣處 工讀
        ul
          li  負責工作: 處內系統測試、行政事務處理
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2021
        h1 資訊應用服務競賽 資訊應用組十 第二名
        ul
          li  在Google Meet遠距線上教學中透過鏡頭偵測學生專心度並協助教師進行課程狀態管理之Chrome擴充套件【疫距數得】 
          li  負責工作: 介面設計、前端、影片剪輯
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2021
        h1 「在家當宅宅，疫齊護台灣」企劃徵稿大賽 第二名&最具創意獎
        ul
          li  企劃內容為將民眾對醫護人員感謝之文字及圖像製作成貼圖進行販售，並將所得捐出給醫護人員。
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2021/12/12 
        h1 TANET 台灣網際網路研討會
        ul
          li  發表論文【基於代理人機制之Google Meet遠距教學輔助系統實作】
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2021/03/25
        h1 TWELF 台灣數位學習發展研討會
        ul
          li  發表海報論文【具專注度評估之多人線上視訊教學系統設計初探】
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2020 
        h1 APP 移動應用創新賽 晉級決賽
        ul
          li  記錄心情並能不受時空間限制對朋友表達關心之APP【顏色 countenance】 
          li  負責工作: 前端、影片剪輯
      TimelineItem(bg-color="#FDDD89" icon-size="medium") 
        h1.time 2019/7 - 2019/12 
        h1 Digi+ Talent 計畫 商研院實習生
        ul
          li  實習單位: 商研院 KKday
          li  專題: 以機器學習降低盜刷風險 【入選Digi+數位新星大賞】
          li  負責工作: 成果網頁製作（介面設計、程式）
      TimelineItem(bg-color="#FDDD89" icon-size="medium") 
        h1.time 2017/7 - 2019/8
        h1 蘆洲吉的堡美語 工讀
        ul
          li  負責工作: 國小學童美語補課、作業輔導、電話測驗
  .contact
    .title Contact
    .contactBoxes
      a(href="https://github.com/s110519018")
        font-awesome-icon(:icon="['fab', 'github']")
      a(href="https://www.facebook.com/profile.php?id=100005284330987")
        font-awesome-icon(:icon="['fab', 'facebook']")
      a(href="mailto:dsi020070@gmail.com")
        font-awesome-icon(:icon="['fas', 'envelope']")
</template>

<script>
import { Timeline, TimelineTitle, TimelineItem } from "vue3-cute-component";
import "vue3-cute-component/dist/style.css";
import ButtonBox from "@/components/ButtonBox.vue";
import SkillsBox from "@/components/SkillsBox.vue";

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    ButtonBox,
    SkillsBox,
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
.skills,.experience,.contact
  padding: 0px 100px
  margin-bottom: 52px
  @include pad
    padding: 0px 20px
  .title
    margin-bottom: 52px
.title
  @include H1_Bold
  @include mobile
    @include H2_Bold
.about
  box-sizing: border-box
  padding: 108px 40px
  display: flex
  justify-content: center
  flex-wrap: wrap
  gap: 24px 160px
  @include pad
    padding: 40px 20px
  .imgBox
    position: relative
    width: 20%
    min-width: 320px
    min-height: 400px
    @include mobile
      min-width: 200px
      min-height: 260px
    .img
      position: absolute
      z-index: 1
      width: 100%
      height: 100%
      background-image: url(../assets/img/about_photo.jpg)
      background-size: cover
      background-position: center
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      border-radius: 20px
      transform: rotate(-3.78deg)
      @include pad
        transform: rotate(0deg)
    .bg
      box-sizing: border-box
      position: absolute
      z-index: 0
      left: 80px
      top: 0px
      width: 100%
      height: 100%
      border: 12px solid $color_pink
      border-radius: 20px
      transform: rotate(12deg)
      background-color: transparent
      @include pad
        display: none
  .wordBox
    width: 60%
    display: flex
    flex-direction: column
    gap: 36px 0px
    .title
      &:after
        content: ''
        display: block
        width: 64px
        height: 6px
        background-color: $color_blue
        border-radius: 32px
        margin-top: 16px
    .content
    .ButtonBox
      display: flex
      flex-wrap: wrap
      gap: 24px 5%

.skills
  .SkillsBoxes
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    gap: 40px

.experience
  .time
    @include P_Bold
  h1
    @include H2_Bold
  ul
    margin-top: 20px
    li
     margin-top: 4px
.contact
  .contactBoxes
    display: flex
    gap: 20px 100px
    flex-wrap: wrap
    justify-content: center
  a
    color: $color_blue
    width: 100%
    aspect-ratio: 1 / 1
    height: 100%;
    border-radius: 50%
    max-width: 280px
    padding: 60px
    box-sizing: border-box
    background-color: $color_yellow
    @include pad
      max-width: 240px
      padding: 44px
    @include mobile
      max-width: 180px
      padding: 28px
    svg
      width: 100%
      height: 100%
</style>
