<template>
  <div class="alert-wrapper">
    <div class="alert-content">
      <div v-if="!isHidden" class="steps-box-1">
        <h3 class="title">Compare Personal Loan Rates From Top Lenders</h3>
        <div class="steps-content">
          <p class="desc">
            <span class="text">What's your credit score?</span>
          </p>
          <div class="btn-box">
            <div class="box">
              <button class="btn poor" @click="nextStep(0)">
                <span class="tag-name">Poor</span>
                <span class="tag-value">(&lt;500)</span>
              </button>
              <button class="btn average" @click="nextStep(1)">
                <span class="tag-name">Average</span>
                <span class="tag-value">(500 - 699)</span>
              </button>
              <button class="btn good" @click="nextStep(2)">
                <span class="tag-name">Good</span>
                <span class="tag-value">(700 - 749)</span>
              </button>
              <button class="btn excellent" @click="nextStep(3)">
                <span class="tag-name">Excellent</span>
                <span class="tag-value">(&gt;749)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="steps-box-2">
        <div class="steps-content">
          <p class="desc">
            <span class="text">How much money would you like to borrow?</span>
          </p>
          <div class="btn-box">
            <div class="box">
              <button
                :class="{ btn: true, current: btnIndex === 0 }"
                @click="nextSecondStep(0)"
              >
                <span class="tag-value">Less than $5,000</span>
              </button>
              <button
                :class="{ btn: true, current: btnIndex === 2 }"
                @click="nextSecondStep(2)"
              >
                <span class="tag-value">$5,000 - $20,000</span>
              </button>

            </div>
            <div class="box">
              <button
                :class="{ btn: true, current: btnIndex === 1 }"
                @click="nextSecondStep(1)"
              >
                <span class="tag-value">$20,000 - $50,000</span>
              </button>

              <button
                :class="{ btn: true, current: btnIndex === 3 }"
                @click="nextSecondStep(3)"
              >
                <span class="tag-value">More than $50,000</span>
              </button>
            </div>
            <div class="start-box">
              <div
                v-if="isDisabled"
                class="start-btn disabled"
                href="javascript:void(0);"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >Get Started <span class="iconfont">&#xe63c;</span></div
              >
              <a
                v-else
                :href="url"
                class="start-btn"
                rel="noopener noreferrer nofollow"
                target="_blank"
                @click="closeAlert"
              >Get Started <span class="iconfont">&#xe63c;</span></a
              >
              <div class="power">
                <span class="text">Powered by</span>
                <img alt="" class="logo" src="/data/images/credible.webp"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="steps-container">
        <div class="steps-text-box">
          <span class="steps-num">{{ step }}</span
          >/2 steps
        </div>
        <div class="steps-box">
          <div :class="{ bar: true, full: isHidden }"></div>
        </div>
      </div>
      <!--      <span class="close icon" @click="closeAlert"></span>-->
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
      step: 1,
      isHidden: false,
      isDisabled: true,
      btnIndex: -1,
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
    nextStep(num) {
      if (num === 0) {
        this.url = '/redirect/best-personal-loan/poorloans'
      }
      this.isHidden = true;
      this.step = 2;
    },
    nextSecondStep(index) {
      this.isDisabled = false;
      this.btnIndex = index;
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
