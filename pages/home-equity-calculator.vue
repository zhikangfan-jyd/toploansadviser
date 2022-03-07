<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Home Equity Loan Calculator</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>If you’re planning to take out a home equity loan, you’ll have to use a home equity loan calculator to
              figure out what kind of loan you can qualify for. The amount of money you can borrow using this loan type
              depends on how much equity you have in a property. The more equity you have, the more cash you can pull
              out of it. Consequently, the better your credit score, the better interest rates you’ll qualify for.
              Here’s how to use a home equity loan calculator.</p>
          </div>
        </div>

      </div>
    </section>
    <section class="home-equity-calculator-area">
      <div class="home-equity-calculator-container">
        <div class="title-box">
          <h2 class="title">Home Equity Calculator</h2>
          <div class="help-container">
            <img alt="" class="icon" src="@/assets/img/help-icon.png">
            <p class="text">Tracking rates.We can help.</p>
            <form class="input-box">
              <input autocomplete="off" class="input" name="msg" type="text">
              <button class="send" type="button">SEND</button>
            </form>
          </div>
        </div>
        <div class="calculator-container">
          <div class="calculator-form-box">
            <form class="calculator-form">
              <div class="input-block-item">
                <label for="">Loan amount</label>
                <div class="input-box loan-amount-input">
                  <input v-model="loan_amount" type="text" @input="inputLoanAmount">
                </div>
              </div>
              <div class="input-block-item">
                <label for="">Loan term in years</label>
                <div class="input-box">
                  <input v-model="year" type="text" @input="inputYear">
                </div>
              </div>
              <div>Or</div>
              <div class="input-block-item">
                <label for="">Loan term in months</label>
                <div class="input-box">
                  <input v-model="month" type="text" @input="inputMonth">
                </div>
              </div>
              <div class="input-block-item">
                <label for="">Interest rate per year</label>
                <div class="form-bottom-box">
                  <div class="input-box submit-input-box">
                    <input v-model="interest_rate" type="text" @input="inputInterestRate">
                  </div>
                  <button class="submit-btn" type="button" @click="handleCompute">CALCULATE</button>
                </div>
              </div>
            </form>
            <div class="calculator-results-container">
              <div class="results-top">
                <div class="results">
                  <span>Monthly Payment</span>
                  <div class="money-box">
                    <span class="coin">$</span>
                    <span class="money">{{ monthlyPayment }}</span>
                  </div>
                </div>

                <div class="total-paid-box">
                  <span>Total Principal Paid</span>
                  <span>${{ monthlyPrincipalPayment }}</span>
                </div>
                <div class="total-paid-box">
                  <span>Total Interest Paid</span>
                  <span>${{ monthlyInterestPaid }}</span>
                </div>
              </div>


              <div class="btn-group">
                <a class="btn" href="">COMPARE LOAN RATES</a>
                <span class="switch-btn">Show amortization schedule</span>
              </div>
            </div>
          </div>
          <div class="add-extra-payments-container">
            <div :class="{'switch-btn': true, 'show': isShowExtraPaymentContainer}" @click="showExtraPaymentContainer">
              <span>ADD EXTRA PAYMENTS</span>
              <span class="iconfont">&#xe600;</span>
            </div>
            <div :class="{'extra-payments-container': true, 'show': isShowExtraPaymentContainer}">
              <p class="text">Calculate the impact of extra payments using any combination of the inputs below. To see
                your new estimated payoff date, click ‘Show amortization schedule’ link above.</p>
              <div class="info-item">
                <div class="item-left">
                  <div class="input-box">
                    <input type="text">
                  </div>
                  <span class="tips">to your monthly payment</span>
                </div>
              </div>
              <div class="info-item">
                <div class="item-left">
                  <div class="input-box">
                    <input type="text">
                  </div>
                  <span class="tips">as an extra yearly payment occurring every:</span>
                </div>
                <div class="item-right">
                  <select id="" name="">
                    <option value="1">January</option>
                    <option selected value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
              <div class="info-item">
                <div class="item-left">
                  <div class="input-box">
                    <input type="text">
                  </div>
                  <span class="tips">as a one-time payment in:</span>
                </div>
                <div class="item-right">
                  <select id="" name="">
                    <option value="1">January</option>
                    <option selected value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select id="" name="">
                    <option value="">2022</option>
                    <option value="">2023</option>
                  </select>
                </div>
              </div>
              <div class="info-item button-info">
                <button class="btn">
                  APPLY EXTRA PAYMENTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-equity-content-area">
      <div class="home-equity-content-container">
        <h3 class="home-equity-container-title">How to Use a Home Equity Loan Calculator?</h3>
        <div class="home-equity-content">
          <p>Calculating your home equity loan is fairly simple with the help of free online calculators. A loan
            calculator will help you determine how much money you will be able to borrow. Most home equity calculators
            will ask you for your home address to estimate the property value and mortgage balance by using market data
            for the specific location. In case some of the automatic estimates are not correct, you can easily edit them
            to insert correct information. Your estimated home value and mortgage balance are needed to calculate your
            LTV ratio.</p>
          <p>LTV stands for loan-to-value ratio and you get it by dividing the amount you owe on your mortgage by the
            market value of your home. Finally, you’ll need to insert your exact credit score to find out what kind of
            rates you can qualify for. Once you’ve got all the info in the calculator, click on the green button to get
            results and see what interest rates apply to your situation.</p>
          <p>Here’s an example: if your home is worth $400,000 and you still owe $200,000 as your mortgage, your loan to
            value ratio is 50%. We get this ratio by dividing $200,000 by $400,000, which gives us 0.50. Thus, your loan
            to value ratio is 50% and your home equity is also 50% because you’ve paid off half of your mortgage debt.
            How much money you’ll be able to borrow with these numbers depends on the lender you choose. However, some
            lenders allow an LTV of 80%, meaning they would allow you to borrow an additional 30%, bringing the amount
            you owe to $320,000, which is 80% of the original home value of $400,000.</p>
        </div>
      </div>
      <div class="home-equity-content-container">
        <h3 class="home-equity-container-title">Applying for a Home Equity Loan</h3>
        <div class="home-equity-content">
          <p>As you can see, using a home equity loan calculator is quite easy. However, the results will depend on your
            credit score and LTV ratio. It’s best to try out multiple different calculators provided by different
            lenders. That way, you might find that you qualify for better rates at a different lender, which will allow
            you to save some money in the long run. </p>
          <p>You may also look into HELOC calculators as a good alternative, depending on what kind of loan you need. A
            HELOC is much different than a home equity loan – it allows you to borrow money against your home equity
            through a system similar to a credit card. With a HELOC, you can draw different amounts of money as you come
            to need them during a 10 year withdrawal period. </p>
          <p>Home equity loans, on the other hand, provide a one time lump sum payment which can come in handy if you
            need to cover big expenses such as emergencies or home renovations. Make sure to look into both options
            before settling for one. There are HELOC calculators you can use as well, which are more suitable for
            determining how much money you can borrow over an extended period of time. The requirements for this
            calculator will be similar, if not identical to the home equity loan calculators. Don’t hesitate to consult
            with financial advisors of the lenders themselves when choosing the best option for your needs.</p>
        </div>
      </div>
      <div class="website-btn-container">
        <p class="text">Check your Approval Odds for a loan</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>

    </section>
    <section class="must-read-area">
      <div class="must-read-container">
        <h3 class="read-title">Read More»</h3>
        <ul class="read-list">
          <li>
            <a class="read-link" href="" rel="noreferrer noopener" target="_blank">Best Mortgage Refinance
              Lenders</a>
          </li>
          <li>
            <a class="read-link" href="" rel="noreferrer noopener" target="_blank">Best Mortgage Refinance
              Lenders</a>
          </li>
          <li>

            <a class="read-link" href="" rel="noreferrer noopener" target="_blank">Best Mortgage Refinance
              Lenders</a>
          </li>
        </ul>

      </div>
    </section>

  </main>
