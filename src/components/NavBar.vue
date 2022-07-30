<template lang="pug">
nav.navbar.navbar-expand-lg.fixed-top
  .container-fluid
    router-link.navbar-brand(to="/")  -YuXuan-
    button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon  
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.ms-auto.mb-2.mb-lg-0
        li.nav-item
          router-link.nav-link(to="/" active-class="active")  HOME 
        li.nav-item
          router-link.nav-link(to="/about" active-class="active")  ABOUT 
        li.nav-item
          router-link.nav-link(to="/portfolio" active-class="active")  PORTFOLIO 
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="sass" scope>
@import "../assets/sass/global.sass";
//導覽列
nav.navbar
  transition: 0.5s
  background-color: $color_blue
  color: $color_white
  a
    @include H2
    transition: 0.5s
    color: $color_white
  a:hover
    color: $color_white
    text-decoration: underline
  a.nav-link
    color: $color_white
    margin-right: 1.5em
    letter-spacing: 0.1em
//漢堡選單
.navbar-toggler
  border: 1px solid $color_white
.navbar-toggler-icon
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
.active
  color: $color_white !important
  text-decoration: underline !important
</style>
