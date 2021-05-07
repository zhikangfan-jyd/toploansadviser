<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">

        <div class="history-nav">
            <span><nuxt-link to="/guides" class="link">Guides</nuxt-link> <span class="iconfont">></span></span>
            <!-- <span>knowledge <span class="iconfont">></span></span> -->
            <span class="title-box">{{blog.title}}</span>
        </div>
        <h1 class="title">{{blog.title}}</h1>
      </div>
    </section>
    <div class="guides-container">
      <div class="guides-left">
        
        <div class="author-info">
          <img :src="blog.author.headImg" :alt="blog.author.name" class="author-img">
          <div class="info-box">
            <span class="name">{{blog.author.name}}</span>
            <p class="info">
              <span>{{blog.author.jobTitle}}</span>
              <span>|</span>
              <span>{{blog.date}}</span>
            </p>
          </div>
        </div>
        <div class="blog-content">
          
        </div>
        <div class="share-box">
          <span class="title">SHARE THIS PAGE</span>
          <div class="share">
            <button @click="shareToFB('https://toploansadviser.com','toploansadviser')"><span class="iconfont">&#xe63a;</span></button>
            <button @click="shareToTwitter('https://toploansadviser.com','toploansadviser')"><span class="iconfont">&#xe726;</span></button>
          </div>
        </div>
        <div class="guides-content" v-html="blog.content"></div>
        <div class="guides-bottom">
          <h6 class="bottom-title">Keep Reading</h6>
          <ul class="title-list">
            <li v-for="(item,index) in keepReading" :key="index"><nuxt-link :to="'/guides/' + item.key">{{item.title}}</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="top-area">
        <span class="title">TOP 5 LOANS</span>
        <ul class="top-list">
          <li class="top-item" v-for="(item,index) in toploans" :key="index">
            <img :src="item.logo" :alt="item.name" class="logo">
            <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow">Visit Site</a>
          </li>
        </ul>
      </div>

    </div>
    <section class="keep-reading-area">
      <div class="keep-reading-container">
        <h5 class="title">Keep Reading</h5>
        <ul class="read-list">
          <li v-for="(item,index) in keepReading" :key="index">
            <nuxt-link :to="'/guides/' + item.key">
              <div class="img-box">
                <img v-lazy="item.picture" alt="" class="pic">
              </div>
              <div class="title-box">
                <h6 class="blog-title">{{item.title}}</h6>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

import { shareToFB, shareToTwitter } from '../../utils/share'
export default {
  async asyncData({ $axios, params, redirect }) {

    try {
      
      let filename = params.key;
      let results = await $axios.$get('/data/blogs/' + filename + '.json');
      let topLoans_results = await $axios.$get('/data/person_loan_product.json');
      let category = results.category;
      let keepReading_results;
      let keepArray = [];
      // 判断该篇文章在哪个分类下
      // if (category == 'personal_loans') {
        keepReading_results = await $axios.$get('/data/blogs/personal.json');
      // }
      //  else if (category == 'student_loans') {
      //   keepReading_results = await $axios.$get('/data/blogs/student.json');
      // }
      //  else {
      //   keepReading_results = await $axios.$get('/data/blogs/banking.json')
      // }
      keepReading_results.data.forEach(ele => {
        if (ele.key != filename && keepArray.length < 3) {
          keepArray.push(ele);
        }
      })
      return {
        blog: results,
        toploans: topLoans_results.data.slice(0,5),
        keepReading: keepArray
      }

    } catch (error) {
      redirect('/error');
    }
  },
  methods: {
    shareToFB,
    shareToTwitter,
    handleScroll() {
      const container = $('.guides-container');
      const fixedBox = $('.guides-container .top-area')
      let navHeight = $('.header-container').height();
      let right = container.offset().left;
      let top = fixedBox.offset().top;
      let positionTop = fixedBox.position().top
      let areaHeight = fixedBox.height();
      let container_offset_top = container.offset().top;
      let scrollTop = $(window).scrollTop();
      let authorTop = $('.keep-reading-area').offset().top;
      $(window).on('scroll',function () {
        scrollTop = $(this).scrollTop();

        if (scrollTop > top - navHeight && scrollTop < authorTop - top) {
          fixedBox.css({
            position: 'fixed',
            top: navHeight + 'px',
            right: right + 'px'
          })
        } else if (scrollTop > authorTop - top) {
          fixedBox.css({
            position: 'absolute',
            top: (authorTop - areaHeight - container_offset_top) - 50 + 'px',
            right: 0 + 'px'
          })
        } else  {
          fixedBox.css({
            position: 'absolute',
            top: positionTop + 'px',
            right: 0 + 'px'
          })
        }
      })

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleScroll();
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/guides_item.scss';
</style>