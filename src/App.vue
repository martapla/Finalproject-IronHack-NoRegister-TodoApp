<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div>
      <NavBar />
      <RouterView />
      <Footer />
  </div>
</template>

<style scoped>
  div{
    background-color:var(--colorGreen);
    padding-bottom: 70px;
  }
</style>
