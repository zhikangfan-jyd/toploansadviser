<template>
  <main class="home-page">
      <section class="swiper-area">
          <swiper ref="swiper" :options="swiperOptions" class="my-swiper-container">
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <p>To find the best personal loan for your financial situation, it's best to shop around and compare personal loan rates from multiple lenders.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                            <h1 class="website-title">Best Personal Loan 2021</h1>
                            <img src="@/assets/img/banner.png" alt="" class="pic">
                            <a href="/personal" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <p>Toploansadviser has outlined the best student loans for multiple needs, so you can choose the loan for your specific situation.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                            <h1 class="website-title">Best Student Loan Refinance Companies 2021</h1>
                            <img src="@/assets/img/student-banner.png" alt="" class="pic">
                            <a href="/student-loan" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <p>Lower interest rates mean that you can save real money on your mortgage. Compare our top-tier providers and find the best purchase and refinance rates for you.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                            <h1 class="website-title">Best Mortgage Lenders 2021</h1>
                        <img src="@/assets/img/mortgage-banner.png" alt="" class="pic">
                        <a href="/mortgage" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                        
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
           
      </section>
      <section class="home-page-main-area">
          <div class="home-page-main-container">
            <h2 class="area-title">Choose us is a better choice for life</h2>
            <div class="desc-title-card">
                <h6 class="title">Who we are?</h6>
                <div class="card-bottom">
                    <p class="sub-title">about Toploansadviser <span class="icon"></span><span class="icon"></span></p>
                    <a href="http://" target="_blank" rel="noopener noreferrer nofollow">more information here</a>
                </div>
                
            </div>
            <div class="content-box">
                <p class="text">Toploansadviser was founded to help consumers make educated financial decisions while learning more about various financial products.</p>
                <div class="desc-item">
                    <img src="@/assets/img/index-pic-1.png" alt="" class="pic">
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
                    <img src="@/assets/img/index-pic-1.png" alt="" class="pic">
                </div>
            </div>
            <div class="counter-container">
                <div class="input-left">
                    <div class="amount-box">
                        <span class="title">Amount $</span>
                        <input type="text" class="amount-input" v-model="form.amount">
                    </div>
                    <input type="text" class="rate-annualy-input" v-model="form.rate" placeholder="Rate annualy">
                    <input type="text" class="year-input" v-model="form.year" placeholder="Year">
                    <span class="text">or</span>
                    <input type="text" class="months-input" v-model="form.month" placeholder="Months">
                </div>
                <div class="results-right">
                    <h6 class="title"><span class="green">Loan</span> <span>Calculator</span></h6>

                    <div class="results-container">
                        <button class="submit-btn" @click="submit"></button>
                        <div class="results-box">
                            <div class="results-item">
                                <span class="icon">$</span>
                                <div class="results">
                                    <span class="value month-price">{{form.per_month}}</span>
                                    <span class="value-title">Per Month</span>
                                </div>
                            </div>
                             <div class="results-item">
                                <span class="icon">$</span>
                                <div class="results">
                                    <span class="value">{{form.total}}</span>
                                    <span class="value-title">Total Interest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="compare-container">
                <div class="compare-title">
                    <span class="icon"></span><span class="icon"></span>
                    <span class="text">Compare rates</span>
                </div>

                <div class="scroll-box">
                      <div class="ticker-container">
                        <div class="ticker">
                                
                            <div class="single-brand" v-for="(product,index) in products" :key="index">
                                <a target="_blank" :href="product.link">
                                    <img :src="product.logo" :alt="product.name">
                                </a>
                            </div>

                        </div>
                        <div class="ticker">
                                
                            <div class="single-brand" v-for="(product,index) in products" :key="index">
                                <a target="_blank" :href="product.link">
                                    <img :src="product.logo" :alt="product.name">
                                </a>
                            </div>

                        </div>
                      </div>
                  </div>

            </div>
            <div class="blog-container">
                <h2 class="area-title">The lastest news and stocks</h2>
                <div class="blog-list">
                    <div class="blog-item">
                        <div class="blog-info">
                            <p>From The New Times</p>
                            <p>News Loan & Interest</p>
                        </div>
                        <div class="blog-box">
                            <div class="blog-left">
                                <h6 class="blog-title">Do You Qualify For The Student Loan Payment and Interest Pause?</h6>
                                <a href="/guides/s1" target="_blank" rel="noopener noreferrer" class="link">Read more here</a>
                            </div>
                            <div class="img-box">
                                <img src="/data/blogs/img/s-1.jpg" alt="" class="pic">
                            </div>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-info">
                            <p>From The New Times</p>
                            <p>News Loan & Interest</p>
                        </div>
                        <div class="blog-box">
                            <div class="blog-left">
                                <h6 class="blog-title">6 Primary Advantages To Filing An Early FAFSA</h6>
                                <a href="/guides/s2" target="_blank" rel="noopener noreferrer" class="link">Read more here</a>
                            </div>
                            <div class="img-box">
                                <img src="/data/blogs/img/s-2.jpg" alt="" class="pic">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-link-box">
                    <a href="http://" target="_blank" rel="noopener noreferrer" class="more-link">
                        <span class="icon"></span><span class="icon"></span>
                        <span class="text">See the lists</span>
                    </a>
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

    async asyncData({ app, redirect }) {

        try {
        
            let results = await app.$axios.$get('/data/person_loan_product.json');
            return {
                products: results.data
            }

        } catch (error) {
            redirect('/error')
        }
    },
    data() {
        return {
            form: {
                amount: '',
                rate: '',
                year: '',
                month: '',
                per_month: 0.00,
                total: 38.06
            },
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
        submit() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/index.scss';
</style>