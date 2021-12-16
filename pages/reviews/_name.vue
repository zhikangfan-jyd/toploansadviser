<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content-box">
          <h1 class="title">{{ review.name }} Review 2021</h1>
          <p class="info">
            <span>By {{ review.author.name }}</span>
            <span class="line">|</span>
            <span>{{ review.date }}</span>
          </p>
          <ul class="detail-list">
            <li>
              <div class="key-box">
                <span class="icon amount-icon"></span>
                <span class="text">Loan Amount</span>
              </div>
              <span class="value" v-if="product.amount.min == 'Infinity'"
                >&lt;${{ formatNum(String(product.amount.max)) }}</span
              >
              <span class="value" v-else-if="product.amount.max == 'Infinity'"
                >&gt;${{ formatNum(String(product.amount.min)) }}</span
              >
              <span class="value" v-else
                >${{ formatNum(String(product.amount.min)) }} - ${{
                  formatNum(String(product.amount.max))
                }}</span
              >
            </li>
            <li>
              <div class="key-box">
                <span class="icon apr-icon"></span>
                <span class="text">APR</span>
              </div>
              <span class="value"
                >{{ product.compare.apr.min }}% -
                {{ product.compare.apr.max }}%</span
              >
            </li>
            <li>
              <div class="key-box">
                <span class="icon credit-score-icon"></span>
                <span class="text">Minimum Credit Score</span>
              </div>
              <span class="value"
                >{{ product.compare.credit_score }} Score</span
              >
            </li>
            <li>
              <div class="key-box">
                <span class="icon loan-term-icon"></span>
                <span class="text">Loan Term</span>
              </div>
              <span class="value">{{ product.compare.term }}</span>
            </li>
          </ul>
          <p class="text">
            <nuxt-link to="/disclosure">Advertising Disclosure</nuxt-link>
            <el-popover
              placement="bottom"
              width="280"
              trigger="hover"
              v-if="product.review_key == 'marcus'"
            >
              <span class="iconfont" style="font-size: 16px" slot="reference"
                >Editorial Disclosure</span
              >
              <div class="content">
                <p>
                  All reviews are prepared by Toploansadviser staff. Reviews
                  expressed therein are solely those of the reviewer and have
                  not been reviewed or approved by any advertiser. The
                  information, including rates and fees, appeared in the review
                  is accurate as of the date of the review. Check the lender's
                  website for the newest information.
                </p>
              </div>
            </el-popover>
          </p>
        </div>
        <div class="rate-score-box">
          <img :src="product.logo" :alt="product.name" class="logo" />

          <div class="rate-box review-rate-box">
            <span class="score">{{ product.rate.score }}</span>
            <el-rate
              disabled
              :colors="['#fd9c28', '#fd9c28', '#fd9c28']"
              :value="computeScore(product.rate.score)"
            ></el-rate>
          </div>
          <div class="btn-box">
            <a
              :href="'/redirect/personal-loan/'+mainName"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="btn"
              >Check Rate</a
            >
            <p class="small-text">Via Credible.com's Secure Website</p>
          </div>
          <div class="popover-box">
            <el-popover placement="bottom" width="280" trigger="hover">
              <span class="iconfont" slot="reference">How we rank?</span>
              <div class="content">
                <p>
                  The ratings and ranking on our website are determined by our
                  editorial team. The scoring mechanism for loan products takes
                  into account more than 10 data points across multiple
                  categories, such as APR, repayment options, customer service,
                  lender transparency, loan eligibility and others.
                </p>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </section>
    <div class="reviews-container">
      <div class="reviews-container-left">
        <div class="content-item" v-if="review.preface != ''">
          <div class="content" v-html="review.preface"></div>
        </div>
        <div class="content-item" v-if="review.overview != ''">
          <div class="title-box">
            <img src="@/assets/img/r-1.webp" alt="" class="box" />
            <h2 class="title">Overview</h2>
          </div>
          <div class="content" v-html="review.overview"></div>
        </div>

        <div class="btn-box">
          <a
            :href="'/redirect/personal-loan/'+mainName"
            target="_blank"
            rel="noopener noreferrer nofollow"
            @click="
              handleTracking({
                name: product.name,
                click_time: new Date().getTime(),
                link: mainLink,
              })
            "
            class="btn"
            >Check My Rate</a
          >
        </div>
        <div class="content-item" v-if="review.loan_account != ''">
          <div class="title-box">
            <img src="@/assets/img/r-2.webp" alt="" class="box" />
            <h2 class="title">Loan Amount</h2>
          </div>
          <div class="content" v-html="review.loan_account"></div>
        </div>
        <div class="content-item" v-if="review.apr != ''">
          <div class="title-box">
            <img src="@/assets/img/r-3.webp" alt="" class="box" />
            <h2 class="title">APR</h2>
          </div>
          <div class="content" v-html="review.apr"></div>
        </div>
        <div class="content-item" v-if="review.minimum_credit_score != ''">
          <div class="title-box">
            <img src="@/assets/img/r-4.webp" alt="" class="box" />
            <h2 class="title">Minimum credit score</h2>
          </div>
          <div class="content" v-html="review.minimum_credit_score"></div>
          <div class="btn-box" v-if="review.key === 'sofi'">
            <a
              :href="'/redirect/personal-loan/'+mainName"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="btn"
              @click="
                handleTracking({
                  name: product.name,
                  click_time: new Date().getTime(),
                  link: mainLink,
                })
              "
              >Check My Rate</a
            >
          </div>
        </div>
        <div class="content-item" v-if="review.requirements != ''">
          <div class="title-box">
            <img src="@/assets/img/r-5.webp" alt="" class="box" />
            <h2 class="title">Qualifying Requirements</h2>
          </div>
          <div class="content" v-html="review.requirements"></div>
        </div>
        <div class="content-item" v-if="review.loan_terms != ''">
          <div class="title-box">
            <img src="@/assets/img/r-6.webp" alt="" class="box" />
            <h2 class="title">Loan Terms</h2>
          </div>
          <div class="content" v-html="review.loan_terms"></div>
        </div>
        <div class="content-item" v-if="review.pros_cons != ''">
          <div class="title-box">
            <img src="@/assets/img/r-7.webp" alt="" class="box" />
            <h2 class="title">Pros & Cons</h2>
          </div>

          <div class="content" v-html="review.pros_cons.top"></div>
          <div class="pros-cons-box">
            <div class="pros">
              <div class="title-box">
                <span class="iconfont">&#xe644;</span>
                <span class="text">Pros</span>
              </div>
              <ul class="list">
                <li v-for="(item, index) in review.pros_cons.pros" :key="index">
                  <p class="text">{{ item.text }}</p>
                </li>
              </ul>
            </div>
            <div class="cons">
              <div class="title-box">
                <span class="iconfont">&#xe60c;</span>
                <span class="text">Cons</span>
              </div>
              <ul class="list">
                <li v-for="(item, index) in review.pros_cons.cons" :key="index">
                  <p class="text">{{ item.text }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="content" v-html="review.pros_cons.bottom"></div>
        </div>
        <div class="content-item" v-if="review.applying != ''">
          <div class="title-box">
            <img src="@/assets/img/r-8.webp" alt="" class="box" />
            <h2 class="title">Application</h2>
          </div>
          <div class="content" v-html="review.applying"></div>
        </div>
        <div class="content-item" v-if="review.have_bad_credit != ''">
          <div class="title-box">
            <img src="@/assets/img/r-9.webp" alt="" class="box" />
            <h2 class="title">Can you Apply if you have Bad Credit?</h2>
          </div>
          <div class="content" v-html="review.have_bad_credit"></div>
        </div>
        <div class="content-item" v-if="review.main_loan_features != ''">
          <div class="title-box">
            <img src="@/assets/img/r-10.webp" alt="" class="box" />
            <h2 class="title">Main Loan Features</h2>
          </div>
          <div class="content" v-html="review.main_loan_features"></div>
        </div>
        <div class="content-item" v-if="review.rates_fees != ''">
          <div class="title-box">
            <img src="@/assets/img/r-11.webp" alt="" class="box" />
            <h2 class="title">Rates & Fees</h2>
          </div>
          <div class="content" v-html="review.rates_fees"></div>
        </div>
        <div class="content-item" v-if="review.loan_process != ''">
          <div class="title-box">
            <img src="@/assets/img/r-12.webp" alt="" class="box" />
            <h2 class="title">Loan Process</h2>
          </div>
          <div class="content" v-html="review.loan_process"></div>
        </div>
        <div class="content-item" v-if="review.customer_support != ''">
          <div class="title-box">
            <img src="@/assets/img/r-13.webp" alt="" class="box" />
            <h2 class="title">Customer Support</h2>
          </div>
          <div class="content" v-html="review.customer_support"></div>
        </div>
        <div class="content-item" v-if="review.bottom_line != ''">
          <div class="title-box">
            <img src="@/assets/img/r-14.svg" alt="" class="box" />
            <h2 class="title">Bottom Line</h2>
          </div>
          <div class="content" v-html="review.bottom_line"></div>
        </div>
        <div class="btn-box">
          <a
            :href="'/redirect/personal-loan/'+mainName"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn"
            @click="
              handleTracking({
                name: product.name,
                click_time: new Date().getTime(),
                link: mainLink,
              })
            "
            >Check My Rate</a
          >
        </div>
        <div class="content-item" v-if="product.review_key == 'marcus'">
          <div class="title-box">
            <!-- <img src="@/assets/img/r-14.svg" alt="" class="box"> -->
            <h2 class="title" style="font-size: 20px; margin-left: 0">
              Terms And Conditions
            </h2>
          </div>
          <div class="content" style="font-size: 16px; line-height: 25px">
            <p>
              Your loan terms are not guaranteed and are subject to our
              verification of your identity and credit information. To obtain a
              loan, you must submit additional documentation including an
              application that may affect your credit score. The availability of
              a loan offer and the terms of your actual offer will vary due to a
              number of factors, including your loan purpose and our evaluation
              of your creditworthiness. Rates will vary based on many factors,
              such as your creditworthiness (for example, credit score and
              credit history) and the length of your loan (for example, rates
              for 36 month loans are generally lower than rates for 72 month
              loans Your maximum loan amount may vary depending on your loan
              purpose, income and creditworthiness. Your verifiable income must
              support your ability to repay your loan. Marcus by Goldman Sachs
              is a brand of Goldman Sachs Bank USA and all loans are issued by
              Goldman Sachs Bank USA, Salt Lake City Branch. Applications are
              subject to additional terms and conditions.
            </p>
          </div>
        </div>
      </div>
      <div class="top-area">
        <span class="title">TOP 5 LOANS</span>
        <ul class="top-list">
          <li class="top-item" v-for="(item, index) in topLoans" :key="index">
            <img :src="item.logo" :alt="item.name" class="logo" />
            <a
              :href="'/redirect/personal-loan/'+item.name + '?gclid=' + item.gclid"
              target="_blank"
              rel="noopener noreferrer nofollow"
              @click="
                handleTracking({
                  name: item.name,
                  click_time: new Date().getTime(),
                  link: item.link,
                })
              "
              >Visit Site</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="reviews-bottom-area">
      <div class="author-info">
        <img
          :src="review.author.headImg"
          :alt="review.author.name"
          class="pic"
        />
        <div class="info-box">
          <p class="name">{{ review.author.name }}</p>
          <p class="text">{{ review.author.desc }}</p>
        </div>
      </div>

      <div class="also-like-box">
        <div class="title-box">
          <h6 class="title">You may also like?</h6>
          <div class="share-box">
            <span class="text">Share to</span>
            <button
              @click="
                shareToFB('https://toploansadviser.com', 'toploansadviser')
              "
            >
              <span class="iconfont">&#xe63a;</span>
            </button>
            <button
              @click="
                shareToTwitter('https://toploansadviser.com', 'toploansadviser')
              "
            >
              <span class="iconfont">&#xe726;</span>
            </button>
          </div>
        </div>
        <div class="list-box">
          <div class="item" v-for="(item, index) in alsoLike" :key="index">
            <img :src="item.logo" :alt="item.name" class="logo" />
            <div class="rate-box">
              <el-rate
                disabled
                :value="computeScore(item.rate.score)"
                :colors="['#fd9c28', '#fd9c28', '#fd9c28']"
              ></el-rate>
            </div>
            <nuxt-link
              :to="'/reviews/' + item.review_key"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="btn"
              >Read Review</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <CalculatorPopup />
  </main>
</template>

<script>
import { computeScore, formatNum } from "../../utils/index";
import { shareToFB, shareToTwitter } from "../../utils/share";
import CalculatorPopup from "~/components/CalculatorPopup/index.vue";
export default {
  head() {
    return {
      script: [{
        type: 'application/ld+json',
        json: this.ld || ''
      }]
    }
  },
  components: {
    CalculatorPopup,
  },
  async asyncData({ $axios, params, redirect, route }) {


    try {
      const name = params.name;
      let productsResults = await $axios.$get("/data/person_loan_product.json");
      let product = {};
      let mainLink = "";
      let mainName = '';
      let alsoLike = [];
      productsResults.data.forEach((ele) => {

         ele.gclid = route.query['gclid'];

        if (ele.review_key == name) {
          product = ele;
          mainName = ele.name + '?gclid=' + ele.gclid;
          mainLink = ele.link;
        } else if (ele.review_key != "" && alsoLike.length < 3) {
          alsoLike.push(ele);
        }
      });
      let source = "/data/reviews/" + name + ".json";
      let results = await $axios.$get(source);
      return {
        ld: results.data.ld,
        product: product,
        mainLink: mainLink,
        mainName: mainName,
        topLoans: productsResults.data.slice(0, 5),
        review: results.data,
        alsoLike,
      };
    } catch (error) {
      redirect("/error");
    }
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    computeScore,
    shareToFB,
    shareToTwitter,
    formatNum,
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != "function") {
        return;
      }
      window.uba(params);
    },
    handleScroll() {
      let navHeight = $(".header-container").height();
      let right = $(".reviews-container").offset().left;

      let top = $(".reviews-container .top-area").offset().top;
      let positionTop = $(".reviews-container .top-area").position().top;
      let areaHeight = $(".reviews-container .top-area").height();
      let container_offset_top = $(".reviews-container").offset().top;
      let scrollTop = $(window).scrollTop();
      let authorTop = $(".reviews-bottom-area .author-info").offset().top;
      $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();

        if (scrollTop > top - navHeight && scrollTop < authorTop - top) {
          $(".reviews-container .top-area").css({
            position: "fixed",
            top: navHeight + "px",
            right: right + "px",
          });
        } else if (scrollTop > authorTop - top) {
          $(".reviews-container .top-area").css({
            position: "absolute",
            top: authorTop - areaHeight - container_offset_top - 50 + "px",
            right: 0 + "px",
          });
        } else {
          $(".reviews-container .top-area").css({
            position: "absolute",
            top: positionTop + "px",
            right: 0 + "px",
          });
        }
      });
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.timer = setTimeout(() => {
        this.handleScroll();
        clearTimeout(this.timer);
      }, 100);
    });
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/reviews.scss";
</style>
