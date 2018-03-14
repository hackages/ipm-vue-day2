<template>
  <div id="app">
    <hf-header></hf-header>
    <router-view/>
  </div>
</template>

<script>
import HfHeader from './home/components/header.component.vue';

export default {
  name: 'App',
  components: {
    HfHeader,
  },
};
</script>

<style>
@import './assets/css/main.css';
</style>
