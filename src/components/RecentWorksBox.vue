<template lang="pug">
.recentWorksBox
  h1 {{ msg }}
</template>

<script>
export default {
  name: "RecentWorksBox",
  props: {
    msg: String,
  },
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
.recentWorksBox
  max-width: 360px
  border-radius: 20px
</style>
