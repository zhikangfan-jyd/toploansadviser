<template>
  <div class="alert-wrapper">
    <div class="alert-content">
      <div class="steps-box-1" v-if="!isHidden">
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
      <div class="steps-box-2" v-else>
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
                href="javascript:void(0);"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="start-btn disabled"
                v-if="isDisabled"
              >
                Get Started <span class="iconfont">&#xe63c;</span>
              </div>
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
                <img src="/data/images/credible.webp" alt="" class="logo" />
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
    showAlert() {
      this.isHidden = false;
      this.isDisabled = true;
      this.btnIndex = -1;
      this.step = 1;
      $(".alert-wrapper")
        .css({
          display: "block",
        })
        .animate(
          {
            opacity: 1,
          },
          200
        );
      $(".alert-content").animate(
        {
          top: "50%",
          opacity: 1,
        },
        400
      );
    },
    closeAlert() {
      this.$nextTick(() => {
        $(".alert-wrapper").css({
          display: "none",
        });
      });
    },
    nextStep(num) {
      this.isHidden = true;
      this.step = 2;
    },
    nextSecondStep(index) {
      this.isDisabled = false;
      this.btnIndex = index;
    },
  },
  mounted() {
    // this.showAlert();
    this.timer2 = setTimeout(() => {
      if ($(window).width() < 750) {
        return;
      }
      this.showAlert();

      this.timer3 = setTimeout(() => {
        $("body").on("mouseenter", () => {
          $("body").one("mouseleave", () => {
            if (this.count == 0) {
              this.showAlert();
            }
            this.count++;
          });
        });
      }, 10000);
    }, 15000);
  },
  destroyed() {
    clearInterval(this.timer);
    clearTimeout(this.timer2);
    clearTimeout(this.timer3);
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
