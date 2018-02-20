<template>
  <div>
    <hf-comment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :onDelete="onDeteleComment">
    </hf-comment>
  </div>
</template>

<script>
import HfComment from './comment.component';
export default {
  name: 'HfCommentList',
  components: {
    HfComment,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
    onDeteleComment: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onDelete(comment) {
      this.onDeteleComment(comment);
    },
  },
};
</script>