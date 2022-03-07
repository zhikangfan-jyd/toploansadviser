<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Calculate Your Personal Loan Payment</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>Calculating loan interest may sound like a tedious task, but it really pays off to know what you are
              getting yourself into. Whether you are buying a car, house, or going to college, understanding how
              interest can work against you can save you a lot of money in the long run. Simply saying that you will
              worry about it later can cause you to end up <a href="/personal-loan" target="_blank"><strong>paying off a
                loan</strong></a> for much longer than you expected. Not
              knowing how to calculate it is not an excuse either with the many free loan interest calculators that are
              available online. You can simply plug in your loan details and see exactly how much interest you will pay
              with little effort. </p>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">

        <div class="preface-content">
          <p style="font-weight: 500;">This personal loan calculator will help you determine the monthly payments on a
            loan.</p>
        </div>
        <!--        <img alt="" class="division" src="@/assets/img/division-icon.webp">-->
      </div>
    </section>
    <section class="personal-calculator-area">
      <div class="personal-calculator-container">
        <div class="title-box">
          <h2 class="title">Personal Loan Calculator</h2>
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
    <section class="product-area">
      <div class="product-container">
        <div class="product-container-top-box">
          <div class="disclosure">
              <span class="title"
                    @click="handleShowDisclosure"
              >Advertising Disclosure</span
              >
            <div :class="{'disclosure_content': true, 'show': isShowDisclosure}">
              The information shared through this website is based on our team’s personal judgements and views. We use
              our own comparisons to assign values, which are not intended to reflect a certain benchmark of
              precision. To keep our website free for use, we accept referral fees from various service providers,
              which have the potential to influence their respective appointed scores. A third party’s participation
              on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on
              this site is subject to change at any time.The site does not include all companies offering loan
              products or all available loan offers.
            </div>
          </div>
        </div>
        <div class="product-list-box">
          <div class="product-title-box">
            <div class="title lenders"><span class="text">Lenders</span></div>
            <div class="title score">
                <span class="text">
                  Score
                  <el-popover placement="bottom" trigger="hover" width="320">
                    <span slot="reference" class="iconfont">&#xe669;</span>
                    <div class="content">
                      <p>
                        The ratings and ranking on our website are determined by
                        our editorial team. The scoring mechanism for loan
                        products takes into account more than 10 data points
                        across multiple categories, such as APR, repayment
                        options, customer service, lender transparency, loan
                        eligibility and others.
                      </p>
                    </div>
                  </el-popover>
                </span>
            </div>
            <h5 class="title features">
              <span class="text">Loan Features</span>
            </h5>
            <h5 class="title terms"><span class="text">Loan Amount</span></h5>
          </div>
          <div v-if="products.length !== 0" class="product-list">
            <div
              v-for="(item, index) in products"
              :key="index"
              class="product-item"
            >
              <div v-if="index === 0" class="corner-box">
                <span class="text">Best Choice</span>
              </div>
              <div v-if="index === 0" class="visited-box">
                <span class="iconfont"></span>
                <span class="text"
                ><strong>503 users</strong> chose this site today</span
                >
              </div>
              <div class="product-item-container">
                <div class="img-score-box">
                  <div class="img-box">
                    <img v-lazy="item.logo" :alt="item.name" :title="item.name + ' personal loans'"/>
                    <div v-if="item.disclaimer !== ''" class="disclaimer">
                      Disclaimer
                      <el-popover
                        placement="bottom"
                        trigger="hover"
                        width="320"
                      >
                          <span slot="reference" class="iconfont"
                          >&#xe669;</span
                          >
                        <div class="content">
                          <p>{{ item.disclaimer }}</p>
                        </div>
                      </el-popover>
                    </div>
                  </div>

                  <div class="rate-box">
                    <div class="rate">
                      <span class="score">{{ item.rate.score }}</span>
                      <div v-if="index === 0" class="trustpilot-box">
                        <div class="text-box">
                          <span class="iconfont">&#xe64c;</span>
                          <span class="text">Trustpilot</span>
                        </div>
                        <ul class="star-list">
                          <li>
                            <span class="iconfont">&#xe64c;</span>
                          </li>
                          <li>
                            <span class="iconfont">&#xe64c;</span>
                          </li>
                          <li>
                            <span class="iconfont">&#xe64c;</span>
                          </li>
                          <li>
                            <span class="iconfont">&#xe64c;</span>
                          </li>
                          <li>
                            <span class="iconfont">&#xe64c;</span>
                          </li>
                        </ul>
                      </div>
                      <div v-else class="star-box">
                        <el-rate
                          :colors="['#29b674', '#29b674', '#29b674']"
                          :value="computeScore(item.rate.score)"
                          disabled
                        ></el-rate>
                      </div>
                      <nuxt-link
                        v-if="item.review_key !== ''"
                        :to="'/reviews/' + item.review_key"
                        class="reviews-link"
                      >Read Review
                      </nuxt-link
                      >
                    </div>
                  </div>
                </div>
                <!-- <p class="phone-slogan">{{item.introduce}}</p> -->
                <div class="features-terms-box">
                  <div class="list-box">
                    <dl class="features-list">
                      <dt>
                        <span class="pc-text">{{ item.introduce }}</span>
                        <h5 class="phone-text">Loan Features</h5>
                      </dt>
                      <dd>
                        <span class="iconfont">&#xe604;</span>
                        <h3
                          class="text"
                          style="display: inline; font-weight: normal"
                        >
                          Min. Credit Score: <strong>{{ item.compare.credit_score }}</strong>
                          <el-popover
                            v-if="item.compare.credit_text !== ''"
                            placement="bottom"
                            trigger="hover"
                            width="280"
                          >
                              <span slot="reference" class="iconfont"
                              >&#xe669;</span
                              >
                            <div class="content">
                              <p>{{ item.compare.credit_text }}</p>
                            </div>
                          </el-popover>
                        </h3>
                      </dd>
                      <dd>
                        <span class="iconfont">&#xe65a;</span>
                        <p class="text">
                          APR：<strong>{{ item.compare.apr.min }}% -
                          {{ item.compare.apr.max }}%</strong>
                        </p>
                      </dd>
                      <dd>
                        <span class="iconfont">&#xe65a;</span>
                        <p class="text">Term：<strong>{{ item.compare.term }}</strong></p>
                      </dd>
                    </dl>
                  </div>
                  <div class="terms-box">
                    <h5 class="title">Loan Amount:</h5>
                    <span
                      v-if="item.amount.max !== 'Infinity'"
                      class="text-box"
                    ><span>${{ formatNum(String(item.amount.min)) }}-</span
                    ><span
                    >${{ formatNum(String(item.amount.max)) }}</span
                    ></span
                    >
                    <span v-else class="text-box"
                    ><span>up to</span>
                        <span
                        >${{ formatNum(String(item.amount.min)) }}</span
                        ></span
                    >
                  </div>
                </div>
                <div class="btn-box">
                  <a
                    :href="'/redirect/personal-loan/'+ item.name + '?gclid=' + item.gclid"
                    class="btn"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    @click="
                        handleTracking({
                          name: item.name,
                          click_time: new Date().getTime(),
                          link: item.link,
                        })
                      "
                  >
                    <h3
                      class="text"
                      style="display: inline;"
                    >
                      Check My Rates >>
                    </h3>
                    <!--                    <span class="iconfont">&#xe63c;</span>-->
                  </a>
                  <a
                    :href="'/redirect/personal-loan/'+item.name + '?gclid=' + item.gclid"
                    class="visit-btn"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >Visit site >></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-else class="no-results">
            <span class="iconfont">&#xe60b;</span>
          </div>
        </div>
      </div>
    </section>
    <section class="personal-content-area">
      <div class="personal-content-container">
        <h3 class="personal-container-title">What is Loan Interest?</h3>
        <div class="personal-content">
          <p>
            When you take out a personal loan, you will have to repay more money than you
            borrowed. This additional money you must pay is called interest. As a lender, it would not be worth it to
            simply give out money without any incentive. Therefore, lenders will charge you to borrow their money at a
            predetermined interest rate. The amount of interest you will end up paying can depend on factors like the
            type
            of loan and your credit score. Luckily, there are many <strong>tools online that can help you calculate how
            much
            interest you can expect to pay</strong>. This can save you the time of doing it manually on your own and let
            you
            focus
            on more important matters.
          </p>
        </div>

      </div>
      <div class="personal-content-container">
        <h3 class="personal-container-title">How to Calculate Personal Loan Interest?</h3>
        <div class="personal-content">
          <p>Regardless of what you are planning to purchase with your loan money, it is important to calculate how much
            interest you are expected to pay. Doing so will allow you to visualize how much you will have to fork out
            for each month to cover your interest payment. </p>
          <p>Nowadays, you can simply <a href="/personal-loan-calculator" target="_blank"><strong>find a loan interest
            calculator online</strong></a> with a quick google search. Within the
            calculator, you can input the loan amount, loan term, interest rate, and even how often your interest
            compounds. There are many different loan types and multiple different formulas to calculate interest
            payments, so these calculators can make your life very easy compared to doing the math yourself. However, if
            you are interested in the math behind it, we can look at how it breaks down. Most loans are amortized which
            means the payments made go towards both the principal and interest. Using the following formula, “A” is
            going to be your monthly payment including interest. “P” is your principal which is just the amount of money
            borrowed. The variable “r” is the interest rate per period, and “n” is the number of payments. </p>
          <p class="formula green">A = P{r(1+r)^n} / {(1+r)^n-1}</p>
          <p>Let’s look at a simple example using a $10,000 loan with a 3% interest rate paid over 5 years with monthly
            payments. You can simply just plug in “A” and “P”, but for “r” you must take .03 and divide it into 12
            months (.03/12 = 0.0025). We do this because the interest rate is 3% for a 12-month period. To calculate
            “n”, we must multiply 12 by 5 to get 60, the total amount of monthly payments. Now that we have all the
            variables done let’s plug them all in.</p>
          <p class="formula green">10,000 {(0.0025 * 1.0025^60) / (1.0025^60 - 1)}</p>
          <p class="formula green">= 10,000 * (.0179686907)</p>
          <p class="formula green">= $179.69</p>
          <p>According to our math above our monthly loan payment including interest will be $179.69.</p>
        </div>
      </div>
      <div class="personal-content-container">
        <h3 class="personal-container-title">Factors That Affect How Much Interest You Pay</h3>
        <div class="personal-content">
          <p>At this point, you may be wondering how your interest rate is determined. Nobody wants to pay interest at
            all so inquiring about the factors that determine your rate are very important. The main factors that have
            an impact on your interest rate will be your credit score and the amount of debt you already have. It is
            important to remember that lenders are taking a risk when they decide to let you borrow money from them, so
            they must take these metrics into account when deciding how much interest you will have to pay. </p>
          <p>If you already have a mountain of debt that you have yet to pay off it is pretty safe to assume that you
            will not be <a href="/personal-loan" target="_blank"><strong>paying off your new loan</strong></a> anytime
            soon. In the eyes of the
            lender, this can be seen as a good and
            a bad thing. They will be happy that you will be paying them interest for a long time. However, they also
            realize that there is a chance that the money they lend out may never even come back given that you still
            have tons of debt owed to other lenders.</p>
        </div>
      </div>
      <div class="personal-content-container">
        <h3 class="personal-container-title">How to Get the Best Loan Interest Rates</h3>
        <div class="personal-content">
          <p>The best way to ensure that you are getting the best interest rate is to take care of your financial
            health. This means paying off your debt on time and working to keep your credit score high. You must prove
            to lenders that debts will be paid off on time and that you are not posing a risk to them. </p>
          <p>An easier way to make sure you are getting a good interest rate is to simply shop around. Make sure to
            <a href="/personal-loan" target="_blank"><strong>compare loan offers and pick the one</strong></a> that is
            going to work the best in your situation. </p>
          <p>Another option that you have is to get somebody to co-sign for you. If you know somebody with good credit
            you can have them vouch for you on the loan so that you are more likely to get a better rate. The payments
            would be on you, but if you miss any it could ruin your co-signers credit as well.</p>
        </div>
      </div>
      <div class="personal-content-container">
        <h3 class="personal-container-title">Bottomline</h3>
        <div class="personal-content">
          <p>Understanding the factors that determine how you <strong>get the best interest rates</strong> is important.
            You do not want
            to risk ruining your credit score and not being able to <a href="/how-to-apply-a-personal-loan"
                                                                       target="_blank"><strong>get a good deal on a
              loan</strong></a>.
            You must prove to lenders
            that you are not a risky client, and they will reward you with better interest rates which will help you
            save money. If you understand how interest works and keep your credit score in check then <a
              href="/how-to-apply-a-personal-loan" target="_blank"><strong>getting a personal
              loan</strong></a> should be a breeze.</p>
        </div>
      </div>
      <div class="website-btn-container">
        <p class="text">Check if you qualify a personal loan</p>
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
import {computeScore, formatNum} from "../utils/index";
import {updateTime} from "../utils/date";

