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
        <li :class="{'current': currentCategory === 'personal-loan'}" @click="handleCategory('personal-loan')">
          <span>Personal Loan</span>
        </li>
        <li :class="{'current': currentCategory === 'mortgage-loan'}" @click="handleCategory('mortgage-loan')">
          <span>Mortgage Loan</span>
        </li>
        <li :class="{'current': currentCategory === 'student-loan'}" @click="handleCategory('student-loan')">
          <span>Student Loan</span>
        </li>
        <li :class="{'current': currentCategory === 'home-equity'}" @click="handleCategory('home-equity')">
          <span>Home Equity</span>
        </li>
      </ul>
      <div v-if="blogs.length !== 0 && !isLoad" class="category-item">
        <ul class="blog-list">
          <li v-for="(blog, index) in blogs" :key="index" class="blog-item">
            <div class="img-box">
              <nuxt-link :to="'/guides/' + blog.change_title" target="_blank">
                <img v-lazy="blog.main_picture" :alt="blog.title"/>
              </nuxt-link>
            </div>
            <nuxt-link :to="'/guides/' + blog.change_title" class="title-link" target="_blank"
            ><h2 class="blog-title">{{ blog.title }}</h2></nuxt-link
            >
            <nuxt-link :to="'/guides/' + blog.change_title" class="link" target="_blank"
            >Read full Article
            </nuxt-link
            >
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
                <rect height="19" rx="3" ry="3" width="303" x="27" y="229"/>
                <rect height="19" rx="3" ry="3" width="281" x="26" y="269"/>
                <rect height="207" rx="0" ry="0" width="345" x="26" y="0"/>
                <rect height="18" rx="0" ry="0" width="177" x="25" y="310"/>
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
export default {
  data() {
    return {
      blogs: [],
      page: 1,
      pageSize: 20,
      count: 0,
      isLoad: true,
      currentCategory: 'personal-loan'
    };
  },
  methods: {
    async getBlogs(page) {
      try {
        let results = await this.$axios.get(
          `https://api.toploansadviser.com/articles/all?website_id=96291576-b82f-47cd-ba81-28d9a33160a0&page=${page}&limit=${this.pageSize}`
        );
        results.data.data.rows.forEach(ele => {

          ele.change_title = ele.title.toLowerCase().split(' ').join('-');

        })
        this.blogs = this.blogs.concat(results.data.data.rows);

        this.counts = results.data.data.count;
        this.isLoad = page < this.count;
      } catch (e) {
        this.$router.push('/error');
      }
    },
    async getBlogByCategory(uuid) {
      this.isLoad = true;
      try {
        let {
          status,
          data
        } = await this.$axios.$get('https://api.toploansadviser.com/articles/findbycolumns?columns_id=' + uuid);
        this.isLoad = false;
        if (status === 'success') {

          data.rows.forEach(blog => {
            blog.change_title = blog.title.toLowerCase().split(' ').join('-');
          })
          this.blogs = data.rows;
        } else {
          this.blogs = [];
        }
      } catch (e) {
        this.isLoad = false;
        await this.$router.push('/error');
      }
    },
    handleCategory(category) {
      let setting = {};
      setting['personal-loan'] = 'c73af2d2-f8b2-41f6-b3ad-3f6ff4bf429d';
      setting['mortgage-loan'] = 'e2466262-b3ff-4a86-850c-3846054f49a8';
      setting['student-loan'] = 'a52fa2da-0e6f-484d-afc5-179a75aa1aee';
      setting['home-equity'] = 'bf433dff-da58-42ea-9c93-f36cceb03357';
      this.getBlogByCategory(setting[category]);
      this.currentCategory = category;
    },
    handleLoad() {
      this.page++;
      this.getBlogs();
    },
  },
  created() {
    this.handleCategory(this.currentCategory);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/guides_index.scss";
</style>
