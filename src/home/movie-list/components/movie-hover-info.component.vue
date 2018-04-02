<template>
  <div :class="{'show-movie-body': isContainerHovered}"
       class="movie-body">
    <h1>{{movie.title}}</h1>
    <p>{{movie.overview}}</p>

    <button class="btn btn-danger">
      Remove from cart
    </button>
    <button class="btn add">
      Add to cart
    </button>
    <router-link class="btn btn-link"
                 :to="{name:'details' , params: {id:movie.id}}"
                 tag="button">See the details</router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    isContainerHovered: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
