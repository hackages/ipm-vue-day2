<template>
  <div>
    <div class="filter" :class="{'filter-is-visible':!toggle}">
      <form @submit.prevent>
        <div class="filter-block">
          <h4>Search</h4>
          <div class="filter-content">
            <input  type="search" placeholder="title" :value="searchValue" @input="onSearch($event.target.value)"/>
          </div>
        </div>
      </form>
      <a class="hand-cursor close-f" @click="onClick(!toggle)" >Close</a>
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
    onSearch: {
      type: Function,
      required: true
    },
    searchValue: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    toggle: {
      type: Boolean,
      required: true
    }
  }
};
</script>
