<template>
  <div class="movie-comment comment-button">
    <span @click="onDelete(comment)">Delete</span>
    <p class="name">
      {{comment.author}}
    </p>
    <p class="comment">
      {{comment.content}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HfComment',
  props: {
    comment: {
      type: Object,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
};
</script>