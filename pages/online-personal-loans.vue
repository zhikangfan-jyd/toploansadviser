<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <div class="logo-box">
            <img
              src="@/assets/img/website-logo.webp"
              alt="toploansadviser.com"
              class="website-logo"
            />
            <span class="cha-icon"></span>
            <img
              src="@/assets/img/eaglecashloan.webp"
              alt="eaglecashloan"
              class="credible-logo"
              style="height: 30px"
            />
          </div>
          <h1 class="website-title">The Fastest Way to Get Personal Loan</h1>
          <p class="sub-title">
            To find the best personal loan for your financial situation, it's
            best to shop around and compare personal loan rates from multiple
            lenders.
          </p>
          <p class="desc">
            With our trusted partner, Eaglecashloan, you can compare
            prequalified rates from up to 12 of the best personal loan lenders
            for in minutes. Plus, checking your rates is free and doesn't affect
            your credit score. Get your rate and see how much you can save
            today!
          </p>
          <a
            :href="mainLink"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn"
          >
            <span class="text">Get My Rates</span>
            <span class="iconfont">&#xe63c;</span>
          </a>
        </div>
        <div class="img-box">
          <img
            src="@/assets/img/best-personal-loan-banner.webp"
            alt=""
            class="pic"
          />
          <div class="trustpilot-box">
            <span class="iconfont big-star">&#xe64c;</span>
            <span class="text">Trustpilot</span>
            <div class="star-box">
              <span class="iconfont">&#xe64c;</span>
              <span class="iconfont">&#xe64c;</span>
              <span class="iconfont">&#xe64c;</span>
              <span class="iconfont">&#xe64c;</span>
              <span class="iconfont">&#xe64c;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="how-it-work-area">
      <div class="how-it-work-container">
        <div class="title-box">
          <span class="text">CREDITBLE LENDERS</span>
          <h2 class="area-title">How It Works</h2>
        </div>
        <div class="works-box">
          <div class="work-item">
            <img src="@/assets/img/work-1.webp" alt="" class="pic" />
            <span class="title">Compare Rates</span>
            <p class="text">Fill out a quick simple form (2 mins)</p>
          </div>
          <div class="work-item">
            <img src="@/assets/img/work-2.webp" alt="" class="pic" />
            <span class="title">Select A Lender</span>
            <p class="text">Choose an option you like (2 mins)</p>
          </div>
          <div class="work-item">
            <img src="@/assets/img/work-3.webp" alt="" class="pic" />
            <span class="title">Apply Online</span>
            <p class="text">Provide your loan details (3 mins)</p>
          </div>
        </div>
      </div>
    </section>
    <section class="product-area" id="quick-companies">
      <div class="product-container">
        <div class="title-box">
          <h2 class="area-title">Best Personal Loan Companies in 2021</h2>
          <a
            :href="mainLink"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn"
          >
            <span class="text">Get My Rates</span>
            <span class="iconfont">&#xe63c;</span>
          </a>
        </div>
        <div class="product-container-top-box">
          <div class="filter-box">
            <span class="title">Filter By</span>
            <div class="filter-list">
              <div class="filter-item">
                <div class="filter-title-box">Loan Amount</div>
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
                <div class="filter-title-box">Credit Score</div>
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
                      v-if="filter_credit_score_text != '<640'"
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
                      v-if="filter_credit_score_text != '640-690'"
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
                      v-if="filter_credit_score_text != '700-749'"
                      @click="
                        changeCreditScore({
                          min: 601,
                          max: 720,
                          text: '601-720',
                        })
                      "
                    >
                      <span>601-749</span>
                    </li>
                    <li
                      v-if="filter_credit_score_text != '>749'"
                      @click="
                        changeCreditScore({
                          min: 721,
                          max: 850,
                          text: '721-850',
                        })
                      "
                    >
                      <span>721-850</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="disclosure">
            <nuxt-link to="/disclosure" class="title"
              >Advertising Disclosure</nuxt-link
            >
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
              <div
                class="corner-box"
                v-if="index == 0 && item.name !== 'lightstream'"
              >
                <span class="text">Best Choice</span>
              </div>
              <div
                class="corner-box green"
                v-else-if="item.name == 'lightstream'"
              >
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
                    <img v-lazy="item.logo" :alt="item.name" />
                    <div class="disclaimer" v-if="item.disclaimer != ''">
                      Disclaimer
                      <el-popover
                        placement="bottom"
                        width="320"
                        trigger="hover"
                      >
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
                          Min. Credit Score: {{ item.compare.credit_score }}
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
                          APR：{{ item.compare.apr.min }}% -
                          {{ item.compare.apr.max }}%
                        </p>
                      </dd>
                      <dd>
                        <span class="iconfont">&#xe65a;</span>
                        <p class="text">Term：{{ item.compare.term }}</p>
                      </dd>
                    </dl>
                  </div>
                  <div class="terms-box">
                    <h5 class="title">Loan Amount</h5>
                    <span class="text-box" v-if="item.amount.max !== 'Infinity'"
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
                    :href="item.link"
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
                      style="display: inline; font-weight: normal"
                    >
                      Check My Rate
                    </h3>
                    <span class="iconfont">&#xe63c;</span>
                  </a>
                  <a
                    :href="item.link"
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
    <section class="info-area">
      <div class="info-container">
        <div class="info-box">
          <div class="info-left">
            <span class="num">10,000+</span>
            <p class="desc">users and counting...</p>
          </div>
          <div class="info-right">
            <p class="text">
              Credible helps national people get their
              <span class="green">personal loans safe and fast</span>
            </p>
          </div>
        </div>
        <img src="@/assets/img/info.webp" alt="" class="pic" />
        <a
          :href="mainLink"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="btn"
        >
          <span class="text">Get My Rates</span>
          <span class="iconfont">&#xe63c;</span>
        </a>
        <p class="small-text">
          Get personalized personal loan refi rates in 2 minutes
        </p>
      </div>
    </section>
    <section class="faq-area">
      <div class="faq-area-title-box">
        <img src="@/assets/img/faq.webp" alt="Toploansadviser" class="pic" />
        <div class="faq-content">
          <h4 class="faq-title">
            <span>FAQ's</span>
            <span>About Personal Loans</span>
          </h4>
          <div class="content">
            <p>
              It's essential for you to comprehend all associated terms and
              conditions before taking a personal loan. The following frequently
              asked questions regarding personal loans have been outlined for
              your convenience below.
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
              editors select a topic, the team tests (if possible) and evaluates
              products and services related to those topics. While our
              comparison lists are the nucleus of toploansadviser.com, we also
              feature product reviews, feature comparisons, guides, articles,
              and tutorials. We also have a scoring system for products and
              services based on data compiled from various factors.
            </p>
            <div class="img-box">
              <img src="@/assets/img/q1.webp" alt="toploansadviser" /><img
                src="@/assets/img/q2.webp"
                alt="toploansadviser"
              />
              <img src="@/assets/img/q3.webp" alt="toploansadviser" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { computeScore, formatNum } from "../utils/index";
import { updateTime } from "../utils/date";
import FoldTheCard from "../components/FoldTheCard/index";
export default {
  components: {
    FoldTheCard,
  },
  async asyncData({ $axios, redirect, route }) {
    // 拼接 msclkid 参数
    const changeLink = (url) => {
      let aff_sub = route.query["utm_term"];

      let msclkid = route.query["msclkid"];
      return `${url}&msclkid=${msclkid}&utm_term=${aff_sub}&term_content=google`;
    };

    try {
      let products_results = await $axios.$get("/data/best-personal-loan.json");
      let question_results = await $axios.$get(
        "/data/person_loan_question.json"
      );

      // 给所有 是www.creditble.com 的链接后面都拼接 参数
      products_results.data.forEach((ele) => {
        if (ele.link.indexOf("www.credible.com") != -1) {
          ele.link = changeLink(ele.link);
        }
      });
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
      mainLink: "https://secureconv-wh.com/?a=126374&c=279173&mt=4",
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
    updateTime,
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
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/best-personal-loan.scss";
</style>