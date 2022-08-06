<template lang="pug">
Fragment
  .loading(v-if="loading")
    font-awesome-icon(icon='spinner' spin)
  .portfolio(v-if="!loading")
    .title Portfolio
    .category
      li(v-for="item in filter.list")
        a(@click.prevent="changeCategory(item)" href="#" :class="{ selected: this.filter.str==item }") {{item}}
    .portfolioBoxes
      Fragment(v-for="data in displayedWorks")
        PortfolioWorksBox(:key="data.id" :obj="data" :title="data.title" :image="data.img" :category="data.category")

</template>

<script>
import PortfolioWorksBox from "@/components/PortfolioWorksBox.vue";
export default {
  components: {
    PortfolioWorksBox,
  },
  data() {
    return {
      filter: {
        list: ["ALL", "Frontend", "UIDesign", "Others"],
        str: "ALL",
      },
    };
  },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
    displayedWorks() {
      const category = this.filter.str;
      if (category !== "ALL") {
        let filterPro = this.$store.state.worksData.filter(function (item) {
          return item.category == category;
        });
        return filterPro;
      } else {
        return this.$store.state.worksData;
      }
    },
  },
  created() {
    console.clear();
    // 讀取firebase資料
    this.$store.dispatch("getWorksData");
  },
  methods: {
    changeCategory(str) {
      const vm = this;
      vm.filter.str = str;
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
.selected
  text-decoration: underline !important
.title
  @include H1_Bold
.portfolio
  padding: 108px 40px
  display: flex
  flex-direction: column
  gap: 24px
  @include mobile
    padding: 48px 12px
  .title
    &:after
      content: ''
      display: block
      width: 64px
      height: 6px
      background-color: $color_blue
      border-radius: 32px
      margin-top: 16px

  .category
    display: flex
    justify-content: flex-start
    gap: 10px 24px
    flex-wrap: wrap
    @include H2_Bold
    li
      list-style: none
      a
        text-decoration: none
        color: $color_blue

  .portfolioBoxes
    display: flex
    justify-content: space-around
    gap: 36px 44px
    flex-wrap: wrap
    margin-top: 40px
    @include mobile
      margin-top: 0px
</style>
