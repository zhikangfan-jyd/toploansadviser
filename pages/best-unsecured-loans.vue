<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Unsecured Personal Loans</h1>
        <div class="introduce-container">
          <div class="introduce-container-top">
            <p class="updated">
              <span class="iconfont">&#xe645;</span>
              <span
                >Last updated: {{ updateTime().month.short }}
                {{ updateTime().year }}</span
              >
            </p>
            <div class="disclosure">
              <span class="disclosure-title" @click="handleShowDisclosure"
                >Advertising Disclosure</span
              >
              <div
                :class="{ disclosure_content: true, show: isShowDisclosure }"
              >
                The information shared through this website is based on our
                team’s personal judgements and views. We use our own comparisons
                to assign values, which are not intended to reflect a certain
                benchmark of precision. To keep our website free for use, we
                accept referral fees from various service providers, which have
                the potential to influence their respective appointed scores. A
                third party’s participation on toploansadviser.com is not an
                indication of endorsement. The information and vendors which
                appear on this site is subject to change at any time.The site
                does not include all companies offering loan products or all
                available loan offers.
              </div>
            </div>
          </div>

          <div class="introduce-content">
            <p>
              An unsecured loan is a loan that doesn't require any type of
              collateral, but loan amounts, interest rates, loan terms and fees
              can vary significantly between lenders.
            </p>
          </div>
          <p style="margin: 20px 0 15px 0">
            To help you make a decesion, we’ve rounded up our top picks for the
            best unsecured personal loans with features such as competitive
            interest rates, fees and the ability to prequalify.
          </p>
        </div>
      </div>
    </section>
    <section class="product-area">
      <div class="product-container">
        <div
          class="category-module"
          v-for="(module, id) in category_modules"
          :key="id"
        >
          <div style="font-size: 20px; font-weight: 500; margin-bottom: 10px">
            <span class="keywords">Our Choices</span>-<span
              >{{ module.category.name }}:
            </span>
          </div>
          <div class="product-list-box">
            <div class="product-title-box">
              <div class="title lenders">
                <span class="text">Lenders</span>
              </div>
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
              <h5 class="title terms">
                <span class="text">Loan Amount</span>
              </h5>
            </div>
            <div v-if="module.data.length !== 0" class="product-list">
              <div
                v-for="(item, index) in module.products"
                :key="index"
                class="product-item"
              >
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img
                        v-lazy="item.logo"
                        :alt="item.name"
                        :title="item.name"
                      />
                    </div>

                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{ item.rate.score }}</span>

                        <div class="star-box">
                          <el-rate
                            :colors="['#29b674', '#29b674', '#29b674']"
                            :value="computeScore(item.rate.score)"
                            disabled
                          ></el-rate>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="features-terms-box">
                    <div class="list-box">
                      <dl class="features-list">
                        <dt>
                          <!-- <span class="pc-text">{{ item.slogan }}</span> -->
                          <h5 class="phone-text">Loan Features</h5>
                        </dt>
                        <dd>
                          <span class="iconfont">&#xe604;</span>
                          <h3
                            class="text"
                            style="display: inline; font-weight: normal"
                          >
                            Min. Credit Score:
                            <strong>{{ item.compare.credit_score }}</strong>
                          </h3>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            APR：<strong
                              >{{ item.compare.apr.min }}% -
                              {{ item.compare.apr.max }}%</strong
                            >
                          </p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Term：<strong>{{
                              item.compare.term === "" ? "-" : item.compare.term
                            }}</strong>
                          </p>
                        </dd>
                      </dl>
                    </div>
                    <div class="terms-box">
                      <h5 class="title">Loan Amount:</h5>
                      <span v-if="item.amount.min !== ''" class="text-box"
                        ><span>${{ formatNum(String(item.amount.min)) }}-</span
                        ><span
                          >${{ formatNum(String(item.amount.max)) }}</span
                        ></span
                      >
                      <span v-else class="text-box"
                        ><span>up to</span>
                        <span
                          >${{ formatNum(String(item.amount.max)) }}</span
                        ></span
                      >
                    </div>
                  </div>
                  <div class="btn-box">
                    <a
                      :href="
                        '/redirect?url=' + item.link + '&gclid=' + module.gclid
                      "
                      class="btn"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      @click="tracking(item.name)"
                    >
                      <h3 class="text" style="display: inline">
                        Check My Rates >>
                      </h3>
                      <!--                    <span class="iconfont">&#xe63c;</span>-->
                    </a>
                    <a
                      :href="
                        '/redirect?url=' + item.link + '&gclid=' + module.gclid
                      "
                      class="visit-btn"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      @click="tracking(item.name)"
                      >Visit site >></a
                    >
                  </div>
                </div>
              </div>
              <div class="more-box" v-if="module.count > 3">
                <button
                  v-if="module.products.length !== module.count"
                  class="btn"
                  @click="loadMore(id)"
                >
                  <span class="text">SEE MORE</span>
                  <span class="iconfont">&#xe600;</span>
                </button>
                <button v-else class="btn close" @click="closeMore(id)">
                  <span class="text">COLLAPSE</span>
                  <span class="iconfont">&#xe600;</span>
                </button>
              </div>
            </div>
            <div v-else class="no-results">
              <span class="iconfont">&#xe60b;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </section>
    <section class="question-area" v-if="questions.length !== 0">
      <div class="question-container">
        <h2 class="title">FAQ's About Best Unsecured Loans</h2>
        <div
          class="question-content"
          v-for="(question, idx) in questions"
          :key="idx"
        >
          <h6 class="question-title">{{ question.title }}</h6>
          <div class="content" v-html="question.content"></div>
        </div>
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
            <a href="/best-personal-loans" target="_blank" rel="noopener noreferrer">Personal Loan</a>
            <span class="icon">&gt;</span>
          </li>
           <li>
            <a href="/best-unsecured-loans" target="_blank" rel="noopener noreferrer">Best Unsecured Loans</a>
            
          </li>
        </ul>
    </section>
  </main>