</template>

<script>
import NewStar from '../components/NewStar/index.vue'
import {updateTime} from "../utils/date";

export default {
  components: {
    NewStar
  },
  async asyncData({error, $axios}) {

  },
  data() {
    return {
      isShowExtraPaymentContainer: false,
      loan_amount: '', // 贷款金额
      year: '', // 贷款年限
      month: '', //贷款几个月
      interest_rate: '', // 利率
      totalInterest: 0, //总利息
      monthlyPayment: 0, //每月所还金额
      monthlyInterestPaid: 0, // 每月所还利息
      monthlyPrincipalPayment: 0, // 每月所还本金

    }
  },
  methods: {
    updateTime,
    showExtraPaymentContainer() {
      this.isShowExtraPaymentContainer = !this.isShowExtraPaymentContainer;
    },
    // 输入贷款金额
    inputLoanAmount() {
      this.loan_amount = Number(this.loan_amount);
      if (this.loan_amount > 1000000) {

      }
    },
    // 输入年份
    inputYear() {
      this.month = Number(this.year) * 12;
      if (this.year >= 7) {

      }
    },
    // 输入月份
    inputMonth() {
      this.year = Number(this.month) / 12;
      if (this.month > 84) {

      }
    },

    //输入利率
    inputInterestRate() {

    },

    //计算
    handleCompute() {
      this.totalInterest = this.loan_amount * (this.interest_rate / 100) * this.year; //总共归还的利息

      this.monthlyInterestRate = (this.interest_rate / 100) / 12;

      //每月需要支付的金额
      this.monthlyPayment = (this.loan_amount * this.monthlyInterestRate * Math.pow((1 + this.monthlyInterestRate), this.month) / (Math.pow((1 + this.monthlyInterestRate), this.month) - 1)).toFixed(2);
      let totalInterestPaid = 0;
      let monthlyInterestPaid = 0;
      for (let i = 1; i <= this.month; i++) {
        monthlyInterestPaid = (this.loan_amount - Number(this.loan_amount * this.monthlyInterestRate * Math.pow((1 + this.monthlyInterestRate), this.month) / (Math.pow((1 + this.monthlyInterestRate), this.month) - 1)) * (i - 1)) * this.monthlyInterestRate;

        totalInterestPaid = (Number(totalInterestPaid) + Number(monthlyInterestPaid)).toFixed(2);
      }

      this.monthlyInterestPaid = totalInterestPaid;
      this.monthlyPrincipalPayment = Number(totalInterestPaid) + this.loan_amount;
      //
      // this.monthlyInterestPaid = (this.totalInterest / this.month).toFixed(2);
      //
      // this.monthlyPrincipalPayment = (this.monthlyPayment - this.monthlyInterestPaid).toFixed(2);
    }

  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/home-equity-calculator.scss";
</style>
