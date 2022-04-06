<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content-box">
<!--          <ul class="breadcrumb-navigation">-->
<!--            <li>-->
<!--              <a href="/personal-loan" target="_blank" rel="noopener noreferrer" class="link">Home</a>-->
<!--              <span class="iconfont">&#xe616;</span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="/reviews" target="_blank" rel="noopener noreferrer" class="link">Reviews</a>-->
<!--              <span class="iconfont">&#xe616;</span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="/reviews/" target="_blank" rel="noopener noreferrer" class="link current">{{ doc.name }} Review {{ updateTime().year }}</a>-->
<!--            </li>-->
<!--          </ul>-->
          <h1 class="title">{{ doc.name }} Review {{ updateTime().year }}</h1>
          <p class="info">
            <span><span class="iconfont">&#xe62d;</span> By {{ doc.author.name }}</span>
            <span class="line">|</span>
            <span><span class="iconfont">&#xe645;</span> {{ doc.date }}</span>
          </p>
          <div class="rate-popover-box">
            <div class="rate-box">
              <span class="score">{{ product.rate.score }}</span>
              <el-rate
                :colors="['#1f9a61', '#1f9a61', '#1f9a61']"
                :value="computeScore(product.rate.score)"
                disabled
              ></el-rate>
            </div>
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

          <ul v-if="product.compare" class="detail-list">
            <li v-if="product.amount">
              <div class="key-box">
                <span class="icon amount-icon"></span>
                <span class="text">Loan Amount</span>
              </div>
              <span v-if="product.amount.min === 'Infinity'" class="value"
              >&lt;${{ formatNum(String(product.amount.max)) }}</span
              >
              <span v-else-if="product.amount.max === 'Infinity'" class="value"
              >&gt;${{ formatNum(String(product.amount.min)) }}</span
              >
              <span v-else class="value"
              >${{ formatNum(String(product.amount.min)) }} - ${{
                  formatNum(String(product.amount.max))
                }}</span
              >
            </li>
            <li v-if="product.compare">
              <div class="key-box">
                <span class="icon apr-icon"></span>
                <span class="text">APR</span>
              </div>
              <span v-if="product.compare" class="value"
              >{{ product.compare.apr.min }}% -
                {{ product.compare.apr.max }}%</span
              >
              <span v-else class="value"
              >{{ product.apr }}</span
              >
            </li>
            <li v-if="product.compare">
              <div class="key-box">
                <span class="icon credit-score-icon"></span>
                <span class="text">Minimum Credit Score</span>
              </div>
              <span v-if="product.compare" class="value"
              >{{ product.compare.credit_score }} Score</span
              >
              <span v-else class="value"
              >{{ product.credit_score }} Score</span
              >
            </li>
            <li v-if="product.compare">
              <div class="key-box">
                <span class="icon loan-term-icon"></span>
                <span class="text">Loan Term</span>
              </div>
              <span class="value">{{ product.compare.term }}</span>
            </li>
          </ul>
        </div>
        <div class="rate-score-box">
          <img :alt="product.name" :src="product.logo" class="logo"/>

          <div class="btn-box">
            <a
              :href="'/redirect?url='+ product.link"
              class="btn"
              rel="noopener noreferrer nofollow"
              target="_blank"
              @click="tracking(product.name)"
            >Check Rate >></a
            >
            <p class="small-text">Via Credible.com's Secure Website</p>
          </div>
          <div class="popover-box">
            <nuxt-link to="/disclosure">Advertising Disclosure</nuxt-link>

          </div>
        </div>
      </div>
      <div class="division-img-box">
        <img alt="" src="@/assets/img/division-icon.webp">
      </div>

    </section>

    <div class="reviews-container">
      <article class="reviews-container-left">
        <nuxt-content :document="doc"></nuxt-content>
      </article>
      <div class="reviews-container-right">


        <div class="disclosure-box">
          <nuxt-link to="/disclosure">Advertising Disclosure</nuxt-link>
        </div>
        <div class="top-area">

          <span class="title">TOP 5 LOANS</span>
          <ul class="top-list">
            <li v-for="(item, index) in topLoans" :key="index" class="top-item">
              <img :alt="item.name" :src="item.logo" class="logo"/>
              <a
                :href="'/redirect?url='+item.link + '&gclid=' + item.gclid"
                rel="noopener noreferrer nofollow"
                target="_blank"
                @click="tracking(item.name)"
              >Visit Site >></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="reviews-bottom-area">
      <div class="author-info">
        <img
          :alt="doc.author.name"
          :src="doc.author.headImg"
          class="pic"
        />
        <div class="info-box">
          <p class="name">{{ doc.author.name }}</p>
          <p class="text">{{ doc.author.desc }}</p>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import {computeScore, formatNum} from "../../utils/index";
import {updateTime} from '../../utils/date'
import {shareToFB, shareToTwitter} from "../../utils/share";
import {seo} from '../../utils/seo'
import {tracking} from "../../utils/ga-event";

export default {
  head() {
    return seo({
      title: this.doc.title,
      description: this.doc.description,
      url: this.url,
      img: 'https://www.toploansadviser.com' + this.doc.product.logo,
      img_size: {
        width: '160',
        height: '80'
      }
    });
  },
  async asyncData({$content, params, $axios}) {
    const doc = await $content('reviews/' + params.name).fetch();

    const {data} = await $axios.$get("/data/person_loan_product.json");
    return {
      url: 'https://www.toploansadviser.com/reviews/' + params.name,
      doc,
      product: doc.product,
      topLoans: data.slice(0, 5)
    }
  },
  data() {
    return {
      timer: null
    }
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,
    shareToFB,
    shareToTwitter,
    tracking,
    handleScroll() {
      let reviewsContainer = $(".reviews-container");
      let topArea = $(".reviews-container .top-area");
      let navHeight = $(".header-container").height();
      let right = reviewsContainer.offset().left;

      let top = topArea.offset().top;
      let positionTop = topArea.position().top;
      let areaHeight = topArea.height();
      let container_offset_top = reviewsContainer.offset().top;
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
