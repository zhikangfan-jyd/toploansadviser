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
      <!-- <h2 class="learn-title">Categories</h2> -->
      <div class="category-item">
        <!-- <div class="category-title-box">
          <img src="@/assets/img/money-icon.webp" alt="" class="pic">
          <h6 class="title">Personal loans</h6>
        </div> -->
        <ul class="blog-list">
          <li class="blog-item" v-for="(blog, index) in blogs" :key="index">
            <div class="img-box">
              <nuxt-link :to="'/guides/' + blog.article_id">
                <img v-lazy="blog.main_picture" :alt="blog.title" />
              </nuxt-link>
            </div>
            <nuxt-link :to="'/guides/' + blog.article_id" class="title-link"
              ><h2 class="blog-title">{{ blog.title }}</h2></nuxt-link
            >
            <nuxt-link :to="'/guides/' + blog.article_id" class="link"
              >Read full Article</nuxt-link
            >
          </li>
        </ul>
        <div class="view-more-box" v-if="isLoad">
          <button class="btn" @click="handleLoad">VIEW MORE</button>
        </div>
      </div>
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

        this.blogs = this.blogs.concat(results.data.data.rows);
        this.counts = results.data.data.count;
        this.isLoad = page >= this.count ? false : true;
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