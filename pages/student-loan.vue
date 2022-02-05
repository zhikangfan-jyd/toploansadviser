<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</div>
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Best Student Loan</span> <span>Refinance Companies {{ updateTime().year }}</span>
          </h1>
          <p class="sub-title">Compare Top Student Refinance Rates</p>
          <div class="content">
            <p>
              Toploansadviser has outlined the best student loans for multiple
              needs, so you can choose the loan for your specific situation.
            </p>
          </div>
          <p class="update">
            Last updated: {{ updateTime().month.short }} {{ updateTime().year }}
          </p>
        </div>
        <img
          alt="student loan banner"
          class="banner-img"
          src="@/assets/img/student-loan-banner-bg.webp"
        />
      </div>
    </section>
    <div class="container">
      <section class="product-area">
        <div class="product-container">
          <div class="product-container-top-box">
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
                  <el-popover
                    placement="bottom"
                    popper-class="popper"
                    trigger="hover"
                    width="320"
                  >
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
              <div class="title features">
                <span class="text">Loan Features</span>
              </div>
              <div class="title terms">
                <span class="text">Loan Terms</span>
              </div>
            </div>
            <div class="product-list">
              <div
                v-for="(item, index) in products"
                :key="item.name"
                class="product-item"
              >
                <div v-if="index == 0" class="corner-box">
                  <span class="text">Best Overall</span>
                </div>
                <div v-if="index == 0" class="visited-box">
                  <span class="iconfont"></span>
                  <span class="text"
                  ><strong>354 users</strong> chose this site today</span
                  >
                </div>

                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img v-lazy="item.logo" :alt="item.name"/>
                    </div>
                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{ item.rate.score }}</span>
                        <div v-if="index == 0" class="trustpilot-box">
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
                          v-if="item.review_key != ''"
                          :to="'/reviews/' + item.review_key"
                          class="reviews-link"
                        >Read Review
                        </nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="features-terms-box">
                    <div class="list-box">
                      <dl class="features-list">
                        <dt>
                          <!-- <span class="pc-text">Easily Compare & Save</span> -->
                          <span class="phone-text">Loan Features</span>
                        </dt>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Min. Credit Score: {{ item.compare.credit_score }}
                          </p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Fixed rate：{{ item.compare.fixed_rate.min_rate }}%
                            - {{ item.compare.fixed_rate.max_rate }}%
                          </p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Variable rate：{{
                              item.compare.variable_rate.min_rate
                            }}% - {{ item.compare.variable_rate.max_rate }}%
                          </p>
                        </dd>
                      </dl>
                    </div>
                    <div class="terms-box">
                      <span class="title">Loan Terms</span>
                      <span class="text-box"
                      >{{ item.loan_term.min_term }} -
                        {{ item.loan_term.max_term }} years</span
                      >
                    </div>
                  </div>
                  <div class="btn-box">
                    <a
                      :href="'/redirect/student-loan/'+item.name + '?gclid=' + item.gclid"
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
                      <span class="text">Check My Rate</span>
                      <span class="iconfont">&#xe63c;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more-box">
            <button v-if="isNull" class="btn" @click="loadMore">
              <span class="text">SEE MORE</span>
              <span class="iconfont">&#xe600;</span>
            </button>
            <button v-else class="btn close" @click="closeMore">
              <span class="text">COLLAPSE</span>
              <span class="iconfont">&#xe600;</span>
            </button>
          </div>
        </div>
      </section>
      <section class="best-overall-area">
        <div class="best-overall-title-box">
          <h2 class="best-overall-title">Best Overall</h2>
        </div>
        <div class="card-list">
          <div
            v-for="(item, index) in overallData"
            :key="item.name"
            class="product-item"
          >
            <div v-if="index == 0" class="corner-box">
              <span class="text">Best Overall</span>
            </div>
            <div v-if="index == 1" class="corner-box green">
              <span class="text">Best for Refinancing</span>
            </div>
            <div class="product-item-container">
              <div class="img-score-box">
                <div class="img-box">
                  <img v-lazy="item.logo" :alt="item.name"/>
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
                    <nuxt-link
                      v-if="item.review_key != ''"
                      :to="'/reviews/' + item.review_key"
                      class="reviews-link"
                    >Read Review
                    </nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="features-terms-box">
                <div class="list-box">
                  <dl class="features-list">
                    <dt>
                      <!-- <span class="pc-text">Easily Compare & Save</span> -->
                      <span class="phone-text">Loan Features</span>
                    </dt>
                    <dd>
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        Min. Credit Score: {{ item.compare.credit_score }}
                      </p>
                    </dd>
                    <dd>
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        Fixed rate：{{ item.compare.fixed_rate.min_rate }}% -
                        {{ item.compare.fixed_rate.max_rate }}%
                      </p>
                    </dd>
                    <dd>
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        Variable rate：{{
                          item.compare.variable_rate.min_rate
                        }}% - {{ item.compare.variable_rate.max_rate }}%
                      </p>
                    </dd>
                  </dl>
                </div>
                <div class="terms-box">
                  <span class="title">Loan Terms</span>
                  <span
                  >{{ item.loan_term.min_term }} -
                    {{ item.loan_term.max_term }} years</span
                  >
                </div>
              </div>
              <div class="btn-box">
                <a
                  :href="'/redirect/student-loan/'+item.name + '?gclid=' + item.gclid"
                  class="btn"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  @click="
                    handleTracking({
                      name: item.name,
                      click_time: new Date().getTime(),
                      link: item.link
                    })
                  "
                >
                  <span class="text">Check My Rate</span>
                  <span class="iconfont">&#xe63c;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq-area">
        <div class="faq-area-title-box">
          <img
            alt="answear or questions about student loans"
            class="pic"
            src="@/assets/img/faq.webp"
          />
          <div class="faq-content">
            <h2 class="faq-title">
              <span>FAQ's</span>
              <span>About Student Loans</span>
            </h2>
            <div class="content">
              <p>
                Before taking a student loan be sure you familiarize yourself
                with all the terms and conditions associated with the loan. To
                help you get started, we’ve compiled some of the most frequently
                asked questions about student loans below.
              </p>
            </div>
          </div>
        </div>
        <fold-the-card :data="questionData"></fold-the-card>
      </section>
    </div>
  </main>
