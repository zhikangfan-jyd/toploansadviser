<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="slogan">We explore smarter online personal loan lenders for the coming Christmas day!</div>
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Best Personal</span> <span>Loan 2021</span>
          </h1>
          <p class="sub-title">Compare Top Personal Loan Rates</p>
          <div class="content">
            <div>
              To
              <h2 style="display: inline; font-weight: normal">
                find the best personal loan for your financial situation,
              </h2>it's best to shop around and
              <h2 style="display: inline; font-weight: normal">
                compare personal loan rates from multiple lenders.
              </h2>
            </div>
          </div>
          <p class="update">
            Last updated: {{ updateTime().month.short }} {{ updateTime().year }}
          </p>
        </div>
        <img
          src="@/assets/img/best-personal-loans-2021-bg.webp"
          alt="best personal loans 2021"
          class="banner-img"
        />
      </div>
    </section>
    <div class="container">
      <section class="product-area">
        <div class="product-container">
          <div class="product-container-top-box">
            <div class="filter-box">
              <span class="title">Filter By</span>
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
                        v-if="filter_amount_text != 'Show all'"
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
                        v-if="filter_amount_text != 'Less than $5000'"
                        @click="
                          changeAmount({ min: 0, max: 5000, text: '<$5000' })
                        "
                      >
                        <span>&lt;$5000</span>
                      </li>
                      <li
                        v-if="filter_amount_text != '$5000-$20000'"
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
                        v-if="filter_amount_text != '$20000-$50000'"
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
                        v-if="filter_amount_text != 'More than $50000'"
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
                        v-if="filter_credit_score_text != 'Show all'"
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
                        v-if="filter_credit_score_text != '300-480'"
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
                        v-if="filter_credit_score_text != '481-600'"
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
                        v-if="filter_credit_score_text != '601-719'"
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
                        v-if="filter_credit_score_text != '720-850'"
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
                The information shared through this website is based on our team’s personal judgements and views. We use our own comparisons to assign values, which are not intended to reflect a certain benchmark of precision. To keep our website free for use, we accept referral fees from various service providers, which have the potential to influence their respective appointed scores. A third party’s participation on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on this site is subject to change at any time.The site does not include all companies offering loan products or all available loan offers.
              </div>
            </div>
          </div>
          <div class="product-list-box">
            <div class="product-title-box">
              <div class="title lenders"><span class="text">Lenders</span></div>
              <div class="title score">
                <span class="text">
                  Score
                  <el-popover placement="bottom" width="320" trigger="hover">
                    <span class="iconfont" slot="reference">&#xe669;</span>
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
            <div class="product-list" v-if="products.length != 0">
              <div
                class="product-item"
                v-for="(item, index) in products"
                :key="index"
              >
                <div class="corner-box" v-if="index == 0">
                  <span class="text">Best Choice</span>
                </div>
                <div class="corner-box green" v-else-if="index == 1">
                  <span class="text">Low Rates</span>
                </div>
                <div class="visited-box" v-if="index == 0">
                  <span class="iconfont"></span>
                  <span class="text"
                    ><strong>503 users</strong> chose this site today</span
                  >
                </div>
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img v-lazy="item.logo" :alt="item.name" :title="item.name + ' personal loans'" />
                      <div class="disclaimer" v-if="item.disclaimer != ''">
                        Disclaimer
                        <el-popover
                          placement="bottom"
                          width="320"
                          trigger="hover"
                        >
                          <span class="iconfont" slot="reference"
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
                        <div class="trustpilot-box" v-if="index == 0">
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
                        <div class="star-box" v-else>
                          <el-rate
                            disabled
                            :value="computeScore(item.rate.score)"
                            :colors="['#29b674', '#29b674', '#29b674']"
                          ></el-rate>
                        </div>
                        <nuxt-link
                          v-if="item.review_key != ''"
                          :to="'/reviews/' + item.review_key"
                          class="reviews-link"
                          >Read Review</nuxt-link
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
                              placement="bottom"
                              width="280"
                              trigger="hover"
                              v-if="item.compare.credit_text != ''"
                            >
                              <span class="iconfont" slot="reference"
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
                      <h5 class="title">Loan Amount</h5>
                      <span
                        class="text-box"
                        v-if="item.amount.max !== 'Infinity'"
                        ><span>${{ formatNum(String(item.amount.min)) }}-</span
                        ><span
                          >${{ formatNum(String(item.amount.max)) }}</span
                        ></span
                      >
                      <span class="text-box" v-else
                        ><span>up to</span>
                        <span
                          >${{ formatNum(String(item.amount.min)) }}</span
                        ></span
                      >
                    </div>
                  </div>
                  <div class="btn-box">
                    <a
                      :href="'/redirect/best-personal-loans-2021/'+item.name"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      @click="
                        handleTracking({
                          name: item.name,
                          click_time: new Date().getTime(),
                          link: item.link,
                        })
                      "
                      class="btn"
                    >
                      <h3
                        class="text"
                        style="display: inline;"
                      >
                        Check My Rate
                      </h3>
                      <span class="iconfont">&#xe63c;</span>
                    </a>
                    <a
                      :href="'/redirect/best-personal-loans-2021/'+item.name"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      class="visit-btn"
                      >Visit site »</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="no-results" v-else>
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
      <section class="best-overall-area">
        <div class="best-overall-title-box">
          <h2 class="best-overall-title">Best for debt consolidation</h2>
        </div>
        <div class="card-list">
          <div
            class="product-item"
            v-for="(item, index) in overallData"
            :key="index"
          >
            <div class="corner-box" v-if="index == 0">
              <span class="text">Best Choice</span>
            </div>
            <div class="corner-box green" v-if="index == 1">
              <span class="text">Low Rates</span>
            </div>
            <div class="product-item-container">
              <div class="img-score-box">
                <div class="img-box">
                  <img v-lazy="item.logo" :alt="item.name" :title="item.name + ' personal loans'"/>
                  <div class="disclaimer" v-if="item.disclaimer != ''">
                    Disclaimer
                    <el-popover placement="bottom" width="320" trigger="hover">
                      <span class="iconfont" slot="reference">&#xe669;</span>
                      <div class="content">
                        <p>{{ item.disclaimer }}</p>
                      </div>
                    </el-popover>
                  </div>
                </div>
                <div class="rate-box">
                  <div class="rate">
                    <span class="score">{{ item.rate.score }}</span>
                    <div class="star-box">
                      <el-rate
                        disabled
                        :value="computeScore(item.rate.score)"
                        :colors="['#29b674', '#29b674', '#29b674']"
                      ></el-rate>
                    </div>
                    <nuxt-link
                      v-if="item.review_key != ''"
                      :to="'/reviews/' + item.review_key"
                      class="reviews-link"
                      >Read Review</nuxt-link
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
                          placement="bottom"
                          width="280"
                          trigger="hover"
                          v-if="item.compare.credit_text != ''"
                        >
                          <span class="iconfont" slot="reference"
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
                  <h5 class="title">Loan Amount</h5>
                  <span v-if="item.amount.max !== 'Infinity'" class="text-box"
                    ><span>${{ formatNum(String(item.amount.min)) }}-</span
                    ><span
                      >${{ formatNum(String(item.amount.max)) }}</span
                    ></span
                  >
                  <span class="text-box" v-else
                    ><span>up to</span>
                    <span>${{ formatNum(String(item.amount.min)) }}</span></span
                  >
                </div>
              </div>
              <div class="btn-box">
                <a
                  :href="'/redirect/best-personal-loans-2021/'+item.name"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  @click="
                    handleTracking({
                      name: item.name,
                      click_time: new Date().getTime(),
                      link: item.link,
                    })
                  "
                  class="btn"
                >
                  <h3 class="text" style="display: inline;">
                    Check My Rate
                  </h3>
                  <span class="iconfont">&#xe63c;</span>
                </a>
                <a
                  :href="'/redirect/best-personal-loans-2021/'+item.name"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  class="visit-btn"
                  >Visit site »</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq-area">
        <div class="faq-area-title-box">
          <img
            src="@/assets/img/faq.webp"
            alt="answear or questions about personal loans"
            class="pic"
          />
          <div class="faq-content">
            <h4 class="faq-title">
              <span>FAQ's</span>
              <span>About Personal Loans</span>
            </h4>
            <div class="content">
              <p>
                It's essential for you to comprehend all associated terms and
                conditions before taking a personal loan. The following
                frequently asked questions regarding personal loans have been
                outlined for your convenience below.
              </p>
            </div>
          </div>
        </div>
        <fold-the-card :data="questionData"></fold-the-card>
        <div class="footer-card-list">
          <div class="footer-card-item">
            <div class="footer-card-top-box" @click="handleOpen(0)">
              <h4 class="title">Why you should trust us?</h4>
              <span class="icon"></span>
            </div>
            <div class="footer-card-content">
              <p>
                Finding the best products and services means setting a high
                standard. Our diverse team is serious about research. Once our
                editors select a topic, the team tests (if possible) and
                evaluates products and services related to those topics. While
                our comparison lists are the nucleus of toploansadviser.com, we
                also feature product reviews, feature comparisons, guides,
                articles, and tutorials. We also have a scoring system for
                products and services based on data compiled from various
                factors.
              </p>
              <div class="img-box">
                <img
                  src="@/assets/img/q1.webp"
                  alt="article about reliability"
                /><img
                  src="@/assets/img/q2.webp"
                  alt="article about reliability"
                />
                <img
                  src="@/assets/img/q3.webp"
                  alt="article about reliability"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <CalculatorPopup />
  </main>
