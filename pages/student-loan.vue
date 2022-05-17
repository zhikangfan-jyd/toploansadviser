<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">
          Best Private Student Loans {{ updateTime().year }}
        </h1>
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
          <div class="introduce-content">
            <p>
              Toploansadviser has outlined the best student loans for multiple
              needs, so you can choose the loan for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Compare Top Student Loan Rates</h2>
        <div class="preface-content">
          <p>
            We compared and reviewed loans from more than 10 student loan
            lenders to find the best rates and loan features.
          </p>
        </div>
      </div>
    </section>
    <section class="product-area">
      <div class="product-container">
        <div class="product-container-top-box">
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
        <div class="product-list-box">
          <div class="product-title-box">
            <div class="title lenders"><span class="text">Lenders</span></div>
            <div class="title score">
              <span class="text">
                Score
                <el-popover
                  placement="bottom"
                  popper-class="popper"
                  trigger="hover"
                  width="320"
                >
                  <span slot="reference" class="iconfont">&#xe669;</span>
                  <div class="content">
                    <p>
                      The ratings and ranking on our website are determined by
                      our editorial team. The scoring mechanism for loan
                      products takes into account more than 10 data points
                      across multiple categories, such as APR, repayment
                      options, customer service, lender transparency, loan
                      eligibility and others.
                    </p>
                  </div>
                </el-popover>
              </span>
            </div>
            <div class="title features">
              <span class="text">Loan Features</span>
            </div>
            <div class="title terms">
              <span class="text">Loan Terms</span>
            </div>
          </div>
          <div class="product-list">
            <div
              v-for="(item, index) in products"
              :key="item.name"
              class="product-item"
            >
              <div v-if="index == 0" class="corner-box">
                <span class="text">Best Overall</span>
              </div>
              <div v-if="index == 0" class="visited-box">
                <span class="iconfont"></span>
                <span class="text"
                  ><strong>354 users</strong> chose this site today</span
                >
              </div>

              <div class="product-item-container">
                <div class="img-score-box">
                  <div class="img-box">
                    <img v-lazy="item.logo" :alt="item.name" />
                  </div>
                  <div class="rate-box">
                    <div class="rate">
                      <span class="score">{{ item.rate.score }}</span>
                      <div v-if="index == 0" class="trustpilot-box">
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
                      <div v-else class="star-box">
                        <el-rate
                          :colors="['#29b674', '#29b674', '#29b674']"
                          :value="computeScore(item.rate.score)"
                          disabled
                        ></el-rate>
                      </div>
                      <nuxt-link
                        v-if="item.review_key != ''"
                        :to="'/reviews/' + item.review_key"
                        class="reviews-link"
                        >Read Review
                      </nuxt-link>
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
                        <span class="iconfont">&#xe604;</span>
                        <div class="text" v-if="item.name === 'College Ave'">
                          Min. Credit Score: min -
                          {{ item.compare.credit_score }}s
                        </div>
                        <div class="text" v-else>
                          Min. Credit Score: {{ item.compare.credit_score }}
                        </div>
                      </dd>
                      <dd>
                        <span class="iconfont">&#xe65a;</span>
                        <div class="text">
                          Fixed rate：{{ item.compare.fixed_rate.min_rate }}% -
                          {{ item.compare.fixed_rate.max_rate }}%
                          <div class="popup">
                            <el-popover
                              v-if="item.name === 'College Ave'"
                              placement="bottom"
                              style="vertical-align: top"
                              trigger="hover"
                              width="325"
                            >
                              <span
                                slot="reference"
                                class="iconfont question-mark"
                                >&#xe669;</span
                              >
                              <div class="content" style="font-size: 12px">
                                <p>
                                  College Ave Student Loans products are made
                                  available through Firstrust Bank, member FDIC,
                                  First Citizens Community Bank, member FDIC, or
                                  M.Y. Safra Bank, FSB, member FDIC. All loans
                                  are subject to individual approval and
                                  adherence to underwriting guidelines. Program
                                  restrictions, other terms, and conditions
                                  apply.
                                </p>
                                <ul style="margin: 5px 0">
                                  <li style="margin: 5px 0">
                                    1. The 0.25% auto-pay interest rate
                                    reduction applies as long as a valid bank
                                    account is designated for required monthly
                                    payments. Variable rates may increase after
                                    consummation.
                                  </li>
                                  <li style="margin: 5px 0">
                                    2. This informational repayment example uses
                                    typical loan terms for a freshman borrower
                                    who selects the Deferred Repayment Option
                                    with a 10-year repayment term, has a $10,000
                                    loan that is disbursed in one disbursement
                                    and a 8.35% fixed Annual Percentage Rate
                                    (“APR”): 120 monthly payments of $179.18
                                    while in the repayment period, for a total
                                    amount of payments of $21,501.54. Loans will
                                    never have a full principal and interest
                                    monthly payment of less than $50. Your
                                    actual rates and repayment terms may vary.
                                  </li>
                                  <li style="margin: 5px 0">
                                    3. As certified by your school and less any
                                    other financial aid you might receive.
                                    Minimum $1,000.
                                  </li>
                                </ul>
                                <p>
                                  Information advertised valid as of 4/19/2022.
                                  Variable interest rates may increase after
                                  consummation. Approved interest rate will
                                  depend on creditworthiness of the
                                  applicant(s), lowest advised rates only
                                  available to the most creditworthy applicants
                                  and require selection of full principal and
                                  interest payments with the shortest available
                                  loan term.
                                </p>
                              </div>
                            </el-popover>
                          </div>
                        </div>
                      </dd>
                      <dd>
                        <span class="iconfont">&#xe65a;</span>
                        <div class="text">
                          Variable rate：{{
                            item.compare.variable_rate.min_rate
                          }}% - {{ item.compare.variable_rate.max_rate }}%
                          <div class="popup">
                            <el-popover
                              v-if="item.name === 'College Ave'"
                              placement="bottom"
                              style="vertical-align: top"
                              trigger="hover"
                              width="325"
                            >
                              <span
                                slot="reference"
                                class="iconfont question-mark"
                                >&#xe669;</span
                              >
                              <div class="content" style="font-size: 12px">
                                <p>
                                  College Ave Student Loans products are made
                                  available through Firstrust Bank, member FDIC,
                                  First Citizens Community Bank, member FDIC, or
                                  M.Y. Safra Bank, FSB, member FDIC. All loans
                                  are subject to individual approval and
                                  adherence to underwriting guidelines. Program
                                  restrictions, other terms, and conditions
                                  apply.
                                </p>
                                <ul style="margin: 5px 0">
                                  <li style="margin: 5px 0">
                                    1. The 0.25% auto-pay interest rate
                                    reduction applies as long as a valid bank
                                    account is designated for required monthly
                                    payments. Variable rates may increase after
                                    consummation.
                                  </li>
                                  <li style="margin: 5px 0">
                                    2. This informational repayment example uses
                                    typical loan terms for a freshman borrower
                                    who selects the Deferred Repayment Option
                                    with a 10-year repayment term, has a $10,000
                                    loan that is disbursed in one disbursement
                                    and a 8.35% fixed Annual Percentage Rate
                                    (“APR”): 120 monthly payments of $179.18
                                    while in the repayment period, for a total
                                    amount of payments of $21,501.54. Loans will
                                    never have a full principal and interest
                                    monthly payment of less than $50. Your
                                    actual rates and repayment terms may vary.
                                  </li>
                                  <li style="margin: 5px 0">
                                    3. As certified by your school and less any
                                    other financial aid you might receive.
                                    Minimum $1,000.
                                  </li>
                                </ul>
                                <p>
                                  Information advertised valid as of 4/19/2022.
                                  Variable interest rates may increase after
                                  consummation. Approved interest rate will
                                  depend on creditworthiness of the
                                  applicant(s), lowest advised rates only
                                  available to the most creditworthy applicants
                                  and require selection of full principal and
                                  interest payments with the shortest available
                                  loan term.
                                </p>
                              </div>
                            </el-popover>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div class="terms-box">
                    <span class="title">Loan Terms</span>
                    <div class="text-box">
                      {{ item.loan_term.min_term }} -
                      {{ item.loan_term.max_term }} years
                      <div class="popup">
                        <el-popover
                          v-if="item.name === 'College Ave'"
                          placement="bottom"
                          style="vertical-align: top"
                          trigger="hover"
                          width="325"
                        >
                          <span slot="reference" class="iconfont question-mark"
                            >&#xe669;</span
                          >
                          <div class="content" style="font-size: 12px">
                            <p>
                              College Ave Student Loans products are made
                              available through Firstrust Bank, member FDIC,
                              First Citizens Community Bank, member FDIC, or
                              M.Y. Safra Bank, FSB, member FDIC. All loans are
                              subject to individual approval and adherence to
                              underwriting guidelines. Program restrictions,
                              other terms, and conditions apply.
                            </p>
                            <ul style="margin: 5px 0">
                              <li style="margin: 5px 0">
                                1. The 0.25% auto-pay interest rate reduction
                                applies as long as a valid bank account is
                                designated for required monthly payments.
                                Variable rates may increase after consummation.
                              </li>
                              <li style="margin: 5px 0">
                                2. This informational repayment example uses
                                typical loan terms for a freshman borrower who
                                selects the Deferred Repayment Option with a
                                10-year repayment term, has a $10,000 loan that
                                is disbursed in one disbursement and a 8.35%
                                fixed Annual Percentage Rate (“APR”): 120
                                monthly payments of $179.18 while in the
                                repayment period, for a total amount of payments
                                of $21,501.54. Loans will never have a full
                                principal and interest monthly payment of less
                                than $50. Your actual rates and repayment terms
                                may vary.
                              </li>
                              <li style="margin: 5px 0">
                                3. As certified by your school and less any
                                other financial aid you might receive. Minimum
                                $1,000.
                              </li>
                            </ul>
                            <p>
                              Information advertised valid as of 4/19/2022.
                              Variable interest rates may increase after
                              consummation. Approved interest rate will depend
                              on creditworthiness of the applicant(s), lowest
                              advised rates only available to the most
                              creditworthy applicants and require selection of
                              full principal and interest payments with the
                              shortest available loan term.
                            </p>
                          </div>
                        </el-popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn-box">
                  <a
                    :href="
                      '/redirect?url=' + item.link + '&gclid=' + item.gclid
                    "
                    class="btn"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    @click="
                      handleTracking({
                        name: item.name,
                        click_time: new Date().getTime(),
                        link: item.link,
                      });
                      tracking(item.name);
                    "
                  >
                    <span class="text">Check My Rate >></span>
                    <!--                      <span class="iconfont">&#xe63c;</span>-->
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

    <section class="question-area">
      <div class="question-container">
        <h2 class="title">FAQ's About Student Loans</h2>
        <div class="question-content">
          <p>
            Before taking a student loan be sure you familiarize yourself with
            all the terms and conditions associated with the loan. To help you
            get started, we’ve compiled some of the most frequently asked
            questions about student loans below.
          </p>
          <h6 class="question-title">
            Are private student loans worth applying for to fund your education
          </h6>
          <p>
            When you choose to attend college, you know that the cost will be
            exorbitantly high. You have to find ways to pay for the costs, such
            as scholarships, grants and loans. If you’ve got the maximum in
            grants and don’t qualify for scholarships, you may still not have
            enough. If this is the case for you, you may want to look at
            <a
              href="/guides/what-are-private-student-loans"
              rel="noopener noreferrer"
              target="_blank"
              >private student loans</a
            >.
          </p>
          <p>
            Private student loans differ from federal student loans, as
            financial institutions and private lenders finance these loans. They
            also use their credit score and creditworthiness to determine if you
            are eligible for a loan. On top of that, the repayment terms are
            less than ideal, and a co-signer may be necessary.
          </p>
          <p>
            Think of private student loans like
            <a href="/personal-loan" rel="noopener noreferrer" target="_blank"
              >personal loans</a
            >. They are there to close the gaps of school costs federal loans do
            not.
          </p>

          <h6 class="question-title">Private student loan qualifications</h6>
          <p>
            Eligibility of a private student loan will depend on your
            creditworthiness and that of your co-signer (if applicable). Each
            lender has a set of eligibility requirements, including credit score
            and minimum income. You may also be asked if you are a citizen of
            the U.S. or a permanent resident. The lender may also require that
            you attend an approved school on their list.
          </p>

          <h6 class="question-title">Is a co-signer necessary?</h6>
          <p>
            Most private student loan lenders will require you to have a
            co-signer. This is especially true if your credit history is
            negligible or non-existent. A co-signer, such as a parent or
            relative, may also help you attain a better interest rate.
          </p>
          <p>
            Some lenders will relieve a co-signer of the debt obligation if you
            have maintained a good loan repayment history. This can be seen in
            as little as one year to as much as four years. However, it’s only
            approved if you can meet their credit and income requirements.
          </p>

          <h6 class="question-title">
            Private student loan application process
          </h6>
          <p>
            Before you attempt
            <a
              href="/guides/how-to-apply-for-a-private-student-loan"
              rel="noopener noreferrer"
              target="_blank"
              >to apply for any private student loan</a
            >, review your credit and learn your credit score. Private student
            loan lenders tend to offer loans to those with a high credit score
            or a demonstrated history of repayment. If your credit is less than
            ideal, find a person whose credit is good and ask them to be a
            co-signer for the loan.
          </p>
          <p>
            Your application will also need certain documents attached to it:
          </p>
          <ul>
            <li>Birthdate, aliress and other identifying information</li>
            <li>Social security number</li>
            <li>Paystubs</li>
            <li>Monthly mortgage or rent receipts</li>
            <li>Proof of assets</li>
          </ul>
          <p>
            You must also fill out the Private Education Loan Applicant
            Self-Certification form the school provides, so the lender will know
            how much the cost will be for you to attend the institute.
          </p>
          <p>
            Make sure to get a reasonable estimate of how much money is
            necessary to attend the university and ask for that amount. If you
            need a little extra for housing and books, go ahead and include it.
            Remember, knowing what you need now will affect how small or big a
            loan you will need.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import FoldTheCard from "../components/FoldTheCard/index";
