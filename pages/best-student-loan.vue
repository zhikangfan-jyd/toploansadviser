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
              src="@/assets/img/credible.webp"
              alt="Credible"
              class="credible-logo"
            />
          </div>
          <h1 class="website-title">
            The Reliable Way to Refinance Student Loan
          </h1>
          <p class="sub-title">
            Whether your college plans involve heading to campus or logging on
            for online learning, one thing is certain: You will need a way to
            pay.
          </p>
          <p class="desc">
            With our trusted partner, Credible, you can compare prequalified
            rates from up to 12 of the best student loan refinance companies for
            in minutes. Plus, checking your rates is free and doesn't affect
            your credit score. Get your rate and see how much you can save
            today!
          </p>
          <a
            :href="'/redirect/student-loan/'+mainName"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn"
          >
            <span class="text">Get My Rates</span>
            <span class="iconfont">&#xe63c;</span>
          </a>
        </div>
        <div class="img-box">
          <img src="@/assets/img/school-loans-banner.webp" alt="" class="pic" />
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
    <section class="paretner-area">
      <div class="paretner-container">
        <ul class="step-box">
          <li class="step-item" @click="quickJump('quick-faq')">
            <span class="icon"></span
            ><span class="text">Student Loans Refinannce FAQs</span>
          </li>
          <li class="step-item" @click="quickJump('quick-companies')">
            <span class="icon"></span
            ><span class="text">Best Student Loan Companies</span>
          </li>
          <li class="step-item" @click="quickJump('quick-companies')">
            <span class="icon"></span
            ><span class="text">Best Private Student Loan Companies</span>
          </li>
        </ul>
        <div class="title-box">
          <div class="img-box">
            <img
              src="@/assets/img/website-logo.webp"
              alt="toploansadviser"
              class="website-logo"
            />
            <span class="cha-icon"></span>
            <img
              src="@/assets/img/credible.webp"
              alt="Credible"
              class="credible-logo"
            />
          </div>
          <span class="text">CREDIBLE LENDERS</span>
        </div>
        <div class="logo-container">
          <ul class="logo-list">
            <li><img src="@/assets/img/AEL.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/brazos.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/RISLA.webp" alt="" class="pic" /></li>
            <li>
              <img src="@/assets/img/College_Ave.webp" alt="" class="pic" />
            </li>
            <li><img src="@/assets/img/SoFi.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/PenFed.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/INvestEd.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/ELFI.webp" alt="" class="pic" /></li>
            <li><img src="@/assets/img/MEFA.webp" alt="" class="pic" /></li>
            <li>
              <img src="@/assets/img/Citizens_Bank.webp" alt="" class="pic" />
            </li>
          </ul>
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
          <h2 class="area-title">
            Best Student Loan Refinance Companies in 2021
          </h2>
          <a
            :href="'/redirect/student-loan/' + mainName"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn"
          >
            <span class="text">Get My Rates</span>
            <span class="iconfont">&#xe63c;</span>
          </a>
        </div>
        <div class="product-list-box">
          <div class="product-title-box">
            <div class="title lenders"><span class="text">Lenders</span></div>
            <div class="title score">
              <span class="text">
                Score
                <el-popover
                  placement="bottom"
                  width="320"
                  trigger="hover"
                  popper-class="popper"
                >
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
            <div class="title features">
              <span class="text">Loan Features</span>
            </div>
            <div class="title terms"><span class="text">Loan Terms</span></div>
          </div>
          <div class="product-list">
            <div
              class="product-item"
              v-for="(item, index) in products"
              :key="item.name"
            >
              <div class="corner-box" v-if="index == 0">
                <span class="text">Best Overall</span>
              </div>
              <div class="visited-box" v-if="index == 0">
                <span class="iconfont"></span>
                <span class="text"
                  ><strong>354 users</strong> chose this site today</span
                >
              </div>

              <div class="product-item-container">
                <div class="img-score-box">
                  <div class="img-box">
                    <a
                      :href="'/redirect/student-loan/'+item.name + '?gclid=' + item.gclid"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <img v-lazy="item.logo" :alt="item.name" />
                    </a>
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
                <div class="features-terms-box">
                  <div class="list-box">
                    <dl class="features-list">
                      <dt>
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
                    <span class="text-box"
                      >{{ item.loan_term.min_term }} -
                      {{ item.loan_term.max_term }} years</span
                    >
                  </div>
                </div>
                <div class="btn-box">
                  <a
                    :href="'/redirect/student-loan/'+item.name + '?gclid=' + item.gclid"
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
    <section class="info-area">
      <div class="info-container">
        <div class="info-box">
          <div class="info-left">
            <span class="num">10,000+</span>
            <p class="desc">users and counting...</p>
          </div>
          <div class="info-right">
            <p class="text">
              We help national student to get the
              <span class="green">refinance and private student loans</span>
            </p>
          </div>
        </div>
        <img src="@/assets/img/info.webp" alt="" class="pic" />
        <a
          :href="'/redirect/student-loan/'+mainName "
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="btn"
        >
          <span class="text">Get My Rates</span>
          <span class="iconfont">&#xe63c;</span>
        </a>
        <p class="small-text">
          Get personalized student loan refi rates in 2 minutes
        </p>
      </div>
    </section>
    <section class="faq-area" id="quick-faq">
      <div class="faq-area-title-box">
        <img src="@/assets/img/faq.webp" alt="Toploansadviser" class="pic" />
        <div class="faq-content">
          <h2 class="faq-title">
            <span>FAQ's</span>
            <span>About Student Loans</span>
          </h2>
          <div class="content">
            <p>
              Before taking a student loan be sure you familiarize yourself with
              all the terms and conditions associated with the loan. To help you
              get started, we’ve compiled some of the most frequently asked
              questions about student loans below.
            </p>
          </div>
        </div>
      </div>
      <fold-the-card :data="questionData"></fold-the-card>
    </section>
  </main>
</template>

<script>
import FoldTheCard from "../components/FoldTheCard/index";
import { computeScore } from "../utils/index";
export default {
  head: {
    link: [
      {
        rel: "canonical",
        href: "https://www.toploansadviser.com/student-loan",
      },
    ],
  },
  components: {
    FoldTheCard,
  },
  async asyncData({ $axios, redirect, route }) {

    try {
      // 获取所有产品
      let product_results = await $axios.$get(
        "/data/student_loan_product.json"
      );
      // 获取答疑问题的数据
      let question_results = await $axios.$get(
        "/data/student_loan_question.json"
      );

      product_results.data.forEach((ele) => {
        ele.gclid = route.query['gclid']
      });

      return {
        count: product_results.data.length,
        allProducts: product_results.data,
        questionData: question_results.data,
        mainLink: product_results.data[0].link,
        mainName: product_results.data[0].name + '?gclid=' + route.query['gclid']
      };
    } catch (error) {
      redirect("/error");
    }
  },
  data() {
    return {
      isNull: true,
      page: 1,
      pageSize: 5,
      products: [],
    };
  },
  methods: {
    computeScore,
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
    quickJump(id) {
      this.$nextTick(() => {
        let top = $("#" + id).offset().top;
        window.scrollTo({
          top: top - 100,
          behavior: "smooth",
        });
      });
    },
  },
  created() {
    this.loadMore();
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/best-student-loan.scss";
</style>
