<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container" style="position: relative;">
        <div class="banner-content" >
          <h1 class="website-title">
            <span>Guides and Tips</span>
          </h1>
          <div class="content">
            <p>Want to learn more about loan information? Check out the informative articles below written by Toploansadviser's team of expert financial writers.</p>
          </div>

          <img src="@/assets/img/guides-banner.webp" alt="guides and tips banner" class="banner-img">
        </div>
        
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
          <li class="blog-item" v-for="(item,index) in personal_blogs" :key="index">
            <div class="img-box">
              <nuxt-link :to="'/guides/' + item.key">
                <img v-lazy="item.picture" :alt="item.title">
              </nuxt-link>
            </div>
            <nuxt-link :to="'/guides/' + item.key" class="title-link"><h2 class="blog-title">{{item.title}}</h2></nuxt-link>
            <nuxt-link :to="'/guides/' + item.key" class="link">Read full Article</nuxt-link>
          </li>
        </ul>
        <div class="view-more-box" v-if="!personal_isNull">
          <button class="btn" @click="personalLoadMore">VIEW MORE</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, redirect }) {

    try {
      
      let personal_results = await $axios.$get('/data/blogs/personal.json');
      let student_results = await $axios.$get('/data/blogs/student.json');
      let banking_results = await $axios.$get('/data/blogs/banking.json');

      return {
        personalAllData: personal_results.data,
        personalTotal: personal_results.data.length,
        studentAllData: student_results.data,
        studentTotal: student_results.data.length,
        bankingAllData: banking_results.data,
        bankingTotal: banking_results.data.length
      }
    } catch (error) {
      redirect('/error');
    }
    
  },
  data() {
    return {
      personal_isNull: true,
      student_isNull: true,
      banking_isNull: true,
      personal_blogs: [],
      student_blogs: [],
      banking_blogs: [],
      student_page: 1,
      personal_page: 1,
      banking_page: 1,
      pageSize: 6
    }
  },
  methods: {
    personalLoadMore() {
      let startIndex = (this.personal_page - 1) * this.pageSize,
          endIndex = (this.personal_page - 1) * this.pageSize + this.pageSize;
      let data = this.personalAllData.slice(startIndex,endIndex);
      this.personal_blogs = this.personal_blogs.concat(data);
      
      if (this.personal_blogs.length >= this.personalTotal) {
        this.personal_isNull = true;
      } else {
        this.personal_isNull = false;
      }

      this.personal_page++;
    },
    studentLoadMore() {
      let startIndex = (this.student_page - 1) * this.pageSize,
          endIndex = (this.student_page - 1) * this.pageSize + this.pageSize;
      let data = this.studentAllData.slice(startIndex,endIndex);
      this.student_blogs = this.student_blogs.concat(data);

      if (this.student_blogs.length >= this.studentTotal) {
        this.student_isNull = true;
      } else {
        this.student_isNull = false;
      }
      
      this.student_page++;
    },
    bankingLoadMore() {
      let startIndex = (this.banking_page - 1) * this.pageSize,
          endIndex = (this.banking_page - 1) * this.pageSize + this.pageSize;
      let data = this.bankingAllData.slice(startIndex,endIndex);
      this.banking_blogs = this.banking_blogs.concat(data);
      if (this.banking_blogs.length >= this.bankingTotal) {
        this.banking_isNull = true;
      } else {
        this.banking_isNull = false;
      }

      this.banking_page++;
    }
  },
  created() {
    this.personalLoadMore();
    this.studentLoadMore();
    this.bankingLoadMore();
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/guides_index.scss';
</style>