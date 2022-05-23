<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Student Loan Calculator</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="https://service.toploansadviser.com/images/9-1_1652173748806.webp">
            <p class="author-desc">Written by <span class="author-name">Hilary Hendershott</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>A <a href="/student-loans-calculator">student loan calculator</a> is exactly what the name says - a
              calculator that helps you figure out the
              structure of your student loans. A calculator of this kind can help you find the right repayment strategy
              for your specific financial situation. Most importantly, it’s very simple to use, which makes student loan
              management easier for those who don’t have much experience in the lenders’ world.</p>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Why do you need a student loan calculator?</h2>
        <div class="preface-content">
          <p>All you need in order to use this <a href="/student-loans-calculator">student loan calculator</a> is basic
            information about the student loan you
            have or you’re looking to get. You pop the numbers in and the calculator shows you exactly what kind of a
            monthly payment plan you’ll be set up with and how long it will take you to pay back the entire loan.</p>
          <p>Most importantly, the calculator will show you how much interest in total you will be paying (that is, the
            amount of money you will pay simply for the luxury of borrowing this loan). With that said, here are a few
            basic things we need to cover before you start <a href="/student-loans-calculator">using a student loan
              calculator</a>.</p>
        </div>
      </div>
    </section>
    <section class="student-calculator-area">
      <div class="student-calculator-container">
        <div class="title-box">
          <h2 class="title">Student Loan Calculator</h2>
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
    <!--    <section class="products-list-area">-->
    <!--      <div class="products-list-container">-->
    <!--        <h3 class="product-area-title">Based on your inputs, we recommend the following lenders:</h3>-->
    <!--        <div v-for="(product, index) in products" :key="index" class="product-item">-->
    <!--          <div v-if="index < 2" class="corner-box">-->
    <!--            <img v-if="index === 0" alt="Best Choice" src="@/assets/img/best-choice.png">-->
    <!--            <img v-if="index === 1" alt="Low Rates" src="@/assets/img/low-rates.png">-->
    <!--          </div>-->
    <!--          <div class="logo-info-col col">-->
    <!--            <div class="logo-info-box">-->
    <!--              <img :src="product.logo" alt="" class="logo">-->
    <!--              <div v-if="index === 0" class="trustpilot-box">-->
    <!--                <div class="trustpilot-top"><span class="iconfont">&#xe64c;</span><span>Trustpilot</span></div>-->
    <!--                <div class="trustpilot-bottom">-->
    <!--                  <ul class="start-list">-->
    <!--                    <li class="iconfont">&#xe64c;</li>-->
    <!--                    <li class="iconfont">&#xe64c;</li>-->
    <!--                    <li class="iconfont">&#xe64c;</li>-->
    <!--                    <li class="iconfont">&#xe64c;</li>-->
    <!--                    <li class="iconfont">&#xe64c;</li>-->
    <!--                  </ul>-->
    <!--                  <span class="score">{{ product.score }}</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div v-if="index !== 0" class="rate-box">-->
    <!--                <div class="star-box">-->
    <!--                  <NewStar :max="10" :score="product.score"></NewStar>-->
    <!--                </div>-->
    <!--                <span class="score">{{ product.score }}</span>-->
    <!--              </div>-->
    <!--              <a :href="product.link" class="view-details-btn" rel="noopener noreferrer nofollow">View details >> </a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="credit-score-col col">-->
    <!--            <div class="credit-score-box">-->
    <!--              <div class="key">MIN.CREDIT SCORE</div>-->
    <!--              <div class="value">{{ product.credit_score }}</div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="loan-types-col col">-->
    <!--            <div class="loan-types-box">-->
    <!--              <div class="key">LOAN TYPES</div>-->
    <!--              <div class="value">-->
    <!--                <p v-for="(type, id) in product.loan_types" :key="id" class="type">-->
    <!--                  <span class="iconfont">&#xe604;</span>-->
    <!--                  <span class="text">{{ type.text }}</span>-->
    <!--                </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="down-payment-col col">-->
    <!--            <div class="down-payment-box">-->
    <!--              <div class="key">MIN.DOWN PAYMENT</div>-->
    <!--              <div class="value">{{ product.down_payment }}</div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="btn-box-col col">-->
    <!--            <div class="btn-box">-->
    <!--              <a :href="product.link" class="btn" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--              <a :href="product.link" class="visit-btn" rel="noopener noreferrer nofollow">Visit site >></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="mail-container">-->
    <!--          <div class="mail-info">-->
    <!--            <p class="title">Tracking rates? We can help.</p>-->
    <!--            <p class="txt">We'll bring the lates mortage tates to you, so you never miss a great match.</p>-->
    <!--          </div>-->
    <!--          <form class="user-email-form">-->
    <!--            <input class="user-email-input" name="user-email" placeholder="Email address" type="text">-->
    <!--            <button class="send-btn" type="button">Sign Up Now</button>-->
    <!--          </form>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <section class="student-content-area">
      <div class="student-content-container">
        <!--        <h3 class="student-container-title">Understanding a mortgage</h3>-->
        <h5 class="student-container-subtitle">Loan Amount</h5>
        <div class="student-content">
          <p>Let’s start with the most important piece of info - the loan amount. This amount of money will be based on
            your college enrollment level. For instance, if you’re a graduate student you won’t be offered the same
            amount as an undergraduate student. The loan amount will also depend on whether you’re looking at federal or
            <a href="/student-loan" rel="noreferrer noopener" target="_blank">private lenders</a>. Regardless of how
            much money you are offered,
            it’s always best to borrow only the amount
            you actually need in order to cover your education fees. </p>
        </div>
        <h5 class="student-container-subtitle">Loan Term</h5>
        <div class="student-content">
          <p>Loan term is the amount of time it will take you to repay the entire loan. The <a href="/best-parent-loans"
                                                                                               target="_blank">standard
            loan term for
            federal loans is 10 years</a>. However, you can qualify for alternative payment plans which can offer terms
            from
            10 to 25 years in total. If you’re looking at private lenders, you’ll have more flexible options when it
            comes to loan terms because private loans can last anywhere from 5 to 20 years. </p>
        </div>
        <h5 class="student-container-subtitle">Interest Rates</h5>
        <div class="student-content">
          <p>Interest rates determine how much money you’ll be paying on top of the amount that’s needed to pay back the
            original sum you borrowed. Naturally, the interest rates will depend on your financial background and the
            type of lender you choose. The nature of your income along with your credit score will play a big role in
            determining what your <strong>final interest rates</strong> are going to be. </p>
        </div>

      </div>
      <div class="student-content-container">
        <h3 class="student-container-title">Other Factors to Student Loans Should Keep In Mind</h3>
        <div class="student-content">
          <p>There are several other factors you should keep in mind. For instance, there is a <strong>difference
            between fixed
            and variable rates</strong>. A loan with a fixed rate will not change during your entire loan term, whereas
            a loan
            with a variable rate may increase or decrease depending on market conditions. The second option might sound
            like a gamble so be careful when signing up for loans with variable rates.</p>
          <p>Moreover, keep in mind that the <strong>term length will have an effect on the amount of interest you have
            to pay</strong>.
            The shorter the term, the lower the interest rate. However, that also means you have to be able to make
            higher payments on time. Last but not least, keep in mind that <a href="/best-private-sdudent-loans"
                                                                              target="_blank">private student loans</a>
            require a credit check.
            If your credit score is not high enough, your co-signer’s needs to be. Otherwise, you won’t qualify for the
            loan.</p>
        </div>
      </div>
      <!--      <div class="website-btn-container">-->
      <!--        <p class="text">Check your Approval Odds for a loan</p>-->
      <!--        <a class="btn" href="" rel="noopener noreferrer nofollow">-->
      <!--          Get Started >>-->
      <!--        </a>-->
      <!--      </div>-->

    </section>
    <section class="must-read-area">
      <div class="must-read-container">
        <h3 class="read-title">Read More»</h3>
        <ul class="read-list">
          <li>
            <a class="read-link" href="/student-loan" rel="noreferrer noopener" target="_blank">Best private student
              loan</a>
          </li>
          <li>
            <a class="read-link" href="/best-parent-loan" rel="noreferrer noopener" target="_blank">Best parent loan</a>
          </li>
        </ul>

      </div>
    </section>
    <!--    <section class="best-mortgage-lenders-area">-->
    <!--      <div class="best-mortgage-lenders-container">-->
    <!--        <h2 class="title">Best mortgage lenders in December 2021</h2>-->
    <!--        <div class="best-mortgage-lenders-main">-->
    <!--          <div class="description-container">-->
    <!--            <div class="text-content">-->
    <!--              <h6 class="text-title">CHOOSE BEST MORTGAGE LENDER</h6>-->
    <!--              <p class="text">If your down payment is less than 20% of the property’s purchase price, you have to-->
    <!--                pay </p>-->
    <!--            </div>-->
    <!--            <ul class="attribute-list">-->
    <!--              <li><span>Max loan</span></li>-->
    <!--              <li><span>APR</span></li>-->
    <!--              <li><span>Repayment terms</span></li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--          <div class="card-container">-->
    <!--            <div class="card-item best-choice">-->
    <!--              <img alt="" class="best-icon" src="@/assets/img/best-choice-icon.png">-->
    <!--              <div class="card-top first">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--            <div class="card-item">-->
    <!--              <div class="card-top second">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--            <div class="card-item">-->
    <!--              <div class="card-top third">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
  </main>
</template>

<script>
import NewStar from '../components/NewStar/index.vue'
import {updateTime} from "../utils/date";
import {seo} from "../utils/seo";

export default {
  head: seo({
    title: 'Student Loan Calculator | Toploansadviser.com',
    description: "It' s easy to calculate your student loan monthly payment. Just enter the details of your student loan into our calculator to see your personal results. It makes you know your loan clearly.",
    url: 'https://www.toploansadviser.com/student-loan-calculator',
    img: 'https://www.toploansadviser.com/data/images/student-loan.webp',
    img_size: {
      width: '551',
      height: '341'
    },
    img_type: 'image/webp',
  }),
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
@import "~/assets/scss/student-loans-calculator.scss";
</style>
