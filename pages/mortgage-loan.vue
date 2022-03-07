<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="slogan">Make it easy to find affordable and responsible mortgages in the US.</div>
      <div class="banner-container">
        <h1 class="title">Compare Best Mortgage Lenders {{ updateTime().year }}</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div :class="{'introduce-content': true, 'show': isShowReview}">
            <p>Lower interest rates mean that you can save real money on your mortgage. Compare our top-tier providers
              and find the best purchase and refinance rates for you.</p>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Best Mortgage Loan Interest Rates</h2>
        <div class="preface-content">
          <p>While several loan providers in the market offer mortgages at competitive rates, we will look at those
            lenders that are the best in their category. Let's start!</p>

        </div>
      </div>
    </section>

    <section class="product-area">
      <div class="product-container">
        <div class="product-container-top-box">
          <div class="disclosure">
            <span class="title" @click="showDisclosure">Advertising Disclosure</span>
            <div :class="{'disclosure_content': true, 'show': isShow}">The information shared through this website is
              based on our team’s
              personal judgements and views. We use
              our own comparisons to assign values, which are not intended to reflect a certain benchmark of
              precision. To keep our website free for use, we accept referral fees from various service providers,
              which have the potential to influence their respective appointed scores. A third party’s participation
              on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on
              this site is subject to change at any time.The site does not include all companies offering loan
              products or all available loan offers.
            </div>
          </div>
        </div>
        <div class="product-list-box">
          <div class="product-title-box">
            <div class="title lenders">
              <span class="text">Mortgage Lenders</span>
            </div>
            <div class="title score">
                <span class="text">
                  Score
                  <el-popover
                    placement="bottom"
                    popper-class="popper"
                    trigger="hover"
                    width="290"
                  >
                    <span slot="reference" class="iconfont">&#xe669;</span>
                    <div class="content" style="padding: 10px">
                      <div class="content-item" style="margin-bottom: 20px">
                        <h6
                          class="content-title"
                          style="
                            font-size: 14px;
                            font-family: 'Poppins-SemiBold';
                            margin-bottom: 5px;
                          "
                        >
                          TrustPilot Score
                        </h6>
                        <p
                          class="desc"
                          style="font-size: 14px; margin-bottom: 5px"
                        >
                          Based on Real User Reviews
                        </p>
                        <div
                          class="bar-container"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                          "
                        >
                          <div
                            class="bar-box"
                            style="
                              width: 240px;
                              height: 10px;
                              background-color: #d3d6d6;
                              border-radius: 7px;
                              overflow: hidden;
                            "
                          >
                            <div
                              class="bar"
                              style="
                                width: 30%;
                                height: 100%;
                                background-color: #29b674;
                                border-radius: 7px;
                              "
                            ></div>
                          </div>
                          <span class="text">30%</span>
                        </div>
                      </div>
                      <div class="content-item" style="margin-bottom: 15px">
                        <h6
                          class="content-title"
                          style="
                            font-size: 14px;
                            font-family: 'Poppins-SemiBold';
                            margin-bottom: 5px;
                          "
                        >
                          Click Trend
                        </h6>
                        <p
                          class="desc"
                          style="font-size: 14px; margin-bottom: 5px"
                        >
                          Based on the past 7 days
                        </p>
                        <div
                          class="bar-container"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                          "
                        >
                          <div
                            class="bar-box"
                            style="
                              width: 240px;
                              height: 10px;
                              background-color: #d3d6d6;
                              border-radius: 7px;
                              overflow: hidden;
                            "
                          >
                            <div
                              class="bar"
                              style="
                                width: 40%;
                                height: 100%;
                                background-color: #ffd044;
                                border-radius: 7px;
                              "
                            ></div>
                          </div>
                          <span class="text">40%</span>
                        </div>
                      </div>
                      <div class="content-item">
                        <h6
                          class="content-title"
                          style="
                            font-size: 14px;
                            font-family: 'Poppins-SemiBold';
                            margin-bottom: 5px;
                          "
                        >
                          Products And Features
                        </h6>
                        <p
                          class="desc"
                          style="font-size: 14px; margin-bottom: 5px"
                        >
                          Based On our editorial reviews
                        </p>
                        <div
                          class="bar-container"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                          "
                        >
                          <div
                            class="bar-box"
                            style="
                              width: 240px;
                              height: 10px;
                              background-color: #d3d6d6;
                              border-radius: 7px;
                              overflow: hidden;
                            "
                          >
                            <div
                              class="bar"
                              style="
                                width: 30%;
                                height: 100%;
                                background-color: #1564bf;
                                border-radius: 7px;
                              "
                            ></div>
                          </div>
                          <span class="text">30%</span>
                        </div>
                      </div>
                    </div>
                  </el-popover>
                </span>
            </div>
            <div class="title features">
              <span class="text">Loan Features</span>
            </div>
            <div class="title terms"><span class="text"></span></div>
          </div>
          <div v-if="!loading" class="product-list">
            <div
              v-for="(item, index) in products"
              :key="item.name"
              class="product-item"
            >
              <div v-if="index == 0" class="corner-box">
                <span class="text">{{ cornerText }}</span>
              </div>
              <div v-if="index == 0" class="visited-box">
                <span class="iconfont"></span>
                <span class="text"
                ><strong>{{ choseNum }} users</strong> chose this site
                    today</span
                >
              </div>

              <div class="product-item-container">
                <div class="img-score-box">
                  <div class="img-box">
                    <img v-lazy="item.logo" :alt="item.name"/>
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
                        <p class="text">{{ item.slogan }}</p>
                      </dd>
                      <dd v-for="(it, id) in item.meritList" :key="id">
                        <span class="iconfont">&#xe604;</span>
                        <p class="text">{{ it.text }}</p>
                      </dd>
                    </dl>
                    <div class="details-box" @click="handleShow(index)">
                      <span class="text">View detail</span>
                      <span class="iconfont">&#xe600;</span>
                    </div>
                    <div
                      class="phone-details-box"
                      @click="handlePhoneShow(index)"
                    >
                      <span class="text">View detail</span>
                      <span class="iconfont">&#xe600;</span>
                    </div>
                  </div>
                </div>
                <div class="phone-key-facts-container">
                  <span class="title">Key Facts</span>
                  <ul class="phone-key-facts-list">
                    <li v-if="item.key_facts.mortgage_types != ''">
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        Mortgage types: {{ item.key_facts.mortgage_types }}.
                      </p>
                    </li>
                    <li v-if="item.key_facts.credit_score != ''">
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        Min. Credit Score:
                        <span>{{ item.key_facts.credit_score }}</span>
                      </p>
                    </li>
                    <li v-if="item.key_facts.apr != ''">
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        APR <span>{{ item.key_facts.apr }}</span>
                      </p>
                    </li>
                    <li v-if="item.key_facts.NMLS != ''">
                      <span class="iconfont">&#xe65a;</span>
                      <p class="text">
                        NMLS#: <span>{{ item.key_facts.NMLS }}</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="btn-box">
                  <a
                    :href="'/redirect/mortgage-loan/'+item.name+'?category='+category + '&gclid=' + item.gclid"
                    class="btn"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    @click="
                        handleTracking({
                          name: item.name,
                          click_time: new Date().getTime(),
                          link: item.link,
                        })
                      "
                  >
                    <span class="text">View Rates >></span>
                    <!--                      <span class="iconfont">&#xe63c;</span>-->
                  </a>
                </div>
              </div>
              <div class="product-content-container">
                <div class="product-content-container-box">
                  <div class="pros-cons-box">
                    <div class="pros-box">
                      <span class="title">Pros:</span>
                      <ul class="pros-list">
                        <li v-for="(it, id) in item.pros" :key="id">
                          <span class="circle">●</span>
                          <p class="text">{{ it.text }}</p>
                        </li>
                      </ul>
                    </div>
                    <div class="cons-box">
                      <span class="title">Cons:</span>
                      <ul class="cons-list">
                        <li v-for="(it, id) in item.cons" :key="id">
                          <span class="circle">●</span>
                          <p class="text">{{ it.text }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="review-key_facts-box">
                    <div class="key-facts-box">
                      <span class="title">Key Facts</span>
                      <ul class="key-facts-list">
                        <li v-if="item.key_facts.mortgage_types != ''">
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Mortgage types:
                            {{ item.key_facts.mortgage_types }}.
                          </p>
                        </li>
                        <li v-if="item.key_facts.credit_score != ''">
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            Min. Credit Score:
                            <span>{{ item.key_facts.credit_score }}</span>
                          </p>
                        </li>
                        <li v-if="item.key_facts.apr != ''">
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            APR <span>{{ item.key_facts.apr }}</span>
                          </p>
                        </li>
                        <li v-if="item.key_facts.NMLS != ''">
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">
                            NMLS#: <span>{{ item.key_facts.NMLS }}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div class="review-link-box">
                      <a
                        :href="'/redirect/mortgage-loan/'+item.name+'?category='+category + '&gclid=' + item.gclid"
                        class="review-btn"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span class="text">Check My Rate</span>
                        <span class="iconfont">&#xe63c;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="loading-box"
            style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
          >
            <img
              alt="loading..."
              src="~/assets/img/img-loading.gif"
              style="height: 200px"
            />
          </div>
        </div>

        <!--        <div v-if="count > pageSize" class="more-box">-->
        <!--          <button v-if="isNull" class="btn" @click="loadMore">-->
        <!--            <span class="text">SEE MORE</span>-->
        <!--            <span class="iconfont">&#xe600;</span>-->
        <!--          </button>-->
        <!--          <button v-else class="btn close" @click="closeMore">-->
        <!--            <span class="text">COLLAPSE</span>-->
        <!--            <span class="iconfont">&#xe600;</span>-->
        <!--          </button>-->
        <!--        </div>-->
      </div>
    </section>


    <section class="faq-area">

      <div class="faq-container">

        <h2 class="title">
          FAQ's About Mortgage Loans
        </h2>
        <div class="question-content">
          <p>
            Before taking a mortgage loan be sure you familiarize yourself
            with all the terms and conditions associated with the loan. To
            help you get started, we’ve compiled some of the most frequently
            asked questions about mortgage loans below.
          </p>

          <h6 class="question-title">How Does the Mortgage Loan Process Work?</h6>
          <p>Whether you are buying a home or refinancing one, the mortgage process is basically similar to one
            another. Here is an introductory look at what happens when you’re mortgaging/refinancing a home:</p>
          <ul>
            <li><strong>Turn In Mortgage Application</strong> – The majority of home lenders provide an online
              application process. Fill it out, submit the form along with pertinent documentation.
            </li>
            <li><strong>Wait To Receive Loan Estimate</strong> – A lender is required to give you an estimate within
              three business days of a submitted application. The document needs to entail three things – monthly
              mortgage rate, estimated interest rate and closing costs.
            </li>
            <li><strong>Set Up A Home Inspection</strong> – Be sure to communicate with the seller about dates and
              times for a home inspection. An inspection will help uncover potential problems.
            </li>
            <li><strong>Get A Home Appraisal</strong> – Ask your lender to provide you with an appraiser to determine
              the home’s value. You will need to pay for this appraisal.
            </li>
            <li><strong>Buy Homeowners Insurance</strong> – This is a necessity before a bank approves a loan.</li>
            <li><strong>Wait Until Underwriting Is Completed</strong> – You’ll need to wait for the bank to prepare
              the loan documents, and it can take some time.
            </li>
            <li><strong>Begin Underwriting Process</strong> – Underwriters, using manual or automated systems, can
              take days or weeks to approve or decline loans.
            </li>
            <li><strong>Review Closing Disclosure Documents</strong> – Within three business days, the loan documents
              will arrive. Be sure to review the mortgage documents before signing. You want to compare the disclosure
              to the lender’s recent loan estimate to ensure no significant changes.
            </li>
            <li>
              Close On The Loan – At this point, all parties involved in the mortgage transaction will need to sign
              the pertinent documents. Afterward, you pay the closing costs and down payment.
            </li>

          </ul>
          <h6 class="question-title">Understanding The Mortgage Interest and How It’s Calculated</h6>
          <p>The mortgage interest rate is the yearly cost of financing your home, noted in a percentage of the loan
            amount. For example, a 2.75% interest rate on your mortgage means an additional 2.75% on the remaining
            balance is added. </p>
          <p>There are two types of interest rates: fixed and adjustable.</p>
          <p><strong>Fixed-Rate</strong></p>
          <p>With a fixed-rate mortgage, the interest rate stays the same throughout the life of the loan. This means
            the monthly mortgage payment also remains the same. You don’t have to worry about increasing costs, but
            you don’t benefit unless you choose to refinance if the market drops.</p>
          <p>Fixed-rate mortgages tend to have a higher initial monthly payment because the lender is unable to raise
            the interest rate when the market dictates it.</p>
          <p><strong>Adjustable-Rate</strong></p>
          <p>If you have an adjustable-rate mortgage, the interest rate is tied to the market rates. It’s subjected to
            the market’s movements, using a benchmark rate (i.e., prime rate). When the benchmark rate increases, your
            monthly mortgage payment will increase. When it falls, your mortgage payment will also decline.</p>
          <p>This kind of rate is only ideal when you’re going to sell or refinance your home before an increase in
            rates or if you believe there were be a decline in the market.</p>
          <p>How do you know which one is best for you? It will depend on three things:</p>
          <ul>
            <li>Market conditions</li>
            <li>Your individual finances</li>
            <li>How long you intend to maintain the mortgage</li>
          </ul>
          <p>When it comes to determining your mortgage interest rate, there are several factors that lenders will
            consider of you, the home, the loan, and current economic conditions. Such factors are:</p>

          <ul>
            <li>Property type and use</li>
            <li>Your credit history</li>
            <li>Home price</li>
            <li>Down payment</li>
            <li>Loan term</li>
            <li>
              Market rates
            </li>
            <li>
              Interest rate type
            </li>
          </ul>
          <p>When looking at the different offers, it’s important to consider the annual percentage rate (APR) and
            interest rate percentage. The interest rate calculates how much you’re borrowing every year. The APR
            denotes the interest rate as well as the origination fees, discount points and closing costs</p>
          <h6 class="question-title">8 Steps To Applying For A Home Mortgage</h6>
          <p>Be sure to begin the mortgage pre-approval process before you look at homes. This is important for three
            reasons:</p>
          <ul>
            <li>You’ll know how much you are approved for and can look for homes in that price range.</li>
            <li>Many sellers required buyers to be pre-approved.</li>
            <li>Pre-approval means you can submit an offer as soon you find the home you want to buy.</li>
          </ul>
          <p>From that point, here is what you’ll need to do:</p>
          <ul>
            <li><strong>Analyze Your Credit History</strong> – Look at your credit report and its history before
              applying for a mortgage. If there are any mistakes (that affect the score), address them immediately
              with all three credit bureaus – TransUnion, Experian and Equifax. If your score is low, make sure to
              improve them first.
            </li>
            <li><strong>Prepare Documents</strong> – The bank will request pay stubs, bank account statements, and tax
              returns to be submitted with the loan application.
            </li>
            <li><strong>Compare Shop With Different Lenders</strong> – If you comparison shop in a 45-day window, your
              credit score will suffer only slightly.
            </li>
            <li>
              <strong>Review Offers</strong> – Any lender you applied with will give you a loan estimate that includes
              monthly payment, interest rate, closing costs and other important information.
            </li>
            <li><strong>Pick Your Lender</strong> – Once you’ve reviewed each loan term, pick the lender best for you.
            </li>
            <li><strong>Ensure Quick Responses To Any Requests Made</strong> – When your loan goes through the
              processing and underwriting, the lender may request something. Be sure to respond as quickly as you can
              to move this process along faster.
            </li>
            <li><strong>Review Closing Disclosure</strong> – The lender is required to give you a closing disclosure,
              showing you the final mortgage costs, the interest rate, fees, etc., within three business days of the
              closing date scheduled. Look at the closing disclosure and the loan estimate they initially provided to
              determine if and why fees changed.
            </li>
            <li><strong>Close On The Home</strong> – At the closing, you’ll sign a plethora of documents to ensure the
              home reverts to your possessions. You will also be required to pay the down payment and up to 5% closing
              costs.
            </li>
          </ul>
          <h6 class="question-title">How To Find The Best Possible Mortgage Lender</h6>
          <p>When looking at each mortgage company, there are four factors to consider:</p>
          <ul>
            <li><strong>Interest Rate</strong> – Interest will vary by product and lender; make sure you’re comparison
              shopping to find the best possible deal
            </li>
            <li><strong>Closing Costs</strong> – Closing costs will include the application, loan origination and
              appraisal fees, so even though a lender offers a low rate compared to others, the mortgage costs may not
              make it the best. Use the APR to compare the lenders’ offers.
            </li>
            <li><strong>Product Offerings</strong> – Look for a state-licensed lender that offers great options for
              you – be it a VA loan, 30-year-fixed rate loan, etc.
            </li>
            <li><strong>Customer Service Reviews</strong> – Read reviews and feedback to learn more about the lender.
              You want lenders who treat their customers with respect as well as offer a good loan rate
            </li>
          </ul>
          <h6 class="question-title">What Kind Of Mortgage Will Suit You?</h6>
          <p>Your individual situation – plans, preferences and finances – will dictate what the best mortgage is. The
            most common kind of mortgages are:</p>
          <p><strong>Adjustable-Rate Mortgages</strong></p>
          <p>Monthly payments and interest rates are affected by the market, which means you could pay more or less
            during the life of the loan. Early adjustable-rate mortgages are low, but rates can spike unexpectedly
            (leaving some borrowers unable to pay).</p>
          <p><strong>Balloon Mortgages</strong></p>
          <p>These are loans with short-term interest payments of five to 10 years, which then require the homeowner
            to make a lump sum payment. This may be ideal for individuals who are going to sell or refinance the home
            before the impending balloon payment is due.</p>
          <p><strong>Conforming Loans</strong></p>
          <p>The loans are subjected to the limits and guidelines as laid out by Fannie Mae and Freddie Mac.</p>
          <p><strong>Conventional Mortgages</strong></p>
          <p>These mortgages originate from private lenders and are not federally backed by the government. To
            qualify, private lenders want a minimum 620 credit score, a low debt-to-income ratio and a minimum 3% down
            payment. Any down payment less than 20% must include private mortgage insurance.</p>
          <p><strong>Fixed-Rate Mortgages</strong></p>
          <p>Loans with a fixed rate mean payments and interest rate remain the same (great for budgeters). However,
            if the rate falls, you will need to refinance if you want to benefit financially. </p>
          <p><strong>Government-Backed Loans</strong></p>
          <p>These are loans from the Department of Agriculture, Department of Veterans Affairs and Federal Housing
            Administration. If you are unable to get a convention loan, you could attain a government-backed loan.</p>
          <ul>
            <li><strong>FHA</strong> – The majority of FHA-backed lenders want a minimum of 580 in credit score and a
              3.5% down payment. However, you could be approved if you agree to pay a 10% down payment even if your
              credit score is 500 to 579.
            </li>
            <li><strong>VA</strong> – The VA has no requirements about down payments or credit score minimums, but a
              lender will do an in-depth analysis of your financial profile. A lender will need to see the Certificate
              of Eligibility (COE) that shows you are eligible for a VA loan.
            </li>
            <li><strong>USDA</strong> – The majority of lenders who do USDA loans do not require money down but a
              minimum of 640 credit score. A home must be located in a permissible rural area, and you have to meet
              specific income requirements.
            </li>
          </ul>
          <p><strong>Nonconforming Loans</strong></p>
          <p>These are jumbo or government-backed loans that don’t meet the criteria set forth by Fannie Mae or
            Freddie Mac. Jumbo loans surpass the limits of a conforming loan and have stringent qualifications for
            eligibility due to lenders’ risk.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {computeScore} from "../utils/index";
import {updateTime} from "../utils/date";
import {seo} from '../utils/seo'

export default {
  head: seo({
    title: "Mortgage Loans Online For Bad Credit | Toploanadviser.com",
    description: "Mortgage Loan is a type of loan that is secured by a home and provided by a mortgage lenderor a bank. There are many options for borrower with bad credit who can apply online instantly.",
    keywords: "mortgage loan,your mortgage online,mortgage,mortgage loans near me,mortgage loans for bad credit,mortgage rates",

    url: 'https://www.toploansadviser.com/mortgage-loan',
    img: 'https://www.toploansadviser.com/data/images/mortgage-loan.webp',
    img_size: {
      width: '522',
      height: '360'
    },
    img_type: 'image/webp',
  }),
  data() {
    return {
      category: 'purchase',
      cornerText: "Low Rates",
      choseNum: 285,
      isShow: false,
      isShowReview: false,
      loading: false,
      filterName: "",
      count: 0,
      allProducts: [],
      isNull: true,
      page: 1,
      pageSize: 3,
      products: [],

      purchase_product: {
        name: "Credible",
        review_key: "",
        link:
          "https://www.credible.com/mortgage?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_purchase&utm_content=",
        logo: "/data/images/credible.jpg",
        rate: {
          max: 10,
          score: "9.8",
        },
        slogan: "1 Application, Several Offers",
        meritList: [
          {
            text: "Compare rates in minutes",
          },
          {
            text: "Easy process, 100% online",
          },
          {
            text: "Secured website with data encryption",
          },
        ],
        key_facts: {
          mortgage_types: "jumbo, conventional, refinance",
          credit_score: "620",
          apr: "set by lender",
          NMLS: "1681276",
        },
        pros: [
          {
            text: "No fees to use Credible’s services",
          },
          {
            text: "Find out your actual rate without a hard credit check",
          },
          {
            text: "E-verification for many financial documents",
          },
        ],
        cons: [
          {
            text: "Credible doesn’t operate in several large states",
          },
          {
            text: "No face-to-face customer support",
          },
        ],
      },
      refinance_product: {
        name: "LoanDepot",
        review_key: "",
        link: "https://fxo.co/DGxu",
        logo: "/data/images/loan-depot.png",
        rate: {
          max: 10,
          score: "9.5",
        },
        slogan: "No Login/Registration Required",
        meritList: [
          {
            text: "Has funded over $65 billion in home loans",
          },
          {
            text: "Clearance in as little as 8 days",
          },
          {
            text: "Mello smartloan™ digital asset verification",
          },
        ],
        key_facts: {
          mortgage_types:
            "purchase, refinance, adjustable & fixed rates, jumbo & more",
          credit_score: "620",
          apr: "depends on type of loan & lender",
          NMLS: "174457",
        },
        pros: [
          {
            text:
              "Can choose face-to-face interaction by accessing over 150 affiliated loan stores in the United States",
          },
          {
            text: "Experienced FHA and VA lender",
          },
          {
            text:
              "Fannie Mae HomeStyle home improvement and FHA 302K fixer-upper loans available",
          },
          {
            text:
              "100% digital asset, employment, and income verification available",
          },
        ],
        cons: [
          {
            text: "No home equity line of credit or loan products available",
          },
          {
            text: "USDA Rural Development loans not available",
          },
        ],
      },
    };
  },
  methods: {
    computeScore,
    updateTime,
    showDisclosure() {
      this.isShow = !this.isShow;
    },
    async getData(name) {
      this.category = name;
      this.loading = true;
      this.filterName = name;

      let path = "/data/mortgage_" + name + ".json";
      let product_results = await this.$axios.$get(path);

      this.loading = false;
      product_results.data.forEach((ele) => {
        ele.gclid = this.$route.query['gclid'];
      });
      this.count = product_results.data.length
      this.allProducts = product_results.data
      this.page = 1;
      this.products = [];
      this.isNull = true;
      if (name === "purchase") {
        this.cornerText = "Low Rates";
        this.choseNum = 285;
      } else if (name === "refinance") {
        this.cornerText = "Multiple Lenders";
        this.choseNum = 368;
      }
      this.products = this.allProducts;
      // this.loadMore();
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
      if (this.products.length === this.count) {
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
    handleShow(index) {
      this.$nextTick(() => {
        $(".product-content-container").eq(index).slideToggle("fast");
        $(".features-terms-box .details-box").eq(index).toggleClass("rotate");
      });
    },
    handlePhoneShow(index) {
      this.$nextTick(() => {
        $(".phone-key-facts-container").eq(index).slideToggle("fast");
        $(".phone-details-box").eq(index).toggleClass("rotate");
      });
    },
    handlePickShow(name) {
      this.$nextTick(() => {
        let box = "." + name + "-container";
        let detailDom =
          ".features-terms-box .details-box" + "." + name + "-details";
        $(box).slideToggle("fast");
        $(detailDom).toggleClass("rotate");
      });
    },
    handlePhonePickShow(name) {
      this.$nextTick(() => {
        let container = "." + name + "-phone-container";
        let detail = "." + name + "-phone-details";
        $(container).slideToggle("fast");
        $(detail).toggleClass("rotate");
      });
    },
  },
  created() {
    this.getData("purchase");
  },
  mounted() {
    let sloganJQDom = $('.banner-area .slogan');

    let clientWidth = $(window).width();
    if (clientWidth <= 750) {

      let top = $('.banner-container .title').offset().top;

      $(window).on('scroll', function () {
        let headerHeight = $('.header-container').height();
        if ($(this).scrollTop() > top) {
          sloganJQDom.text('Compare Best Mortgage Loans Rates');
          sloganJQDom.css({
            display: 'block',
            position: 'fixed',
            top: headerHeight + 'px',
            fontSize: '.2rem',
            textAlign: 'center',
            width: '100%',
            left: 0,
            color: '#fff',
            zIndex: 8,
            backgroundColor: 'rgb(26,119,129)'
          })
        } else {
          sloganJQDom.text('Make it easy to find affordable and responsible mortgages in the US.');
          sloganJQDom.css({
            display: 'none',
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
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mortgage.scss";
</style>
