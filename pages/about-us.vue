<template>
<!--  <a href="" target="_blank" rel="noopener noreferrer"></a>-->
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">About Toploansadviser</h1>
          <p class="update">
            Last updated: {{ updateTime().month.short }} {{ updateTime().year }}
          </p>
          <div class="content">
            <p>
              Toploansadviser was founded to help consumers make educated
              financial decisions while learning more about various financial
              products.
            </p>
          </div>
        </div>
        <img
          alt="Toploansadviser About"
          class="banner-img"
          src="@/assets/img/about-us-banner-bg.webp"
        />
      </div>
    </section>
    <div class="desc-area">
      <div class="content-item first">
        <div class="pic-box">
          <img
            alt="Toploansadviser About"
            class="pic"
            src="@/assets/img/about-pic-1.webp"
          />
        </div>
        <div class="text-box">
          <span class="title">Overview</span>
          <p class="text">
            At Toploanadviser, we give our clients in-depth information about
            diverse financial products and the necessary information to succeed
            in a complicated financial world. By reviewing and comparing
            different products and services, we provide readers with a
            comprehensive look at the many options out there. That way, they can
            decide which ones are best suited to their individual needs. We
            condense the most reliable information in one place, using clear and
            straightforward language. Our experts make it easy to plan your
            financial future.
          </p>
        </div>
      </div>
      <div class="content-item second">
        <div class="text-box">
          <span class="title">Our Mission</span>
          <p class="text">
            Most of us are unfortunately lacking in financial literacy. That’s
            where we come in. Our goal is to provide our clients with all the
            essential information to choose the bank best fitting their
            financial needs. To accomplish this goal, we leverage our financial
            knowledge with the latest technology, giving you all the tools to
            succeed in your commercial relationships.
          </p>
        </div>
        <div class="pic-box">
          <img
            alt="Toploansadviser About"
            class="pic"
            src="@/assets/img/about-pic-2.webp"
          />
        </div>
      </div>
      <div class="content-item">
        <div class="pic-box">
          <img
            alt="Toploansadviser About"
            class="pic"
            src="@/assets/img/about-pic-3.webp"
          />
        </div>
        <div class="text-box">
          <span class="title">Our Value</span>
          <p class="text">
            As members of a consumer’s society, it’s easy to get trapped in the
            spending hamster wheel: earn money, spend money, repeat. It’s our
            firm belief that people should have the tools to step off the wheel
            and achieve financial security. By sharing our expertise, we will
            help you become the master of your money so you can stop stressing
            and start living.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {updateTime} from "../utils/date";
import {seo} from "../utils/seo";

export default {
  head() {
    return seo({
      title: 'About Us | Toploansadviser.com',
      description: 'Toploansadviser is a place to compare and review best loans lenders for your financial decision. Toploansadviser  is made up of experts who believe in updating you the most useful information to make informed decisions about your financial life.',
      url: 'https://www.toploansadvisr.com/about-us',
      img: 'https://www.toploansadviser.com/data/images/personal-loan.webp',
      img_size: {
        width: '325',
        height: '295'
      },
      img_type: 'image/webp',
    });
  },
  methods: {
    updateTime,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/about.scss";
</style>
