<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Home Equity Line of Credit (HELOC)</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="https://service.toploansadviser.com/images/Nina Ailen Kimimela_1652436526386.webp">
            <p class="author-desc">Writen by <span class="author-name">Nina Ailen Kimimela</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>A home equity line of credit is another way you can borrow money against the equity you have in a
              property. While a home equity loan offers you a one time large sum of money, a HELOC works a bit
              differently. It operates kind of like a credit card where you can withdraw borrowed money in required
              amounts as many times as you want throughout a draw period (usually around 10 years). It’s only after the
              draw period ends that you start to repay the loan. Now, the question is how do you choose the best HELOC
              for you? Here’s a comparison of the best HELOC options out there.</p>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Best HELOC Options</h2>
        <div class="preface-content">
          <p>While several loan providers in the market offer mortgages at competitive rates, we will look at those
            lenders that are the best in their category. Let's start!</p>

        </div>
      </div>
    </section>
    <!--    <section class="product-area">-->
    <!--      <div class="product-container">-->
    <!--        <div class="product-container-top-box">-->
    <!--          <div class="disclosure">-->
    <!--              <span class="title"-->
    <!--                    @click="handleShowDisclosure"-->
    <!--              >Advertising Disclosure</span-->
    <!--              >-->
    <!--            <div :class="{'disclosure_content': true, 'show': isShowDisclosure}">-->
    <!--              The information shared through this website is based on our team’s personal judgements and views. We use-->
    <!--              our own comparisons to assign values, which are not intended to reflect a certain benchmark of-->
    <!--              precision. To keep our website free for use, we accept referral fees from various service providers,-->
    <!--              which have the potential to influence their respective appointed scores. A third party’s participation-->
    <!--              on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on-->
    <!--              this site is subject to change at any time.The site does not include all companies offering loan-->
    <!--              products or all available loan offers.-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="product-list-box">-->
    <!--          <div class="product-title-box">-->
    <!--            <div class="title lenders"><span class="text">Lenders</span></div>-->
    <!--            <div class="title score">-->
    <!--                <span class="text">-->
    <!--                  Score-->
    <!--                  <el-popover placement="bottom" trigger="hover" width="320">-->
    <!--                    <span slot="reference" class="iconfont">&#xe669;</span>-->
    <!--                    <div class="content">-->
    <!--                      <p>-->
    <!--                        The ratings and ranking on our website are determined by-->
    <!--                        our editorial team. The scoring mechanism for loan-->
    <!--                        products takes into account more than 10 data points-->
    <!--                        across multiple categories, such as APR, repayment-->
    <!--                        options, customer service, lender transparency, loan-->
    <!--                        eligibility and others.-->
    <!--                      </p>-->
    <!--                    </div>-->
    <!--                  </el-popover>-->
    <!--                </span>-->
    <!--            </div>-->
    <!--            <h5 class="title features">-->
    <!--              <span class="text">Loan Features</span>-->
    <!--            </h5>-->
    <!--          </div>-->
    <!--          <div v-if="products.length !== 0" class="product-list">-->
    <!--            <div-->
    <!--              v-for="(item, index) in products"-->
    <!--              :key="index"-->
    <!--              class="product-item"-->
    <!--            >-->
    <!--              <div v-if="index === 0" class="corner-box">-->
    <!--                <span class="text">Best Choice</span>-->
    <!--              </div>-->
    <!--              <div v-if="index === 0" class="visited-box">-->
    <!--                <span class="iconfont"></span>-->
    <!--                <span class="text"-->
    <!--                ><strong>503 users</strong> chose this site today</span-->
    <!--                >-->
    <!--              </div>-->
    <!--              <div class="product-item-container">-->
    <!--                <div class="img-score-box">-->
    <!--                  <div class="img-box">-->
    <!--                    <img v-lazy="item.logo" :alt="item.name" :title="item.name"/>-->
    <!--                    <div v-if="item.disclaimer !== ''" class="disclaimer">-->
    <!--                      Disclaimer-->
    <!--                      <el-popover-->
    <!--                        placement="bottom"-->
    <!--                        trigger="hover"-->
    <!--                        width="320"-->
    <!--                      >-->
    <!--                          <span slot="reference" class="iconfont"-->
    <!--                          >&#xe669;</span-->
    <!--                          >-->
    <!--                        <div class="content">-->
    <!--                          <p>{{ item.disclaimer }}</p>-->
    <!--                        </div>-->
    <!--                      </el-popover>-->
    <!--                    </div>-->
    <!--                  </div>-->

    <!--                  <div class="rate-box">-->
    <!--                    <div class="rate">-->
    <!--                      <span class="score">{{ item.rate.score }}</span>-->
    <!--                      <div v-if="index === 0" class="trustpilot-box">-->
    <!--                        <div class="text-box">-->
    <!--                          <span class="iconfont">&#xe64c;</span>-->
    <!--                          <span class="text">Trustpilot</span>-->
    <!--                        </div>-->
    <!--                        <ul class="star-list">-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                        </ul>-->
    <!--                      </div>-->
    <!--                      <div v-else class="star-box">-->
    <!--                        <el-rate-->
    <!--                          :colors="['#29b674', '#29b674', '#29b674']"-->
    <!--                          :value="computeScore(item.rate.score)"-->
    <!--                          disabled-->
    <!--                        ></el-rate>-->
    <!--                      </div>-->
    <!--                      <nuxt-link-->
    <!--                        v-if="item.review_key !== ''"-->
    <!--                        :to="'/reviews/' + item.review_key"-->
    <!--                        class="reviews-link"-->
    <!--                      >Read Review-->
    <!--                      </nuxt-link-->
    <!--                      >-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <div class="features-terms-box">-->
    <!--                  <div class="list-box">-->
    <!--                    <dl class="features-list">-->
    <!--                      <dt>-->
    <!--                        <span class="pc-text">{{ item.introduce }}</span>-->
    <!--                        <h5 class="phone-text">Loan Features</h5>-->
    <!--                      </dt>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <h3-->
    <!--                          class="text"-->
    <!--                          style="display: inline; font-weight: normal"-->
    <!--                        >-->
    <!--                          Min. Credit Score: <strong>{{ item.compare.credit_score }}</strong>-->

    <!--                        </h3>-->
    <!--                      </dd>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <h3-->
    <!--                          class="text"-->
    <!--                          style="display: inline; font-weight: normal"-->
    <!--                        >-->
    <!--                          APR: <strong>{{ item.compare.apr }}</strong>-->

    <!--                        </h3>-->
    <!--                      </dd>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <h3-->
    <!--                          class="text"-->
    <!--                          style="display: inline; font-weight: normal"-->
    <!--                        >-->
    <!--                          Loan Amount: <strong>${{ item.amount.min }} to ${{ item.amount.max }}</strong>-->

    <!--                        </h3>-->
    <!--                      </dd>-->
    <!--                    </dl>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <div class="btn-box">-->
    <!--                  <a-->
    <!--                    :href="'/redirect/personal-loan/'+ item.name + '?gclid=' + item.gclid"-->
    <!--                    class="btn"-->
    <!--                    rel="noopener noreferrer nofollow"-->
    <!--                    target="_blank"-->

    <!--                  >-->
    <!--                    <h3-->
    <!--                      class="text"-->
    <!--                      style="display: inline;"-->
    <!--                    >-->
    <!--                      Check My Rates-->
    <!--                    </h3>-->
    <!--                    <span class="iconfont">&#xe63c;</span>-->
    <!--                  </a>-->
    <!--                  <a-->
    <!--                    :href="'/redirect/personal-loan/'+item.name + '?gclid=' + item.gclid"-->
    <!--                    class="visit-btn"-->
    <!--                    rel="noopener noreferrer nofollow"-->
    <!--                    target="_blank"-->
    <!--                  >Visit site »</a-->
    <!--                  >-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div v-else class="no-results">-->
    <!--            <span class="iconfont">&#xe60b;</span>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--    </section>-->
    <section class="product-include-area">
      <div class="product-include-container">
        <div class="product-include-container-top">
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
        <div v-for="(product, index) in products" :key="index" class="product-include-item">
          <div class="product-include-title">
            <img v-if="index === 0" alt="" class="medal" src="@/assets/img/medal-icon.png">
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">{{ product.name }}-<span style="color: #cb9600;">{{ product.feature }}</span></h3>
          </div>
          <div class="card-header">
            <div class="card-header-left">
              <span class="lenders-title">Lenders</span>
              <span class="score-title">Score</span>
            </div>
            <div class="card-header-right">
              <span class="apr-title">Loan Features</span>
              <span class="btn-title">Website</span>
            </div>
          </div>
          <div class="product-include-card">
            <div v-if="index === 0" class="tips"><span class="g">503 users</span> chose this site today</div>
            <div class="product-include-card-info">
              <div class="product-include-card-info-left">
                <div class="logo-box">
                  <img :alt="product.name" :src="product.logo" class="logo">
                  <div class="read-review-btn">Read Review <span>>></span></div>
                  <span class="nmls" v-if="index === 0" style="font-size: 12px; margin-top: 8px;">NMLS #1717824</span>
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
              </div>
              <div class="product-include-card-info-right">
                <div class="content-box">
                  <p class="product-slogan">{{ product.slogan }}</p>
                  <ul class="product-loan-features-list">

                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Min. Credit Score: {{ product.compare.credit_score }}</p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <div class="text">APR: {{ product.compare.apr }}
                        <div class="pop">
                        <el-popover v-if="product.name === 'Figure'" placement="bottom"
                                    style="vertical-align: top;" trigger="hover"
                                    width="350">

                          <span slot="reference" class="iconfont question-mark">&#xe669;</span>
                          <div class="content" style="font-size: 12px;">
                            <p>For licensing information, go to www.nmlsconsumeraccess.org
                              Toploansadviser is a Figure partner and may receive compensation for this content.
                              Figure Home Equity Line is available in AK, AL, AR, AZ, CA, CO, CT, DC, FL, GA, IA, ID,
                              IL, IN, KS, LA, MA, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, OH, OK, OR, PA,
                              RI, SD, TN, VA, VT, WA, WI, WY with more states to come.
                            </p>
                            <p> For Figure Home Equity Line, APRs can be as low as 3.50% for the most qualified
                              applicants and will be higher for other applicants, depending on credit profile and the
                              state where the property is located. For example, for a borrower with a CLTV of 45% and a
                              credit score of 800 who is eligible for and chooses to pay a 4.99% origination fee in
                              exchange for a reduced APR, a five-year Figure Home Equity Line with an initial draw
                              amount of $50,000 would have a fixed annual percentage rate (APR) of 3.50%. The total loan
                              amount would be $52,495. Alternatively, a borrower with the same credit profile who pays a
                              3% origination fee would have an APR of 4.25% and a total loan amount of $51,500. Your
                              actual rate will depend on many factors such as your credit, combined loan to value ratio,
                              loan term, occupancy status, and whether you are eligible for and choose to pay an
                              origination fee in exchange for a lower rate. Payment of origination fees in exchange for
                              a reduced APR is not available in all states. In addition to paying the origination fee in
                              exchange for a reduced rate, the advertised rates include a combined discount of 0.50% for
                              opting into a credit union membership (0.25%) and enrolling in autopay (0.25%). APRs for
                              home equity lines of credit do not include costs other than interest. Property insurance
                              is required as a condition of the loan and flood insurance may be required if your
                              property is located in a flood zone.</p>
                            <p>For the Figure Home Equity Line, approval may be granted in five minutes but is
                              ultimately subject to verification of income and employment. Five business day funding
                              timeline assumes closing the loan with our remote online notary. Funding timelines may be
                              longer for loans secured by properties located in counties that do not permit recording of
                              e-signatures or that otherwise require an in-person closing. In addition, funding
                              timelines may be longer if we cannot readily verify that your property is in at least
                              average condition with no adverse external factors with a property condition report and
                              need to order a desktop appraisal to confirm the value of your property.</p>
                          </div>
                        </el-popover>
                      </div>
                      </div>

                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Loan Amount: ${{ product.amount.min }} - ${{ product.amount.max }}</p>
                    </li>
                  </ul>
                </div>
                <div class="btn-box">
                  <a :href="product.link" class="btn" rel="noreferrer noopener nofollow">View Rates >></a>
                </div>
              </div>
            </div>
            <div class="product-include-card-content" v-html="product.description"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQs About Home Equity Lines of Credit</h2>
        <div class="question-content">
          <p>This FAQs section will guide first-time readers regarding HELOC loans.</p>
          <h6 class="question-title">What is a HELOC?</h6>
          <p>A HELOC is a home equity line of credit that functions like a credit card where you borrow money against
            your home equity. What makes HELOCs different from actual credit cards is that they have a draw period
            during which you can access the money. Once the draw period ends, you have to start repaying the loan.
            What’s great about HELOC is that it allows you to borrow only as much money as you need. </p>
          <p>For example, if you were doing a home improvement project and you weren’t sure how much that’s going to
            cost, a HELOC would be a much better option than <a href="/best-home-equity-loan" rel="noopener noreferrer"
                                                                target="_blank">a home equity loan</a>. That’s
            because you can get approved for
            as much as $500 000 on a HELOC but you don’t have to use all of it. <a href="/home-equity-calculator"
                                                                                   rel="noopener noreferrer"
                                                                                   target="_blank">You can
              only use the money you need and
              you’ll only be paying interest on the amount you spend</a>, whereas a regular home equity loan just gives
            you a
            lump sum of money that you have to repay in interest rates entirely.</p>
          <h6 class="question-title">The Pros and Cons of HELOC</h6>
          <dl>
            <dt>Pros</dt>
            <dd>With a home equity line of credit, you only pay interest on the amount of money you spend. If you were
              approved for a HELOC of $100 000 but you only spend $60 000, you will not be paying interest for the
              remaining $40 000.
            </dd>
            <dd>Depending on the lender you choose, your HELOC may come with great flexibility, including the option to
              make interest-only payments during the draw period in order to make the repayment period a bit easier.
            </dd>
          </dl>
          <dl>
            <dt>Cons</dt>
            <dd>In most cases, HELOCs come with variable interest rates, meaning they can go up or down in value.
              Although you may have an option to switch to a fixed rate (after paying an extra fee), you may also have
              to increase your payment if the changing interest rates grow.
            </dd>
            <dd>HELOCs may seem tempting since you have ongoing access to funds for years without having to repay them.
              Without discipline, you may end up overspending, which could make the repayment period more difficult for
              you.
            </dd>
          </dl>
          <h6 class="question-title">Home Equity Loan VS HELOC?</h6>
          <p>The main difference between a HELOC and a home equity loan is the way you get access to your borrowed
            funds. With a home equity loan, you get a large sum of money right away and you have to pay interest on all
            of it. With a HELOC, if you get approved for a $100 000 line of credit, you can use as much of it as you
            want throughout a 10 year period without making any payments back.</p>
          <p>Then, when the repayment period starts, you only have to pay interest on the amount you spent. With home
            equity loans, that is not the case because you get to take out a large sum of money one time and then you
            start repaying it immediately. Both of these loans have their pros and cons. Which one’s better depends on
            your situation and financial needs.</p>
          <h6 class="question-title">How to Choose the Best HELOC?</h6>
          <p>The first thing you need to look at when choosing the best HELOC are the initial HELOC rates and how long
            they last. In some cases, lenders try to draw people in by setting extremely low introductory rates which
            don’t last the entire loan period. Before you settle for a specific lender, learn to understand the rate
            index and markup so you’ll know exactly what you’re getting yourself into. </p>
          <p>If the lender tells you that their interest rate is based on the prime rate, that’s not likely the case. In
            reality, the interest rates are usually based on prime rates plus a markup, which can be as high as the
            prime rate itself. Make sure to double check how much money you’ll have to pay on interests before settling
            down for a HELOC. </p>
          <p>Moreover, look into when the HELOC draw period is set to end. You need to know exactly when the repayment
            period begins so you can structure your finances accordingly. Look into whether the lender you’re interested
            in offers balloon payments. In some cases, you can have lower monthly payments during your repayment period
            if you agree to pay a large one-time payment at the end of the term. This is called a balloon payment and it
            can help you lower the burden of the repayment period.</p>
          <p>Obviously, when searching for the best HELOC you need to look for the most flexible terms. Keep in mind
            that lenders that require a minimum withdrawal or borrowed balance amount take away from the flexibility of
            the HELOC. If you want more flexibility, make sure to ask for it upfront. Lastly, beware of various
            inactivity fees that may occur if you don’t touch your home equity line of credit at all. Ask about the
            inactivity fees upfront as well.</p>
        </div>
      </div>
    </section>
    <section class="conclusion-area">
      <div class="more-from-toploansadviser-container">
        <h3 class="title">Read More »</h3>
        <ul class="list">
          <li>
            <span class="circle"></span>
            <a class="link text" href="/home-equity-calculator" rel="noopener noreferrer">Home Equity Calculator
            </a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="/guides/how-to-refinance-a-heloc" rel="noopener noreferrer">How to refinance a
              helco
            </a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="/best-home-equity-loan" rel="noopener noreferrer">Best Home Equity Loan
            </a>
          </li>
        </ul>
      </div>
      <div class="website-btn-container">
        <p class="text">Get quick approval of home equity line</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>
    </section>
  </main>
</template>
<script>
import NewStar from '@/components/NewStar/index.vue';
import {updateTime} from "../utils/date";
import {computeScore, formatNum} from "../utils/index";

export default {
  components: {
    NewStar
  },
  async asyncData({$axios, error}) {
    try {
      let results = await $axios.$get('/data/best-helco-loan.json');
      return {
        products: results.data
      }
    } catch (e) {
      error({statusCode: 404})
    }
  },
  data() {
    return {
      currentInformationIndex: -1,
      isShowDisclosure: false
    }
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
    // expandInformation(index) {
    //   this.$nextTick(() => {
    //     $('.product-include-card-content').eq(index).toggleClass('current');
    //   })
    // }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/best-helco-loan.scss';
</style>
