<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Home Equity Loan</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div :class="{'introduce-content': true, 'show': isShowReview}">
            <p>Most simply put, home equity is the difference between the value of your home and how much of it you own.
              The more you pay down your mortgage, the more your home equity grows. However, mortgage repayment is not
              the only way to get your home equity to improve. If you make a large down payment in the initial stages of
              purchasing the property, your equity in the home will naturally be larger.</p>
            <p>The more equity you have in a property, the more money you can borrow against it. That’s where home
              equity loans come into the game. A larger equity in a house allows you to access more cash when needed.
              The reason why home equity loans are so attractive is because they often have lower interest rates. Your
              property serves as a security for the lender, which is why they’re able to offer you a lower interest
              rate. In other words, if you were to stop making your payments toward reducing the home equity debt, your
              property would be taken as a collateral. </p>
            <p>However, that’s just an overview of how home equity loans work. Naturally, you’ll find that different
              lenders offer different interest rates as well as repayment periods and eligibility requirements. That’s
              right, you’ll have to meet a certain criteria to qualify for a home equity loan depending on the lender
              you choose to work with. While home equity loans may be a good option for those who want to save money on
              interest rates, you need to do your research first before signing any papers. Here’s a comparison of the
              best home equity loans out there.</p>
            <span :class="{'iconfont': true, 'show': isShowReview}" @click="handleShowReview">&#xe600;</span>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Best Home Equity Loan Comparison</h2>
        <div class="preface-content">
          <p>While several loan providers in the market offer mortgages at competitive rates, we will look at those
            lenders that are the best in their category. Let's start!</p>

        </div>
      </div>
    </section>
    <section class="product-include-area">

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
                  <p class="product-slogan">{{ product.slogan }}</p>
                  <ul class="product-advantage-list">

                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Min. Credit Score: {{ product.credit_score }}</p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">APR: {{ product.apr }}</p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">Loan Amount: {{ product.amount }}</p>
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
          <p class="text">Check your home equity loan interest rates</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Right Now>>
          </a>
        </div>

      </div>

    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQ About Home Equity Loans </h2>
        <div class="question-content">

          <p>As we’ve explained at the beginning of this article, a home equity loan is essentially a loan borrowed
            against your ownership in a property. Equity stands for how much of the property you actually own,
            financially speaking. To calculate your equity in a property, divide the market value of the home with the
            amount you owe on your mortgage. Now, equity loans operate as a second mortgage, which means that taking out
            this loan would put your home at risk of foreclosure in case you fail to make the agreed payments.</p>
          <p>It’s important to address that home equity loans are not the same thing as a <a href="/best-helco-loan" target="_blank" rel="noopener noreferrer">home equity line of credit</a>. In
            short, home equity loans provide a one-time amount at a fixed interest rate. A HELOC on the other hand is a
            revolving source of funds that can operate like a credit card - you can access the funds whenever you need
            them. Equity loans are offered by banks and other financial institutions, which means you can choose from
            many types of home equity products out there. </p>

          <h6 class="question-title">Pros and cons of home equity loan</h6>
          <dl>
            <dt>Here are some of the benefits of leveraging home equity loans:</dt>
            <dd>Home equity loans come at a fixed interest rate, meaning you’ll know upfront how much money you’ll have
              to pay in interest. This makes home equity loans a safe option regardless if the interest rates rise or
              fall.
            </dd>
            <dd>Home equity loans typically have lower interest rates compared to personal loans because you have a
              property that serves as collateral.
            </dd>
            <dd>The interest payments on your home equity loan may be tax deductible (depending on whether you qualify
              to deduct your payments).
            </dd>
            <dd>You will receive the loan amount in a lump sum, which can help you cover large expenses (depending on
              your needs).
            </dd>
          </dl>
          <dl>
            <dt>As much as home equity loans may seem like a good idea, there are always downsides to consider. Here are
              a few:
            </dt>
            <dd>You’ll have to pay the interest rate on the entire loan amount, regardless of how you choose to use the
              money (as a lump sum or in smaller increments).

            </dd>
            <dd>Home equity loans offer less flexibility compared to HELOCs.</dd>
            <dd>By taking out a home equity loan, you will have two mortgages to pay off (make sure you can afford
              it).
            </dd>
            <dd>If you fall behind on <a href="/home-equity-calculator" target="_blank" rel="noopener noreferrer">your monthly payments</a>, you’ll risk losing the property.</dd>
          </dl>
          <h6 class="question-title">What Are the Home Equity Loan Alternatives </h6>
          <p>Before you opt for a home equity loan or a HELOC as your preferred way of borrowing money, make sure to
            familiarize yourself with the alternatives out there. If home equity loans are not a good option for you,
            consider one of the following:</p>
          <p>1. Cash-out refinancing: This method refers to taking out a new home loan for more money than the amount
            you owe on the original mortgage. This allows you to repay the first mortgage and keep the difference so you
            don’t have two mortgages on your shoulders.</p>
          <p>2. Reverse mortgage: A reverse mortgage is a type of mortgage available to homeowners of 62 or more years
            of age. This mortgage allows them to convert home equity into cash in order to supplement the retirement
            income.</p>
          <p>3. <a href="/personal-loan" target="_blank" rel="noopener noreferrer">Personal loan</a>: A personal loan is pretty easy to get if you have a good credit score and it can be used
            for anything. However, keep in mind that personal loans have much higher interest rates compared to home
            equity loans.</p>
          <p>4. <a href="/best-consolidation-loans" target="_blank" rel="noopener noreferrer">Debt consolidation loans</a>: With a debt consolidation loan you can combine multiple high-interest debts
            that you owe and turn them into one new loan to reduce your interest charges and make the repayment process
            a little easier.</p>
          <h6 class="question-title">How to Choose the Best Home Equity Loan</h6>
          <p>When looking for home equity loans, your goal should be to find the lowest interest rate possible in order
            to save some money in the long run. Start by looking into the changing interest rates and how they’re
            behaving based on the current economic conditions. Monitor the trends to see what you can expect later down
            the road. Don’t hesitate to consult with a financial advisor or the bank to find out whether your variable
            interest rates will go up or down in a few years.</p>
          <p>Another thing that can help you get the best out of home equity loans is improving your credit score ahead
            of time. The better your credit score, the better interest rates you’ll score, meaning you’ll be paying less
            money in the long run. You can improve your credit score by paying bills on time, paying down any existing
            debris, and avoiding opening too many credit cards. Last but not least, make sure to look at all of your
            options before settling down for one lender. In many cases you’ll be able to find better rates if you just
            take the time to research multiple lenders and get in touch with them to discuss your particular
            situation.</p>
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
            guidelines of home equity loan providers. It is crucial to know the type of loan one can afford to pay and
            which
            lender best fits them.</p>
        </div>

      </div>
      <div class="more-from-toploansadviser-container">
        <h3 class="title">Read More »</h3>
        <ul class="list">
          <li>
            <span class="circle"></span>
            <a class="link text" href="/home-equity-calculator" rel="noopener noreferrer">Home Equity Calculator</a>
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
        <p class="text">Check your Approval Odds for a home equity loan</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
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
      let results = await $axios.$get('/data/best-home-equity-loan.json');

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
      isShowReview: false,
      currentInformationIndex: -1,
    }
  },
  methods: {
    updateTime,
    handleShowReview() {
      this.isShowReview = !this.isShowReview;
    },
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/best-home-equity-loan.scss';
</style>
