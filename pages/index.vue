<template>
  <main class="home-page">
    <section class="swiper-area">
      <div class="banner-container">
        <div class="banner-left" data-aos="fade-right">
          <h2 class="website-title">We Compare, You Choose</h2>
          <p class="desc">
            To find the best personal loan for your financial situation, it's
            best to shop around and compare personal loan rates from multiple
            lenders.
          </p>
        </div>
        <div class="banner-right">
          <client-only>
            <swiper
              ref="swiper"
              :options="swiperOptions"
              class="my-swiper-container"
              data-aos="fade-left"
            >
              <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                  <img
                    alt="personal loan on the cover"
                    class="pic"
                    src="@/assets/img/banner.webp"
                  />
                  <h1 class="website-title">
                    Best Personal Loan {{ updateTime().year }}
                  </h1>

                  <a
                    class="btn"
                    href="/personal-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                  <img
                    alt="student loan on the cover"
                    class="pic"
                    src="@/assets/img/student-banner.webp"
                  />
                  <h1 class="website-title">
                    Best Student Loan Refinance Companies
                    {{ updateTime().year }}
                  </h1>

                  <a
                    class="btn"
                    href="/student-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </div>
              </swiper-slide>
              <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                  <img
                    alt="mortgage loan on the cover"
                    class="pic"
                    src="@/assets/img/mortgage-banner.webp"
                  />
                  <h1 class="website-title">
                    Best Mortgage Lenders {{ updateTime().year }}
                  </h1>

                  <a
                    class="btn"
                    href="/mortgage-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
          </client-only>
        </div>
      </div>
    </section>

    <section class="home-page-main-area">
      <div class="home-page-main-container">
        <div class="phone-swiper-container">
          <client-only>
            <swiper
              ref="phone-swiper"
              :options="phoneSwiperOptions"
              class="phone-swiper"
            >
              <swiper-slide class="phone-swiper-slide slide-1">
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <h1 class="title">
                    <span class="g">We compare <span class="w">,</span></span
                    ><span>you choose</span>
                  </h1>
                  <div class="desc-content">
                    <p>
                      Our goal is to save your time and effort by simplifying
                      the decision process, while choosing a service or product
                      that suits your needs.
                    </p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="phone-swiper-slide">
                <a
                  href="/personal-loan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h1 class="title">
                    Best Personal Loan {{ updateTime().year }}
                  </h1>
                  <div class="desc-content">
                    <p>
                      To find the best personal loan for your financial
                      situation compare personal loan rates from multiple
                      lenders
                    </p>
                  </div>
                  <a
                    class="btn"
                    href="/personal-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </a>
              </swiper-slide>
              <swiper-slide class="phone-swiper-slide">
                <a
                  href="/student-loan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h1 class="title">
                    Best Student Loan Refinance Companies
                    {{ updateTime().year }}
                  </h1>
                  <div class="desc-content">
                    <p>
                      Toploansadviser has outlined the best student loans for
                      multiple needs, so you can choose the loan for your
                      specific situation.
                    </p>
                  </div>
                  <a
                    class="btn"
                    href="/student-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </a>
              </swiper-slide>
              <swiper-slide class="phone-swiper-slide">
                <a
                  href="/mortgage-loan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h1 class="title">
                    Best Mortgage Lenders {{ updateTime().year }}
                  </h1>
                  <div class="desc-content">
                    <p>
                      Lower interest rates mean that you can save real money on
                      your mortgage. Compare our top-tier providers and find the
                      best purchase and refinance rates for you.
                    </p>
                  </div>
                  <a
                    class="btn"
                    href="/mortgage-loan"
                    rel="noopener noreferrer"
                    target="_blank"
                    >Find more</a
                  >
                </a>
              </swiper-slide>
            </swiper>
            <div class="phone-swiper-pagination"></div>
          </client-only>
        </div>
        <div data-aos="fade-up">
          <h2 class="area-title">Comparison helps you get more wisdom</h2>
        </div>

        <div class="desc-title-card" data-aos="fade-up">
          <h6 class="title">Who we are?</h6>
          <div class="card-bottom">
            <p class="sub-title">
              <a href="/about-us" rel="noopener noreferrer" target="_blank"
                >about Toploansadviser</a
              >
              <span class="icon"></span><span class="icon"></span>
            </p>
            <a
              class="more-link"
              href="/personal-loan"
              rel="noopener noreferrer"
              target="_blank"
              >more information here</a
            >
          </div>
        </div>
        <div class="content-box" data-aos="fade-up">
          <h1 class="text" data-aos="fade-up" style="font-weight: normal">
            Toploansadviser was founded to help consumers make educated
            financial decisions while learning more about various financial
            products.
          </h1>
          <div class="desc-item">
            <img
              alt="perfessional and easy"
              class="pic"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-offset="300"
              src="@/assets/img/index-pic-1.webp"
            />
            <div class="desc-content" data-aos="fade-up">
              <h6 class="desc-item-title">
                Our experts make it easy to plan your financial future.
              </h6>
              <p class="content">
                At Toploanadviser, we give our clients in-depth information
                about diverse financial products and the necessary information
                to succeed in a complicated financial world.
              </p>
            </div>
          </div>
          <div class="desc-item">
            <div class="desc-content" data-aos="fade-up">
              <h6 class="desc-item-title">
                Most of us are unfortunately lacking in financial literacy.
              </h6>
              <p class="content">
                Our goal is to provide our clients with all the essential
                information to choose the bank best fitting their financial
                needs.
              </p>
            </div>
            <img
              alt="best plan to fit"
              class="pic"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-offset="300"
              src="@/assets/img/about-pic-3.webp"
            />
          </div>
        </div>
        <h2 class="area-title counter-title" data-aos="fade-up">
          Calculate your estimated monthly loan payment 
        </h2>
        <div class="counter-container" data-aos="zoom-in">
          <div class="input-left">
            <div class="amount-box">
              <span class="title">Amount</span>
              <div class="amount-input-box">
                <input
                  v-model="form.amount"
                  class="amount-input"
                  type="text"
                  @input="changeAmount"
                />
              </div>
            </div>
            <div class="rate-box">
              <input
                v-model="form.rate"
                class="rate-annualy-input"
                placeholder="Rate annually"
                type="text"
                @input="changeRate"
              />
            </div>

            <input
              v-model="form.year"
              class="year-input"
              placeholder="Year"
              type="text"
              @input="changeYear"
            />
            <span class="text">or</span>
            <input
              v-model="form.month"
              class="months-input"
              placeholder="Months"
              type="text"
              @input="changeMonth"
            />
          </div>
          <div class="results-right">
            <h6 class="title">
              <span class="green">Loan</span> <span>Calculator</span>
            </h6>

            <div class="results-container">
              <button class="submit-btn" @click="submit">
                <span class="iconfont">&#xe605;</span>
              </button>
              <div class="results-box">
                <div class="results-item">
                  <span class="icon">$</span>
                  <div class="results">
                    <span class="value month-price">{{ form.per_month }}</span>
                    <span class="value-title">Per Month</span>
                  </div>
                </div>
                <div class="results-item">
                  <span class="icon">$</span>
                  <div class="results">
                    <span class="value">{{ form.total }}</span>
                    <span class="value-title">Total Interest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="phone-counter-container" data-aos="zoom-in">
          <h3 class="title"><span class="g">Loan</span> Calculator</h3>

          <div class="form-box">
            <div class="form-item">
              <span class="item-title">Amount</span>
              <div class="amount-input-box">
                <input
                  v-model="form.amount"
                  type="text"
                  @input="changeAmount"
                />
              </div>
            </div>
            <div class="form-item">
              <span class="item-title">Rate annually</span>
              <div class="rate-input-box">
                <input v-model="form.rate" type="text" @input="changeRate" />
              </div>
            </div>
            <div class="form-item">
              <span class="item-title year-title">Year</span>
              <input v-model="form.year" type="text" @input="changeYear" />
            </div>
            <div class="form-item">
              <span class="item-title">Months</span>
              <input v-model="form.month" type="text" @input="changeMonth" />
            </div>
          </div>
          <div class="btn-box">
            <button class="btn" @click="submit">
              <span class="iconfont">&#xe605;</span>
            </button>
          </div>

          <div class="results-box">
            <div class="results-item">
              <span class="key">Payment Per Month</span>
              <span class="value">${{ form.per_month }}</span>
            </div>
            <div class="results-item">
              <span class="key">Total interest</span>
              <span class="value">${{ form.total }}</span>
            </div>
          </div>
        </div>
        <div class="compare-container" data-aos="fade-up">
          <div class="compare-title">
            <span class="icon"></span><span class="icon"></span>
            <span class="text"
              ><a
                href="/personal-loan"
                rel="noopener noreferrer"
                target="_blank"
                >Compare rates</a
              ></span
            >
          </div>

          <div class="scroll-box">
            <div class="ticker-container">
              <div class="ticker">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="single-brand"
                >
                  <a
                    :href="'/redirect?url=' + product.link"
                    target="_blank"
                    @click="tracking(product.name)"
                  >
                    <img :alt="product.name" :src="product.logo" />
                  </a>
                </div>
              </div>
              <div class="ticker">
                <div
                  v-for="(product, index) in products"
                  :key="index"
                  class="single-brand"
                >
                  <a
                    :href="'/redirect?url=' + product.link"
                    target="_blank"
                    @click="tracking(product.name)"
                  >
                    <img :alt="product.name" :src="product.logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-container">
          <h2 class="area-title blog-area-title" data-aos="fade-up">
            The lastest <span class="b">news and stocks</span>
          </h2>
          <ul class="blog-list">
            <li
              v-for="(blog, index) in blogs"
              :key="index"
              class="blog-item"
              data-aos="fade-up"
            >
              <div class="img-box">
                <nuxt-link :to="'/guides/' + blog.link" target="_blank">
                  <img v-lazy="blog.picture" :alt="blog.title" />
                </nuxt-link>
              </div>
              <h6 class="blog-title">
                <nuxt-link
                  :to="'/guides/' + blog.link"
                  class="title-link"
                  target="_blank"
                  >{{ blog.title }}</nuxt-link
                >
              </h6>
              <div class="blog-item-bottom">
                <nuxt-link :to="'/guides/' + blog.link" class="link"
                  >Read full Article
                </nuxt-link>
                <span class="date">{{ blog.date }}</span>
              </div>
            </li>
          </ul>
          <div class="more-link-box">
            <a
              class="more-link"
              href="/guides"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span class="icon"></span><span class="icon"></span>
              <span class="text">See the lists</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { updateTime, changeTime } from "../utils/date";
