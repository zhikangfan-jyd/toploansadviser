<template>
  <main class="main-container">
<!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Mortgage Refinance Lenders</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>Mortgage refinancing is the strategy implemented by homeowners with the sole purpose of reducing their
              monthly payments. This is carried out by replacing their current mortgage with a new mortgage. The new
              mortgage will have better terms like lower interest rates and mortgage period.</p>

            <p>With mortgage refinancing, people can opt for significant changes in their loan agreement, such as moving
              from an
              adjustable-rate mortgage to a fixed-rate mortgage that offers greater stability.</p>

          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Pick the lowest mortgage rate you’ve always dreamed of</h2>
        <div class="preface-content">
          <p>Moreover, the lender will assist in paying for the previous loan, and you will be assigned to pay for the
            new home loan in the form of monthly payments.</p>

          <p>People have different preferences when they apply for a mortgage refinance. While some homeowners wish to
            decrease the loan period, others would be interested in cashing out their home equity, not selling their
            property.
          </p>
        </div>
      </div>
    </section>
    <section class="products-list-area">
      <div class="products-list-container">
        <div class="products-list-container-top">
          <h3 class="product-area-title">Choose the right lender for you:</h3>
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
        <div v-for="(product, index) in products" :key="index" class="product-item">
          <div v-if="index < 1" class="corner-box">
            <img v-if="index === 0" alt="Best Choice" src="@/assets/img/best-choice.png">
          </div>
          <div class="logo-info-col col">
            <div class="logo-info-box">
              <img :src="product.logo" alt="" class="logo">
              <div v-if="index === 0" class="trustpilot-box">
                <div class="trustpilot-top"><span class="iconfont">&#xe64c;</span><span>Trustpilot</span></div>
                <div class="trustpilot-bottom">
                  <ul class="start-list">
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                  </ul>
                  <span class="score">{{ product.score }}</span>
                </div>
              </div>
              <div v-else class="rate-box">
                <div class="star-box">
                  <NewStar :max="10" :score="product.score"></NewStar>
                </div>
                <span class="score">{{ product.score }}</span>
              </div>
              <a :href="product.link" class="view-details-btn" rel="noopener noreferrer nofollow">View details >> </a>
            </div>
          </div>
          <div class="credit-score-col col">
            <div class="credit-score-box">
              <div class="key">MIN.CREDIT SCORE</div>
              <div class="value">{{ product.credit_score }}</div>
            </div>
          </div>
          <div class="loan-types-col col">
            <div class="loan-types-box">
              <div class="key">LOAN TYPES</div>
              <div class="value">
                <p v-for="(type, id) in product.loan_types" :key="id" class="type">
                  <span class="iconfont">&#xe604;</span>
                  <span class="text">{{ type.text }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="down-payment-col col">
            <div class="down-payment-box">
              <div class="key">MIN.DOWN PAYMENT</div>
              <div class="value">{{ product.down_payment }}</div>
            </div>
          </div>
          <div class="btn-box-col col">
            <div class="btn-box">
              <a :href="product.link" class="btn" rel="noopener noreferrer nofollow">Check My Rates >></a>
              <a :href="product.link" class="visit-btn" rel="noopener noreferrer nofollow">Visit site >></a>
            </div>
          </div>
        </div>
      </div>
      <div class="more-from-toploansadviser-container">
        <h3 class="title">More from Toploansadviser:</h3>
        <ul class="list">
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Mortgage calculator</a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Learn how much house you can afford</a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Compare mortgage rates</a>
          </li>
        </ul>
      </div>
      <div class="content-container">
        <p>To refinance your loan, you will need to carry out due diligence at your end. The best way to do that would
          involve seeking out various loan providers to provide the best rate and loan terms.
        </p>
        <p>This article will identify some of the best refinance lenders giving house loans to people at competitive
          rates that involve low fees, which is also the key reason why people apply for refinancing. It will further
          discuss how these lenders are selected.</p>
        <p>There are several loan providers in the market offering different terms. However, the following mortgage
          refinances lenders are the best in their categories. </p>
      </div>
    </section>
    <section class="product-include-area">
      <div class="product-include-container">
        <div class="product-include-container-title">They include</div>
        <div v-for="(product, index) in products" :key="index" class="product-include-item">
          <div class="product-include-title">
            <img v-if="index === 0" alt="" class="medal" src="@/assets/img/medal-icon.png">
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">{{ product.name }}-{{ product.feature }}</h3>
          </div>
          <div class="product-include-card">
            <div v-if="index < 1" class="corner-box">
              <img v-if="index === 0" alt="" class="corner" src="@/assets/img/best-choice.png">
            </div>
            <div v-if="index === 0" class="tips"><span class="g">503 users</span> chose this site today</div>
            <div class="product-include-card-info">
              <div class="logo-box">
                <img :alt="product.name" :src="product.logo" class="logo">
                <div class="read-review-btn">Read Review <span>>></span></div>
              </div>
              <div class="rate-box">
                <div v-if="index === 0" class="trustpilot-box">
                  <div class="trustpilot-top">
                    <span class="score">{{ product.score }}</span>
                    <div class="trustpilot-txt">
                      <span class="iconfont">&#xe64c;</span><span>Trustpilot</span>
                    </div>
                  </div>
                  <ul class="start-list">
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                    <li class="iconfont">&#xe64c;</li>
                  </ul>
                </div>
                <div v-else class="score-box">
                  <span class="score">{{ product.score }}</span>
                  <div class="rate">
                    <NewStar :max="10" :score="product.score"></NewStar>
                  </div>
                </div>
              </div>
              <div class="content-box">
                <p class="product-slogan">{{ product.slogan }}</p>
                <ul class="product-advantage-list">

                  <li v-for="(advantage, id) in product.advantage" :key="id">
                    <span class="iconfont">&#xe604;</span>
                    <p class="text">{{ advantage.text }}</p>
                  </li>
                </ul>
              </div>
              <div class="btn-box">
                <a :href="product.link" class="btn" rel="noreferrer noopener nofollow">View Rates >></a>
              </div>
            </div>
            <div class="product-include-card-content" v-html="product.description"></div>
          </div>
        </div>
        <div class="website-btn-container">
          <p class="text">Check your Approval Odds for a mortgage loan</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Get Started >>
          </a>
        </div>

      </div>

    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">How Do We Choose the Best Mortgage Refinance Lenders?</h2>
        <div class="question-content">
          <p>We selected the top 10 loan providers that are involved in offering loans either online or through physical
            stores. The lenders we included were some of the biggest and well-reputed mortgage providers in the category
            of bank and non-bank lenders.</p>
          <dl class="keynote-list">
            <dt class="keynote-list-title">The methodology was highly concentrated around several factors, and they are
              as follows:
            </dt>
            <dd>
              <div class="keynote"><span class="circle"></span><span>Cost of loan</span></div>
              <p class="text">This category was given a 30% weightage that included application cost, appraisal fees,
                and loan origination cost.</p>
            </dd>
            <dd>
              <div class="keynote"><span class="circle"></span><span>Efficiency</span></div>
              <p class="text">This category was given a 20% weightage on how quickly a loan is granted and paid.</p>
            </dd>
            <dd>
              <div class="keynote"><span class="circle"></span><span>Credit required for the borrower</span></div>
              <p class="text">With a 20% weightage, the borrowers had to pass the minimum credit criteria depending upon
                the loan type.</p>
            </dd>
            <dd>
              <div class="keynote"><span class="circle"></span><span>Loan products</span></div>
              <p class="text">Each company provides a different set of mortgages, so with a 20% weight attached to the
                category, we evaluated which loan providers were selected.</p>
            </dd>
            <dd>
              <div class="keynote"><span class="circle"></span><span>Accessibility to apply for a loan</span></div>
              <p class="text">It is imperative that the loan application process is user-friendly and is widely
                available to a large set of consumer-based. Hence, this category had a 10% weight towards the selection
                of lenders.</p>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="conclusion-area">
      <div class="conclusion-container">
        <h2 class="title">Conclusion</h2>
        <div class="conclusion-content">
          <p>Before choosing which type of loan to go with, it is vital to have knowledge of the lenders that are in the
            industry offering loan product. Due diligence is needed to know about the loans offered and the expenses
            attached to them.</p>

          <p>Borrowers also should keep a check on their credit score to be aware that they follow within the minimum
            guidelines of mortgage providers. It is crucial to know the type of loan one can afford to pay and which
            lender best fits them.</p>
        </div>

      </div>
      <div class="more-from-toploansadviser-container">
        <h3 class="title">More About Mortgage Loans:</h3>
        <ul class="list">
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Mortgage calculator</a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Learn how much house you can afford</a>
          </li>
          <li>
            <span class="circle"></span>
            <a class="link text" href="" rel="noopener noreferrer nofollow">Compare mortgage rates</a>
          </li>
        </ul>
      </div>
      <div class="website-btn-container">
        <p class="text">Check competitive mortgage loan interest rates</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Right Now >>
        </a>
      </div>
    </section>
  </main>
</template>
<script>
import NewStar from '@/components/NewStar/index.vue';
import {updateTime} from "../utils/date";

export default {
  components: {
    NewStar
  },
  async asyncData({$axios, error}) {
    try {
      let results = await $axios.$get('/data/best-mortgage-refinance-lenders.json');

      return {
        products: results.data
      }
    } catch (e) {
      error({statusCode: 404})
    }

  },
  data() {
    return {
      isShowDisclosure: false,
      currentInformationIndex: -1,
    }
  },
  methods: {
    updateTime,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/best-mortgage-refinance-lenders.scss';
</style>
