<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title"><span>Best Student Loan</span> <span>Refinance Companies 2021</span></h1>
          <p class="sub-title">Compare Top Student Refinance Rates</p>
          <div class="content">
            <p>Toploansadviser has outlined the best student loans for multiple needs, so you can choose the loan for your specific situation.</p>
          </div>
          <p class="update">Last updated: {{updateTime().month.short}} {{updateTime().year}}</p>
        </div>
        <img src="@/assets/img/student-banner.png" alt="Toploansadviser" class="banner-img">

      </div>
    </section>
    <div class="container">
      <section class="product-area">
        <div class="product-container">
          <div class="product-container-top-box">
            
            <div class="disclosure">
              <nuxt-link to="/disclosure" class="title">Advertising Disclosure</nuxt-link>
              
            </div>

          </div>
          <div class="product-list-box">
            <div class="product-title-box">
              <div class="title lenders"><span class="text">Lenders</span></div>
              <div class="title score">
                <span class="text">
                  Score 
                  <el-popover
                    placement="bottom"
                    width="320"
                    trigger="hover"
                    popper-class="popper"
                    >
                    <span class="iconfont" slot="reference">&#xe669;</span>
                    <div class="content">
                      <p>The ratings and ranking on our website are determined by our editorial team. The scoring mechanism for loan products takes into account more than 10 data points across multiple categories, such as APR, repayment options, customer service, lender transparency, loan eligibility and others.</p>
                      
                    </div>
                  </el-popover>
                </span>
              </div>
              <div class="title features"><span class="text">Loan Features</span></div>
              <div class="title terms"><span class="text">Loan Terms</span></div>
              
            </div>
            <div class="product-list">
              <div class="product-item" v-for="(item,index) in products" :key="item.name">
                <div class="corner-box" v-if="index == 0">
                  <span class="text">Best Overall</span>
                </div>
                <div class="visited-box" v-if="index == 0">
                  <span class="iconfont"></span>
                  <span class="text"><strong>354 users</strong> chose this site today</span>
                </div>
                
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img v-lazy="item.logo" :alt="item.name">
                    </div>
                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{item.rate.score}}</span>
                        <div class="trustpilot-box" v-if="index == 0">
                          <div class="text-box">
                            <span class="iconfont">&#xe64c;</span>
                            <span class="text">Trustpilot</span>
                          </div>
                          <ul class="star-list">
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                          </ul>
                        </div>
                        <div class="star-box" v-else>
                          <el-rate
                          disabled
                          :value="computeScore(item.rate.score)"
                          :colors="['#29b674','#29b674','#29b674']"
                          ></el-rate>
                        </div>
                        <nuxt-link v-if="item.review_key != ''" :to="'/reviews/' + item.review_key" class="reviews-link">Read Review</nuxt-link>

                      </div>
                    </div>
                  </div>
                  <div class="features-terms-box">
                    <div class="list-box">
                      <dl class="features-list">
                        <dt>
                          <!-- <span class="pc-text">Easily Compare & Save</span> -->
                          <span class="phone-text">Loan Features</span>
                        </dt>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Min. Credit Score: {{item.compare.credit_score}}</p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Fixed rate：{{item.compare.fixed_rate.min_rate}}% - {{item.compare.fixed_rate.max_rate}}%</p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Variable rate：{{item.compare.variable_rate.min_rate}}% - {{item.compare.variable_rate.max_rate}}%</p>
                        </dd>
                      </dl>
                    </div>
                    <div class="terms-box">
                      <span class="title">Loan Terms</span>
                      <span class="text-box">{{item.loan_term.min_term}} - {{item.loan_term.max_term}} years</span>
                    </div>

                  </div>
                  <div class="btn-box">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" @click="handleTracking({name: item.name,click_time: new Date().getTime(),link: item.link})" class="btn">

                      <span class="text">Check My Rate</span>
                      <span class="iconfont">&#xe63c;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="more-box">
            <button v-if="isNull" class="btn" @click="loadMore">
              <span class="text">SEE MORE</span>
             <span class="iconfont">&#xe600;</span>
            </button>
            <button v-else class="btn close" @click="closeMore">
              <span class="text">COLLAPSE</span>
             <span class="iconfont">&#xe600;</span>
            </button>
          </div>
        </div>
      </section>
      <section class="best-overall-area">
        <div class="best-overall-title-box">
          <h2 class="best-overall-title">Best Overall</h2>
          
        </div>
        <div class="card-list">
          <div class="product-item" v-for="(item,index) in overallData" :key="item.name">
                <div class="corner-box" v-if="index == 0">
                  <span class="text">Best Overall</span>
                </div>
                <div class="corner-box green" v-if="index == 1">
                  <span class="text">Best for Refinancing</span>
                </div>
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img v-lazy="item.logo" alt="">
                    </div>
                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{item.rate.score}}</span>
                        <div class="star-box">
                          <el-rate
                          disabled
                          :value="computeScore(item.rate.score)"
                          :colors="['#29b674','#29b674','#29b674']"
                          ></el-rate>
                        </div>
                        <nuxt-link v-if="item.review_key != ''" :to="'/reviews/' + item.review_key" class="reviews-link">Read Review</nuxt-link>

                      </div>
                    </div>
                  </div>
                  <div class="features-terms-box">
                    <div class="list-box">
                      <dl class="features-list">
                        <dt>
                          <!-- <span class="pc-text">Easily Compare & Save</span> -->
                          <span class="phone-text">Loan Features</span>
                        </dt>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Min. Credit Score: {{item.compare.credit_score}}</p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Fixed rate：{{item.compare.fixed_rate.min_rate}}% - {{item.compare.fixed_rate.max_rate}}%</p>
                        </dd>
                        <dd>
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">Variable rate：{{item.compare.variable_rate.min_rate}}% - {{item.compare.variable_rate.max_rate}}%</p>
                        </dd>
                      </dl>
                    </div>
                    <div class="terms-box">
                      <span class="title">Loan Terms</span>
                      <span>{{item.loan_term.min_term}} - {{item.loan_term.max_term}} years</span>
                    </div>

                  </div>
                  <div class="btn-box">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" @click="handleTracking({name: item.name,click_time: new Date().getTime(),link: item.link})" class="btn">
                      <span class="text">Check My Rate</span>
                      <span class="iconfont">&#xe63c;</span>
                    </a>
                  </div>
                </div>
              </div>
        </div>
        
      </section>
      <section class="faq-area">
        <div class="faq-area-title-box">
          <img src="@/assets/img/faq.png" alt="Toploansadviser" class="pic">
          <div class="faq-content">
            <h2 class="faq-title">
              <span>FAQ's</span>
              <span>About Student Loans</span>
            </h2>
            <div class="content">
              <p>Before taking a student loan be sure you familiarize yourself with all the terms and conditions associated with the loan. To help you get started, we’ve compiled some of the most frequently asked questions about student loans below.</p>
            </div>
          </div>
        </div>
        <fold-the-card :data="questionData"></fold-the-card>
      </section>
      
    </div>
  </main>
