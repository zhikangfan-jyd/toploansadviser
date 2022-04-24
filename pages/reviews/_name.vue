<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content-box">
          <ul class="breadcrumb-navigation">
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer" class="link"
                >
                  <span class="iconfont">&#xe606;</span>
                </a
              >
              <span class="icon">&gt;</span>
            </li>
            <li>
              <a
                href="/reviews"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >Reviews</a
              >
              <span class="icon">&gt;</span>
            </li>
            <li>
              <a
                :href="'/reviews/' + slug"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >{{ doc.name }} Review {{ updateTime().year }}</a
              >
            </li>
          </ul>
          <h1 class="title">{{ doc.name }} Review {{ updateTime().year }}</h1>
          <p class="info">
            <span
              ><span class="iconfont">&#xe62d;</span> By
              {{ doc.author.name }}</span
            >
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
              <span v-else class="value">{{ product.apr }}</span>
            </li>
            <li v-if="product.compare">
              <div class="key-box">
                <span class="icon credit-score-icon"></span>
                <span class="text">Minimum Credit Score</span>
              </div>
              <span v-if="product.compare" class="value"
                >{{ product.compare.credit_score }} Score</span
              >
              <span v-else class="value">{{ product.credit_score }} Score</span>
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
          <img :alt="product.name" :src="product.logo" class="logo" />

          <div class="btn-box">
            <a
              :href="'/redirect?url=' + product.link"
              class="btn"
              rel="noopener noreferrer nofollow"
              target="_blank"
              @click="tracking(product.name)"
              >Check Rate >></a
            >
            <p class="small-text">Via Credible.com's Secure Website</p>
          </div>
          <!-- <div class="popover-box">
            <span class="title" @click="handleShowDisclosure"
              >Advertising Disclosure</span
            >
            <div :class="{ disclosure_content: true, show: isShowDisclosure }">
              The information shared through this website is based on our team’s
              personal judgements and views. We use our own comparisons to
              assign values, which are not intended to reflect a certain
              benchmark of precision. To keep our website free for use, we
              accept referral fees from various service providers, which have
              the potential to influence their respective appointed scores. A
              third party’s participation on toploansadviser.com is not an
              indication of endorsement. The information and vendors which
              appear on this site is subject to change at any time.The site does
              not include all companies offering loan products or all available
              loan offers.
            </div>
          </div> -->
        </div>
      </div>
      <div class="division-img-box">
        <img alt="" src="@/assets/img/division-icon.webp" />
      </div>
    </section>

    <div class="reviews-container">
      <article class="reviews-container-left">
        <nuxt-content :document="doc"></nuxt-content>
      </article>
      <div class="reviews-container-right">
        <div class="disclosure-box">
          <span class="title" @click="handleShowDisclosure"
            >Advertising Disclosure</span
          >
          <div :class="{ disclosure_content: true, show: isShowDisclosure }">
            <p v-if="product.name === 'Marcus'">
              Your loan terms are not guaranteed and are subject to our
              verification of your identity and credit information. To obtain a
              loan, you must submit additional documentation including an
              application that may affect your credit score. The availability of
              a loan offer and the terms of your actual offer will vary due to a
              number of factors, including your loan purpose, our evaluation of
              your creditworthiness, your credit history, if we have recently
              declined your loan application and the number of loans you already
              have with us. To obtain a loan, you must submit additional
              documentation including an application that may affect your credit
              score. Rates will vary based on many factors, such as your
              creditworthiness (for example, credit score and credit history)
              and the length of your loan (for example, rates for 36 month loans
              are generally lower than rates for 72 month loans). Your maximum
              loan amount may vary depending on your loan purpose, income and
              creditworthiness. Your verifiable income must support your ability
              to repay your loan. Marcus by Goldman Sachs is a brand of Goldman
              Sachs Bank USA and all loans are issued by Goldman Sachs Bank USA,
              Salt Lake City Branch. Applications are subject to additional
              terms and conditions. You may be required to have some of your
              funds sent directly to creditors to pay down certain types of
              unsecured debt. Receive a 0.25% APR reduction when you enroll in
              AutoPay. This reduction will not be applied if AutoPay is not in
              effect. When enrolled, a larger portion of your monthly payment
              will be applied to your principal loan amount and less interest
              will accrue on your loan, which may result in a smaller final
              payment. See loan agreement for details.
            </p>
            <p v-else>
              The information shared through this website is based on our team’s
              personal judgements and views. We use our own comparisons to
              assign values, which are not intended to reflect a certain
              benchmark of precision. To keep our website free for use, we
              accept referral fees from various service providers, which have
              the potential to influence their respective appointed scores. A
              third party’s participation on toploansadviser.com is not an
              indication of endorsement. The information and vendors which
              appear on this site is subject to change at any time.The site does
              not include all companies offering loan products or all available
              loan offers.
            </p>
          </div>
        </div>
        <div class="top-area">
          <span class="title">TOP 5 LOANS</span>
          <ul class="top-list">
            <li v-for="(item, index) in topLoans" :key="index" class="top-item">
              <img :alt="item.name" :src="item.logo" class="logo" />
              <a
                :href="'/redirect?url=' + item.link + '&gclid=' + item.gclid"
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
        <img :alt="doc.author.name" :src="doc.author.headImg" class="pic" />
        <div class="info-box">
          <p class="name">{{ doc.author.name }}</p>
          <p class="text">{{ doc.author.desc }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computeScore, formatNum } from "../../utils/index";
import { updateTime } from "../../utils/date";
import { shareToFB, shareToTwitter } from "../../utils/share";
import { seo } from "../../utils/seo";
import { tracking } from "../../utils/ga-event";

export default {
  head() {
    return seo({
      title: this.doc.title,
      description: this.doc.description,
      url: this.url,
      img: "https://www.toploansadviser.com" + this.doc.product.logo,
      img_size: {
        width: "160",
        height: "80",
      },
    });
  },
  async asyncData({ $content, params, $axios }) {
    const doc = await $content("reviews/" + params.name).fetch();
    const { data } = await $axios.$get("/data/person_loan_product.json");
    return {
      url: "https://www.toploansadviser.com/reviews/" + params.name,
      doc,
      product: doc.product,
      topLoans: data.slice(0, 5),
      slug: params.name,
    };
  },
  data() {
    return {
      timer: null,
      isShowDisclosure: false,
    };
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,
    shareToFB,
    shareToTwitter,
    tracking,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
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
