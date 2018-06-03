<template>
  <div id="app">
    <hf-header></hf-header>
  </div>
</template>

<script>
import HfHeader from './core/header.component.vue';

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
