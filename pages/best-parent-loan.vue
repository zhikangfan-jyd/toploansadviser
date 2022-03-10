<template>
  <main class="main-container">

    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Parent Loan For College Of {{ updateTime().month.short }} {{ updateTime().year }}</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>Parent loans are designed to help parents finance their children’s educational journey without
              sacrificing their life savings. By taking out a parent loan, you can afford to pay for your kid’s college
              without draining your retirement account or borrowing from friends and family. However, there are plenty
              of options you need to consider when choosing parent loans.</p>

          </div>
        </div>

      </div>
    </section>
    <!--    <section class="product-area">-->
    <!--      <div class="product-container">-->
    <!--        <div class="product-container-top-box">-->
    <!--          <div class="disclosure">-->
    <!--              <span class="title"-->
    <!--                    @click="handleShowDisclosure"-->
    <!--              >Advertising Disclosure</span-->
    <!--              >-->
    <!--            <div :class="{'disclosure_content': true, 'show': isShowDisclosure}">-->
    <!--              The information shared through this website is based on our team’s personal judgements and views. We use-->
    <!--              our own comparisons to assign values, which are not intended to reflect a certain benchmark of-->
    <!--              precision. To keep our website free for use, we accept referral fees from various service providers,-->
    <!--              which have the potential to influence their respective appointed scores. A third party’s participation-->
    <!--              on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on-->
    <!--              this site is subject to change at any time.The site does not include all companies offering loan-->
    <!--              products or all available loan offers.-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="product-list-box">-->
    <!--          <div class="product-title-box">-->
    <!--            <div class="title lenders"><span class="text">Lenders</span></div>-->
    <!--            <div class="title score">-->
    <!--                <span class="text">-->
    <!--                  Score-->
    <!--                  <el-popover-->
    <!--                    placement="bottom"-->
    <!--                    popper-class="popper"-->
    <!--                    trigger="hover"-->
    <!--                    width="320"-->
    <!--                  >-->
    <!--                    <span slot="reference" class="iconfont">&#xe669;</span>-->
    <!--                    <div class="content">-->
    <!--                      <p>-->
    <!--                        The ratings and ranking on our website are determined by-->
    <!--                        our editorial team. The scoring mechanism for loan-->
    <!--                        products takes into account more than 10 data points-->
    <!--                        across multiple categories, such as APR, repayment-->
    <!--                        options, customer service, lender transparency, loan-->
    <!--                        eligibility and others.-->
    <!--                      </p>-->
    <!--                    </div>-->
    <!--                  </el-popover>-->
    <!--                </span>-->
    <!--            </div>-->
    <!--            <div class="title features">-->
    <!--              <span class="text">Loan Features</span>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="product-list">-->
    <!--            <div-->
    <!--              v-for="(item, index) in products"-->
    <!--              :key="item.name"-->
    <!--              class="product-item"-->
    <!--            >-->
    <!--              <img v-if="index === 0" alt="" class="corner-box" src="@/assets/img/best-choice.png">-->
    <!--              <div v-if="index === 0" class="visited-box">-->
    <!--                <span class="iconfont"></span>-->
    <!--                <span class="text"-->
    <!--                ><strong>354 users</strong> chose this site today</span-->
    <!--                >-->
    <!--              </div>-->

    <!--              <div class="product-item-container">-->
    <!--                <div class="img-score-box">-->
    <!--                  <div class="img-box">-->
    <!--                    <img v-lazy="item.logo" :alt="item.name"/>-->
    <!--                  </div>-->
    <!--                  <div class="rate-box">-->
    <!--                    <div class="rate">-->
    <!--                      <span class="score">{{ item.score }}</span>-->
    <!--                      <div v-if="index === 0" class="trustpilot-box">-->
    <!--                        <div class="text-box">-->
    <!--                          <span class="iconfont">&#xe64c;</span>-->
    <!--                          <span class="text">Trustpilot</span>-->
    <!--                        </div>-->
    <!--                        <ul class="star-list">-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                          <li>-->
    <!--                            <span class="iconfont">&#xe64c;</span>-->
    <!--                          </li>-->
    <!--                        </ul>-->
    <!--                      </div>-->
    <!--                      <div v-else class="star-box">-->
    <!--                        <el-rate-->
    <!--                          :colors="['#29b674', '#29b674', '#29b674']"-->
    <!--                          :value="computeScore(item.score)"-->
    <!--                          disabled-->
    <!--                        ></el-rate>-->
    <!--                      </div>-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <div class="features-terms-box">-->
    <!--                  <div class="list-box">-->
    <!--                    <dl class="features-list">-->
    <!--                      <dt>-->
    <!--                        &lt;!&ndash; <span class="pc-text">Easily Compare & Save</span> &ndash;&gt;-->
    <!--                        <span class="phone-text">Loan Features</span>-->
    <!--                      </dt>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <p class="text">-->
    <!--                          Min. Credit Score: {{ item.credit_score }}-->
    <!--                        </p>-->
    <!--                      </dd>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <p class="text">-->
    <!--                          Fixed APR: {{ item.fixed_apr }}-->
    <!--                        </p>-->
    <!--                      </dd>-->
    <!--                      <dd>-->
    <!--                        <span class="iconfont">&#xe65a;</span>-->
    <!--                        <p class="text">-->
    <!--                          Variable APR: {{ item.variable_apr }}-->
    <!--                        </p>-->
    <!--                      </dd>-->
    <!--                    </dl>-->
    <!--                  </div>-->

    <!--                </div>-->
    <!--                <div class="btn-box">-->
    <!--                  <a-->
    <!--                    :href="item.link"-->
    <!--                    class="btn"-->
    <!--                    rel="noopener noreferrer nofollow"-->
    <!--                    target="_blank"-->
    <!--                  >-->
    <!--                    <span class="text">Check My Rate</span>-->
    <!--                    <span class="iconfont">&#xe63c;</span>-->
    <!--                  </a>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--    </section>-->

    <section class="product-include-area">
      <div class="content-container">
        <h3 class="title">Finance Your children’s educational journey</h3>
        <p>As a parent, it's natural to want to do anything you can to help your child. So it's no surprise that some
          3.6 million parents had outstanding loans through the federal student loan program at the end of 2019,
          according to a study by Trellis Research. If you're considering helping your child by taking out parent
          student loans, Below we’ve picked the best student loans for parents based on features including interest
          rates, origination fees and hardship repayment options.</p>
      </div>
      <div class="product-include-container">
        <div class="product-include-container-top">
          <div class="disclosure">
              <span class="title"
                    @click="handleShowDisclosure"
              >Advertising Disclosure</span
              >
            <div :class="{'disclosure_content': true, 'show': isShowDisclosure}">
              The information shared through this website is based on our team’s personal judgements and views. We use
              our own comparisons to assign values, which are not intended to reflect a certain benchmark of
              precision. To keep our website free for use, we accept referral fees from various service providers,
              which have the potential to influence their respective appointed scores. A third party’s participation
              on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on
              this site is subject to change at any time.The site does not include all companies offering loan
              products or all available loan offers.
            </div>
          </div>
        </div>
        <div v-for="(product, index) in products" :key="index" class="product-include-item">
          <div class="product-include-title">
            <img v-if="index === 0" alt="" class="medal" src="@/assets/img/medal-icon.png">
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">{{ product.name }}-<span style="color: #cb9600;">{{ product.feature }}</span></h3>
          </div>
          <div class="product-include-card">
            <div v-if="index === 0" class="tips"><span class="g">503 users</span> chose this site today</div>
            <div class="product-include-card-info">
              <div class="product-include-card-info-left">
                <div class="logo-box">
                  <img :alt="product.name" :src="product.logo" class="logo">
                  <div class="read-review-btn">Read Review <span>>></span></div>
                </div>
                <div class="rate-box">

                  <div class="score-box">
                    <span class="score">{{ product.score }}</span>
                    <div v-if="index === 0" class="trustpilot-box">
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
                    <div v-else class="rate">
                      <NewStar :max="10" :score="product.score"></NewStar>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-include-card-info-right">
                <div class="content-box">
                  <ul class="product-advantage-list">

                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Min. Credit Score: {{ product.credit_score }}</p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Fixed rate: {{ product.fixed_apr }}</p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Variable rate: {{ product.variable_apr }}</p>
                    </li>
                  </ul>
                </div>
                <div class="btn-box">
                  <a :href="product.link" class="btn" rel="noreferrer noopener nofollow">View Rates >></a>
                </div>
              </div>
            </div>
            <div class="product-include-card-content" v-html="product.description"></div>
          </div>
        </div>
        <div class="website-btn-container">
          <p class="text">Check your Approval Odds for a loan</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Get Started >>
          </a>
        </div>

      </div>

    </section>
    <section class="question-area">
      <div class="question-container">
        <!--        <h2 class="title">Frequently Asked Questions (FAQs) about FHA lenders</h2>-->
        <div class="question-content">

          <h2 class="question-title">What Is a Parent PLUS Loan?</h2>
          <p>As we explained above, a Parent PLUS loan is a special type of college loan that’s issued to parents. If
            you’re looking for ways to finance your child’s education, then a parent PLUS loan may be a good option to
            consider. However, keep in mind that the Parent PLUS loans come with fees, unlike <a
              href="/guides/what-are-private-student-loans" rel="noopener noreferrer" target="_blank">private loans</a>
            offered by
            banks and private lenders. That is because these federal loans offer benefits in terms of easier repayment
            and forgiveness plans. You need to think carefully before deciding between a federal Parent PLUS loan and <a
              href="/guides/how-to-apply-for-a-private-student-loan" rel="noopener noreferrer" target="_blank">a private
              loan</a>.</p>
          <dl>
            <dt>Don’t take out a federal Parent PLUS loan if:</dt>
            <dd>Your financial situation is solid and you’re able to work during the entire loan term. If this is the
              case, then a private loan is a better option because you will <a
                href="/guides/how-to-repay-your-student-loan-faster-and-with-less-interest" rel="noopener noreferrer"
                target="_blank">get lower interest rates</a> and thus spend less
              money.
            </dd>
            <dd>Your child hasn’t yet maxed out their federal student loan options. Go for the student loans first and,
              if those aren’t enough to cover the expenses, then look into the Parent PLUS.
            </dd>
            <dd>If you have high-interest debt such as credit cards that you need to repay, then taking out a federal
              loan may not be the best option for you.
            </dd>
          </dl>
          <dl>
            <dt>Take out the parent PLUS loan if:</dt>
            <dd>You’re not sure whether you will be able to work and have a steady income during the entirety of the
              loan term. In this case, a federal loan is a good option because it gives you a safety net in case you’re
              unable to make the payments.
            </dd>
            <dd>If you don’t meet the private loan requirements, that is, if your credit score is not good enough to
              qualify for a private loan, then you may be able to get a federal loan instead.
            </dd>
            <dd>If you are building your finances and don't meet private loan requirements, a PLUS loan is likely best
              for you as they don't have strict credit requirements.
            </dd>
          </dl>
          <h2 class="question-title">Are You Eligible for a Parent PLUS Loan?</h2>
          <p>Unlike private loans, federal loans don’t have a credit score requirement, which makes it much easier to
            qualify. However, you still have to pass the credit check to make sure you don’t have an adverse credit
            history, meaning you don’t have any negative line items on your credit report (payments that are 90 days
            late or more).</p>
          <dl>
            <dt> Other requirements include the following:</dt>
            <dd>You must be a parent.</dd>
            <dd>Your child must be an undergraduate.</dd>
            <dd>Both you and the student must be eligible for federal aid.</dd>
          </dl>
          <h2 class="question-title">How to Apply for a Parent Loan?</h2>
          <p>Applying for a parent loan includes one additional step compared to regular student loan applications.
            First, you need to submit the <a href="/guides/6-primary-advantages-to-filing-an-early-fafsa"
                                             rel="noopener noreferrer"
                                             target="_blank">Free Application for Federal Student Aid, known as
              FAFSA</a>. Then, contact the
            child’s school to get further instructions, as the process may differ depending on the college procedures.
            In most cases, you will have to apply for a PLUS loan on studentloans.gov.</p>
          <p>Go through the required credit check and make sure all your credit freezes are lifted before you initiate
            this process. Then proceed to submit your documentation on studentloans.gov and wait to hear back from them.
            If your documentation checks out, you’ll be good to go. The approval process can take anywhere up to four
            weeks. Keep in mind that the application may differ depending on the school but, in most cases, you will be
            able to submit it online without much hassle.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NewStar from '~/components/NewStar/index.vue';
