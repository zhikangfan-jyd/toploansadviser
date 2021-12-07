<template>
  <ul class="fold-the-card-container">
    <li class="fold-the-card-item" v-for="(item, index) in data" :key="index">
      <div class="fold-the-card-title-box" @click="handleOpen(index)">
        <h2 class="title">{{ item.title }}</h2>
        <span class="iconfont"></span>
      </div>
      <div class="fold-the-card-content" v-html="item.content"></div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    handleOpen(index) {
      $(
        ".fold-the-card-container .fold-the-card-item .fold-the-card-title-box .iconfont"
      )
        .eq(index)
        .toggleClass("current");
      $(".fold-the-card-container .fold-the-card-item .fold-the-card-content")
        .eq(index)
        .slideToggle("fast");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
