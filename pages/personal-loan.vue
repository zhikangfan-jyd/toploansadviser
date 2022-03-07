<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</div>
      <div class="banner-container">
        <h1 class="title">Best Personal Loans {{ updateTime().month.short }} {{ updateTime().year }}</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>To find the best personal loan for your financial situation, it's best to shop around and compare
              personal
              loan rates from multiple lenders. Personal loans have fixed annual percentage rates, generally between
              2.49%
              and 35%. <span class="phone-text">The loan with the lowest rate is the least expensive — and usually the best choice. Other
              features,
              including no fees, soft credit checks and direct payments to creditors if you’re consolidating debt, set
              some loans apart.</span></p>
          </div>
        </div>

      </div>
    </section>

    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Compare Top Personal Loan Rates</h2>
        <div class="preface-content">
          <p>
            We compared and reviewed loans from more than 10 personal loan lenders to find the best rates and loan
            features.</p>
        </div>
      </div>
    </section>
    <section class="product-area">
      <div class="product-container">
        <div class="product-container-top-box">
          <div class="filter-box">
            <!--              <span class="title"></span>-->
            <div class="filter-list">
              <div class="filter-item">
                <div class="title-box">Loan Amount</div>
                <div class="filter-name">
                        <span
                          class="name filter-amount-title"
                          @click="handleSlideAmount"
                        >
                          <span class="text">{{ filter_amount_text }}</span>
                          <span class="iconfont">&#xe601;</span>
                        </span>
                  <ul class="filter-list-box filter-amount-list">
                    <li
                      v-if="filter_amount_text !== 'Show all'"
                      @click="
                              changeAmount({
                                min: 0,
                                max: Infinity,
                                text: 'Show all',
                              })
                            "
                    >
                      <span>Show all</span>
                    </li>
                    <li
                      v-if="filter_amount_text !== 'Less than $5000'"
                      @click="
                              changeAmount({ min: 0, max: 5000, text: '<$5000' })
                            "
                    >
                      <span>&lt;$5000</span>
                    </li>
                    <li
                      v-if="filter_amount_text !== '$5000-$20000'"
                      @click="
                              changeAmount({
                                min: 5000,
                                max: 20000,
                                text: '$5000-$20000',
                              })
                            "
                    >
                      <span>$5000-$20000</span>
                    </li>
                    <li
                      v-if="filter_amount_text !== '$20000-$50000'"
                      @click="
                              changeAmount({
                                min: 20000,
                                max: 50000,
                                text: '$20000-$50000',
                              })
                            "
                    >
                      <span>$20000-$50000</span>
                    </li>
                    <li
                      v-if="filter_amount_text !== 'More than $50000'"
                      @click="
                              changeAmount({
                                min: 50000,
                                max: Infinity,
                                text: '>$50000',
                              })
                            "
                    >
                      <span>&gt;$50000</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="filter-item">
                <div class="title-box">Credit Score</div>
                <div class="filter-name">
                        <span
                          class="name filter-credit-score-title"
                          @click="handleSlideCreditScore"
                        >
                          <span class="text">{{ filter_credit_score_text }}</span>
                          <span class="iconfont">&#xe601;</span>
                        </span>
                  <ul class="filter-list-box filter-credit-score-list">
                    <li
                      v-if="filter_credit_score_text !== 'Show all'"
                      @click="
                              changeCreditScore({
                                min: 0,
                                max: Infinity,
                                text: 'Show all',
                              })
                            "
                    >
                      <span>Show all</span>
                    </li>
                    <li
                      v-if="filter_credit_score_text !== '300-480'"
                      @click="
                              changeCreditScore({
                                min: 300,
                                max: 480,
                                text: '300-480',
                              })
                            "
                    >
                      <span>300-480</span>
                    </li>
                    <li
                      v-if="filter_credit_score_text !== '481-600'"
                      @click="
                              changeCreditScore({
                                min: 481,
                                max: 600,
                                text: '481-600',
                              })
                            "
                    >
                      <span>481-600</span>
                    </li>
                    <li
                      v-if="filter_credit_score_text !== '601-719'"
                      @click="
                              changeCreditScore({
                                min: 601,
                                max: 719,
                                text: '601-719',
                              })
                            "
                    >
                      <span>601-719</span>
                    </li>
                    <li
                      v-if="filter_credit_score_text !== '720-850'"
                      @click="
                              changeCreditScore({
                                min: 720,
                                max: 850,
                                text: '720-850',
                              })
                            "
                    >
                      <span>720-850</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                    <!--                      <span class="iconfont">&#xe63c;</span>-->
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
        <div class="more-box">
          <button
            v-if="isNull && count > pageSize"
            class="btn"
            @click="loadMore"
          >
            <span class="text">SEE MORE</span>
            <span class="iconfont">&#xe600;</span>
          </button>
          <button
            v-else-if="!isNull && count > pageSize"
            class="btn close"
            @click="closeMore"
          >
            <span class="text">COLLAPSE</span>
            <span class="iconfont">&#xe600;</span>
          </button>
        </div>
      </div>
    </section>

    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQ's
          About Personal Loans</h2>
        <div class="question-content">
          <p>It's essential for you to comprehend all associated terms and conditions before <a
            href="/guides/why-you-need-a-personal-loan" rel="noreferrer noopener" target="_blank">taking a personal
            loan</a>. The
            following frequently asked questions regarding personal loans have been outlined for your convenience
            below.</p>
          <h6 class="question-title">What does APR mean?</h6>
          <p>Let’s say you have an annual interest rate of 10.5% on a loan of $5,000 over 36 months, as well as $60 in
            fees. With a representative APR of 11.3%, and monthly repayments of $162.51, the total amount repaid would
            be $5,910.44.</p>

          <h6 class="question-title">How much does a personal loan cost on average?</h6>
          <p>Different lenders charge different rates, which can range from less than 3% to more than 36%. Best personal
            loans are generally associated with lower interest rates for those who have higher credit scores.</p>

          <h6 class="question-title">Do I qualify for applying a personal loan even though I have bad credit?</h6>
          <p>Yes, though there are limited options. If you need money fast, you might wish to consult <a
            href="/guides/how-to-get-a-loan-with-bad-credit" rel="noreferrer noopener" target="_blank">with a bad credit
            personal loans lender</a>, a credit builder or an alternative lender that doesn't just look at your credit
            score. You may also be able to search for lower interest rates and flexible credit requirements by looking
            into local credit unions or local banks.</p>

          <h6 class="question-title">How are unsecured personal loans obtained?</h6>
          <p><a href="/guides/is-an-unsecured-loan-the-right-way-to-go-for-financial-assistance"
                rel="noreferrer noopener"
                target="_blank">Under unsecured loans</a>, also known as signature loans, no collateral is
            needed. The loan amount varies
            depending on how creditworthy you are. The better your credit score, the better the rate. In order to apply
            for an unsecured personal loan you normally need proof of income, residency in the United States, and a
            Social Security number.</p>

          <h6 class="question-title">How does APR work? Are interest rates and APR the same thing?</h6>
          <p>The interest rate charged on a personal loan is referred to as APR, or annual percentage rate. The APR
            numbers can differ, but they will always have a maximum of 35.99%. APRs usually range from 5% to 30% with
            <strong>online personal loan lenders</strong>. Different factors like credit score, income, and financial
            history will determine the APR of your loan. The quoted APR includes any related fees.
          </p>
          <p>You pay interest if you borrow money from an online lender. Since the APR includes all fees as well as the
            interest rate, the APR is an accurate representation of the cost of the personal loan.</p>

          <h6 class="question-title">What are the effects of personal loans on your credit score?</h6>
          <p>Loans for personal use generally <a href="/guides/how-your-credit-score-affects-your-loan-chances"
                                                 rel="noreferrer noopener" target="_blank">don't harm your credit
            score </a>. The credit score can actually be improved by
            a personal loan as long as you make regular payments and pay within the loan's terms.</p>

          <h6 class="question-title">Would a personal loan be available for investing?</h6>
          <p>You can do that, but maybe not for the best. Borrowing money on a personal loan is already incredibly risky
            in its own right. It takes a long time to get to the level of skilled investors who take loans out on
            personal terms. Sometimes even these people don’t succeed.</p>

          <h6 class="question-title">Could I receive a personal loan quickly?</h6>
          <p>Occasionally lenders allow you to apply by a certain cut off time, and your application may be <strong>approved
            the next business day instant</strong>. This may delay the process a few days if extra verification is
            needed or if you are required to visit a branch location. Usually, the lender will let you know the
            turnaround time upfront.</p>

          <h6 class="question-title">For my personal loan application, what do I need?</h6>
          <p>It's much easier than you'd think <a href="/guides/how-to-apply-a-personal-loan" rel="noreferrer noopener"
                                                  target="_blank">to <strong>apply for a personal
            loan</strong></a>. The applications usually
            do not require
            much information about you and require just a couple of minutes to complete. Typically, <strong>loan
              applications</strong>
            ask for your name, address, phone number, AND basic information about your credit history, your income, and
            your financial history.</p>
          <h6 class="question-title">What is the cost of online personal loans?</h6>
          <p>Your loan’s cost is determined by three primary factors:</p>
          <ul>
            <li><strong>Interest rate</strong>. To borrow money from the online lender, they charge you interest. It is
              typically between
              5% and 36% of the loan amount. No lender can charge more than a 36% APR.
            </li>
            <li><strong>Fees</strong>. Fees for this type of loan can range from 1% to 5%. Prepayment penalties may also
              apply to
              personal loans that are paid off early. For late payments and unsuccessful payments, lenders are allowed
              to charge interest as well.
            </li>
            <li><strong>Loan term</strong>. This is the duration of your repayment of a loan. The lending terms of most
              lenders range
              from 3 to 7 years. You pay more interest if you have a longer-term loan. However, you’ll pay much more
              each month with <strong>short-term loans</strong>.
            </li>

          </ul>

          <p>You can depict the interest rate and fees you owe as a percentage of your annual percentage rate (APR). In
            other words, APR lets you know how much you'll have to pay every year until your loan is repaid. The amount
            does not include late fees, nonsufficient funds fees (NSF), or prepayment penalties.</p>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {computeScore, formatNum} from "../utils/index";
