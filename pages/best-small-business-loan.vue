<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Best Small Business Loans</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img
              alt=""
              class="author-image"
              src="@/assets/img/Kimberly-Rotter.png"
            />
            <p class="author-desc">
              Written by <span class="author-name">Kimberly Rotter</span>
            </p>
            <p class="updated">
              <span class="iconfont">&#xe645;</span>
              <span
                >Last updated: {{ updateTime().month.short }}
                {{ updateTime().year }}</span
              >
            </p>
          </div>
          <div :class="{ 'introduce-content': true, show: isShowReview }">
            <p>
              Entrepreneurs who need money to foster, develop,
              <strong
                >maintain and grow their companies need small business
                loans</strong
              >
              that give them the cash to do just these things. In the past,
              current and prospective business owners needed to visit a bank to
              attain the loan. However, with the Internet’s advent, small
              business owners can fill out and submit their paperwork online to
              quicken the application and approval process.
            </p>
            <p>
              According to the U.S. Small Business Administration (SBA), there
              are about 33 million small businesses that comprise a vast amount
              of the economic activity in the U.S. Every small business is
              different, but they share one commonality—they must have financing
              to begin and maintain operations.
            </p>
            <p>
              Toploansadviser has outlined the best small business loans for
              various needs so that
              <a href="/personal-loan" rel="noopener noreferrer" target="_blank"
                >you can choose the loan for your specific situation </a
              >.
            </p>
            <span
              :class="{ iconfont: true, show: isShowReview }"
              @click="handleShowReview"
              >&#xe600;</span
            >
          </div>
        </div>
      </div>
    </section>
    <!--    <section class="preface-area">-->
    <!--      <div class="preface-container">-->
    <!--        <h2 class="title">Best Small Business Loans</h2>-->
    <!--        <div class="preface-content">-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <section class="product-include-area">
      <div class="product-include-container">
        <div class="product-include-container-top">
          <div class="disclosure">
            <span class="title" @click="handleShowDisclosure"
              >Advertising Disclosure</span
            >
            <div :class="{ disclosure_content: true, show: isShowDisclosure }">
              The information shared through this website is based on our team’s
              personal judgements and views. We use our own comparisons to
              assign values, which are not intended to reflect a certain
              benchmark of precision. To keep our website free for use, we
              accept referral fees from various service providers, which have
              the potential to influence their respective appointed scores. A
              third party’s participation on toploansadviser.com is not an
              indication of endorsement. The information and vendors which
              appear on this site is subject to change at any time.The site does
              not include all companies offering loan products or all available
              loan offers.
            </div>
          </div>
        </div>

        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-include-item"
        >
          <div class="product-include-title">
            <img
              v-if="index === 0"
              alt=""
              class="medal"
              src="@/assets/img/medal-icon.png"
            />
            <span v-else class="circle">{{ index + 1 }}</span>
            <h3 class="title">
              {{ product.name }}-<span style="color: #cb9600">{{
                product.slogan
              }}</span>
            </h3>
          </div>
          <div class="product-include-card">
            <div v-if="index === 0" class="tips">
              <span class="g">503 users</span> chose this site today
            </div>
            <div class="product-include-card-info">
              <div class="product-include-card-info-left">
                <div class="logo-box">
                  <img :alt="product.name" :src="product.logo" class="logo" />
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
                      <p class="text">
                        Max Loan Amount: ${{ product.max_loan_amount }}
                      </p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">
                        Min.Credit Score: {{ product.min_credit_score }}
                      </p>
                    </li>
                    <li>
                      <span class="iconfont">&#xe604;</span>
                      <p class="text">APR: {{ product.apr }}</p>
                    </li>
                  </ul>
                </div>
                <div class="btn-box">
                  <a
                    :href="product.link"
                    class="btn"
                    rel="noreferrer noopener nofollow"
                    >View Rates >></a
                  >
                </div>
              </div>
            </div>
            <div
              class="product-include-card-content"
              v-html="product.description"
            ></div>
          </div>
        </div>
        <div class="website-btn-container">
          <p class="text">Check your small business loan interest rates</p>
          <a class="btn" href="" rel="noopener noreferrer nofollow">
            Right Now>>
          </a>
        </div>
      </div>
    </section>
    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQ About Small Business Loan</h2>
        <div class="question-content">
          <h6 class="question-title">
            What Is Needed To Secure A Small Business Loan?
          </h6>
          <dl>
            <dt style="font-weight: normal">
              Upon realizing you have can repay a small business loan, you need
              to get together the paperwork for the loan application. This
              paperwork includes:
            </dt>
            <dd>2–3 years’ worth of business and personal tax returns</dd>
            <dd>Most recent profit & loss statement</dd>
            <dd>Most recent balance sheet</dd>
            <dd>Previous bank statements</dd>
            <dd>Legal filings that relate to ownership</dd>
            <dd>Business plan</dd>
            <dd>Business license</dd>
            <dd>Information about current debts</dd>
          </dl>
          <h6 class="question-title">
            Six Factors Small Business Loan Lenders Use to Determine Loan
            Eligibility
          </h6>
          <p>
            Prospective small business loan lenders will ask you for a plethora
            of information to determine your eligibility. They will consider six
            key factors to determine if you’ll be reliable enough to repay the
            loan. What are these factors?
          </p>
          <ul>
            <li>
              <strong>Cash Flow Projection</strong>
              <p>
                A cash flow projection is documentation of what money is coming
                in and going out of the business. Lenders want to know if a
                borrower has an in-depth understanding of the business’s
                financial operations.
              </p>
            </li>
            <li>
              <strong>Collateral</strong>
              <p>
                Collateral is the asset lenders will take ownership of if you
                fail to make your payments. These can include your business
                equipment, company building, accounts receivable, etc. While
                it’s not advisable, some small business owners will put up their
                personal assets as collateral.
              </p>
            </li>
            <li>
              <strong>Credit Score</strong>
              <p>
                Lenders look at your credit score to determine how reliable you
                are at paying your debt. The majority of lenders want a credit
                score of at least 600 before approving a small business loan
                application. However,
                <a
                  href="/guides/how-to-get-a-loan-with-bad-credit"
                  rel="noopener noreferrer"
                  target="_blank"
                  >lenders will provide loans to those with lower credit
                  scores</a
                >. Remember, though, the higher your credit score, the more
                favorable the loan terms.
              </p>
            </li>
            <li>
              <strong>Debt-to-Equity Ratio</strong>
              <p>
                How is the debt-to-equity ratio measured? It divides the
                company’s debt by the shareholder’s equity. With this
                measurement, a lender can determine if you can feasibly pay on
                the new debt you take along with your current debt. A high D/E
                is typical in some industries, but a low D/E ratio is
                preferable.
              </p>
            </li>
            <li>
              <strong
                >Length of Time That the Business Has Been Operating</strong
              >
              <p>
                Lenders are much more likely to approve a loan for businesses
                with an established business history because the company has a
                proven record of making money. The same cannot be said for a
                business that’s just started.
              </p>
            </li>
            <li>
              <strong>Working Capital</strong>
              <p>
                Working capital is the amount of money you have available to
                remain in operation. You can learn how much working capital you
                have by subtracting your debt liabilities from your currently
                held, easily cash-convertible assets.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="conclusion-area">
      <div class="conclusion-container">
        <h2 class="title">Conclusion</h2>
        <div class="conclusion-content">
          <p>
            Before choosing which type of loan to go with, it is vital to have
            knowledge of the lenders that are in the industry offering loan
            product. Due diligence is needed to know about the loans offered and
            the expenses attached to them.
          </p>

          <p>
            Borrowers also should keep a check on their credit score to be aware
            that they follow within the minimum guidelines of home equity loan
            providers. It is crucial to know the type of loan one can afford to
            pay and which lender best fits them.
          </p>
        </div>
      </div>

      <div class="website-btn-container">
        <p class="text">Check your Approval Odds for a small business loan</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>
    </section>
    <section class="breadcrumb-area">
      <ul class="breadcrumb-navigation">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span class="iconfont">&#xe606;</span>
          </a>
          <span class="icon">&gt;</span>
        </li>
        <li>
          <a
            href="/best-personal-loans"
            target="_blank"
            rel="noopener noreferrer"
            >Personal Loan</a
          >
          <span class="icon">&gt;</span>
        </li>
        <li>
          <a
            href="/best-small-business-loan"
            target="_blank"
            rel="noopener noreferrer"
            >Best Small Business Loan</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import { seo } from "../utils/seo";
