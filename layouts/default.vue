<template>
  <div class="page-container">
    <header class="header-container">
      <div class="header-wrapper">
        <a href="/" rel="noopener noreferrer" target="_self">
          <img
            alt="Toploansadviser"
            class="website-logo"
            src="@/assets/img/website-logo.webp"
          />
        </a>
        <ul class="header-nav-list">
          <li>
            <nuxt-link class="link" exact to="/personal-loan"
            >Personal Loan
            </nuxt-link
            >
          </li>

          <li>
            <nuxt-link class="link" to="/student-loan">Student Loan</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/mortgage-loan"
            >Mortgage Loan
            </nuxt-link
            >
          </li>
          <li class="reviews">
            <span class="reviews-title link">Reviews</span>
            <ul class="reviews-list">
              <li>
                <nuxt-link class="link" to="/reviews/credible"
                >Credible
                </nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link" to="/reviews/marcus">Marcus</nuxt-link>
              </li>
              <li>
                <nuxt-link class="link" to="/reviews/lightstream"
                >Lightstream
                </nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="link" to="/reviews/sofi">SoFi</nuxt-link>
              </li>
              <li>
                <nuxt-link class="link" to="/reviews/avant">Avant</nuxt-link>
              </li>

            </ul>
          </li>
          <li>
            <nuxt-link class="link" to="/guides">Guides</nuxt-link>
          </li>
        </ul>
        <span class="iconfont phone-menu">&#xe61d;</span>
      </div>
    </header>
    <Nuxt/>
    <footer class="footer-container">
      <div class="footer-wrapper">
        <div class="footer-info-box">
          <a href="/" rel="noopener noreferrer" target="_blank">
            <img
              alt="Toploansadviser"
              class="footer-logo"
              src="@/assets/img/website-footer-logo.webp"
            />
          </a>
        </div>
        <div class="footer-nav-box">
          <span class="title">Basic Links</span>
          <div class="list-box">
            <ul class="footer-nav-list">
              <li>
                <nuxt-link to="/personal-loan">Personal Loan</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/student-loan">Student Loan</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/mortgage-loan">Mortgage Loan</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/guides">Guides</nuxt-link>
              </li>
            </ul>
            <ul class="footer-nav-list">
              <li>
                <nuxt-link to="/about-us">About Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact-us">Contact Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/term-of-use">Term of Use</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
              </li>
            </ul>
            <ul class="footer-nav-list">
              <li>
                <nuxt-link to="/reviews/drcredit">Drcredit</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/reviews/lendingtree">Lending Tree</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/reviews/monevo">Monevo</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/reviews/personalloans">Personalloans</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/reviews/upstart">Upstart</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-sms-box">
          <div class="footer-sms-item">
            <div class="title">Get in Touch</div>
            <div class="footer-sms-content input-box">
              <input
                v-model="email"
                autocomplete="off"
                class="input"
                placeholder="Email Address"
                type="text"
              />
              <button class="btn" @click="sendMail">
                <span class="iconfont">&#xe640;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="footer-container-bottom">
        <p>
          <span>Copyright 2020-{{ updateTime().year }} Toploansadviser All Rights Reserved.</span>
        </p>
      </div>
    </footer>
    <el-backtop style="color: #29b674"></el-backtop>
    <ContactComponent></ContactComponent>

  </div>
</template>

<script>
import {updateTime} from "../utils/date";
import ContactComponent from '../components/Contact/index'

export default {
  components: {
    ContactComponent
  },
  data() {
    return {
      email: "",
      timer: null,
    };
  },

  methods: {
    updateTime,
    sendMail() {
      const reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );
      if (this.email == "" || !reg.test(this.email)) {
        this.$message({
          showClose: false,
          message: "Please fill in your email address correctly!",
          type: "error",
        });
      } else {
        this.timer = setTimeout(() => {
          this.email = "";
          this.$message({
            showClose: false,
            type: "success",
            message: "Send successful!",
          });

          clearTimeout(this.timer);
        }, 800);
      }
    },
    handleClick() {
      let width = $(window).width();
      //判断屏幕宽度
      if (width <= 750) {
        // 点击任意链接都需收回

        $(document).on('click', (e) => {
          if ($(e.target).hasClass('phone-menu')) {
            $(".header-container .header-nav-list").slideToggle("fast");
          } else if ($(e.target).hasClass('reviews') || $(e.target).hasClass('reviews-title')) {
            $(".header-container .header-nav-list .reviews-list").slideToggle("fast");
          } else {
            $(".header-container .header-nav-list").slideUp("fast");
            $(".header-container .header-nav-list .reviews-list").slideUp("fast");
          }

        })
      } else {
        $(".header-container .header-nav-list .reviews").hover(
          () => {
            $(".header-container .header-nav-list .reviews-list")
              .stop()
              .slideDown("fast");
          },
          () => {
            $(".header-container .header-nav-list .reviews-list")
              .stop()
              .slideUp("fast");
          }
        );
      }

    },
  },
  mounted() {
    this.$nextTick(() => {
      this.handleClick();
    });
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/default.scss";
</style>
