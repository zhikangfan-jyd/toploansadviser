<template>
  <div class="calculator-components">
    <div class="calculator-trigger">
      <!-- <span class="title">Calculator your rate</span>
            <div class="jiantou-box">
            <span class="icon jiantou"></span>
            <span class="icon jiantou"></span>
            </div> -->

      <span class="icon calculator-icon" @click="handlePopup"></span>
      <span
        style="font-size: 14px; margin-top: 3px; font-weight: bold; color: #29b674;"
        >Calculator</span
      >
    </div>
    <div :class="{ 'calculator-popup-container': true, hidden: flag }">
      <h6 class="calculator-popup-title">Wanna <span class="g">Know?</span></h6>
      <span class="iconfont cha-iconfont" @click="hiddenPopup">&#xe614;</span>
      <div class="counter-container">
        <div class="input-left">
          <div class="amount-box">
            <span class="title">Amount</span>
            <div class="amount-input-box">
              <input
                type="text"
                class="amount-input"
                v-model="form.amount"
                @input="changeAmount"
              />
            </div>
          </div>
          <div class="rate-box">
            <input
              type="text"
              class="rate-annualy-input"
              v-model="form.rate"
              placeholder="Rate annually"
              @input="changeRate"
            />
          </div>

          <input
            type="text"
            class="year-input"
            v-model="form.year"
            placeholder="Year"
            @input="changeYear"
          />
          <span class="text">or</span>
          <input
            type="text"
            class="months-input"
            v-model="form.month"
            placeholder="Months"
            @input="changeMonth"
          />
        </div>
        <div class="results-right">
          <h6 class="title">
            <span class="green">Loan</span> <span>Calculator</span>
          </h6>

          <div class="results-container">
            <button class="submit-btn" @click="submit">
              <span class="iconfont">&#xe605;</span>
            </button>
            <div class="results-box">
              <div class="results-item">
                <span class="icon">$</span>
                <div class="results">
                  <span class="value month-price">{{ form.per_month }}</span>
                  <span class="value-title">Per Month</span>
                </div>
              </div>
              <div class="results-item">
                <span class="icon">$</span>
                <div class="results">
                  <span class="value">{{ form.total }}</span>
                  <span class="value-title">Total Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: "",
        rate: "",
        year: "",
        month: "",
        per_month: 0,
        total: 0
      },
      flag: true
    };
  },
  methods: {
    handlePopup() {
      this.flag = !this.flag;
    },
    hiddenPopup() {
      this.flag = true;
    },
    changeYear(e) {
      let value = e.target.value;
      if (isNaN(Number(value))) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error"
        });
        return;
      }

      this.form.month = value * 12 == 0 ? "" : value * 12;
    },

    changeMonth(e) {
      let value = e.target.value;
      if (isNaN(Number(value))) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error"
        });
        return;
      }

      this.form.year =
        (value / 12).toFixed(1) == 0 ? "" : (value / 12).toFixed(1);
    },
    changeAmount(e) {
      let value = e.target.value;

      this.form.amount = value;
    },
    changeRate(e) {
      let value = e.target.value;

      this.form.rate = value;
    },
    validate() {
      // 判断用户输入的是不是合法值
      if (
        this.form.year == "" ||
        this.form.amount == "" ||
        this.form.month == "" ||
        this.form.rate == "" ||
        isNaN(Number(this.form.year)) ||
        isNaN(Number(this.form.amount)) ||
        isNaN(Number(this.form.month))
      ) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error"
        });
        return false;
      } else if (this.form.amount > 100000) {
        this.$message({
          showClose: false,
          message: "The value cannot exceed 100000",
          type: "error"
        });

        return false;
      } else if (this.form.rate > 40) {
        this.$message({
          showClose: false,
          message: "The value cannot exceed 40",
          type: "error"
        });

        return false;
      } else if (this.form.year > 10) {
        this.$message({
          showClose: false,
          message: "No more than 10 years",
          type: "error"
        });
        return false;
      } else if (this.form.month > 120) {
        this.$message({
          showClose: false,
          message: "No more than 120 months",
          type: "error"
        });
        return false;
      }

      return true;
    },
    submit() {
      if (!this.validate()) {
        return;
      }

      let rate = this.form.rate / 100;
      let pmt =
        (Number(this.form.amount) * (Number(rate) / 12)) /
        (1 - 1 / Math.pow(1 + Number(rate) / 12, Number(this.form.month)));
      this.form.per_month = pmt.toFixed(2);
      this.form.total = (
        this.form.per_month * this.form.month -
        this.form.amount
      ).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