import { updateTime } from "../utils/date";
import NewStar from "@/components/NewStar/index.vue";

export default {
  head: seo({
    title: "Best Small Business Loans | Toploansadviser.com",
    description:
      "No matter who you are, men, women or minorities. If you want to start or expand your own business without sufficient fund or good credit, you can choose Small Business Loan to help you to achieve it. ",
    keywords:
      "small business loan,government small business loans,small business loans for women,small business start up loans,small business administration loans,small business loans startup,small business finance,new small business loans,business loans for small business,small business lenders,minority business loans,small business loans for minorities",
    url: "https://www.toploansadviser.com/small-business-loan",
    img: "https://www.toploansadviser.com/data/images/personal-loan.webp",
    img_size: {
      width: "325",
      height: "295",
    },
    img_type: "image/webp",
  }),
  components: {
    NewStar,
  },
  async asyncData({ $axios, error }) {
    try {
      let results = await $axios.$get("/data/small-business-loan.json");

      return {
        products: results.data,
      };
    } catch (e) {
      error({ statusCode: 404 });
    }
  },
  data() {
    return {
      isShowDisclosure: false,
      isShowReview: false,
      currentInformationIndex: -1,
    };
  },
  methods: {
    updateTime,
    handleShowReview() {
      this.isShowReview = !this.isShowReview;
    },
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/small-business-loan.scss";
</style>
