<template>
  <main class="main-container">
    <section class="banner-area">
      <!--      <div class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</div>-->
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Best Debt Consolidation Loans</span>
          </h1>
          <p class="sub-title">Financing to pay off other debts </p>
          <div class="content">
            <div>
              If you are saddled with different kinds of debt, you can apply for a loan to consolidate those debts into
              a single liability and pay them off. Payments are then made on the new debt until it is paid off in full.
            </div>
          </div>
          <div class="update">
            <span class="iconfont">&#xe645;</span> <span>Last updated: {{
              updateTime().month.short
            }} {{ updateTime().year }}</span>
            <div class="editor"><span class="iconfont">&#xe62d;</span><span>Edited By Rashawn Mitchner</span></div>
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
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQs About Consolidation Loans</h2>
        <div class="question-content">
          <h2 class="question-title">What is Debt Consolidation Loans？</h2>
          <p>Even if you are easily making your monthly payments for your debt obligations, it can take months or even
            years to finally pay it all off. Sometimes keeping track of all your monthly payments can be exhausting if
            you have debt from multiple different avenues. Consolidating your debt into a single payment can allow you
            to get a lower interest rate and allow you to only have to focus on paying one bill each month.</p>
          <h2 class="question-title">How Does Debt Consolidation Work?</h2>
          <p>Debt consolidation is the act of combining all of your debt obligations into a single payment. Nowadays
            people can have debt with multiple different lenders for many different reasons. If you have debt from
            multiple lenders this probably means that you have different interest rates for each loan. One of the main
            benefits of consolidating your debt into one loan is to improve your overall interest rate. Paying a lower
            interest rate can save you hundreds to thousands of dollars in the long run depending on how much debt you
            are in. Debt consolidation can be used to combine many different types of debt such as:</p>
          <ul>
            <li>Student loans</li>
            <li>Auto loans</li>
            <li>Personal loans</li>
            <li>Credit cards</li>
            <li>Medical debt</li>
            <li>Payday loans</li>
          </ul>
          <h2 class="question-title">How to Consolidate Your Debt？</h2>
          <p>If you are considering consolidating your debt, there are a couple of ways to go about it. Both of the
            methods listed below will concentrate your debt into one single payment ideally with a lower interest
            rate. </p>
          <ul>
            <li>The first <a href="" target="_blank">method to consolidate your debt</a> is to get a balance-transfer
              credit card with a good intro
              promotional period. For example, many credit cards will give you 0% interest for the first year of
              purchases or balance transfers. You can take advantage of this to literally get your interest rate to 0%
              for a certain amount of time depending on the card you choose. The only downside of this is that you will
              need a solid credit score. Otherwise, this can be a great way to save a ton of money on your interest
              payments and reduce the number of bills you have into just one.
            </li>
            <li>Another option you have to <a href="" target="_blank">consolidate your debt is to get a debt
              consolidation loan</a>. Essentially you
              would take out a personal loan and use this money to pay off all of your outstanding debt. At this point,
              you would be left with just a single personal loan to pay back with a fixed interest rate.
            </li>
          </ul>
          <h2 class="question-title">Pros and Cons of Debt Consolidation</h2>
          <p>As with everything in life, debt consolidation has both its pros and cons. Before considering debt
            consolidation, consider the following factors:</p>
          <dl>
            <dt>Pros</dt>
            <dd><strong>Boost your credit score</strong>. Consolidating your debt can potentially improve your credit
              utilization ratio and can help you make more on-time payments.
            </dd>
            <dd><strong>Fewer loans to keep track of</strong>. If you have multiple loans taken out it can become
              difficult to keep up with all of them. Consolidating your debt into one payment can help you keep track of
              all your debt within one payment.
            </dd>
            <dd><strong>Better interest rates</strong>. Generally, credit cards can have high interest rates. If you can
              consolidate all of your debts into one loan with a good interest rate you can save a lot of money in the
              long run.
            </dd>
          </dl>
          <dl>
            <dt>Cons</dt>
            <dd><strong>Potential to incur fees</strong>. Depending on how you decide to consolidate your debt, you may
              have to pay some fees. These fees can be balance transfer fees, origination fees, or closing costs. Make
              sure to read the fine print and make sure consolidating your debt is truly worth it after considering
              fees.
            </dd>
            <dd><strong>Could end up with a worse loan structure</strong>. Depending on what type of loans you have,
              simply consolidating them into one may come with a worse deal than you had before. If the interest rate is
              only slightly better or the same but you agree to a longer timeframe you could just end up paying more.
            </dd>
            <dd><strong>Put assets at risk</strong>. If you decide to take out a secured loan using your house with a
              home equity loan or a HELOC, then you are risking your assets being seized. If you do not make your
              payments then this could cause you to lose your house.
            </dd>
          </dl>
          <h2 class="question-title">When to Consider Debt Consolidation?</h2>
          <p><strong>Debt consolidation personal loans</strong> can be a great solution for those who are not already in
            deep debt. If
            your monthly debt payments are less than 50% of your income then debt consolidation can be a good move. It
            also helps to have a good credit score that can allow you to get approved for a good interest rate on a
            credit card or debt consolidation loan. </p>
          <p>Credit cards are one of the most common forms of unpaid debt. Generally, credit cards can have interest
            rates around 18% to 25%. If you are already making your payments on time and have enough to pay it off then
            you should <strong>consider getting a debt consolidation loan</strong> which has much lower interest rates
            than a credit
            card. This can help some people psychologically because with a personal loan you have a payment to make each
            month as opposed to a small minimum required payment for a credit card. Only making a minimum payment on
            your credit card can easily lead to paying more interest over time.</p>

          <h2 class="question-title">When Not to Consider Debt Consolidation?</h2>
          <p>Although debt consolidation can be a great way to reduce interest payments and simplify your loans, it may
            not be the right choice for everybody. To be honest, many people who are stuck in debt may have excessive
            spending habits that should be addressed before anything else. Those that are drowning in debt and will
            still not be able to pay it off even with consolidation should consider alternative solutions. As a rule of
            thumb, if your debt payments are more than half of your income then you may want to consider <strong><a
              href="" rel=" noopener noreferrer nofollow" target="_blank">seeking debt relief</a></strong>. In certain
            situations, you would be better off filing for bankruptcy than attempting to barely make
            their minimum payments each month.</p>
          <h6 class="title">Bottom line</h6>
          <p>Debt consolidation can help you save money in the long run by reducing your interest rates and condensing
            your loans into a single monthly payment. Those that are responsible with their spending and keep track of
            all their payments can really <strong><a href="" rel="noreferrer noopener nofollow" target="_blank">benefit
              from consolidating their debt</a></strong>. However, people with excessive spending
            habits who have no desire to pay their debt off on time may not find much use in consolidating their debt.
            This process is not a simple fix for everybody’s debt problems. It is only recommended to consolidate your
            debt if you stay on top of it and go through the work to calculate the pros and cons of your choice.</p>
        </div>
      </div>
    </section>
    <CalculatorPopup/>
  </main>