</template>

<script>
import { updateTime, changeTime } from "../utils/date";
import { computeScore, formatNum } from "../utils/index";
import { seo } from "../utils/seo";

export default {
  head: seo({
    title: "Best Unsecured Loan |  Toploansadviser.com",
    description:
      "An unsecured loan is when you borrow money from a lender without providing any collateral. You can find more information about best unsecured loan in 2022 from Toploansadviser.com.",

    url: "https://www.toploansadviser.com/best-unsecured-loans",
    img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
    img_size: {
      width: "325",
      height: "295",
    },
    img_type: "image/webp",
    link: [
      {
        rel: "canonical",
        href: "https://www.toploansadviser.com/personal-loan",
      },
    ],
  }),
  async asyncData({ $axios, route, error }) {
    try {
      let questions_results = await $axios.$get(
        "/data/best-unsecured-loans-questions.json"
      );
      let category_results = await $axios.$get(
        "/data/best-unsecured-loans.json"
      );
      const gclid = route.query["gclid"];

      category_results.data.forEach((ele) => {
        ele.gclid = gclid;
        ele.page = 1;
        ele.count = ele.data.length;
        ele.products = ele.data.slice(0, 3);
      });

      return {
        questions: questions_results.data,
        category_modules: category_results.data,
      };
    } catch (err) {
      error({
        statusCode: 404,
      });
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
    },
    loadMore(index) {
      this.category_modules[index].page = this.category_modules[index].page + 1;
      this.category_modules[index].products = this.category_modules[
        index
      ].data.slice(0, this.category_modules[index].page * 3);
    },
    closeMore(index) {
      this.category_modules[index].page = 1;
      this.category_modules[index].products = this.category_modules[
        index
      ].data.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/best-unsecured-loans.scss";
</style>