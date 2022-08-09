<template lang="pug">
Fragment
  .about
    .imgBox
      .img
      .bg
    .wordBox
      .title About Me
      .content 
        p 我是李淯萱，生於1998年，大學畢業於北教大數位系，並持續進階至北教大玩遊所深造，目前已於2022年六月畢業，在校六年來的學習讓我對前端技術培養了熱忱及興趣，並且對美感也有一定的要求。
        p 在校期間曾參與數個實驗室專案及競賽，其中包含系網更新、資訊應用服務競賽獲得第二名、於 TANET 台灣網際網路研討會發表論文等，過程中增加團隊開發經驗及專業知識、聽取使用者回饋進行改善。
        p 未來將透過SideProject的參與、學習網站 （Udemy、六角學院等） 課程，以及閱讀 Medium、iT 邦幫忙等文章、加入社團獲取新知識、精進及驗證技能，持續提升前後端開發能力，朝向全端工程師前進，也希望能夠利用時間提升自己的外語能力，包含英文及韓文。
      .ButtonBox
        ButtonBox(action="link" path="https://www.facebook.com/profile.php?id=100005284330987" content="Contact Me")
        ButtonBox(action="link" path="https://drive.google.com/file/d/1MA65aaeF6zMqBaSRM_AVxZVYv0CuuFxz/view?usp=sharing" content="Download Resume")
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
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2022 
        h1 以雙人合作機制改善拖延之 LINE 聊天機器人設計
        ul
          li  【畢業論文】指導教授：范丙林、俞齊山博士
          li 開發LINE 聊天機器人，以雙人合作的方式協助拖延者任務管理並透過對話干預錯誤觀念
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2022 
        h1 交通數據應用競賽 晉級決賽
        ul
          li  協助行動不便者搭乘公車之PWA(漸進式網頁應用程式)【巴巴走】
          li  負責工作: 前端程式
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2020/9 - 2022/8 
        h1 資策會 企劃與推廣處 工讀
        ul
          li  負責工作: 處內系統測試、行政事務處理
          li  透過此工作不僅參與兩個系統開發的進行，並學習到Excel、PowerPoint於實務中操作之技巧
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2021
        h1 資訊應用服務競賽 資訊應用組十 第二名
        ul
          li  遠距教學中透過鏡頭偵測學生專心度並協助教師管理課程之Chrome擴充套件【疫距數得】 
          li  執行平台: Google Meet 
          li  負責工作: 介面設計、前端程式、影片剪輯
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2021
        h1 「在家當宅宅，疫齊護台灣」企劃徵稿大賽 第二名&最具創意獎
        ul
          li  企劃內容: 將民眾對醫護人員感謝之文字及圖像製作成貼圖販售，將所得回饋醫護人員
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2021/12/12 
        h1 TANET 台灣網際網路研討會
        ul
          li  發表論文【基於代理人機制之Google Meet遠距教學輔助系統實作】
      TimelineItem(bg-color="#DD8EA4" icon-size="medium")
        h1.time 2021/03/25
        h1 TWELF 台灣數位學習發展研討會
        ul
          li  發表海報論文【具專注度評估之多人線上視訊教學系統設計初探】
      TimelineItem(bg-color="#FDDD89" icon-size="medium")
        h1.time 2020 
        h1 APP 移動應用創新賽 晉級決賽
        ul
          li  記錄心情並能不受時空間限制對朋友表達關心之APP【顏色 countenance】 
          li  負責工作: 前端程式、影片剪輯
      TimelineItem(bg-color="#DD8EA4" icon-size="medium") 
        h1.time 2019/7 - 2019/12 
        h1 Digi+ Talent 計畫 商研院實習生
        ul
          li  實習單位: 商研院 KKday
          li  專題: 以機器學習降低盜刷風險 
            u 【入選Digi+數位新星大賞】
          li  負責工作: 成果網頁製作（介面設計、前端程式）
          li 增進團隊合作、人際互動能力
          li 增進網頁製作實務能力
      TimelineItem(bg-color="#DD8EA4" icon-size="medium") 
        h1.time 2017/7 - 2019/8
        h1 蘆洲吉的堡美語 工讀
        ul
          li  負責工作: 國小學童美語補課、作業輔導、電話測驗
          li 這份工作經驗在畢業專題中能發揮，因為客群是國小學童，在主題發想或製作過程中讓我能夠站在孩子角度提出想法
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
    text-align: center
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
    @include mobile
      width: 80%
      gap: 20px 0px
    .title
      &:after
        content: ''
        display: block
        width: 64px
        height: 6px
        background-color: $color_blue
        border-radius: 32px
        margin-top: 16px
      @include mobile
        &:after
          display: none
    .content
      text-indent: 2em
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