</template>

<script>
import FoldTheCard from "../components/FoldTheCard/index";
import {computeScore} from "../utils/index";
import {updateTime} from "../utils/date";

export default {
  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "If you've been considering the option to refinance your student loans, you're in the right place.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "student loan refinance,loan rate，private student loan,federal student loan",
      },
    ],
  },
  components: {
    FoldTheCard,
  },
  async asyncData({$axios, error, route}) {


    try {
      // 获取所有产品
      let product_results = await $axios.$get(
        "/data/student_loan_product.json"
      );
      // 获取答疑问题的数据
      let question_results = await $axios.$get(
        "/data/student_loan_question.json"
      );

      // 给所有 是www.creditble.com 的链接后面都拼接 参数
      product_results.data.forEach((ele) => {

        ele.gclid = route.query['gclid']
      });

      return {
        count: product_results.data.length,
        allProducts: product_results.data,
        questionData: question_results.data,
        overallData: product_results.data.slice(0, 2),
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
      products: [],
    };
  },
  methods: {
    computeScore,
    updateTime,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != "function") {
        return;
      }
      window.uba(params);
    },
    // 点击加载更多数据
    loadMore() {
      let data = this.allProducts.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
      this.products = this.products.concat(data);
      this.page++;
      if (this.products.length == this.count) {
        this.isNull = false;
      }
    },
    // 关闭更多
    closeMore() {
      this.isNull = true;
      this.page = 1;
      this.products = [];
      this.loadMore();
    },
  },
  created() {
    this.loadMore();
  },
  mounted() {
    function showSlogan() {
      let clientWidth = $(window).width();
      if (clientWidth <= 750) {
        let top = $('.banner-container .website-title').offset().top;

        $(window).on('scroll', function () {
          let headerHeight = document.querySelector('.header-container').clientHeight;


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
            $('.banner-container .website-title').text('Best Personal Loans 2022');
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
    }

    showSlogan();

    $(window).on('resize', showSlogan)
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/student.scss";
</style>