export default {
  components: {
    NewStar
  },
  async asyncData({error, $axios}) {
    let results = await $axios.$get(
      "/data/person_loan_product.json"
    );

    return {
      products: results.data
    }
  },
  data() {
    return {
      isShowDisclosure: false,
      isShowExtraPaymentContainer: false,
      loan_amount: '', // 贷款金额
      year: '', // 贷款年限
      month: '', //贷款几个月
      interest_rate: '', // 利率
      totalInterest: 0, //总利息
      monthlyPayment: 0, //每月所还金额
      monthlyInterestPaid: 0, // 每月所还利息
      monthlyPrincipalPayment: 0, // 每月所还本金
      allocationPlan: [] //分摊计划
    }
  },
  methods: {
    formatNum,
    computeScore,
    updateTime,
    showExtraPaymentContainer() {
      this.isShowExtraPaymentContainer = !this.isShowExtraPaymentContainer;
    },
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
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
      let monthlyAllocationPlan = {}; // 每月还款计划
      for (let i = 1; i <= this.month; i++) {
        monthlyInterestPaid = (this.loan_amount - Number(this.loan_amount * this.monthlyInterestRate * Math.pow((1 + this.monthlyInterestRate), this.month) / (Math.pow((1 + this.monthlyInterestRate), this.month) - 1)) * (i - 1)) * this.monthlyInterestRate;

        totalInterestPaid = (Number(totalInterestPaid) + Number(monthlyInterestPaid)).toFixed(2);
        // console.log(monthlyInterestPaid);
        monthlyAllocationPlan = {
          month: i,
          monthlyInterestPaid: monthlyInterestPaid
        }
        // 总的还款计划
        this.allocationPlan.push(monthlyAllocationPlan)
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
@import "~/assets/scss/personal-loan-calculator.scss";
</style>