import { directive, Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { tracking } from "../utils/ga-event";

export default {
  head: {
    meta: [
      {
        name: "google-site-verification",
        content: "KUEIIjMUtW5R4Xdhy-iXspBpXbYZ3qSOrwcCO7L6C9g",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://toploansadviser.com/",
      },
    ],
  },
  components: {
    Swiper,
    SwiperSlide,
    directive,
  },
  directives: {
    swiper: directive,
  },

  async asyncData({ app, error }) {
    try {
      let blogs = [];
      let results = await app.$axios.$get("/data/person_loan_product.json");
      let blog_results = await app.$axios.$get(
        "https://service.toploansadviser.com/api/v1/article?page=1&pagesize=3"
      );
      if (blog_results.status === "success") {
        blogs = blog_results.data.rows;
        blogs.forEach((ele) => {
          ele.picture = "https://service.toploansadviser.com" + ele.picture;
          ele.date = changeTime(ele.date);
        });
      }
      return {
        products: results.data,
        blogs: blogs,
      };
    } catch (e) {
      error({ statusCode: 404 });
    }
  },
  data() {
    return {
      form: {
        amount: "",
        rate: "",
        year: "",
        month: "",
        per_month: 0,
        total: 0,
      },
      blogs: [],
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
        slidesPerView: 1,
        spaceBetween: "50%",
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          clickable: true,
        },
      },
      phoneSwiperOptions: {
        // autoplay: {
        //     delay: 3000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true
        // },
        loop: true,
        observer: true,
        slidesPerView: 1,
        spaceBetween: "50%",
        pagination: {
          el: ".phone-swiper-pagination",
          bulletClass: "my-phone-bullet",
          bulletActiveClass: "my-phone-bullet-active",
          clickable: true,
        },
      },
    };
  },
  methods: {
    tracking,
    updateTime,
    changeYear(e) {
      let value = e.target.value;
      if (isNaN(Number(value))) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error",
        });
        return;
      }

      this.form.month = value * 12 == 0 ? "" : value * 12;
    },

    changeMonth(e) {
      let value = e.target.value;
      if (isNaN(Number(value))) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error",
        });
        return;
      }

      this.form.year =
        (value / 12).toFixed(1) == 0 ? "" : (value / 12).toFixed(1);
    },
    changeAmount(e) {
      let value = e.target.value;

      this.form.amount = value;
    },
    changeRate(e) {
      let value = e.target.value;

      this.form.rate = value;
    },
    validate() {
      // 判断用户输入的是不是合法值
      if (
        this.form.year == "" ||
        this.form.amount == "" ||
        this.form.month == "" ||
        this.form.rate == "" ||
        isNaN(Number(this.form.year)) ||
        isNaN(Number(this.form.amount)) ||
        isNaN(Number(this.form.month))
      ) {
        this.$message({
          showClose: false,
          message: "Please enter a valid value!",
          type: "error",
        });
        return false;
      } else if (this.form.amount > 100000) {
        this.$message({
          showClose: false,
          message: "The value cannot exceed 100000",
          type: "error",
        });

        return false;
      } else if (this.form.rate > 40) {
        this.$message({
          showClose: false,
          message: "The value cannot exceed 40",
          type: "error",
        });

        return false;
      } else if (this.form.year > 10) {
        this.$message({
          showClose: false,
          message: "No more than 10 years",
          type: "error",
        });
        return false;
      } else if (this.form.month > 120) {
        this.$message({
          showClose: false,
          message: "No more than 120 months",
          type: "error",
        });
        return false;
      }

      return true;
    },
    submit() {
      if (!this.validate()) {
        return;
      }

      let rate = this.form.rate / 100;
      let pmt =
        (Number(this.form.amount) * (Number(rate) / 12)) /
        (1 - 1 / Math.pow(1 + Number(rate) / 12, Number(this.form.month)));
      this.form.per_month = pmt.toFixed(2);
      this.form.total = (
        this.form.per_month * this.form.month -
        this.form.amount
      ).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/index.scss";
</style>