import {computeScore} from "../utils/index";
import {updateTime} from "../utils/date";
import {seo} from '../utils/seo'

export default {
  head: seo({
    title: 'Best Parent Student Loan | Toploansadviser.com',
    description: "Our parent loan process is quick and transparent. You can find the most suitable option from our wedsite. And we provide guidance for what you want to apply step by step. Don' t worry and go for it.\n",
    keywords: "student loan,student loan interest rates,student loan interest,student loans 2022,my student loan,student loans for bad credit,student loan website,no interest student loans",
    link: [
      {rel: "canonical", href: "https://www.toploansadviser.com/student-loan"}
    ],
    url: 'https://www.toploansadviser.com/best-parent-loan',
    img: 'https://www.toploansadviser.com/data/images/student-loan.webp',
    img_size: {
      width: '551',
      height: '341'
    },
    img_type: 'image/webp',
  }),
  components: {
    NewStar
  },
  async asyncData({$axios, error, route}) {
    try {
      // 获取所有产品
      let product_results = await $axios.$get(
        "/data/best-parent-loan.json"
      );
      return {
        products: product_results.data
      };
    } catch (e) {
      error({statusCode: 404});
    }
  },
  data() {
    return {
      isShowDisclosure: false
    };
  },
  methods: {
    updateTime,
    computeScore,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    }

  },
  created() {

  },
  mounted() {
    function showSlogan() {
      let clientWidth = $(window).width();
      if (clientWidth <= 750) {
        let top = $('.banner-container .website-title').offset().top;

        $(window).on('scroll', function () {
          let headerHeight = document.querySelector('.header-container').clientHeight;


          if ($(this).scrollTop() > top) {
            $('.banner-container .website-title').text('Compare Best Personal Loans Rates');
            $('.banner-container .website-title').css({
              position: 'fixed',
              top: headerHeight + 'px',
              fontSize: '.2rem',
              textAlign: 'center',
              width: '100%',
              left: 0,
              color: '#fff',
              backgroundColor: 'rgb(26,119,129)'
            })
          } else {
            $('.banner-container .website-title').text('Best Personal Loans 2022');
            $('.banner-container .website-title').css({
              position: 'static',
              top: headerHeight + 'px',
              textAlign: 'left',
              width: 'auto',
              fontSize: '0.36rem',
              color: '#001139',
              left: 0,
              backgroundColor: 'transparent'
            })
          }
        })
      }
    }

    // showSlogan();

    // $(window).on('resize', showSlogan)
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/best-parent-loan.scss";
</style>
