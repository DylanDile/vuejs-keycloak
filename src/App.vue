<script setup>
import SideBar from "./components/partials/SideBar.vue";
import Header from "./components/partials/Header.vue";
</script>

<template>
  <div class="container-scroller">
    <SideBar />
    <div class="container-fluid page-body-wrapper">
      <Header />
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>

</template>