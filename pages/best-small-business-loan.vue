<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Small Business Loans</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img
              alt=""
              class="author-image"
              src="@/assets/img/Kimberly-Rotter.png"
            />
            <p class="author-desc">
              Written by <span class="author-name">Kimberly Rotter</span>
            </p>
            <p class="updated">
              <span class="iconfont">&#xe645;</span>
              <span
                >Last updated: {{ updateTime().month.short }}
                {{ updateTime().year }}</span
              >
            </p>
          </div>
          <div :class="{ 'introduce-content': true, show: isShowReview }">
            <p>
              Entrepreneurs who need money to foster, develop,
              <strong
                >maintain and grow their companies need small business
                loans</strong
              >
              that give them the cash to do just these things. In the past,
              current and prospective business owners needed to visit a bank to
              attain the loan. However, with the Internet’s advent, small
              business owners can fill out and submit their paperwork online to
              quicken the application and approval process.
            </p>
            <p>
              According to the U.S. Small Business Administration (SBA), there
              are about 33 million small businesses that comprise a vast amount
              of the economic activity in the U.S. Every small business is
              different, but they share one commonality—they must have financing
              to begin and maintain operations.
            </p>
            <p>
              Toploansadviser has outlined the best small business loans for
              various needs so that
              <a href="/personal-loan" rel="noopener noreferrer" target="_blank"
                >you can choose the loan for your specific situation </a
              >.
            </p>
            <span
              :class="{ iconfont: true, show: isShowReview }"
              @click="handleShowReview"
              >&#xe600;</span
            >
          </div>
        </div>
      </div>
    </section>
    <!--    <section class="preface-area">-->
    <!--      <div class="preface-container">-->
    <!--        <h2 class="title">Best Small Business Loans</h2>-->
    <!--        <div class="preface-content">-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <section class="product-include-area">
      <div class="product-include-container">
        <div class="product-include-container-top">
          <div class="disclosure">
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
          </div>
        </div>

        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-include-item"
        >
          <div class="product-include-title">
            <img
              v-if="index === 0"
              alt=""
              class="medal"
              src="@/assets/img/medal-icon.png"
            />
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">
              {{ product.name }}-<span style="color: #cb9600">{{
                product.slogan
              }}</span>
            </h3>
          </div>
          <div class="product-include-card">
            <div v-if="index === 0" class="tips">
              <span class="g">503 users</span> chose this site today
            </div>
            <div class="product-include-card-info">
              <div class="product-include-card-info-left">
                <div class="logo-box">
                  <img :alt="product.name" :src="product.logo" class="logo" />
                  <div class="read-review-btn">Read Review <span>>></span></div>
                </div>
                <div class="rate-box">
                  <div class="score-box">
                    <span class="score">{{ product.score }}</span>
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
                      <NewStar :max="10" :score="product.score"></NewStar>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-include-card-info-right">
                <div class="content-box">
                  <ul class="product-advantage-list">
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">
                        Max Loan Amount: ${{ product.max_loan_amount }}
                      </p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">
                        Min.Credit Score: {{ product.min_credit_score }}
                      </p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">APR: {{ product.apr }}</p>
                    </li>
                  </ul>
                </div>
                <div class="btn-box">
                  <a
                    :href="product.link"
                    class="btn"
                    rel="noreferrer noopener nofollow"
                    >View Rates >></a
                  >
                </div>
              </div>
            </div>
            <div
              class="product-include-card-content"
              v-html="product.description"
            ></div>
          </div>
        </div>
        <div class="website-btn-container">
          <p class="text">Check your small business loan interest rates</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Right Now>>
          </a>
        </div>
      </div>
    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQ About Small Business Loan</h2>
        <div class="question-content">
          <div
            class="question-item"
            v-for="(question, idx) in questions"
            :key="idx"
          >
            <h6 class="question-title">{{ question.title }}</h6>
            <div class="content" v-html="question.content"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="conclusion-area">
      <div class="conclusion-container">
        <h2 class="title">Conclusion</h2>
        <div class="conclusion-content">
          <p>
            Before choosing which type of loan to go with, it is vital to have
            knowledge of the lenders that are in the industry offering loan
            product. Due diligence is needed to know about the loans offered and
            the expenses attached to them.
          </p>

          <p>
            Borrowers also should <a href="https://www.toploansadviser.com/guides/how-your-credit-score-affects-your-loan-chances" target="_blank" rel="noopener noreferrer">keep a check on their credit score</a> to be aware
            that they follow within the minimum guidelines of home equity loan
            providers. It is crucial to know the type of loan one can afford to
            pay and which lender best fits them.
          </p>
        </div>
      </div>

      <div class="website-btn-container">
        <p class="text">Check your Approval Odds for a small business loan</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>
    </section>
    <section class="breadcrumb-area">
      <ul class="breadcrumb-navigation">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span class="iconfont">&#xe606;</span>
          </a>
          <span class="icon">&gt;</span>
        </li>
        <li>
          <a
            href="/best-personal-loans"
            target="_blank"
            rel="noopener noreferrer"
            >Personal Loan</a
          >
          <span class="icon">&gt;</span>
        </li>
        <li>
          <a
            href="/best-small-business-loan"
            target="_blank"
            rel="noopener noreferrer"
            >Best Small Business Loan</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import { seo } from "../utils/seo";
import { updateTime } from "../utils/date";
import NewStar from "@/components/NewStar/index.vue";

export default {
  head: seo({
    title: "Best Small Business Loans | Toploansadviser.com",
    description:
      "No matter who you are, men, women or minorities. If you want to start or expand your own business without sufficient fund or good credit, you can choose Small Business Loan to help you to achieve it. ",
    keywords:
      "small business loan,government small business loans,small business loans for women,small business start up loans,small business administration loans,small business loans startup,small business finance,new small business loans,business loans for small business,small business lenders,minority business loans,small business loans for minorities",
    url: "https://www.toploansadviser.com/small-business-loan",
    img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
    img_size: {
      width: "325",
      height: "295",
    },
    img_type: "image/webp",
  }),
  components: {
    NewStar,
  },
  async asyncData({ $axios, error }) {
    try {
      let results = await $axios.$get("/data/small-business-loan.json");
      let questions = [],
          products = [];
      let question_results = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/faq/find_by_category?qcid=b01f6832-7dfb-45c7-921a-fc3099ffabc1"
      );
      if (question_results.status === "success") {
        questions = question_results.data.sort((a, b) => a.order - b.order);
      }

      return {
        products: results.data,
        questions: questions,
      };
    } catch (e) {
      error({ statusCode: 404 });
    }
  },
  data() {
    return {
      isShowDisclosure: false,
      isShowReview: false,
      currentInformationIndex: -1,
    };
  },
  methods: {
    updateTime,
    handleShowReview() {
      this.isShowReview = !this.isShowReview;
    },
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/small-business-loan.scss";
</style>
