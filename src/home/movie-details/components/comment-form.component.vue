<template>
<form class="comment-form" @submit.prevent>
  <div class="form-group">
    <input type="text"
          class="form-control"
          id="author"
          v-model="form.author"
          name="author"
           placeholder="Author"/>

      <div class="form-control-feedback" v-if="form.author.length ===0">
        <div>
          Author is required
        </div>
      </div>
    </div>

  <div class="form-group">
    <input type="comment"
          class="form-control"
           id="comment"
           name="comment"
           v-model="form.content"
           placeholder="Comment"/>

    <div class="form-control-feedback"
      v-if="form.content.length ===0">
      <div>
        Comment is required
      </div>
    </div>
  </div>

  <button type="submit"
          class="btn btn-primary"
          :disabled="form.content.length === 0 || form.author.length === 0"
          @click="onSubmit(form)">
    Submit
  </button>
</form>

</template>

<script>
export default {
  name: 'HfCommentForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      form: {
        content: '',
        author: '',
        movieId: this.$route.params.id,
      },
    };
  },
};
</script>