<template>
  <div class="tab-filter-wrapper">
  <div class="tab-filter">
    <div class="filters">
      <ul class="filters-list">
        <li
          v-for="category in categories"
          :key="category.category"
          @click="selectTab(category.category)">
          <a :class="{'selected': category.selected}">{{category.category}}</a>
        </li>
        </ul>
        <ul class="misc">
          <li class="counter">
            <a>{{counter}}</a>
          </li>
          <li :to="['/stats']">
            <a>Stats</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HfMenubar',
  props: {
    selectTab: {
      type: Function,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>