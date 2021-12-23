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
        <img
          src="@/assets/img/guides-banner-bg.webp"
          alt="guides and tips banner"
          class="banner-img"
        />
      </div>
    </section>
    <div class="learn-container">
      <div class="category-item" v-if="blogs.length != 0">
        <ul class="blog-list">
          <li class="blog-item" v-for="(blog, index) in blogs" :key="index">
            <div class="img-box">
              <nuxt-link :to="'/guides/' + blog.change_title">
                <img v-lazy="blog.main_picture" :alt="blog.title"/>
              </nuxt-link>
            </div>
            <nuxt-link :to="'/guides/' + blog.change_title" class="title-link"
            ><h2 class="blog-title">{{ blog.title }}</h2></nuxt-link
            >
            <nuxt-link :to="'/guides/' + blog.change_title" class="link"
            >Read full Article
            </nuxt-link
            >
          </li>
        </ul>
        <div class="view-more-box" v-if="isLoad">
          <button class="btn" @click="handleLoad">VIEW MORE</button>
        </div>
      </div>
      <ul class="loading-box" v-else>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            role="img"
            width="345"
            height="336"
            aria-labelledby="loading-aria"
            viewBox="0 0 345 336"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style="fill: url('#fill')"
            ></rect>
            <defs>
              <clipPath id="clip-path">
                <rect x="27" y="229" rx="3" ry="3" width="303" height="19"/>
                <rect x="26" y="269" rx="3" ry="3" width="281" height="19"/>
                <rect x="26" y="0" rx="0" ry="0" width="345" height="207"/>
                <rect x="25" y="310" rx="0" ry="0" width="177" height="18"/>
              </clipPath>
              <linearGradient id="fill">
                <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
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
export default {
  data() {
    return {
      blogs: [],
      page: 1,
      pageSize: 20,
      count: 0,
      isLoad: true,
    };
  },
  methods: {
    async getBlogs(page) {
      try {
        let results = await this.$axios.get(
          `https://api.toploansadviser.com/articles/all?website_id=96291576-b82f-47cd-ba81-28d9a33160a0&page=${page}&limit=${this.pageSize}`
        );
        results.data.data.rows.forEach(ele => {

          ele.change_title = ele.title.toLowerCase().split(' ').join('+');


        })
        this.blogs = this.blogs.concat(results.data.data.rows);

        this.counts = results.data.data.count;
        this.isLoad = page < this.count;
      } catch (error) {
        console.log(error);
      }
    },
    handleLoad() {
      this.page++;
      this.getBlogs();
    },
  },
  created() {
    this.getBlogs(this.page);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/guides_index.scss";
</style>
