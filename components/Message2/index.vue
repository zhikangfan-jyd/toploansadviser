<template>
  <div class="alert-wrapper">
    <div class="alert-content">
      <div class="steps-box-1">
        <h3 class="title">Compare Personal Loan Rates From Top Lenders</h3>
        <div class="steps-content">
          <p class="desc">
            <span class="text">What's your credit score?</span>
          </p>
          <div class="btn-box">
            <div class="box">
              <button class="btn poor" @click="nextStep">
                <span class="tag-name">Poor</span>
                <span class="tag-value">(&lt;500)</span>
              </button>
              <button class="btn average" @click="nextStep">
                <span class="tag-name">Average</span>
                <span class="tag-value">(500 - 699)</span>
              </button>
              <button class="btn good" @click="nextStep">
                <span class="tag-name">Good</span>
                <span class="tag-value">(700 - 749)</span>
              </button>
              <button class="btn excellent" @click="nextStep">
                <span class="tag-name">Excellent</span>
                <span class="tag-value">(&gt;749)</span>
              </button>
            </div>
          </div>
          <div class="start-box">
            <div
              href="javascript:void(0);"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="start-btn disabled"
              v-if="isDisabled"
            >Get Started <span class="iconfont">&#xe63c;</span></div
            >
            <a
              :href="url"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="start-btn"
              v-else
              @click="closeAlert"
            >Get Started <span class="iconfont">&#xe63c;</span></a
            >
            <div class="power">
              <span class="text">Powered by</span>
              <img src="/data/images/credible.webp" alt="" class="logo"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data: () => {
    return {
      timer: null,
      timer2: null,
      count: 0,
      isDisabled: false,
    };
  },
  methods: {
    handleTracking(params) {
      if (typeof window.uba != "function") {
        return;
      }
      window.uba(params);
    },
    closeAlert() {
      this.$nextTick(() => {

        $(".alert-wrapper").css({
          display: 'none'
        })
      });
    },
    nextStep() {
      this.isDisabled = false;
    }
  },
  destroyed() {
    clearInterval(this.timer);
    clearTimeout(this.timer2);
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
