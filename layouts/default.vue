<template>
  <div class="page-container">
    <header class="header-container">
      <div class="header-wrapper">
        <a href="/" target="_self" rel="noopener noreferrer">
          <img
            src="@/assets/img/website-logo.webp"
            alt="Toploansadviser"
            class="website-logo"
          />
        </a>
        <ul class="header-nav-list">
          <li>
            <nuxt-link to="/personal-loan" exact class="link"
              >Personal Loan</nuxt-link
            >
          </li>

          <li>
            <nuxt-link to="/student-loan" class="link">Student Loan</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mortgage-loan" class="link"
              >Mortgage Loan</nuxt-link
            >
          </li>
          <li class="reviews">
            <span class="reviews-title link">Reviews</span>
            <ul class="reviews-list">
              <li>
                <nuxt-link to="/reviews/credible" class="link"
                  >Credible</nuxt-link
                >
              </li>
              <!-- <li>
                <nuxt-link to="/reviews/marcus" class="link">Marcus</nuxt-link>
              </li> -->
              <li>
                <nuxt-link to="/reviews/lightstream" class="link"
                  >Lightstream</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/reviews/sofi" class="link">SoFi</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/reviews/avant" class="link">Avant</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/guides" class="link">Guides</nuxt-link>
          </li>
        </ul>
        <span class="iconfont phone-menu">&#xe61d;</span>
      </div>
    </header>
    <Nuxt />
    <footer class="footer-container">
      <div class="footer-wrapper">
        <div class="footer-info-box">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="@/assets/img/website-footer-logo.webp"
              alt="Toploansadviser"
              class="footer-logo"
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
          </div>
        </div>
        <div class="footer-sms-box">
          <div class="footer-sms-item">
            <div class="title">Get in Touch</div>
            <div class="footer-sms-content input-box">
              <input
                type="text"
                class="input"
                autocomplete="off"
                v-model="email"
                placeholder="Email Address"
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
          <span>Copyright 2020-2021 Toploansadviser All Rights Reserved.</span>
        </p>
      </div>
    </footer>
    <el-backtop style="color: #29b674"></el-backtop>
<!--    <ContactComponent></ContactComponent>-->
<!--    <Message></Message>-->
  </div>
</template>

<script>
import Message from "../components/Message/index";
import ContactComponent from '../components/Contact/index'
export default {
  components: {
    Message,
    ContactComponent
  },
  data() {
    return {
      email: "",
      timer: null,
    };
  },

  methods: {
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

      // $(".header-container .phone-menu").on("click", () => {
      //   $(".header-container .header-nav-list").slideToggle("fast");
      // });
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
