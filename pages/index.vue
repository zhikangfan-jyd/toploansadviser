<template>
  <main class="home-page">
      <section class="swiper-area">
          <swiper ref="swiper" :options="swiperOptions" class="my-swiper-container">
            <swiper-slide class="my-swiper-slide" style="background: green;">personal loans</swiper-slide>
            <swiper-slide class="my-swiper-slide" style="background: pink;">student loans</swiper-slide>
            <swiper-slide class="my-swiper-slide" style="background: orange;">mortgage loans</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
           
      </section>
      <section class="home-page-main-area">
          <div class="home-page-main-container">
            <h2 class="area-title">Choose us is a better choice for life</h2>
            <div class="desc-title-card">
                <h6 class="title">Who we are?</h6>
                <div class="card-bottom">
                    <p class="sub-title">about Toploansadviser <span class="icon"></span></p>
                    <a href="http://" target="_blank" rel="noopener noreferrer nofollow">more information here</a>
                </div>
                
            </div>
            <div class="content-box">
                <p class="text">Toploansadviser was founded to help consumers make educated financial decisions while learning more about various financial products.</p>
                <div class="desc-item">
                    <img src="" alt="" class="pic">
                    <div class="desc-content">
                        <h6 class="desc-item-title">Our experts make it easy to plan your financial future. </h6>
                        <p class="content">At Toploanadviser, we give our clients in-depth information about diverse financial products and the necessary information to succeed in a complicated financial world. </p>
                    </div>
                </div>
                <div class="desc-item">
                    
                    <div class="desc-content">
                        <h6 class="desc-item-title">Most of us are unfortunately lacking in financial literacy.</h6>
                        <p class="content">Our goal is to provide our clients with all the essential information to choose the bank best fitting their financial needs.</p>
                    </div>
                    <img src="" alt="" class="pic">
                </div>
            </div>
          </div>
      </section>

  </main>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    components: {
        Swiper,
        SwiperSlide,
        directive
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperOptions: {
                // autoplay: {
                //     delay: 3000,
                //     stopOnLastSlide: false,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true
                // },
                delay: 3500,
                speed: 1000,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'my-bullet-active'
                }
            }
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/index.scss';
</style>