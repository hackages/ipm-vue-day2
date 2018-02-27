<template>
  <div id="app">
    <hf-header></hf-header>
    <router-view/>
  </div>
</template>

<script>
import HfHeader from './home/components/header.component.vue';
import auth from './core/authentication.service';
export default {
  name: 'App',
  components: {
    HfHeader,
  },
  created() {
    auth.checkAuth();
  },
};
</script>

<style>
@import './assets/css/main.css';
</style>