</template>

<script>
import { computeScore, formatNum } from "../utils/index";
import { updateTime } from "../utils/date";
import FoldTheCard from "../components/FoldTheCard/index";
import CalculatorPopup from "../components/CalculatorPopup/index";
export default {
  components: {
    FoldTheCard,
    CalculatorPopup,
  },
  async asyncData({ $axios, redirect, route }) {
    try {
      let products_results = await $axios.$get(
        "/data/best-personal-loans-2021.json"
      );
      let question_results = await $axios.$get(
        "/data/person_loan_question.json"
      );

      return {
        allProducts: products_results.data,
        // count: products_results.data.length,
        overallData: [products_results.data[0], products_results.data[1]],
        questionData: question_results.data,
      };
    } catch (error) {
      redirect("/error");
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
      },
    };
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },

    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != "function") {
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
      if (this.products.length == this.count) {
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
    // 拼接 msclkid 参数
    const changeLink = (url) => {
      let aff_sub = "",
        msclkid = "";

      // 判断hash是否有值
      if (this.$route.hash === "") {
        aff_sub = this.$route.query["utm_term"];
        msclkid = this.$route.query["msclkid"];
      } else {
        let arr = this.$route.hash.split("&");
        let hashParams = {};

        arr.forEach((ele, index) => {
          if (index != 0) {
            let hashArr = ele.split("=");
            hashParams[hashArr[0]] = hashArr[1];
          }
        });
        aff_sub = hashParams["utm_term"];

        if (!aff_sub) {
          aff_sub = this.$route.query["utm_term"];
        }
        msclkid = this.$route.query["msclkid"] + arr[0];
      }

      return `${url}&msclkid=${msclkid}&term_content=google`;
    };

    this.allProducts.forEach((ele) => {
      if (ele.link.indexOf("www.credible.com") != -1) {
        ele.link = changeLink(ele.link);
      }
    });

    let clientWidth = $(window).width();
    if (clientWidth <= 750) {
      let top = $('.banner-container .website-title').offset().top;

      $(window).on('scroll', function () {
        let headerHeight = $('.header-container').height();
        if ($(this).scrollTop() > top) {
          $('.banner-container .website-title').text('Compare Best Personal Loans Rates');
          $('.banner-container .website-title').css({
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
          $('.banner-container .website-title').text('Best Personal Loans 2021');
          $('.banner-container .website-title').css({
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
@import "~assets/scss/best-personal-loans-2021.scss";
</style>
