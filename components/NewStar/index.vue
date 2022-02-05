<template>
  <ul class="zk-rate-list">
    <li
      v-for="(status, index) in statusArray"
      :key="index"
      class="zk-rate-item"
    >
      <span class="iconfont">{{
          status === "full"
            ? "&#xe60e;"
            : status === "half"
              ? "&#xe61e;"
              : "&#xe63b;"
        }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    score: {
      default: 0,
    },
    max: {
      default: 5,
    }
  },
  data() {
    return {
      statusArray: [],
    };
  },

  methods: {
    render() {
      let arr = [];
      let score_num = (this.score / this.max) * 5;
      let integer = Math.floor(score_num);

      if (score_num <= 0) {
        // 分数直接是 0
        arr = ["off", "off", "off", "off", "off"];
      } else {
        if (integer == 5) {
          for (let i = 0; i < integer; i++) {
            arr.push("full");
          }
        } else {
          // 取整数位
          for (let i = 0; i < integer; i++) {
            arr.push("full");
          }
          // 判断半颗星
          if (score_num - integer > 0.5) {
            arr.push("full");
          } else if (score_num - integer <= 0.5 && score_num - integer > 0) {
            arr.push("half");
          } else {
            arr.push("off");
          }

          if (arr.length < 5) {
            for (let i = 0; i <= 5 - arr.length; i++) {
              arr.push("off");
            }
          }
        }
      }
      return arr;
    },
  },
  created() {
    this.statusArray = this.render();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
