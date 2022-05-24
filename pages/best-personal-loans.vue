<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="content-container">
          <h1 class="website-title">Personal Loans</h1>
          <div class="description">
            <p>
              Personal loan can help you consolidate debt, refinance credit card
              or renovate your house.
            </p>
            <p>
              To find the best personal loan for your financial situation, it's
              best to shop around and compare personal loan rates from multiple
              lenders.
            </p>
          </div>
        </div>
        <ul class="related-pages">
          <li class="single-related-page">
            <a href="/personal-loan" class="link-box" target="_blank">
              <img
                src="@/assets/img/best-icon.webp"
                alt="best personal loans"
                class="icon"
              />
              <span class="title">Best Personal Loans</span>
            </a>
          </li>

          <li class="single-related-page">
            <a
              href="/reviews?category=personal-loan"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/review-icon.webp"
                alt="personal loans reviews"
                class="icon"
              />
              <span class="title">Personal Loans Reviews</span>
            </a>
          </li>
          <li class="single-related-page">
            <a
              href="/guides?category=personal-loan"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/article-icon.png"
                alt="personal loans guides"
                class="icon"
              />
              <span class="title">Personal Loans Guides</span>
            </a>
          </li>
          <li class="single-related-page">
            <a
              href="/personal-loan-calculator"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/calculator-icon.webp"
                alt="personal loans calculator"
                class="icon"
              />
              <span class="title">Personal Loans Calculator</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="comparision-area">
      <div class="comparision-container">
        <h2 class="area-title title">Best Personal Loans Comparision</h2>
        <div class="page-card-container">
          <div class="page-card-container-left">
            <div class="card-item first-card">
              <div class="card-item-container">
                <h3 class="card-title">Best Debt Consolidation Loan</h3>
                <a href="/best-consolidation-loans" target="_blank" class="btn"
                  >READ MORE >></a
                >
              </div>
              <img
                src="@/assets/img/debt_consolidation.webp"
                alt="best debt consolidation loan"
                class="bg-picture"
              />
            </div>
            <div class="page-card-container-left-bottom">
              <div class="card-item three-card">
                <div class="card-item-container">
                  <h3 class="card-title">Best Emergency Loan</h3>
                  <a href="/best-emergency-loan" target="_blank" class="btn"
                    >READ MORE >></a
                  >
                </div>
                <img
                  src="@/assets/img/emergency.webp"
                  alt="best emergency loan"
                  class="bg-picture"
                />
              </div>
              <div class="card-item four-card">
                <div class="card-item-container">
                  <h3 class="card-title">Best Personal Loan</h3>
                  <a href="/personal-loan" target="_blank" class="btn"
                    >READ MORE >></a
                  >
                </div>
                <img
                  src="@/assets/img/personal_loan.webp"
                  alt="best personal loan"
                  class="bg-picture"
                />
              </div>
            </div>
          </div>
          <div class="page-card-container-right">
            <div class="card-item second-card">
              <div class="card-item-container">
                <h3 class="card-title">Best Small Business Loan</h3>
                <a href="/best-small-business-loan" target="_blank" class="btn"
                  >READ MORE >></a
                >
              </div>
              <img
                src="@/assets/img/small_business.webp"
                alt="best small business loan"
                class="bg-picture"
              />
            </div>
            <div class="card-item five-card">
              <div class="card-item-container">
                <h3 class="card-title">Best Home Improvement Loan</h3>
                <a
                  href="/best-home-improvement-loan"
                  target="_blank"
                  class="btn"
                  >READ MORE >></a
                >
              </div>
              <img
                src="@/assets/img/home_improvement.webp"
                alt="best home improvement loan"
                class="bg-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="swiper-area">
      <div class="custom-swiper-container">
        <h2 class="area-title">Top online best personal loan lenders</h2>
        <div class="swiper">
          <client-only>
            <swiper
              ref="my-swiper"
              :options="swiperOptions"
              class="my-swiper-container"
            >
              <swiper-slide
                class="my-swiper-slide"
                v-for="(product, id) in products"
                :key="product.name + id"
              >
                <div class="logo-box">
                  <img
                    :src="product.logo"
                    :alt="product.name"
                    :title="product.name"
                    class="logo"
                  />
                </div>
                <span class="separate-icon"></span>
                <ul class="product-features">
                  <li>
                    APR: {{ product.compare.apr.min }}-{{
                      product.compare.apr.max
                    }}%
                  </li>
                  <li>Loan Term: {{ product.compare.term }}</li>
                  <li>Min Credit Score: {{ product.compare.credit_score }}</li>
                </ul>
                <a
                  :href="'/redirect?url=' + product.link"
                  class="btn"
                  target="blank"
                  >Check Rate >></a
                >
              </swiper-slide>
            </swiper>
          </client-only>
          <div class="button-prev"></div>
          <div class="button-next"></div>
        </div>
      </div>
    </section>
    <section class="guides-area">
      <div class="guides-container">
        <h2 class="area-title">Guides</h2>
        <div class="guides">
          <div class="recommend-guides">
            <a
              :href="'/guides/' + recommendArticle.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="image-box">
                <img
                  v-lazy="
                    'https://service.toploansadviser.com' +
                    recommendArticle.picture
                  "
                  :alt="recommendArticle.title"
                  :title="recommendArticle.title"
                  class="picture"
                />
              </div>
            </a>
            <div class="recommend-guides-container">
              <div class="recommend-guides-container-top">
                <h3 class="guides-title">
                  <a
                    :href="'/guides/' + recommendArticle.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ recommendArticle.title }}</a
                  >
                </h3>

                <p class="description">{{ recommendArticle.introduction }}</p>
              </div>
              <div class="recommend-guides-container-bottom">
                <a
                  :href="'/guides/' + recommendArticle.link"
                  class="read-more-link"
                  target="_blank"
                  >READ MORE</a
                >
                <span class="date">{{ recommendArticle.date }}</span>
              </div>
            </div>
          </div>
          <div class="guides-list">
            <div
              class="guides-item"
              v-for="(article, id) in otherArticles"
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
                  <span class="date">{{ article.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="question-area">
      <div class="question-container">
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { changeTime } from "../utils/date";
import { seo } from "../utils/seo";
export default {
  head: seo({
    title: "Best Personal Loans | Toploansadviser.com",
    description:
      "Here are our picks for the best personal loans: Credible, LightStream, Sofi, LendingClub, etc. We offer simple, straightforward application processes. They also feature low interest rates for you.",
    keywords: "personal loans,best personal loans,best personal loans 2022",
    url: "https://www.toploansadviser.com/best-personal-loans",
    img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
    img_size: {
      width: "325",
      height: "295",
    },
    img_type: "image/webp",
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, error }) {
    let articles = [];
    let products = [];
    let questions = [];
    try {
      let res = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/article/find/category",
        {
          params: {
            acid: "4e3be35d-a94d-4044-a5bf-db1dd2d928b1",
          },
        }
      );
      if (res.status === "success") {
        res.data.rows.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        articles = res.data.rows.slice(0, 4);
        articles.forEach((ele) => {
          ele.date = changeTime(ele.date);
        });
      }
      let products_results = await $axios.$get(
        "/data/person_loan_product.json"
      );
      let question_results = await $axios.$get(
        "/data/person_loan_question.json"
      );
      products = products_results.data;
      questions = question_results.data;
    } catch (err) {
      error();
    }
    return {
      recommendArticle: articles[0],
      otherArticles: articles.slice(1, 4),
      products: products,
      questions: questions,
    };
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        delay: 3500,
        speed: 1000,
        loop: true,
        observer: true,
        loopedSlides: 4,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      },
    };
  },
  directives: {
    swiper: directive,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/best-personal-loans.scss";
</style>