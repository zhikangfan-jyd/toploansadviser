<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">{{ title }}</h1>
        <div class="introduce-container">
          <div class="introduce-container-top">
            <div class="author-info">
              <img
                alt=""
                class="author-image"
                src="https://service.toploansadviser.com/images/3-1_1651915946010.webp"
              />
              <p class="author-desc">
                Written by <span class="author-name">Javier Enrile</span>
              </p>
            </div>
            <p class="updated">
              <span class="iconfont">&#xe645;</span>
              <span
                >Last updated: {{ updateTime().month.short }}
                {{ updateTime().year }}</span
              >
            </p>
          </div>

          <div class="introduce-content" v-html="description"></div>
        </div>
      </div>
    </section>
    <section class="product-area">
      <div class="product-container">
        <div class="product-module">
          <div class="product-module-top">
            <div class="keywords">
              <span>Our Choices</span>-<span>{{ title }}: </span>
            </div>

            <div class="disclosure">
              <span class="title" @click="handleShowDisclosure"
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
            <div v-if="products.length !== 0" class="product-list">
              <div
                v-for="(item, index) in products"
                :key="index"
                class="product-item"
              >
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img
                        v-lazy="
                          'https://service.toploansadviser.com/' + item.logo
                        "
                        :alt="item.name"
                        :title="item.name"
                      />
                    </div>

                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{ item.score }}</span>

                        <div class="star-box">
                          <el-rate
                            :colors="['#29b674', '#29b674', '#29b674']"
                            :value="computeScore(item.score)"
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
                          <h5 class="phone-text">Loan Features</h5>
                        </dt>
                        <dd>
                          <span class="iconfont">&#xe604;</span>
                          <h3
                            class="text"
                            style="display: inline; font-weight: normal"
                          >
                            Min. Credit Score:
                            <strong>{{ item.credit_score_min }}</strong>
                          </h3>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            APR：<strong
                              v-if="item.apr_min !== '' && item.apr_max !== ''"
                              >{{ item.apr_min }}% - {{ item.apr_max }}%</strong
                            ><span v-else>-</span>
                          </p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Term：<strong
                              v-if="
                                item.loan_term_min !== '' &&
                                item.loan_term_max !== ''
                              "
                              >{{ item.loan_term_min }}-{{
                                item.loan_term_max
                              }}
                              months</strong
                            ><span v-else>-</span>
                          </p>
                        </dd>
                      </dl>
                    </div>
                    <div class="terms-box">
                      <h5 class="title">Loan Amount:</h5>
                      <span v-if="item.loan_amount_max !== '' && item.loan_amount_min !== ''" class="text-box"
                        ><span
                          >${{ formatNum(String(item.loan_amount_min)) }}-</span
                        ><span
                          >${{ formatNum(String(item.loan_amount_max)) }}</span
                        ></span
                      >
                      <span
                        v-else-if="
                          item.loan_amount_max === '' &&
                          item.loan_amount_min !== ''
                        "
                        class="text-box"
                        ><span>up to</span>
                        <span
                          >${{ formatNum(String(item.loan_amount_min)) }}</span
                        ></span
                      >
                      <span v-else>-</span>
                    </div>
                  </div>
                  <div class="btn-box">
                    <a
                      :href="
                        '/redirect?url=' + item.link + '&gclid=' + item.gclid
                      "
                      class="btn"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      @click="tracking(item.name)"
                    >
                      <h3 class="text" style="display: inline">
                        Check My Rates >>
                      </h3>
                    </a>
                    <a
                      :href="
                        '/redirect?url=' + item.link + '&gclid=' + item.gclid
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
            </div>
            <div v-else class="no-results">
              <span class="iconfont">&#xe60b;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="guides-area" v-if="articles.length !== 0">
      <div class="guides-container">
        <p class="area-title">
          Most related articles you might need about
          <span class="keywords">{{ keyword }}</span
          >:
        </p>
        <div class="guides">
          <div class="guides-list">
            <div
              class="guides-item"
              v-for="(article, id) in articles"
              :key="article.acid + id"
            >
              <a
                :href="'/guides/' + article.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="image-container">
                  <img
                    v-lazy="
                      'https://service.toploansadviser.com' + article.picture
                    "
                    :alt="article.title"
                    :title="article.title"
                    class="picture"
                  />
                </div>
              </a>
              <div class="guides-item-container">
                <div class="guides-item-container-top">
                  <h3 class="guides-title">
                    <a
                      :href="'/guides/' + article.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      >{{ article.title }}
                    </a>
                  </h3>

                  <p class="description">{{ article.introduction }}</p>
                </div>
                <div class="guides-item-container-bottom">
                  <a
                    :href="'/guides/' + article.link"
                    target="_blank"
                    class="read-more-link"
                  >
                    READ MORE
                  </a>
                  <span class="date">{{ changeTime(article.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="question-area" v-if="questions.length !== 0">
      <div class="question-container">
        <p class="area-title">
          Frequently ask questions people searching about
          <span class="keywords">{{ keyword }}</span
          >:
        </p>
        <ul class="question-list">
          <li
            class="question-item"
            v-for="(question, id) in questions"
            :key="id"
          >
            <div class="question-title-box">
              <span class="icon"></span>
              <h5 class="question-title">{{ question.title }}</h5>
            </div>
            <div class="question-content" v-html="question.content"></div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { updateTime, changeTime } from "../../utils/date";
import { computeScore, formatNum } from "../../utils/index";
import { seo } from "../../utils/seo";
export default {
  head() {
    return seo({
      title: this.title + " | Toploanadviser.com",
      description:
        this.title +
        " from  Toploansadviser.com loans comparing marketplace to help you decide the best personal loans interest rates and loan amount, keep your financial plan be safe and best.",
      keywords: this.keyword,
      url: this.pageUrl,
      img: "https://www.toploansadviser.com/data/images/mortgage-loan.webp",
      img_size: {
        width: "522",
        height: "360",
      },
      img_type: "image/webp",
    });
  },

  async asyncData({ $axios, route, error }) {
    const { keywords } = route.params;

    /**
     * 思路：
     * 1. 获取用户传递的关键词 去数据库查找
     * 2. 对获取来的产品信息 只显示前3个，还要分类处理
     * 3. 将获取来的信息渲染
     */
    let articles = [];
    let products = [];
    let questions = [];
    let title = "",
      description = "";
    let keyword = "";
    try {
      let res = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/keywords/find?keyword=" +
          keywords
      );
      if (res.status === "success") {
        // 没有查询到相关关键词，报404
        if (Object.keys(res.data).length === 0) {
          error({
            statusCode: 404,
          });
        } else {
          // let { text, keyword, products, articles, questions } = res.data;
          articles = res.data.articles;
          description = res.data.text.text;
          keyword = res.data.keyword;
          questions = res.data.questions;
          products = res.data.products.sort((a, b) => {
            return b.score - a.score;
          });
          let arr = res.data.keyword.split(" ");
          arr.forEach((ele, idx) => {
            ele = ele[0].toUpperCase() + ele.substr(1);
            if (idx === 0) {
              title += ele;
            } else {
              title += " " + ele;
            }
          });
        }
        return {
          pageUrl:
            "https://www.toploansadviser.com/pages/" + route.params.keywords,
          keyword: keyword,
          title: title,
          description: description,
          articles: articles,
          products: products,
          questions: questions,
        };
      }
    } catch (err) {
      error({
        statusCode: 404,
      });
    }
  },
  data() {
    return {
      category_title: "",
      isShowDisclosure: false,
      filter_amount_text: "Show all",
      filter_credit_score_text: "Show all",
    };
  },
  methods: {
    computeScore,
    formatNum,
    updateTime,
    changeTime,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
    handleSlideAmount() {
      $(
        ".product-container .filter-box .filter-list .filter-name .filter-amount-list"
      ).slideToggle("fast");
      $(
        ".product-container .filter-box .filter-list .filter-name .name .iconfont"
      ).toggleClass("rotate");
    },
    handleFilter(category) {
      if (category === "all") {
        this.category_title = "Show All";
        this.category_modules = this.categories.filter((ele) => {
          return ele.products.length !== 0;
        });
      } else {
        this.category_title = category.name;
        this.category_modules = this.categories.filter((ele) => {
          return ele.pcid === category.pcid;
        });
      }
      this.handleSlideAmount();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/keywords.scss";
</style>