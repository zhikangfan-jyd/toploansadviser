<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container" style="position: relative">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Guides and Tips</span>
          </h1>
          <div class="content">
            <p>
              Want to learn more about loan information? Check out the
              informative articles below written by Toploansadviser's team of
              expert financial writers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="learn-container">
      <ul class="category-list">
        <li
          v-for="category in categories"
          :class="{ current: current_category === category.acid }"
          :key="category.acid"
        >
          <a
            :href="'/guides?category=' + category.key"
            rel="noopener noreferrer"
          >
            {{ category.name }}
          </a>
        </li>
      </ul>
      <div v-if="!isLoad" class="category-item">
        <ul v-if="articles.length !== 0" class="blog-list">
          <li
            v-for="(article, index) in articles"
            :key="index"
            class="blog-item"
          >
            <div class="img-box">
              <nuxt-link :to="'/guides/' + article.link" target="_blank">
                <img
                  v-lazy="
                    'https://service.toploansadviser.com' + article.picture
                  "
                  :alt="article.title"
                />
              </nuxt-link>
            </div>
            <nuxt-link
              :to="'/guides/' + article.link"
              class="title-link"
              target="_blank"
              ><h2 class="blog-title">{{ article.title }}</h2></nuxt-link
            >
            <div class="blog-item-bottom">
              <nuxt-link
                :to="'/guides/' + article.link"
                class="link"
                target="_blank"
                >Read full Article
              </nuxt-link>
              <span class="date">{{ article.date }}</span>
            </div>
          </li>
        </ul>
      </div>
      <ul v-else-if="isLoad" class="loading-box">
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            aria-labelledby="loading-aria"
            height="336"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 345 336"
            width="345"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              clip-path="url(#clip-path)"
              height="100%"
              style="fill: url('#fill')"
              width="100%"
              x="0"
              y="0"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229" />
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269" />
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0" />
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310" />
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-2; -2; 1"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="-1; -1; 2"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    dur="2s"
                    keyTimes="0; 0.25; 1"
                    repeatCount="indefinite"
                    values="0; 0; 3"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import { seo } from "../../utils/seo";
import { changeTime } from "../../utils/date";
export default {
  head() {
    return seo({
      title: "Guides & Tips | Toploansadviser.com",
      description:
        "Toploansadviser is a place to compare and review best loans lenders for your financial decision. Read more Toploansadviser guides & tips here.",
      url: "https://www.toploansadvisr.com/guides",
      img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
      img_size: {
        width: "325",
        height: "295",
      },
      img_type: "image/webp",
    });
  },
  async asyncData({ error, $axios, route }) {
    try {
      let { category } = route.query;
      let default_category = null;
      let results = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/article/category"
      );
      let categories = results.data.rows ? results.data.rows : [];
      categories.sort((a, b) => {
        return a.order - b.order;
      });
      categories.forEach((ele) => {
        ele.key = ele.name.toLocaleLowerCase().split(" ").join("-");
        if (ele.key === category) {
          default_category = ele;
        }
      });

      default_category =
        default_category === null ? categories[0] : default_category;
      let isLoad = true;
      let articles_results = await $axios.$get(
        "https://service.toploansadviser.com/api/v1/article/find/category?acid=" +
          default_category.acid
      );
      isLoad = false;
      let articles = articles_results.data.rows;

      articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      articles.forEach((ele) => {
        ele.date = changeTime(ele.date);
      });
      return {
        isLoad: isLoad,
        categories: categories,
        articles: articles,
        current_category: default_category.acid,
      };
    } catch (e) {
      await error({ statusCode: 500 });
    }
  },
  methods: {
    async handleCategory(category_id) {
      this.current_category = category_id;
      try {
        this.isLoad = true;
        let results = await this.$axios.$get(
          "https://service.toploansadviser.com/api/v1/article/find/category?acid=" +
            category_id
        );
        this.isLoad = false;
        if (results.status === "success") {
          results.data.rows.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
          results.data.rows.forEach((ele) => {
            ele.date = changeTime(ele.date);
          });
          this.articles = results.data.rows;
        } else {
          this.articles = [];
        }
      } catch (e) {
        this.isLoad = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/guides_index.scss";
</style>