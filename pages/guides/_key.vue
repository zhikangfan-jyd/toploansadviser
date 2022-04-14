<template>
  <main class="main-container">
    <a href="" target="_blank" rel="noopener noreferrer"></a>
    <section class="banner-area">
      <div class="banner-container">
        <div class="history-nav">
          <span
          ><nuxt-link class="link" target="_blank" to="/guides">Guides</nuxt-link>
            <span class="iconfont">></span></span
          >
          <span class="title-box">{{ blog.title }}</span>
        </div>
        <h1 class="title">{{ blog.title }}</h1>
      </div>
    </section>
    <div class="guides-container">
      <div class="guides-left">
        <div class="author-info">
          <img :alt="blog.author.name" :src="'https://service.toploansadviser.com' + blog.author.picture"
               class="author-img"/>
          <div class="info-box">
            <span class="name">Written by <span class="author-name">{{ blog.author.name }}</span></span>
            <div class="updated">
              <span><span
                class="iconfont">&#xe645;</span> <span>Last updated: {{
                  updateTime(blog.date).month.short
                }}.{{ updateTime(blog.date).day }},{{
                  updateTime(blog.date).year
                }}</span></span>
            </div>
          </div>
        </div>
        <div class="share-box">
          <span class="title">SHARE THIS PAGE</span>
          <div class="share">
            <button
              @click="
                shareToFB('https://toploansadviser.com', 'toploansadviser')
              "
            >
              <span class="iconfont">&#xe63a;</span>
            </button>
            <button
              @click="
                shareToTwitter('https://toploansadviser.com', 'toploansadviser')
              "
            >
              <span class="iconfont">&#xe726;</span>
            </button>
          </div>
        </div>
        <div class="guides-content" v-html="blog.content"></div>

      </div>
      <div class="top-area">
        <span class="title">TOP 5 LOANS</span>
        <ul class="top-list">
          <li v-for="(item, index) in toploans" :key="index" class="top-item">
            <img :alt="item.name" :src="item.logo" class="logo"/>
            <a
              :href="'/redirect?url='+item.link"
              rel="noopener noreferrer nofollow"
              target="_blank"
              @click="
                      handleTracking({
                        name: item.name,
                        click_time: new Date().getTime(),
                        link: item.link
                      });
                      tracking(item.name);
                    "
            >Visit Site >></a
            >
          </li>
        </ul>
      </div>
    </div>
    <section v-if="relatedBlogs.length !== 0" class="keep-reading-area">
      <div class="keep-reading-container">
        <h5 class="title">Keep Reading</h5>
        <ul class="read-list">
          <li v-for="(item, index) in relatedBlogs" :key="index">
            <nuxt-link :to="'/guides/' + item.link">
              <div class="img-box">
                <img v-lazy="'https://service.toploansadviser.com' + item.picture" :alt="item.title" class="pic"/>
                <span class="tags">{{ blog.article_category.name }}</span>
              </div>
              <div class="title-box">
                <h6 class="blog-title">{{ item.title }}</h6>

              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import {shareToFB, shareToTwitter} from "../../utils/share";
import {jsonLd} from '../../utils/json-ld'
import {tracking} from "../../utils/ga-event";
import {seo} from "../../utils/seo";
import {updateTime} from "../../utils/date";
export default {
  head() {
    return seo({
      title: this.blog.title + ' | Toploansadviser',
      description: this.blog.introduce,
      keywords: this.blog.keywords,
      url: this.pageUrl,
      type: 'article',
      img: 'https://service.toploansadviser.com' + this.blog.picture,
      img_size: {
        width: '325',
        height: '295'
      },
      img_type: ''
    })
  },
  async asyncData({$axios, $api, params, error}) {
    try {
      // let results = await $api.articleApi.getArticleContentByKey(params.key);
      let results = await $axios.$get('https://service.toploansadviser.com/api/v1/article/find_by_key?key=' + params.key);
      let blog = results.data;
      let topLoans_results = await $axios.$get(
        "/data/person_loan_product.json"
      );
      // let articles_results = await $api.articleApi.getArticleByCategory(blog.acid, 1, 4);
      let articles_results = await $axios.$get('https://service.toploansadviser.com/api/v1/article/find/category?acid=' + blog.acid);
      let articles = articles_results.data.rows[0].article.slice(0, 4);
      return {
        blog: blog,
        pageUrl: 'https://www.toploansadviser.com/guides/' + params.key,
        relatedBlogs: articles,
        toploans: topLoans_results.data.slice(0, 5),
      };
    } catch (e) {
      error({statusCode: 500});
    }
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    shareToFB,
    shareToTwitter,
    tracking,
    updateTime,
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != "function") {
        return;
      }
      window.uba(params);
    },
    handleScroll() {
      const container = $(".guides-container");
      const fixedBox = $(".guides-container .top-area");
      let navHeight = $(".header-container").height();
      let right = container.offset().left;
      let top = fixedBox.offset().top;
      let positionTop = fixedBox.position().top;
      let areaHeight = fixedBox.height();
      let container_offset_top = container.offset().top;
      let scrollTop = $(window).scrollTop();
      let authorTop = $(".keep-reading-area").offset().top;
      $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();
        if (scrollTop > top - navHeight && scrollTop < authorTop - top) {
          fixedBox.css({
            position: "fixed",
            top: navHeight + "px",
            right: right + "px",
          });
        } else if (scrollTop > authorTop - top) {
          fixedBox.css({
            position: "absolute",
            top: authorTop - areaHeight - container_offset_top - 50 + "px",
            right: 0 + "px",
          });
        } else {
          fixedBox.css({
            position: "absolute",
            top: positionTop + "px",
            right: 0 + "px",
          });
        }
      });
    },
    createFBMeta(options) {
      for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
          const value = options[key];
          let meta = document.createElement("meta");
          if (key === "title") {
            meta.setAttribute("property", "og:title");
            meta.setAttribute("content", value);
          } else if (key === "image") {
            meta.setAttribute("property", "og:image");
            meta.setAttribute("content", value);
          } else if (key === "description") {
            meta.setAttribute("property", "og:description");
            meta.setAttribute("content", value);
          } else if (key === "url") {
            meta.setAttribute("property", "og:url");
            meta.setAttribute("content", value);
          }
          document.head.appendChild(meta);
        }
      }
    },
    jsonLd: jsonLd
  },
  created() {
    this.$nextTick(() => {
      if (process.client) {
        this.jsonLd({
          type: 'Article',
          title: this.blog.title + ' | Toploansadviser',
          url: this.pageUrl,
          author: {
            name: this.blog.author.name
          },
          date: this.blog.date,
          body: this.blog.description,
          image: 'https://service.toploansadviser.com' + this.blog.picture
        });
      }
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.timer = setTimeout(() => {
        this.handleScroll();
        clearTimeout(this.timer);
      }, 100);
      let options = {
        title: this.blog.title,
        image: 'https://service.toploansadviser.com' + this.blog.picture,
        description: "",
        url: "https://www.toploansadviser.com" + this.$route.path,
      };
      this.createFBMeta(options);
    });
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/guides_item.scss";
</style>