<template>
  <main class="main-container">
    <section class="banner-area">
      <!--      <div class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</div>-->
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Best Emergency Loans {{ updateTime().year }}</span>
          </h1>
          <p class="sub-title">Loans for your Urgent Need</p>
          <div class="content">
            <p>Emergencies come without warning, so you can’t be caught off-guard in case you land in a situation where
              you need money urgently. This is where emergency loans play an integral role. This type of loan is usually
              cheaper and safer than payday or auto title loans.</p>
          </div>
          <p class="update">
            Last updated: {{ updateTime().month.short }} {{ updateTime().year }}
          </p>
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
              <div v-else-if="index === 1" class="corner-box green">
                <span class="text">Low Rates</span>
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
                        <span class="iconfont">&#xe65a;</span>
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

                  >
                    <h3
                      class="text"
                      style="display: inline;"
                    >
                      Check My Rates
                    </h3>
                    <span class="iconfont">&#xe63c;</span>
                  </a>
                  <a
                    :href="'/redirect/personal-loan/'+item.name + '?gclid=' + item.gclid"
                    class="visit-btn"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >Visit site »</a
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
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Best Emergency Loan Lenders for Fast Cash</h2>
        <div class="preface-content">
          <p>We've reviewed the best online lenders for quick loans to help you find a company that meets your needs. We
            took several factors into consideration including interest rates, funding speed, company reputation, fees,
            and
            eligibility requirements.</p>
          <p>Here are our top picks for the best emergency loans of 2022.</p>
        </div>
      </div>

    </section>
    <section class="product-include-area">
      <div class="product-include-container">
        <div v-for="(product, index) in products" :key="index" class="product-include-item">
          <div class="product-include-title">
            <img v-if="index === 0" alt="" class="medal" src="@/assets/img/medal-icon.png">
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">{{ product.name }}</h3>
          </div>
          <div class="card-header">
            <span class="lenders-title">Lenders</span><span class="score-title">Score</span><span
            class="apr-title">APR</span><span class="btn-title">Website</span>
          </div>
          <div class="product-include-card">
            <div v-if="index === 0" class="tips"><span class="g">503 users</span> chose this site today</div>

            <div class="product-include-card-info">
              <div class="logo-box">
                <img :alt="product.name" :src="product.logo" class="logo">
                <div class="read-review-btn">Read Review <span>>></span></div>
              </div>
              <div class="rate-box">

                <div class="score-box">
                  <span class="score">{{ product.rate.score }}</span>
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
                  <div v-else class="rate">
                    <NewStar :max="10" :score="product.rate.score"></NewStar>
                  </div>
                </div>
              </div>
              <div class="content-box">
                <span>{{ product.compare.apr.min }}% - {{ product.compare.apr.max }}%</span>
              </div>
              <div class="btn-box">
                <a :href="product.link" class="btn" rel="noreferrer noopener nofollow">View Rates >></a>
              </div>
            </div>
            <div class="product-include-card-content" v-html="product.description"></div>
          </div>
        </div>
        <div class="website-btn-container">
          <p class="text">Check your Approval for An Emergency loan</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Get Started >>
          </a>
        </div>

      </div>

    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQs about Emergency loan Lenders</h2>
        <div class="question-content">
          <p>This FAQs section will guide first-time readers regarding emergency loans.</p>
          <h3 class="question-title">What is an emergency loan?</h3>
          <p>Any personal loans that are used in situations where unexpected expenses are required are known as
            emergency loans. It could be someone requiring urgent medical attention or a vehicle breakdown. This type of
            loan has a very high interest rate. The period of disbursement for emergency loans varies depending upon the
            kind of loan. Sometimes these are available within few days, while some emergency loan lenders could release
            funds on the same day as approval, which is great for those who need it without delay.</p>
          <h3 class="question-title">Who are emergency loans good for?</h3>
          <p>Those who need access to fast cash to cover an emergency expense can be helped by emergency loans. It can
            also be of assistance for those who are suddenly out of work and need extra cash to cover bills.</p>
          <p>Emergency loans can be used for a variety of expenses, but some personal loan lenders put restrictions on
            how you can utilize these loans. For example, you might not be able to use them for postsecondary education
            costs. Review the terms and limitations of your potential lender before completing an application. Here are
            a few instances where emergency loans can be of help:</p>
          <ul>
            <li><strong>Mortgage payments and rent</strong> – If you need to shell out cash as a home payment is due
              soon, an emergency
              loan can tide you over till you get paid.
            </li>
            <li><strong>Medical expenses</strong> – If you or a loved one requires medical attention, an emergency loan
              is the best way
              to cover these costs.
            </li>
            <li><strong>Utility bills</strong> – Ensure that utility bills are paid on time; this way your phone won’t
              get shut off or
              the electricity won’t get disconnected.
            </li>
            <li><strong>Repairs</strong> – A home equity loan or home equity line of credit might offer better interest
              rates and terms,
              in case of home repairs. However, some repairs might need immediate attention and on-spot payment.
              Similarly, car repairs also pop up unexpectedly. If you need fixes for your home or vehicle, which are
              urgent, then emergency loans are what you need.
            </li>
          </ul>
          <h3 class="question-title">How do emergency loans work?</h3>
          <p>There are several lenders who don’t advertise about specific emergency loans, as these are just personal
            loans. Those who require this kind of loans should find a lender that provides fast approval and quick
            funding for a loan amount as per your requirements. After you get quotes from a few lenders, send in your
            application to the one with the best interest rate and suitable terms. You have to provide identity proof
            and income verification documents during this stage of the application process. After you receive approval,
            funds can be sent directly to the bank account.</p>

          <h3 class="question-title">What are the pros and cons of personal loans?</h3>
          <dl>
            <dt>Pros:</dt>
            <dd>The funds can be used on just about any emergency expense.</dd>
            <dd>Application is pretty fast, and can be completed online.</dd>
            <dd>Approval is quick too, and you might get it on the same day you apply.</dd>

          </dl>
          <dl>
            <dt>Cons:</dt>
            <dd>Unfortunately, the interest rate is very high, which can increase overall cost of the loan.</dd>
            <dd>You might not get the exact loan amount you need. At times, you have to settle for a smaller amount.
            </dd>
            <dd>If you fail to make payments on time, your credit score will plummets.</dd>

          </dl>
          <h3 class="question-title">How to build an emergency fund?</h3>
          <p>You never know when emergencies might crop up, so you have to be prepared well in advance. That is why an
            emergency fund is a must; here are some steps to build one:</p>
          <ul>
            <li>Go through your budget to check where you can make cuts. Try to minimize stuff like dining out or
              monthly subscriptions, so you can divert the extra cash towards an emergency fund.
            </li>
            <li>Utilize any account that gives access to funds when you need them. A high-yield savings account
              doesn’t have as much return as investing in the stock market, but you also don't risk losing money.
            </li>
            <li>Bank CDs generally pay a bit more interest as compared to high yield savings accounts. You can also
              set them up in such a way that every few months, one will reach maturity. . If you need to, you can also
              pay the early withdrawal penalty to access the money.
            </li>
            <li>Why not automate your savings? It will help to keep some cash extra for emergencies at all times.</li>
            <li>Set financial goals of having at least six months’ worth of expenses or six months’ worth of your
              salary saved up. If that isn’t possible immediately, set a specific number, like $1000, or a month’s worth
              of expenses, and then slowly build up.
            </li>
            <li>If you require cash for emergencies, then access the fund for sure, but don’t forget to replenish when
              you can.
            </li>

          </ul>
          <p>Remember it is an emergency fund, so never use it for other expenses such going on a vacation, or as down
            payment on a vehicle.</p>
          <h3 class="question-title">What are emergency loan alternatives?</h3>
          <p>You generally require a solid credit history to take out an emergency loan. If that isn’t the case with
            you, you might not qualify for this type of loan. There are several alternatives, so take a look:</p>
          <p class="strong">Local credit unions and banks</p>
          <p>Reach out to a local credit union or bank, and see if you qualify for a personal loan. They are friendlier
            toward current account holders.</p>
          <p class="strong">Local nonprofits and charities</p>
          <p>Few states and local municipalities have grants or interest-free loans you can take advantage of. </p>
          <p class="strong">Payment plans</p>
          <p>Set up a payment plan instead of paying a sum of money in full. Whether it is for an old medical bill or
            credit card, creditors are willing to work out an alternate repayment method. The setup should be done as
            soon as possible – the more you wait, the less likely it is that they will help you.</p>
          <p class="strong">Paycheck advances</p>
          <p>Have you been on your job for a while? If yes, you can borrow money by asking your employer for a paycheck
            advance.</p>
          <p class="strong">Loan or hardship distribution from your 401(k) plan</p>
          <p>Those who have a 401(k) via your job can ask regarding a 401(k) loan or taking money out of the 401(k) fund
            for hardship assistance.</p>
          <p>Of course this is a last resort, but if you don’t qualify for emergency loans, you could talk to family and
            friends to help out with a bit of cash. Some may let you pay them back whenever you can, and they may not
            charge you interest. It is advisable to get the agreement in writing, so the terms are clear from the
            get-go.</p>
          <p>Always choose the type of emergency loan carefully, and ensure that you understand all terms and
            conditions. Borrowing from a trustworthy lender is a must, so conduct your research before you go ahead and
            submit the application. Work out a repayment plan too, so you can make regular loan payments without debts
            building up.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {updateTime} from "../utils/date";
import {computeScore, formatNum} from "../utils/index";
import NewStar from '~/components/NewStar/index.vue'

export default {
  components: {
    NewStar
  },
  head() {
    return {}
  },
  async asyncData({$axios, error}) {
    try {
      let results = await $axios.$get('/data/best-emergency-loan.json');
      return {
        products: results.data
      }
    } catch (e) {
      error({statusCode: 404});
    }
  },
  data() {
    return {
      isShowDisclosure: false
    }
  },
  methods: {
    updateTime,
    computeScore,
    formatNum,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/best-emergency-loan.scss";
</style>
