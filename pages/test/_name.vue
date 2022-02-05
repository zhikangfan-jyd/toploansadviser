<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content-box">
          <h1 class="title">{{ review.name }} Review {{ updateTime().year }}</h1>
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
              <span v-if="product.amount.min == 'Infinity'" class="value"
              >&lt;${{ formatNum(String(product.amount.max)) }}</span
              >
              <span v-else-if="product.amount.max == 'Infinity'" class="value"
              >&gt;${{ formatNum(String(product.amount.min)) }}</span
              >
              <span v-else class="value"
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
          <div class="text">
            <nuxt-link to="/disclosure">Advertising Disclosure</nuxt-link>
            <el-popover
              v-if="product.review_key == 'marcus'"
              placement="bottom"
              trigger="hover"
              width="280"
            >
              <span slot="reference" class="iconfont" style="font-size: 16px"
              >Editorial Disclosure</span
              >
              <div class="content">
                <p>
                  All reviews are prepared by Toploansadviser staff. Reviews
                  expressed therein are solely those of the reviewer and have
                  not been reviewed or approved by any advertiser. The
                  information, including rates and fees, appeared in the review
                  is accurate as of the date of the review. Check the lender's
                  website for the newest information.
                </p>
              </div>
            </el-popover>
          </div>
        </div>
        <div class="rate-score-box">
          <img :alt="product.name" :src="product.logo" class="logo"/>

          <div class="rate-box review-rate-box">
            <span class="score">{{ product.rate.score }}</span>
            <el-rate
              :colors="['#fd9c28', '#fd9c28', '#fd9c28']"
              :value="computeScore(product.rate.score)"
              disabled
            ></el-rate>
          </div>
          <div class="btn-box">
            <a
              :href="'/redirect/review/'+mainName"
              class="btn"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >Check Rate</a
            >
            <p class="small-text">Via Credible.com's Secure Website</p>
          </div>
          <div class="popover-box">
            <el-popover placement="bottom" trigger="hover" width="280">
              <span slot="reference" class="iconfont">How we rank?</span>
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
        <nuxt-content :document="doc"/>

      </div>
      <div class="top-area">
        <span class="title">TOP 5 LOANS</span>
        <ul class="top-list">
          <li v-for="(item, index) in topLoans" :key="index" class="top-item">
            <img :alt="item.name" :src="item.logo" class="logo"/>
            <a
              :href="'/redirect/personal-loan/'+item.name + '?gclid=' + item.gclid"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >Visit Site</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="reviews-bottom-area">
      <div class="author-info">
        <img
          :alt="review.author.name"
          :src="review.author.headImg"
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
          <div v-for="(item, index) in alsoLike" :key="index" class="item">
            <img :alt="item.name" :src="item.logo" class="logo"/>
            <div class="rate-box">
              <el-rate
                :colors="['#fd9c28', '#fd9c28', '#fd9c28']"
                :value="computeScore(item.rate.score)"
                disabled
              ></el-rate>
            </div>
            <nuxt-link
              :to="'/reviews/' + item.review_key"
              class="btn"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >Read Review
            </nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <CalculatorPopup/>
  </main>
</template>

<script>
import {computeScore, formatNum} from "../../utils/index";
import {updateTime} from '../../utils/date'
import {shareToFB, shareToTwitter} from "../../utils/share";
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
  async asyncData({$axios, params, $content, error, route}) {


    try {
      const name = params.name;
      const doc = await $content('reviews/' + name).fetch();
      let productsResults = await $axios.$get("/data/person_loan_product.json");
      let product = {};
      let mainLink = "";
      let mainName = '';
      let alsoLike = [];
      productsResults.data.forEach((ele) => {
        ele.gclid = route.query['gclid'];
        if (ele.review_key !== "" && alsoLike.length < 3) {
          alsoLike.push(ele);
        }
      });


      let source = "/data/reviews/" + name + ".json";
      let results = await $axios.$get(source);
      return {
        ld: results.data.ld,
        doc: doc,
        product: results.product,
        mainLink: results.product.link,
        mainName: results.product.name,
        topLoans: productsResults.data.slice(0, 5),
        review: results.data,
        alsoLike,
      };
    } catch (e) {
      error({statusCode: 404});
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
    updateTime,
    handleScroll() {
      let topAreaJqDom = $(".reviews-container .top-area");
      let reviewsContainerJqDom = $(".reviews-container");
      let navHeight = $(".header-container").height();
      let right = reviewsContainerJqDom.offset().left;

      let top = topAreaJqDom.offset().top;
      let positionTop = topAreaJqDom.position().top;
      let areaHeight = topAreaJqDom.height();
      let container_offset_top = reviewsContainerJqDom.offset().top;
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
@import "~assets/scss/new-reviews.scss";
</style>