</template>

<script>
import FoldTheCard from '../components/FoldTheCard'
import { computeScore } from '../utils/index'
import { updateTime } from '../utils/date'
export default {
  components: {
    FoldTheCard
  },
  async asyncData({ $axios, redirect, route }) {

    // 拼接 msclkid 参数
    const changeLink = (url) => {
      let msclkid = route.query['msclkid'];
      return `${url}&msclkid=${msclkid}`
    }

    try {
      // 获取所有产品
      let product_results = await $axios.$get('/data/student_loan_product.json');
      // 获取答疑问题的数据
      let question_results = await $axios.$get('/data/student_loan_question.json');

      // 给所有 是www.creditble.com 的链接后面都拼接 参数
      product_results.data.forEach(ele => {
        if (ele.link.indexOf('www.credible.com') != -1) {
          ele.link = changeLink(ele.link);
        }
      })

      return {
        count: product_results.data.length,
        allProducts: product_results.data,
        questionData: question_results.data,
        overallData: product_results.data.slice(0,2)
      }
    } catch (error) {
      redirect('/error')
    }
  },
  data() {
    return {
      isNull: true,
      page: 1,
      pageSize: 5,
      products: []
    }
  },
  methods: {
    computeScore,
    updateTime,
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != 'function') { return }
      window.uba(params);
    },
    // 点击加载更多数据
    loadMore() {
      let data = this.allProducts.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      this.products = this.products.concat(data)
      this.page++;
      if (this.products.length == this.count) {
        this.isNull = false
      }
      
    },
    // 关闭更多
    closeMore() {
      this.isNull = true;
      this.page = 1;
      this.products = [];
      this.loadMore();
    }
  },
  created() {
    this.loadMore();
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/student.scss';
</style>