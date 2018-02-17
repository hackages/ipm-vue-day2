<template>
  <div>
    <hf-comment
      v-for="comment in comments"
      :key="comment"
      :comment="comment"
      :onDelete="onDelete">
    </hf-comment>
  </div>
</template>

<script>
import HfComment from './comment.component';
export default {
  name: 'HfComment',
  components: {
    HfComment
  },
  props: {
    comments: {
      type: Array,
      required: true
    },
    onDetele: {
      type: Function,
      required: true
    }
  }
};
</script>