<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="content-container">
          <h1 class="website-title">Best Online Loan Lenders Reviews</h1>
          <div class="description">
            <p>
              We reviewed loans from more than 30+ financial institutions to
              find the best rates and loan features. We always recommend you
              know your credit score and compare loans APR from multiple lenders
              before making a choice.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="review-area">
      <div class="review-container">
        <ul class="related-pages">
          <li
            :class="{
              'single-related-page': true,
              active: category === 'personal-loan' || !category,
            }"
          >
            <a
              href="/reviews?category=personal-loan"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/best-icon.webp"
                alt="personal loan reviews"
                class="icon"
              />
              <span class="title">Personal Loan</span>
            </a>
          </li>

          <li
            :class="{
              'single-related-page': true,
              active: category === 'mortgage-loan',
            }"
          >
            <a
              href="/reviews?category=mortgage-loan"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/review-icon.webp"
                alt="mortgage loan reviews"
                class="icon"
              />
              <span class="title">Mortgage Loan</span>
            </a>
          </li>
          <li
            :class="{
              'single-related-page': true,
              active: category === 'student-loan',
            }"
          >
            <a
              href="/reviews?category=student-loan"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/article-icon.png"
                alt="student loan reviews"
                class="icon"
              />
              <span class="title">Student Loan</span>
            </a>
          </li>
          <li
            :class="{
              'single-related-page': true,
              active: category === 'home-equity',
            }"
          >
            <a
              href="/reviews?category=home-equity"
              class="link-box"
              target="_blank"
            >
              <img
                src="@/assets/img/calculator-icon.webp"
                alt="home equity loan reviews"
                class="icon"
              />
              <span class="title">Home Equity</span>
            </a>
          </li>
        </ul>
        <div class="review-list-title-box">
          <div class="logo-title-box">
            <span class="title">Lenders</span>
          </div>
          <div class="score-title-box">
            <span class="title">Score</span>
          </div>
          <div class="apr-title-box">
            <span class="title">{{
              category === "mortgage-loan" ? "Credit Score" : "APR"
            }}</span>
          </div>
          <div class="amount-title-box">
            <span class="title">{{
              category === "mortgage-loan" ? "Min.Down Payment" : "Loan Amount"
            }}</span>
          </div>
          <div class="btn-title-box">Learn More</div>
        </div>
        <div class="review-list">
          <div
            class="review-item"
            v-for="(review, id) in reviews"
            :key="review.name + id"
          >
            <div class="logo-box">
              <a
                :href="'/reviews/' + review.slug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  v-lazy="review.product.logo"
                  :alt="review.product.name"
                  class="logo"
                />
              </a>
            </div>
            <div class="score-box">
              <div class="rate-box">
                <span class="score">{{ review.product.rate.score }}</span>
                <el-rate
                  :colors="['#29b674', '#29b674', '#29b674']"
                  :value="computeScore(review.product.rate.score)"
                  disabled
                ></el-rate>
              </div>
            </div>
            <div class="apr-box" v-if="category !== 'mortgage-loan'">
              <span
                class="apr"
                v-if="
                  review.product.compare &&
                  review.product.compare.apr.max !== 'Infinity' &&
                  review.product.compare.apr.min !== ''
                "
                >{{ review.product.compare.apr.min }}% -
                {{ review.product.compare.apr.max }}%</span
              >
              <span
                class="apr"
                v-else-if="
                  review.product.compare &&
                  review.product.compare.apr.min !== ''
                "
                >Starting at {{ review.product.compare.apr.min }}%</span
              >
              <span class="apr" v-else>-</span>
            </div>
            <div class="apr-box" v-else>
              <span class="apr" v-if="review.product.credit_score.max === ''">{{
                review.product.credit_score.min
              }}</span>
              <span class="apr" v-else
                >{{ review.product.credit_score.min }} -
                {{ review.product.credit_score.max }}</span
              >
            </div>
            <div class="amount-box" v-if="category !== 'mortgage-loan'">
              <span
                class="amount"
                v-if="
                  review.product.amount &&
                  review.product.amount.max === 'Infinity'
                "
                >up to ${{ formatNum(review.product.amount.min) }}</span
              >
              <span
                class="amount"
                v-else-if="
                  review.product.amount && review.product.amount.min !== ''
                "
                >${{ formatNum(review.product.amount.min) }} - ${{
                  formatNum(review.product.amount.max)
                }}</span
              >
              <span class="amount" v-else>-</span>
            </div>
            <div class="amount-box" v-else>
              <span class="amount">{{
                review.product.min_down_payment
                  ? review.product.min_down_payment
                  : "-"
              }}</span>
            </div>
            <div class="btn-box">
              <a
                :href="'/reviews/' + review.slug"
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
                >Read Review >></a
              >
            </div>
          </div>
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
                <h3 class="guides-title">{{ recommendArticle.title }}</h3>
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
                  <h3 class="guides-title">{{ article.title }}</h3>
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
import { computeScore, formatNum } from "../../utils/index";
import { changeTime } from "../../utils/date";
import { seo } from "../../utils/seo";
export default {
  head: seo({
    title: "Reviews | Toploansadviser.com",
    description:
      "Here are many reviews in plain language from Toploansadviser, to help you decide on which loan provider is best for you. We reviewed many lenders based on its loan terms, loan amount, credit score, etc.",
    url: "https://www.toploansadviser.com/reviews",
    img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
    img_size: {
      width: "325",
      height: "295",
    },
    img_type: "image/webp",
  }),
  async asyncData({ $content, $axios, error, route }) {
    let category = "";
    const baseCategory = [
      "personal-loan",
      "student-loan",
      "mortgage-loan",
      "home-equity",
    ];
    let flag = baseCategory.includes(route.query.category);
    category = flag ? route.query.category : "personal-loan";
    let articles = [];
    let reviews = [];
    let questions = [];
    try {
      //获取review
      const doc = await $content("reviews")
        .where({ category: category })
        .fetch();
      doc.sort((a, b) => {
        return b.product.rate.score - a.product.rate.score;
      });

      reviews = doc;

      let res = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/article"
      );
      if (res.status === "success") {
        res.data.rows.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        // 随机取四篇文章
        let startIndex = 0;
        if (res.data.count > 4) {
          startIndex = Math.floor(Math.random() * (res.data.count - 5));
        }
        articles = res.data.rows.slice(startIndex, startIndex + 4);
        articles.forEach((ele) => {
          ele.date = changeTime(ele.date);
        });
      }
      let allQuestion = [];
      let faq_personal_loan_results = await $axios.$get(
        "/data/person_loan_question.json"
      );
      let faq_student_loan_results = await $axios.$get(
        "/data/student_loan_question.json"
      );
      allQuestion = allQuestion
        .concat(faq_personal_loan_results.data)
        .concat(faq_student_loan_results.data);

      let randomIndex = 0;
      if (allQuestion.length > 6) {
        randomIndex = Math.floor(Math.random() * (allQuestion.length - 7));
      }
      questions = allQuestion.slice(randomIndex, randomIndex + 6);
    } catch (err) {
      error();
    }
    return {
      recommendArticle: articles[0],
      otherArticles: articles.slice(1, 4),
      reviews: reviews,
      questions: questions,
      category: category,
    };
  },
  data() {
    return {};
  },
  methods: {
    computeScore,
    formatNum,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/reviews-index.scss";
</style>