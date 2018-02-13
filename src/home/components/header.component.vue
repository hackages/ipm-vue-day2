<template>
  <header>
    <img :src="logo" alt="logo"/>
  </header>
</template>

<script>
export default {
  name: 'HfHeader',
  props: ['logo'],
  created() {
    console.log(this.logo);
  }
};
</script>