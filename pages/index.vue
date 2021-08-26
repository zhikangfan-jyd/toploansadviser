<template>
  <main class="home-page">
      <section class="swiper-area">

          <div class="banner-container">
              <div class="banner-left">
                  <h2 class="website-title">We Compare, you choose</h2>
                  <p class="desc">To find the best personal loan for your financial situation, it's best to shop around and compare personal loan rates from multiple lenders.</p>
              </div>
              <div class="banner-right">

              <client-only>
                    <swiper ref="swiper" :options="swiperOptions" class="my-swiper-container">
                        <swiper-slide class="my-swiper-slide">
                            <div class="swiper-content">
                            
                                <img src="@/assets/img/banner.png" alt="" class="pic">
                                <h1 class="website-title">Best Personal Loan 2021</h1>
                                
                                <a href="/personal-loan" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                                
                            </div>
                        </swiper-slide>
                        <swiper-slide class="my-swiper-slide">
                            <div class="swiper-content">
                            
                                <img src="@/assets/img/student-banner.png" alt="" class="pic">
                                    <h1 class="website-title">Best Student Loan Refinance Companies 2021</h1>
                                    
                                    <a href="/student-loan" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                                
                            </div>
                        </swiper-slide>
                        <swiper-slide class="my-swiper-slide">
                            <div class="swiper-content">
                            
                                <img src="@/assets/img/mortgage-banner.png" alt="" class="pic">
                                    <h1 class="website-title">Best Mortgage Lenders 2021</h1>
                                
                                <a href="/mortgage-loan" target="_blank" rel="noopener noreferrer nofollow" class="btn">Find more</a>
                                
                            </div>
                        </swiper-slide>
                       
                    </swiper>
                     <div class="swiper-pagination"></div>
                </client-only>
          </div>
          </div>

          
           
      </section>
      <section class="home-page-main-area">
          <!-- <canvas id="my-canvas" width="1080" height="1500"></canvas> -->
          <div class="home-page-main-container">
            
            <h2 class="area-title">Comparison helps you get more wisdom</h2>
            <div class="desc-title-card">
                <h6 class="title">Who we are?</h6>
                <div class="card-bottom">
                    <p class="sub-title"><a href="/about-us" target="_blank" rel="noopener noreferrer nofollow">about Toploansadviser</a> <span class="icon"></span><span class="icon"></span></p>
                    <a href="/personal-loan" target="_blank" rel="noopener noreferrer nofollow">more information here</a>
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
            <h2 class="area-title">Calculate your estimated monthly loan payment </h2>
            <div class="counter-container">
                <div class="input-left">
                    <div class="amount-box">
                        <span class="title">Amount</span>
                        <div class="amount-input-box">
                            <span class="money-icon">$</span>
                            <input type="text" class="amount-input" v-model="form.amount" @input="changeAmount">
                        </div>
                        
                        
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
                        <button class="submit-btn" @click="submit">
                            <span class="iconfont">&#xe605;</span>
                        </button>
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
                    <span class="text"><a href="/personal-loan" target="_blank" rel="noopener noreferrer">Compare rates</a></span>
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
                    <a href="/guides" target="_blank" rel="noopener noreferrer" class="more-link">
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
    head: {
        link: [
            {
                rel: 'canonical', href: 'https://toploansadviser.com/'
            }
        ]
    },
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
            points: [
                
                    {
                        x: 1019.5,
                        y: 23
                    },
                    {
                        x: 893.5,
                        y: 141
                    },
                    {
                        x: 159.5,
                        y: 33
                    },
                    {
                        x: 75.5, 
                        y: 187
                    },
                    {
                        x: 180, 
                        y: 200
                    }
            ],
            swiperOptions: {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                delay: 3500,
                speed: 1000,
                loop: true,
                observer: true,
                slidesPerView : 1,
                spaceBetween : '50%',
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass : 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                    clickable: true
                },
            }
        }
    },
    methods: {

        // 获取博客
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
            this.form.amount = e.target.value;
        },
        changeRate(e) {
            this.form.rate = e.target.value;
        },
        validate() {
            // 判断用户输入的是不是合法值
            if (this.form.year == '' || this.form.amount == '' || this.form.month == '' || this.form.rate == '' || isNaN(Number(this.form.year)) || isNaN(Number(this.form.amount)) || isNaN(Number(this.form.month))) {
                this.$message({
                    showClose: false,
                    message: 'Please enter a valid value!',
                    type: 'error'
                })
                return false;
            }
            
            return true;
        },
        submit() {
            
            if (!this.validate()) {
                retrun ;
            }

            let rate = this.form.rate / 100;
            let pmt = (Number(this.form.amount)*(Number(rate) / 12)) / (1- 1 / Math.pow(1 + (Number(rate)/ 12), Number(this.form.month)));
            this.form.per_month = pmt.toFixed(2);
            this.form.total = (this.form.per_month * this.form.month - this.form.amount).toFixed(2);
        },
        factorial(num) { //递归阶乘
            if (num <= 1) {
                return 1;
            } else {
                return num * this.factorial(num - 1);
            }
        },
        bezier(t) {
             var x = 0,
                y = 0,
                n = this.points.length - 1,
                self = this;
                this.points.forEach(function(item, index) {
                if(!index) {
                    x += item.x * Math.pow(( 1 - t ), n - index) * Math.pow(t, index) 
                    y += item.y * Math.pow(( 1 - t ), n - index) * Math.pow(t, index) 
                } else {
                    x += self.factorial(n) / self.factorial(index) / self.factorial(n - index) * item.x * Math.pow(( 1 - t ), n - index) * Math.pow(t, index) 
                    y += self.factorial(n) / self.factorial(index) / self.factorial(n - index) * item.y * Math.pow(( 1 - t ), n - index) * Math.pow(t, index) 
                }
            })
            return {
                x: x,
                y: y
            }
        }
    },
    created() {
        this.getBlog();
    },
    mounted() {
        // let canvas = document.getElementById('my-canvas');
        // let ctx = canvas.getContext('2d');
        // let arr = [];
        // for(var i = 0; i < 1; i+=0.01) {
        //     arr.push(this.bezier(i))
        // }
        // arr.forEach(function(obj, index) {
        //     if (index) {
        //         var startX = arr[index - 1].x,
        //             startY = arr[index - 1].y,
        //             x = obj.x,
        //             y = obj.y
        //         ctx.beginPath()
        //         ctx.moveTo(startX, startY)
        //         ctx.lineTo(x, y)
        //         ctx.strokeStyle = 'green'
        //         ctx.stroke()
        //     }
        // })
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/index.scss';
</style>