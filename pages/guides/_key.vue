<template>
  <main class="main-container">
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
          <img :alt="author.name" :src="author.avatar" class="author-img"/>
          <div class="info-box">
            <span class="name">Written by <span class="author-name">{{ author.name }}</span></span>
            <div class="updated">
              <span><span
                class="iconfont">&#xe645;</span> <span>Last updated: {{ blog.date }}</span></span>
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
              :href="'/redirect/personal-loan/'+item.name"
              rel="noopener noreferrer"
              target="_blank"
              @click="
                handleTracking({
                  name: item.name,
                  click_time: new Date().getTime(),
                  link: item.link,
                })
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
            <nuxt-link :to="'/guides/' + item.change_title">
              <div class="img-box">
                <img v-lazy="item.main_picture" :alt="item.title" class="pic"/>
                <span class="tags">{{ item.public_api_column.title }}</span>
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
import {updateTime} from "../../utils/date";
import {seo} from '../../utils/seo'
import {jsonLd} from '../../utils/json-ld'

export default {
  head() {
    return seo({
      title: this.blog.title + ' | Toploansadviser',
      description: this.blog.introduce,
      keywords: this.blog.keywords,
      url: this.pageUrl,
      type: 'article',
      img: this.blog.main_picture,
      img_size: {
        width: '325',
        height: '295'
      },
      img_type: ''
    })
  },
  async asyncData({$axios, params, error}) {
    try {
      let title = params.key.split('-').join(' ');

      let results = await $axios.$get(
        `https://api.toploansadviser.com/articles/findbytitle?title=${title}`
      );
      let blog = results.data;
      let d = updateTime(blog.date);
      blog.date = `${d.month.short}.${d.day},${d.year}`;
      let authorId = blog.author_id;
      let author = {
        name: "",
        introduce: "",
        avatar: "",
      };

      let authorInfo = await $axios.$get(
        `https://api.toploansadviser.com/author/find?author_id=${authorId}`
      );
      if (authorInfo.status === "success") {
        author = authorInfo.data;
      }

      let topLoans_results = await $axios.$get(
        "/data/person_loan_product.json"
      );
      let blogList = await $axios.$get(
        `https://api.toploansadviser.com/articles/all?website_id=96291576-b82f-47cd-ba81-28d9a33160a0&page=${1}&limit=1000&status=done`
      );
      let randomIndex = Math.floor(Math.random() * (blogList.data.count - 5));
      // 随机取4篇blog
      let randomBlogs = blogList.data.rows.slice(randomIndex, randomIndex + 4);
      randomBlogs.forEach(ele => {
        ele.change_title = ele.title.toLowerCase().split(' ').join('-');
      })

      return {
        blog: blog,
        pageUrl: 'https://www.toploansadviser.com/guides/' + params.key,
        author: author,
        relatedBlogs: randomBlogs,
        toploans: topLoans_results.data.slice(0, 5),
      };
    } catch (e) {
      error({statusCode: 404});
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
            name: this.author.name
          },
          date: this.blog.date,
          body: this.blog.description,
          image: this.blog.main_picture
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
        image: this.blog.main_picture,
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
