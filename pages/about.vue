<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">About Toploansadviser</h1>
          <p class="update">Last updated: {{updateTime().month.short}} {{updateTime().year}}</p>
          <div class="content">
            <p>Toploansadviser was founded to help consumers make educated financial decisions while learning more about various financial products.</p>
          </div>
          
        </div>
        <img src="@/assets/img/about-banner.png" alt="Toploansadviser" class="banner-img">
      </div>
      
    </section>
    <div class="desc-area">
      <div class="content-item first">
        <div class="pic-box">
        <img src="@/assets/img/about-pic-1.png" alt="Toploansadviser" class="pic">

        </div>
        <div class="text-box">
          <span class="title">Overview</span>
          <p class="text">Through countless search results and sifting through unbounded content, Toploansadviser makes it easy to discover and compare financial products. With our ranking system and expert reviews, you will be able to compare lenders and make a choice in minutes.</p>
        </div>
      </div>
      <div class="content-item second">
        <div class="text-box">
          <span class="title">Our Mission</span>
          <p class="text">Consumers make poor selections when ill-informed. Our mission is to match consumers to their perfect bank. Using a combination of technology and money management expertise, we provide personal finance comparison tables and educational experiences that make your relationships with banks and lenders better.</p>
        </div>
        <div class="pic-box">
                  <img src="@/assets/img/about-pic-2.png" alt="Toploansadviser" class="pic">

        </div>
      </div>
      <div class="content-item">
        <div class="pic-box">
                  <img src="@/assets/img/about-pic-3.png" alt="Toploansadviser" class="pic">

        </div>
        <div class="text-box">
          <span class="title">Our Value</span>
          <p class="text">We believe that people aren't well enough equipped with the knowledge and tools to handle their everyday finances. Every day people commerce their time for money and their money for “thing”. We believe by providing access and education we can help people optimize their finances to regain control of their future.</p>
        </div>
      </div>
    </div>
    <!-- <div class="partners-area">
      <h6 class="title">OUR PARTNERS</h6>
      <ul class="img-list">
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
        <li><img src="" alt=""></li>
      </ul>
    </div> -->
  </main>
</template>

<script>
import { updateTime } from '../utils/date'
export default {
  methods: {
    updateTime
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/about.scss'
</style>