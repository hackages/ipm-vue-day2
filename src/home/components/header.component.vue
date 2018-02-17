<template>
  <header>
    <img :src="logo" alt="logo"/>
  </header>
</template>

<script>
import header from '../../assets/images/hackflix_logo.svg';
export default {
  name: 'HfHeader',
  data() {
    return {
      logo: header
    };
  }
};
</script>