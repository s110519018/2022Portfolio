<template lang="pug">
Fragment
  .loading(v-if="isLoading")
    font-awesome-icon(icon='spinner' spin)
  .portfoliodetail(v-if="!isLoading")
    .backBtn(@click.prevent="goBack()")
      font-awesome-icon(:icon="['fas', 'angle-left']")
      h1 Back
    .detailBox
      .Box_img
        img(:src="workData.img_detail")
      .Box_content
        .content_title {{workData.title}}
        .content_time {{workData.time}}
        .content_job 負責工作【{{workData.job}}】
        .content_content(v-html="workData.content")
        .content_skillsbox
          .skill(v-for="skill in workData.skills") {{skill}}
        .content_bottonsbox
          ButtonBox(v-for="button in workData.btn" action="link" :path="button.btn_content" :content="button.btn_title")
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
  computed: {
    ...mapState([
      // 需要的state在這邊
      "isLoading",
      "workData",
    ]),
  },
  created() {
    console.log(this.workData);
    // 在頁面載入時讀取sessionStorage裡的狀態資訊
    if (sessionStorage.getItem("workData")) {
      let session_data = JSON.parse(sessionStorage.getItem("workData"));
      if (this.id === session_data.id) {
        this.$store.commit("SET_WORK_DATA", session_data);
      }
    } else if (this.workData === null) {
      // 讀取firebase資料
      this.$store.dispatch("getWorkData", this.id);
    }

    // 在頁面重新整理時將vuex裡的資訊儲存到sessionStorage裡
    // beforeunload事件在頁面重新整理時先觸發
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("workData", JSON.stringify(this.workData));
    });
  },
  methods: {
    goBack() {
      router.push("/portfolio");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
.loading
  display: flex
  align-items: center
  justify-content: center
  width: 100vw
  height: 100vh
  font-size: 60px
  color: $color_blue

.portfoliodetail
  padding: 108px 40px
  @include pad
    padding: 12px

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
      max-width: 500px
      @include pad
        width: 70%
      @include mobile
        width: 100%
      img
        width: 100%
        height: 100%
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
          text-align: center
          &:after
            width: 100%
            height: 3px
        @include mobile
          @include H2_Bold
      .content_time
        @include miniP
        word-break: break-all
      .content_job
        padding: 10px 12px
        background-color: $color_pink
        border-radius: 8px
        color: $color_white
      .content_content
        @include pad
          text-align: center
      .content_skillsbox,.content_bottonsbox
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