import {updateTime} from "../utils/date";
import FoldTheCard from "../components/FoldTheCard/index";
import {seo} from '../utils/seo'

export default {
  head: seo({
    title: 'Best Personal Loans ' + updateTime().month.short + ' ' + updateTime().year + ' |Toploansadviser.com',
    description: "Compare best online personal loans 2022 from different personel loan lenders' rates, Credible, lightstream, lendingclub, avant, Sofi's features and reviews in marketplace, get your best personal rates now!",
    keywords: "personal loans,best personal loans,best personal loans 2022",
    url: 'https://www.toploansadviser.com/personal-loan',
    img: 'https://www.toploansadviser.com/data/images/personal-loan.webp',
    img_size: {
      width: '325',
      height: '295'
    },
    img_type: 'image/webp',
    link: [
      {rel: "canonical", href: "https://www.toploansadviser.com/personal-loan"}
    ]
  }),
  components: {
    FoldTheCard
  },
  async asyncData({$axios, error, route}) {
    try {
      let products_results = await $axios.$get(
        "/data/person_loan_product.json"
      );
      let question_results = await $axios.$get(
        "/data/person_loan_question.json"
      );
      products_results.data.forEach(ele => {
        ele.gclid = route.query['gclid'];

      })
      return {
        allProducts: products_results.data,
        overallData: [products_results.data[0], products_results.data[1]],
        questionData: question_results.data,
      };
    } catch (e) {
      error({statusCode: 404});
    }
  },
  data() {
    return {
      isShowDisclosure: false,
      isNull: true,
      page: 1,
      pageSize: 5,
      count: 0,
      products: [],
      filterData: [],
      filter_amount_text: "Show all",
      filter_credit_score_text: "Show all",
      loan_amount: {
        min: 0,
        max: Infinity,
      },
      credit_score: {
        min: 0,
        max: Infinity,
      }
    };
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba !== "function") {
        return;
      }
      window.uba(params);
    },
    loadMore() {
      let data = this.filterData.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );

      this.products = this.products.concat(data);
      this.page++;
      if (this.products.length === this.count) {
        this.isNull = false;
      }
    },
    closeMore() {
      this.isNull = true;
      this.page = 1;
      this.products = [];
      this.loadMore();
    },
    changeAmount(params) {
      this.loan_amount = {
        min: params.min,
        max: params.max,
      };
      this.filter_amount_text = params.text;
      this.handleFilter();

      $(
        ".product-container .filter-box .filter-list .filter-name .filter-amount-list"
      ).slideUp("fast");
      $(
        ".product-container .filter-box .filter-list .filter-name .name.filter-amount-title .iconfont"
      ).removeClass("rotate");
    },
    changeCreditScore(params) {
      this.credit_score = {
        min: params.min,
        max: params.max,
      };
      this.filter_credit_score_text = params.text;
      this.handleFilter();
      $(
        ".product-container .filter-box .filter-list .filter-name .filter-credit-score-list"
      ).slideUp("fast");
      $(
        ".product-container .filter-box .filter-list .filter-name .name.filter-credit-score-title .iconfont"
      ).removeClass("rotate");
    },
    // 点击展开问题 or 关闭问题
    handleOpen(index) {
      $(
        ".faq-area .footer-card-list .footer-card-item .footer-card-top-box .icon"
      )
        .eq(index)
        .toggleClass("current");
      $(".faq-area .footer-card-list .footer-card-item .footer-card-content")
        .eq(index)
        .slideToggle("fast");
    },
    filterByAmount(options) {
      // 如果当前的最小值，大于要比较的值的最大值，或者当前的最大值小于要比较的最小值
      if (
        options.min > this.loan_amount.max ||
        options.max < this.loan_amount.min
      ) {
        return false;
      }

      return true;
    },
    filterByCreditScore(score) {
      return score >= this.credit_score.min && score <= this.credit_score.max;
    },

    handleSlideAmount() {
      $(
        ".product-container .filter-box .filter-list .filter-name .filter-amount-list"
      ).slideToggle("fast");
      $(
        ".product-container .filter-box .filter-list .filter-name .name.filter-amount-title .iconfont"
      ).toggleClass("rotate");
    },
    handleSlideCreditScore() {
      $(
        ".product-container .filter-box .filter-list .filter-name .filter-credit-score-list"
      ).slideToggle("fast");
      $(
        ".product-container .filter-box .filter-list .filter-name .name.filter-credit-score-title .iconfont"
      ).toggleClass("rotate");
    },

    // 筛选数据
    handleFilter() {
      let data = this.allProducts.filter((ele) => {
        return (
          this.filterByAmount(ele.amount) &&
          this.filterByCreditScore(ele.compare.credit_score)
        );
      });
      this.count = data.length;
      this.filterData = data;

      this.closeMore();
    },
  },
  created() {
    this.handleFilter();
  },
  mounted() {
    let sloganJQDom = $('.banner-area .slogan');

    let clientWidth = $(window).width();
    if (clientWidth <= 750) {

      let top = $('.banner-container .title').offset().top;

      $(window).on('scroll', function () {
        let headerHeight = $('.header-container').height();
        if ($(this).scrollTop() > top) {
          sloganJQDom.text('Compare Best Personal Loans Rates');
          sloganJQDom.css({
            display: 'block',
            position: 'fixed',
            top: headerHeight + 'px',
            fontSize: '.2rem',
            textAlign: 'center',
            width: '100%',
            left: 0,
            color: '#fff',
            zIndex: 8,
            backgroundColor: 'rgb(26,119,129)'
          })
        } else {
          sloganJQDom.text('We explore smarter online personal loan lenders rates from 2.49% fixed APR.');
          sloganJQDom.css({
            display: 'none',
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
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/new-personal-loan.scss";
</style>