</template>

<script>
import {computeScore, formatNum} from "../utils/index";
import {updateTime} from "../utils/date";
import FoldTheCard from "../components/FoldTheCard/index";
import CalculatorPopup from "../components/CalculatorPopup/index";

export default {
  head() {
    return {
      title: 'Debt Consolidation Personal Loans  | Toploansadviser.com',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'personal loans for debt consolidation, debt consolidation personal loans, debt consolidation loan'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'A Debt consolidation loan is a type of personal loan you can use to pay off high-interest debt, specially credit cards. And it allows one low-interest monthly payment.'
        },
        {
          property: 'og:title',
          content: 'Debt Consolidation Personal Loans  | Toploansadviser.com'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content: 'https://www.toploansadviser.com/personal-loan'
        },
        {
          property: 'og:description',
          content: 'Compare best personal loans 2022 from different personel loan lenders\' rates, features and reviews  in marketplace, get your best personal rates now!'
        },
        {
          property: 'og:image',
          content: 'https://www.toploansadviser.com/_nuxt/img/about-us-banner-bg.d3006d4.webp'
        },
        {
          property: 'og:image:width',
          content: '396'
        },
        {
          property: 'og:image:height',
          content: '280'
        },
        {
          property: 'og:image:type',
          content: 'image/webp'
        },
        {
          property: 'og:image:alt',
          content: 'Credible'
        }
      ]
    }
  },
  components: {
    FoldTheCard,
    CalculatorPopup,
  },
  async asyncData({$axios, error, route}) {
    try {
      let results = await $axios.$get('/data/best-consolidation-loans.json');

      return {
        products: results.data
      }

    } catch (e) {
      error({statusCode: 404});
    }
  },
  data() {
    return {
      isShowDisclosure: false,
    };
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,

    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    }
  },
  mounted() {

    function showSlogan() {
      let clientWidth = $(window).width();
      if (clientWidth <= 750) {
        let top = $('.banner-container .website-title').offset().top;

        $(window).on('scroll', function () {
          let headerHeight = document.querySelector('.header-container').clientHeight;

          let websiteTitleJqDom = $('.banner-container .website-title');
          if ($(this).scrollTop() > top) {
            websiteTitleJqDom.text('Compare Best Personal Loans Rates');
            websiteTitleJqDom.css({
              position: 'fixed',
              top: headerHeight + 'px',
              fontSize: '.2rem',
              textAlign: 'center',
              width: '100%',
              left: 0,
              color: '#fff',
              backgroundColor: 'rgb(26,119,129)'
            })
          } else {
            websiteTitleJqDom.text('Best Personal Loans 2022');
            websiteTitleJqDom.css({
              position: 'static',
              top: headerHeight + 'px',
              textAlign: 'left',
              width: 'auto',
              fontSize: '0.36rem',
              color: '#001139',
              left: 0,
              backgroundColor: 'transparent'
            })
          }
        })
      }
    }

    showSlogan();

    $(window).on('resize', showSlogan)


  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/best-consolidation-loans.scss";
</style>
