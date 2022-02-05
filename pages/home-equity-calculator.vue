<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
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
    <section class="student-calculator-area">
      <div class="student-calculator-container">
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
                  <input type="text">
                </div>
              </div>
              <div class="input-block-item">
                <label for="">Loan term in years</label>
                <div class="input-box">
                  <input type="text">
                </div>
              </div>
              <div>Or</div>
              <div class="input-block-item">
                <label for="">Loan term in months</label>
                <div class="input-box">
                  <input type="text">
                </div>
              </div>
              <div class="input-block-item">
                <label for="">Interest rate per year</label>
                <div class="form-bottom-box">
                  <div class="input-box submit-input-box">
                    <input type="text">
                  </div>
                  <button class="submit-btn" type="button">CALCULATE</button>
                </div>
              </div>
            </form>
            <div class="calculator-results-container">
              <div class="results-top">
                <div class="results">
                  <span>Monthly Payment</span>
                  <div class="money-box">
                    <span class="coin">$</span>
                    <span class="money">847.98</span>
                  </div>
                </div>

                <div class="total-paid-box">
                  <span>Total Principal Paid</span>
                  <span>$5,000</span>
                </div>
                <div class="total-paid-box">
                  <span>Total Interest Paid</span>
                  <span>$87.86</span>
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
        <h3 class="student-container-title">How to Use a Home Equity Loan Calculator?</h3>
        <div class="student-content">
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
      <div class="student-content-container">
        <h3 class="student-container-title">Applying for a Home Equity Loan</h3>
        <div class="student-content">
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
            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance
              Lenders</a>
          </li>
          <li>
            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance
              Lenders</a>
          </li>
          <li>

            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance
              Lenders</a>
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

export default {
  components: {
    NewStar
  },
  async asyncData({error, $axios}) {

  },
  data() {
    return {
      isShowExtraPaymentContainer: false,
      calculator: {
        price: 500000, //总金额
        down_payment: 500000 * 0.20,// 预付款
        loan_terms: 10, //贷款年限
        interest_rate: 4.5, // 利率

      },
      slider: 50,
      products: [
        {
          name: "Rocket Mortgage",
          link: "",
          logo: "/data/images/best-mortgage-refinance-lenders/rocket-mortgage-logo.png",
          score: "9.8",
          feature: "Best Overall",
          slogan: "1 Application, Several Offers",

          advantage: [
            {
              text: "Compare rates in minutes"
            },
            {
              text: "Easy process, 100% online"
            },
            {
              text: "Secured website with data encryption"
            }
          ],
          credit_score: "620",
          down_payment: "3%",
          loan_types: [
            {
              text: "Conventional"
            },
            {
              text: "FHA"
            },
            {
              text: "Jumbo"
            }
          ]
        },
        {
          name: "Better Mortgage",
          link: "",
          logo: "/data/images/best-mortgage-refinance-lenders/better-logo.png",
          score: "9.7",
          feature: "Best For Fast Funding",
          slogan: "A+ Customer Satisfaction",
          advantage: [
            {
              text: "35 years of experience"
            },
            {
              text: "Fully automated, online process"
            },
            {
              text: "Pre-approval available"
            }
          ],
          credit_score: "620",
          down_payment: "3%",
          loan_types: [
            {
              text: "Conventional"
            },
            {
              text: "FHA"
            },
            {
              text: "Jumbo"
            }
          ]
        },
        {
          name: "Loan Depot",
          link: "",
          logo: "/data/images/best-mortgage-refinance-lenders/loan-depot-logo.png",
          score: "9.5",
          feature: "Best For Online Mortgage Refinancing",
          slogan: "No Login/Registration Required",
          advantage: [
            {
              text: "Has funded over $65 billion in home loans"
            },
            {
              text: "Clearance in as little as 8 days"
            },
            {
              text: "Mello smartloan™ digital asset verification"
            }
          ],
          credit_score: "580-620",
          down_payment: "3.5%",
          loan_types: [
            {
              text: "Conventional"
            },
            {
              text: "FHA"
            },
            {
              text: "VA"
            },
            {
              text: "Jumbo"
            }
          ]
        },
        {
          name: "Zillow",
          link: "",
          logo: "/data/images/best-mortgage-refinance-lenders/zillow-logo.png",
          score: "8.8",
          feature: "Best Marketplace",
          slogan: "Unlock Your Financial Potential",
          advantage: [
            {
              text: "Provides great refinancing calculators"
            },
            {
              text: "An all-digital app, no hassle"
            },
            {
              text: "Dedicated support team"
            }
          ],
          credit_score: "620",
          down_payment: "3.5%",
          loan_types: [
            {
              text: "Conventional"
            },
            {
              text: "FHA"
            },
            {
              text: "VA"
            },
            {
              text: "Jumbo"
            }
          ]
        }
      ]
    }
  },
  methods: {
    updateTime,
    showExtraPaymentContainer() {
      this.isShowExtraPaymentContainer = !this.isShowExtraPaymentContainer;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/home-equity-calculator.scss";
</style>
