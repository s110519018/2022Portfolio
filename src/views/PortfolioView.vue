<template lang="pug">
Fragment
  .portfolio
    .title Portfolio
    .category
      li(v-for="item in filter.list")
        a(@click.prevent="changeCategory(item)" href="#" :class="{ selected: this.filter.str==item }") {{item}}
    .portfolioBoxes
      PortfolioWorksBox(title="疫距數得")
      PortfolioWorksBox(title="疫距數得")
      PortfolioWorksBox(title="疫距數得")
      PortfolioWorksBox(title="疫距數得")

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
        list: ["ALL", "Web", "APP", "UIDesign", "Others"],
        str: "ALL",
      },
    };
  },
  methods: {
    changeCategory(str) {
      const vm = this;
      vm.filter.str = str;
    },
    getCategory() {
      // this.$http.get(url).then((response) => {
      //   if (vm.filter.str !== "ALL") {
      //     let filterPro = response.data.products.filter(function (item) {
      //       return item.category == vm.filter.str;
      //     });
      //     vm.products = filterPro;
      //   } else {
      //     vm.products = response.data.products;
      //   }
      // });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/global.sass";
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
