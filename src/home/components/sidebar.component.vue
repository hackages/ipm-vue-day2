<template>
  <div>
    <div class="filter" :class="{'filter-is-visible':!toggle}">
      <form @submit.prevent>
        <div class="filter-block">
          <h4>Search</h4>
          <div class="filter-content">
            <input type="search" placeholder="title" :value="value" v-on="listeners" />
          </div>
        </div>
      </form>
      <a class="hand-cursor close-f" @click="onClick(!toggle)">Close</a>
    </div>
    <a class="hand-cursor filter-trigger" @click="onClick(!toggle)">
      Filters
    </a>
  </div>
</template>

<script>
export default {
  name: 'HfSidebar',
  props: {
    value: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>
