<script>
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

export default {
  name: "NavBar",
  components: {Header, SideBar}
}
</script>

<template>
  <div class="container-scroller">
    <SideBar />
    <div class="container-fluid page-body-wrapper">
      <Header />
    </div>
  </div>
</template>

<style scoped>

</style>