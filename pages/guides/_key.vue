<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="history-nav">
          <span
          ><nuxt-link to="/guides" class="link">Guides</nuxt-link>
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
          <img :src="author.avatar" :alt="author.name" class="author-img"/>
          <div class="info-box">
            <span class="name">{{ author.name }}</span>
            <p class="info">
              <span>{{ author.introduce }}</span>
              <span>|</span>
              <span>{{ blog.date }}</span>
            </p>
          </div>
        </div>
        <!-- <div class="blog-content">

        </div> -->
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
        <div class="guides-bottom" v-if="relatedBlogs.length != 0">
          <h6 class="bottom-title">Keep Reading</h6>
          <ul class="title-list">
            <li v-for="(item, index) in relatedBlogs" :key="index">
              <nuxt-link :to="'/guides/' + item.change_title">{{
                  item.title
                }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="top-area">
        <span class="title">TOP 5 LOANS</span>
        <ul class="top-list">
          <li class="top-item" v-for="(item, index) in toploans" :key="index">
            <img :src="item.logo" :alt="item.name" class="logo"/>
            <a
              :href="'/redirect/personal-loan/'+item.name"
              target="_blank"
              rel="noopener noreferrer"
              @click="
                handleTracking({
                  name: item.name,
                  click_time: new Date().getTime(),
                  link: item.link,
                })
              "
            >Visit Site</a
            >
          </li>
        </ul>
      </div>
    </div>
    <section class="keep-reading-area" v-if="relatedBlogs.length != 0">
      <div class="keep-reading-container">
        <h5 class="title">Keep Reading</h5>
        <ul class="read-list">
          <li v-for="(item, index) in relatedBlogs" :key="index">
            <nuxt-link :to="'/guides/' + item.change_title">
              <div class="img-box">
                <img v-lazy="item.main_picture" :alt="item.title" class="pic"/>
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

export default {
  async asyncData({$axios, params, redirect}) {
    try {
      let title = params.key.split('+').join(' ');

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
      if (authorInfo.status == "success") {
        author = authorInfo.data;
      }

      let topLoans_results = await $axios.$get(
        "/data/person_loan_product.json"
      );
      let blogList = await $axios.$get(
        `https://api.toploansadviser.com/articles/findbycolumns?columns_id=c73af2d2-f8b2-41f6-b3ad-3f6ff4bf429d&page=1&limit=3`
      );

      blogList.data.rows.forEach(ele => {
        ele.change_title = ele.title.toLowerCase().split(' ').join('+');
      })

      return {
        blog: blog,
        author: author,
        relatedBlogs: blogList ? blogList.data.rows : [],
        toploans: topLoans_results.data.slice(0, 5),
      };
    } catch (error) {
      redirect("/error");
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
          if (key == "title") {
            meta.setAttribute("property", "og:title");
            meta.setAttribute("content", value);
          } else if (key == "image") {
            meta.setAttribute("property", "og:image");
            meta.setAttribute("content", value);
          } else if (key == "description") {
            meta.setAttribute("property", "og:description");
            meta.setAttribute("content", value);
          } else if (key == "url") {
            meta.setAttribute("property", "og:url");
            meta.setAttribute("content", value);
          }

          document.head.appendChild(meta);
        }
      }
    },
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