import { computeScore } from "../utils/index";
import { updateTime } from "../utils/date";
import { seo } from "../utils/seo";
import { tracking } from "../utils/ga-event";
export default {
  head: seo({
    title: "Student Loan 2022 For Bad Credit | Toploansadviser.com",
    description:
      "The toploanadviser.com website helps student loan borrowers with bad credit know all the information about best student loan, including introduction, today interest rate, and so on.",
    keywords:
      "student loan,student loan interest rates,student loan interest,student loans 2022,my student loan,student loans for bad credit,student loan website,no interest student loans",
    url: "https://www.toploansadviser.com/student-loan",
    img: "https://www.toploansadviser.com/data/images/student-loan.webp",
    img_size: {
      width: "551",
      height: "341",
    },
    img_type: "image/webp",
  }),
  components: {
    FoldTheCard,
  },
  async asyncData({ $axios, error, route }) {
    try {
      // 获取所有产品
      let product_results = await $axios.$get(
        "/data/student_loan_product.json"
      );
      // 获取答疑问题的数据
      let question_results = await $axios.$get(
        "/data/student_loan_question.json"
      );

      product_results.data.forEach((ele) => {
        if (ele.name === "College Ave") {
          ele.link = ele.link + "&agg_ref_id=" + route.query["utm_term"];
        }
        ele.gclid = route.query["gclid"];
        ele.link = ele.link + "&utm_content=" + route.query["utm_term"];
      });
      return {
        count: product_results.data.length,
        allProducts: product_results.data,
        questionData: question_results.data,
        overallData: product_results.data.slice(0, 2),
      };
    } catch (e) {
      // console.log(e);
      error({ statusCode: 404 });
    }
  },
  data() {
    return {
      isShowDisclosure: false,
      isNull: true,
      page: 1,
      pageSize: 5,
      products: [],
    };
  },
  methods: {
    computeScore,
    updateTime,
    tracking,
    handleShowDisclosure() {
      this.isShowDisclosure = !this.isShowDisclosure;
    },
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != "function") {
        return;
      }
      window.uba(params);
    },
    // 点击加载更多数据
    loadMore() {
      let data = this.allProducts.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
      this.products = this.products.concat(data);
      this.page++;
      if (this.products.length == this.count) {
        this.isNull = false;
      }
    },
    // 关闭更多
    closeMore() {
      this.isNull = true;
      this.page = 1;
      this.products = [];
      this.loadMore();
    },
  },
  created() {
    this.loadMore();
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/student.scss";
</style>