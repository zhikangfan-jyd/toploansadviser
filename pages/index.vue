<template>
  <main class="home-page">
      <section class="swiper-area">
          <swiper ref="swiper" :options="swiperOptions" class="my-swiper-container">
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <h2 class="website-title">We Compare, you choose</h2>
                        <p class="desc">To find the best personal loan for your financial situation, it's best to shop around and compare personal loan rates from multiple lenders.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                             <img src="@/assets/img/banner.png" alt="" class="pic">
                            <h1 class="website-title">Best Personal Loan 2021</h1>
                           
                            <a href="/personal" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <h2 class="website-title">We Compare, you choose</h2>
                        <p class="desc">Toploansadviser has outlined the best student loans for multiple needs, so you can choose the loan for your specific situation.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                            <img src="@/assets/img/student-banner.png" alt="" class="pic">
                            <h1 class="website-title">Best Student Loan Refinance Companies 2021</h1>
                            
                            <a href="/student-loan" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="my-swiper-slide">
                <div class="swiper-content">
                    <div class="content-left">
                        <h2 class="website-title">We Compare, you choose</h2>
                        <p class="desc">Lower interest rates mean that you can save real money on your mortgage. Compare our top-tier providers and find the best purchase and refinance rates for you.</p>
                    </div>
                    <div class="content-right">
                        <div class="content-right-box">
                            <img src="@/assets/img/mortgage-banner.png" alt="" class="pic">
                            <h1 class="website-title">Best Mortgage Lenders 2021</h1>
                        
                        <a href="/mortgage" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                        </div>
                        
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
           
      </section>
      <section class="home-page-main-area">
          <canvas id="my-canvas" width="1080" height="1500"></canvas>
          <div class="home-page-main-container">
            
            <h2 class="area-title">Comparison helps you get more wisdom</h2>
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
                    <img src="@/assets/img/about-pic-3.png" alt="" class="pic">
                </div>
            </div>
            <div class="counter-container">
                <div class="input-left">
                    <div class="amount-box">
                        <span class="title">Amount $</span>
                        <input type="text" class="amount-input" v-model="form.amount" @input="changeAmount">
                    </div>
                    <div class="rate-box">
                        <input type="text" class="rate-annualy-input" v-model="form.rate" placeholder="Rate annualy" @input="changeRate">
                    </div>
                    
                    <input type="text" class="year-input" v-model="form.year" placeholder="Year" @input="changeYear">
                    <span class="text">or</span>
                    <input type="text" class="months-input" v-model="form.month" placeholder="Months" @input="changeMonth">
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
                <ul class="blog-list">
                    <li class="blog-item" v-for="(item,index) in personal_blogs" :key="index">
                        <div class="img-box">
                        
                        <img v-lazy="item.picture" alt="">
                        </div>
                        <h6 class="blog-title">{{item.title}}</h6>
                        <nuxt-link :to="'/guides/' + item.key" class="link">Read full Article</nuxt-link>
                    </li>
                </ul>
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
                per_month: 0,
                total: 0
            },
            personal_blogs: [],
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
        async getBlog() {
            let personal_results = await this.$axios.get('/data/blogs/personal.json');
           this.personal_blogs = personal_results.data.data.slice(0,3)
        },
        changeYear(e) {
            let value = e.target.value;
            if (isNaN(Number(value))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return ;
            }
            this.form.month = value * 12 == 0 ? '' : value * 12;
        },

        changeMonth(e) {
            let value = e.target.value;
            if (isNaN(Number(value))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return ;
            }
            this.form.year = (value / 12).toFixed(1) == 0 ? '' : (value / 12).toFixed(1);
        },
        changeAmount(e) {
            let value = e.target.value;
            if (isNaN(Number(value))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return ;
            }
        },
        changeRate(e) {
            let value = e.target.value;
            if (isNaN(Number(value))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return ;
            }
        },
        validate() {

        },
        submit() {
            // 判断用户输入的是不是合法值
            if (this.form.year == '' || this.form.amount == '' || this.form.month == '' || this.form.rate == '') {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return ;
            }
            if (isNaN(Number(this.form.year)) || isNaN(Number(this.form.amount)) || isNaN(Number(this.form.month)) || isNaN(Number(this.form.rate))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                retrun ;
            }

            let rate = this.form.rate / 100;
            let pmt = (Number(this.form.amount)*(Number(rate) / 12)) / (1- 1 / Math.pow(1 + (Number(rate)/ 12), Number(this.form.month)));
            this.form.per_month = pmt.toFixed(2);
            this.form.total = (this.form.per_month * this.form.month).toFixed(2)
        }
    },
    created() {
        this.getBlog();
    },
    mounted() {
        let canvas = document.getElementById('my-canvas');
        let ctx = canvas.getContext('2d');
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#29b674';
        ctx.beginPath();
        ctx.moveTo(1063.5,4);
        ctx.bezierCurveTo(956.5, 136,212.5, 5,87.5 ,200);
        ctx.stroke();
        ctx.moveTo(87.5 ,200);
        ctx.bezierCurveTo(183.5 ,414,1061.5, 248,904.5,518);
        ctx.stroke();
        ctx.moveTo(904.5,518);
        ctx.bezierCurveTo(813.5, 624,324.5 ,430,160.5, 684);
        ctx.stroke();
        ctx.moveTo(160.5, 684);
        ctx.bezierCurveTo(69.5 ,934,615.5 ,745,784.5,930);
        ctx.stroke();
        ctx.moveTo(784.5,930);
        ctx.bezierCurveTo(963.5 ,1184,726.5 ,1310, 267.5 ,1430);
        ctx.stroke();

    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/index.scss';
</style>