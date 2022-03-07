<template>
  <main class="main-container">
    <!--    <h2 class="slogan">We explore smarter online personal loan lenders rates from 2.49% fixed APR.</h2>-->
    <section class="banner-area">
      <div class="banner-container">
        <h1 class="title">Know all about Mortgage Calculators</h1>
        <div class="introduce-container">
          <div class="author-info">
            <img alt="" class="author-image" src="@/assets/img/Kimberly-Rotter.png">
            <p class="author-desc">Written by <span class="author-name">Kimberly Rotter</span></p>
            <p class="updated"><span class="iconfont">&#xe645;</span> <span>Last updated: {{
                updateTime().month.short
              }} {{ updateTime().year }}</span></p>
          </div>
          <div class="introduce-content">
            <p>While chalking out your housing budget, you need to determine your monthly mortgage payment as well. A
              significant portion of your income will be diverted towards it, so you need to know exactly how much you
              have to shell out. That is why you require a mortgage calculator.</p>
          </div>
        </div>

      </div>
    </section>
    <section class="preface-area">
      <div class="preface-container">
        <h2 class="title">Why do you need a mortgage calculator?</h2>
        <div :class="{'preface-content': true, 'show': isShowPrefaceContent}">
          <p>A mortgage calculator helps to figure out exactly how much you need for your monthly mortgage payment. It
            estimates the amount needed for principal and interest. The taxes and insurance can be factored in as well.
            There are numerous online mortgage calculators that can be of help.</p>
          <p>Enter home price, down payment amount, interest rate, loan term, and location. If you want the payment to
            include taxes and insurance go ahead and input the information. Some websites automatically estimate costs
            based on the state the property is located in. Press on the “Calculate” button and your monthly payment pops
            up on your screen in a few seconds. You can input different down payment amounts, loan terms, interest
            rates, and so on to check out your options. This calculator lets you know the amount you have to set aside
            per month in order to make payments in a timely manner. This way you won’ t fall behind when it comes to
            paying off the mortgage.</p>
        </div>
        <img alt="" class="division" src="@/assets/img/division-icon.webp" @click="handleShowPrefaceContent">
      </div>
    </section>
    <section class="mortgage-calculator-area">
      <div class="mortgage-calculator-container">
        <div class="title-box">
          <h2 class="title">Mortgage Calculator</h2>
          <div class="help-container">
            <img alt="" class="icon" src="@/assets/img/help-icon.png">
            <p class="text">Tracking rates.We can help.</p>
            <form class="input-box">
              <input autocomplete="off" class="input" name="msg" type="text">
              <button class="send" type="button">SEND</button>
            </form>
          </div>
        </div>
        <div class="calculator-box">
          <form class="calculator-form">
            <div class="input-block">
              <div class="block-top home-price-top-box">
                <label class="block-title">Home Price</label>
                <div class="home-price-input-box">
                  <input v-model.number="price" autocomplete="off" class="home-price" name="price" type="number"
                         @input="calculate">
                </div>

              </div>
              <div class="block-bottom">
                <div class="slide-bar-box">
                  <el-slider v-model="price" :max="amountOptions[1]" :min="amountOptions[0]" :show-tooltip="false"
                             @input="calculate"></el-slider>
                </div>
              </div>
            </div>
            <div class="input-block">
              <div class="block-top">
                <label class="block-title"><span class="text">Down payment {{ down_payment_percentage }}%</span> <span
                  class="info-icon"></span></label>
              </div>
              <div class="block-bottom">
                <div class="down-payment-input">
                  <input v-model.number="down_payment" autocomplete="off" class="down-payment-input-first" type="number"
                         @input="changeDownPayment">
                  <input v-model.number="down_payment_percentage" autocomplete="off" class="down-payment-input-second"
                         type="number" @input="changeDownPaymentPercentage">
                </div>
              </div>
            </div>
            <div class="input-block">
              <div class="block-top">
                <label class="block-title"><span class="text">Loans terms</span> <span class="info-icon"></span></label>
              </div>
              <div class="block-bottom">
                <div class="loans-terms-select-box">
                  <select v-model="loan_terms" class="loans-terms-select" @change="calculate">
                    <option disabled="disabled">Please select one</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="30">30 years</option>
                  </select>
                  <span class="iconfont">&#xe600;</span>
                </div>

              </div>
            </div>
            <div class="input-block">
              <div class="block-top">
                <label class="block-title"><span class="text">Interest rate</span> <span
                  class="info-icon"></span></label>
              </div>
              <div class="block-bottom interest-rate-block">
                <input v-model="interest_rate" autocomplete="off" class="interest-rate-input" type="number"
                       @input="changeInterestRate"><span>%</span>
              </div>
            </div>
            <div class="input-block">
              <div class="block-top">
                <label class="block-title"><span class="text">State</span> <span class="info-icon"></span></label>
              </div>
              <div class="block-bottom">
                <div class="loans-terms-select-box">
                  <select v-model="stateIndex" class="loans-terms-select" @change="calculate">
                    <option disabled="disabled">Please select one</option>
                    <option v-for="(stateItem, id) in stateValue" :key="stateItem.title" :value="id">
                      {{ stateItem.title }}
                    </option>
                  </select>
                  <span class="iconfont">&#xe600;</span>
                </div>

              </div>
            </div>
          </form>
          <div class="calculator-box-right">
            <div class="calculator-results-container">
              <p class="results-text">Your estimated monthly payment</p>
              <div class="results-box">
                <img alt="" class="calculator-results-icon" src="@/assets/img/calculation-results-icon.webp">
                <span class="results">${{ calculationResults }}</span>
              </div>
            </div>
            <div class="results-detailed-information">
              <div class="detailed-title-box">
                <span class="detailed-title current">Monthly payment</span>
                <span class="vertical-line"></span>
                <span class="detailed-title">Amortization</span>
              </div>
              <div class="detailed-information-card">
                <div class="information">
                  <div class="bar-box">
                    <div class="dashed-line-box">
                      <span class="dashed-line"></span>
                      <span class="dashed-line"></span>
                      <span class="dashed-line"></span>
                      <span class="dashed-line"></span>
                    </div>
                    <div class="bar orange-bar"></div>
                    <div class="bar blue-bar"></div>
                    <div class="bar deep-green-bar"></div>
                    <div class="bar purple-bar"></div>
                  </div>
                  <div class="information-item">
                    <div class="line">
                      <div class="line-left">
                        <span class="principal-interest">$1,000</span>
                      </div>

                      <div class="information-tips">
                        <span class="square orange-square"></span>
                        <span class="text">Principal & interest</span>
                      </div>
                    </div>
                    <div class="line">
                      <div class="line-left">
                        <span class="add">+</span>
                        <div class="line-box">
                          <input v-model="homeownerInsurance" type="number" @input="inputHomeownerInsurance">
                        </div>
                      </div>

                      <div class="information-tips">
                        <span class="square blue-square"></span>
                        <span class="text">Homeowner’s insurance</span>
                      </div>
                    </div>
                    <div class="line">
                      <div class="line-left">
                        <span class="add">+</span>
                        <div class="line-box">
                          <input v-model="propertyTax" type="number">
                        </div>
                      </div>

                      <div class="information-tips">
                        <span class="square deep-green-square"></span>
                        <span class="text">Property tax</span>
                      </div>
                    </div>
                    <div class="line">
                      <div class="line-left">
                        <span class="add">+</span>
                        <div class="line-box">
                          <input v-model="HOAFee" type="number" @input="inputHOAFee">
                        </div>
                      </div>

                      <div class="information-tips">
                        <span class="square purple-square"></span>
                        <span class="text">HOA fees</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="total-monthly-payment">Total monthly payment = ${{ calculationResults }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="products-list-area">
      <div class="products-list-container">
        <h3 class="product-area-title">Based on your inputs, we recommend the following lenders:</h3>
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
              <div v-if="index !== 0" class="rate-box">
                <div class="star-box">
                  <NewStar :max="10" :score="product.score"></NewStar>
                </div>
                <span class="score">{{ product.score }}</span>
              </div>
              <a :href="product.link" class="view-details-btn" rel="noopener noreferrer nofollow">View details >> </a>
            </div>
          </div>
          <div class="product-item-center">
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
          </div>
          <div class="btn-box-col">
            <div class="btn-box">
              <a :href="product.link" class="btn" rel="noopener noreferrer nofollow">Check My Rates >></a>
              <a :href="product.link" class="visit-btn" rel="noopener noreferrer nofollow">Visit site >></a>
            </div>
          </div>
        </div>
        <div class="mail-container">
          <div class="mail-info">
            <p class="title">Tracking rates? We can help.</p>
          </div>
          <form class="user-email-form">
            <input class="user-email-input" name="user-email" placeholder="Email address" type="text">
            <button class="send-btn" type="button">Sign Up Now</button>
          </form>
        </div>
      </div>
    </section>
    <section class="mortgage-content-area">
      <div class="mortgage-content-container">
        <h3 class="mortgage-container-title">Understanding a mortgage</h3>
        <h5 class="mortgage-container-subtitle">What is a down payment?</h5>
        <div class="mortgage-content">
          <p>You need to pay a certain amount of money at closing. It is done to reduce the size of the loan, and is
            referred to as down payment. It basically represents your stake in the property. Ideally, a down payment of
            20% is the standard amount. You will get the best interest rates and varied loan options. However, it isn’t
            mandatory to put down 20% to buy a house. There are several low-down-payment options available for home
            buyers. There are some techniques that let you purchase homes with less than 5% down payment too. In fact,
            there are loan programs that require no money down.</p>
        </div>
        <h5 class="mortgage-container-subtitle">What is a loan term?</h5>
        <div class="mortgage-content">
          <p>
            As is evident from the term, it is the period of time that is spent in paying off the loan. The preferred
            loan term is usually 30 years. Terms available depends on your financial situation and type of loan
            chosen. </p>

          <p>Moreover, your budget plays a crucial role here. For instance, if you can afford to make higher monthly
            payments, you could clear off the loan quicker over a shorter term. The interest will be less, while you
            build equity faster. On the other hand, if you choose a longer term, the monthly payment will be lower as
            you pay off the loan over a longer period of time. But then again the interest is much more.
          </p>
        </div>
        <h5 class="mortgage-container-subtitle">What is principal?</h5>
        <div class="mortgage-content">
          <p>The principal is the loan amount that you borrowed and the interest is the additional money that you owe to
            the lender that accrues over time and is a percentage of your initial loan. Fixed-rate mortgages will have
            the same total principal and interest amount each month, but the actual numbers for each, change as you pay
            off the loan. This is known as amortization. You start by paying a higher percentage of interest than
            principal. Gradually, you will pay more and more principal and less interest.</p>
        </div>
        <h5 class="mortgage-container-subtitle">What is an mortgage loan interest rate?</h5>
        <div class="mortgage-content">
          <p>You pay a fee to the mortgage company to borrow the money – it is the interest. It is based on a percentage
            of the remaining loan amount. This “percentage” is the interest rate. There are numerous factors that
            determine interest rate, such as loan type, amount, down payment, credit history, etc. Market trends play an
            fundamental role here as well.</p>
        </div>
      </div>
      <div class="mortgage-content-container">
        <h3 class="mortgage-container-title">Types of mortgage rates</h3>
        <h5 class="mortgage-container-subtitle">Fixed Rate Mortgages</h5>
        <div class="mortgage-content">
          <p>For the entirety of the mortgage period, the interest rate will remain fixed. It ensures that you know the
            precise amount that is to be paid, which makes it simpler to manage personal finances and plan proactively.
            If the initial rate is low, it has a distinct advantage, because even if the rates shoot up later on, your
            mortgage rate is same till the full loan term is complete. The monthly payment for the entirety of the loan
            is fixed, so you don’t have to worry about fluctuations in interest rates. The demerit of this method is
            that the rate isn’t flexible so initial payments could be higher as compared to adjustable rate
            mortgages.</p>
        </div>
        <h5 class="mortgage-container-subtitle">Adjustable Rate Mortgages</h5>
        <div class="mortgage-content">
          <p>As opposed to a fixed rate mortgage, the interest rate and monthly payments keep changing and begin on the
            lower side. While this might seem advantageous, you have to consider the downside too. There is a risk of
            the payment and rate swinging either way at least once or twice a year since the adjustment depends upon a
            financial index. Depending upon the ups and downs of the interest rate for the duration of the mortgage, the
            principal and rate are changed accordingly. But the payments might drop if the interest rate goes down, even
            though it doesn’t allow advance planning as future monthly payments aren’t fixed.</p>
        </div>
      </div>
      <div class="website-btn-container">
        <p class="text">Calculate Your Mortgage Loan Amount</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>
      <div class="mortgage-content-container">
        <h3 class="mortgage-container-title">Your mortgage payment explained in detail</h3>
        <div class="mortgage-content">
          <p class="green formula">Monthly mortgage payment = Principal + Interest + Escrow Account Payment</p>
          <p class="green formula">Escrow account = Homeowners Insurance + Property Taxes + PMI (if applicable)</p>
          <p>The lump sum that you have to pay to your mortgage lender each month is broken down into various different
            items. Most homebuyers have an escrow account – it is the account your lender uses to pay your property tax
            bill and homeowner’s insurance. It means the bill you get each month for your mortgage not only includes the
            principal amount and interest payment, but also property taxes, home insurance and, in some cases, private
            mortgage insurance.</p>
        </div>
        <h5 class="mortgage-container-subtitle">What is homeowner’s insurance?</h5>
        <div class="mortgage-content">
          <p>This is a policy you purchase from an insurance provider that covers you for natural disasters like fire,
            storms, etc. along with thefts and burglaries. For earthquakes and floods, you have to take a separate
            policy. This type of insurance can cost anywhere between few hundred dollars to thousands of dollars
            depending upon size and location of the property. When you borrow money to buy a home, your lender requires
            that you to have homeowners insurance. The reason is this type of insurance policy is a protection for the
            lender’s collateral, which in this case is your home, if there are fires or other events that cause
            damage.</p>
        </div>
        <h5 class="mortgage-container-subtitle">How do property taxes work?</h5>
        <div class="mortgage-content">
          <p>If you own property, you need to pay taxes levied by the county and district. That is why you should input
            your zip code, town, or city, while using property tax calculators (available online), which gives you the
            average effective tax rate where you reside. Property taxes vary widely from state to state and even county
            to county. </p>
          <p>While it depends on your state, county and municipality, property taxes are usually calculated as a
            percentage of your home’s value and billed once a year. In some areas, your home is reassessed each year,
            while in others it can be as long as every five years. Property taxes are to compensate for services like
            road repairs and maintenance, school district budgets and county general services.</p>
        </div>
        <h5 class="mortgage-container-subtitle">What is the formula for calculating a mortgage payment?</h5>
        <div class="mortgage-content">
          <p>The mortgage payment calculation looks like this: <span class="green">M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]</span>
          </p>
          <dl class="rule">
            <dt class="rule-title">The variables are as follows:</dt>
            <dd>
              <span class="circle"></span>
              <p class="text">M = monthly mortgage payment.</p>
            </dd>
            <dd>
              <span class="circle"></span>
              <p class="text">P = the principal amount.</p>
            </dd>
            <dd>
              <span class="circle"></span>
              <p class="text">i = your monthly interest rate. The lender most likely lists the interest rates as an
                annual figure, so you have to divide by 12 (for every month of the year). For instance, if the rate is
                10%, then the monthly rate is 0.10/12 = 0.00833.</p>
            </dd>
            <dd>
              <span class="circle"></span>
              <p class="text">n = it is the number of payments till the loan lasts. If your mortgage period lasts for 30
                years, n = 30 years x 12 months per year, or 360 payments.</p>
            </dd>
          </dl>
        </div>
        <h5 class="mortgage-container-subtitle">What is PMI?</h5>
        <div class="mortgage-content">
          <p>Private mortgage insurance, or PMI is an insurance policy that is required by lenders to secure a loan
            considered to be high risk. If your down payment is less than 20% you are required to pay PMI (and you can’t
            qualify for a VA loan). Most lenders insist on a 20% down payment due to equity. If you don’t have
            sufficient equity in the home, you will be considered a possible default liability. To put it in a nutshell,
            it means you are more of a risk to your lender if you don’t pay for enough of the home. PMI is calculated as
            a percentage of your original loan amount and can range from 0.3% to 1.5% depending on your down payment and
            credit score. When you reach at least 20% equity, you can put in a request to stop paying PMI.</p>
        </div>
        <h5 class="mortgage-container-subtitle">What are HOA fees?</h5>
        <div class="mortgage-content">
          <p>If you buy a condominium or a home that is part of a planned community, you have to pay homeowner’s
            association (HOA) fees. Typically, HOA fees are charged on a monthly or yearly basis. The fees include
            common expenses like community space upkeep of grass lawn, community pool or other shared amenities, along
            with building maintenance. When you are scouting homes, your real estate agent will disclose HOA fees right
            away, so you know exactly how much the current owners pay. HOA fees are an additional ongoing fee to contend
            with, they don’t cover property taxes or homeowner’s insurance in most cases.</p>
        </div>
        <h5 class="mortgage-container-subtitle">How to reduce your monthly mortgage payment?</h5>
        <div class="mortgage-content">
          <p>Select a longer loan term, which is the number of years it will take to pay off the loan. If you opt for a
            longer term, the payment is lower but you have to pay more interest over the years.</p>
          <p>Opt for a less expensive property, which means a smaller loan, and hence lower monthly mortgage
            payments.</p>
          <p>Steer clear of PMI by paying a down payment of 20% or more. Thus, you don’t have to bear the hassles of
            shelling out PMI, while maintaining at least 20% equity in the home.</p>
          <p>Get a lower interest rate. Here too, paying a larger down payment is beneficial as it helps to bring down
            your interest rate, which means a lower monthly mortgage payment. Moreover, you are always welcome to shop
            around with other lenders to find a more favorable interest rate to keep monthly mortgage payments as low as
            possible.</p>
          <p class="strong">Exercise caution as monthly payments can go up for the following reason:</p>
          <p>Homeowners’ insurance premiums or property taxes go up, which directly affect mortgage payments.</p>
          <p>You get late when it comes to paying, and consequently incur a late fee from your mortgage loan
            servicer.</p>
          <p>You have an adjustable rate mortgage, and the rate goes up at the adjustment period.</p>
        </div>
        <h5 class="mortgage-container-subtitle">To sum up, here is what your mortgage payment consists of</h5>
        <h5 class="mortgage-container-subtitle">Principal</h5>
        <h5 class="mortgage-container-subtitle">The amount borrowed from the lender.</h5>
        <h5 class="mortgage-container-subtitle">Interest</h5>
        <div class="mortgage-content">
          <p>The amount the lender charges you to lend the money. Rates of interest are expressed as an annual
            percentage.</p>
        </div>

        <h5 class="mortgage-container-subtitle">Property taxes</h5>
        <div class="mortgage-content">
          <p>Local authorities levy an annual tax on the property. If you have an escrow account, you need to pay about
            1/12th of your annual tax bill with each monthly mortgage payment.</p>
        </div>
        <h5 class="mortgage-container-subtitle">Homeowner’s insurance</h5>
        <div class="mortgage-content">
          <p>This insurance policy is for covering damages, losses, and financial needs from fires, storms, thefts,
            trees falling on your home and other hazards. Moreover, if you live in a flood zone, place that is
            earthquake prone or an area frequented by hurricanes, you might need additional insurance policies. Just
            like property taxes, you have to pay 1/12th of your annual insurance premium each month. Your lender or
            servicer pays the premium when it is due.</p>
        </div>
        <h5 class="mortgage-container-subtitle">Mortgage insurance</h5>
        <div class="mortgage-content">
          <p>If your down payment is less than 20% of the property’s purchase price, you have to pay mortgage insurance.
            This amount is added to your monthly payment.</p>
          <p>Without proper planning, paying off the mortgage for your home can become tedious and extremely
            time-consuming. If required, seek professional advice about the best type of mortgage rate, and how you can
            buy a decent home, while keeping mortgage monthly payments reasonably low.</p>
        </div>
      </div>
      <div class="website-btn-container">
        <p class="text">Calculate Your Mortgage Loan Amount</p>
        <a class="btn" href="" rel="noopener noreferrer nofollow">
          Get Started >>
        </a>
      </div>
    </section>
    <!--    <section class="must-read-area">-->
    <!--      <div class="must-read-container">-->
    <!--        <h3 class="read-title">Must Read</h3>-->
    <!--        <ul class="read-list">-->
    <!--          <li>-->
    <!--            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance-->
    <!--              Lenders</a>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance-->
    <!--              Lenders</a>-->
    <!--          </li>-->
    <!--          <li>-->

    <!--            <a class="read-link" href="" rel="noreferrer noopener nofollow" target="_blank">Best Mortgage Refinance-->
    <!--              Lenders</a>-->
    <!--          </li>-->
    <!--        </ul>-->

    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="best-mortgage-lenders-area">-->
    <!--      <div class="best-mortgage-lenders-container">-->
    <!--        <h2 class="title">Best mortgage lenders in December 2021</h2>-->
    <!--        <div class="best-mortgage-lenders-main">-->
    <!--          <div class="description-container">-->
    <!--            <div class="text-content">-->
    <!--              <h6 class="text-title">CHOOSE BEST MORTGAGE LENDER</h6>-->
    <!--              <p class="text">If your down payment is less than 20% of the property’s purchase price, you have to-->
    <!--                pay </p>-->
    <!--            </div>-->
    <!--            <ul class="attribute-list">-->
    <!--              <li><span>Max loan</span></li>-->
    <!--              <li><span>APR</span></li>-->
    <!--              <li><span>Repayment terms</span></li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--          <div class="card-container">-->
    <!--            <div class="card-item best-choice">-->
    <!--              <img alt="" class="best-icon" src="@/assets/img/best-choice-icon.png">-->
    <!--              <div class="card-top first">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--            <div class="card-item">-->
    <!--              <div class="card-top second">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--            <div class="card-item">-->
    <!--              <div class="card-top third">-->
    <!--                <p class="desc"><span class="strong">1000 people</span> chose this brand this month</p>-->
    <!--              </div>-->
    <!--              <div class="card-middle">-->
    <!--                <div class="middle-container">-->
    <!--                  <div class="logo-box">-->
    <!--                    <img alt="" class="logo" src="">-->
    <!--                  </div>-->
    <!--                  <div class="button-group">-->
    <!--                    <a class="btn" href="" rel="noopener noreferrer nofollow">Check My Rates >></a>-->
    <!--                    <a class="visit-site" href="" rel="noopener noreferrer nofollow">Visit site »</a>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--              </div>-->
    <!--              <ul class="attr-list">-->
    <!--                <li><span>$10,000</span></li>-->
    <!--                <li><span>2.49-35.99%</span></li>-->
    <!--                <li><span>24-84</span></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
  </main>
</template>

<script>
import NewStar from '../components/NewStar/index.vue'
import {updateTime} from "../utils/date";

export default {
  components: {
    NewStar
  },
  async asyncData({error, $axios}) {
    try {
      let results = await $axios.$get('/data/mortgage-loan-calculator.json');

      return {
        products: results.data
      }
    } catch (e) {
      error({statusCode: 404});
    }
  },
  data() {
    return {
      isShowPrefaceContent: false,
      amountOptions: [0, 1000000], // 金额选项
      price: 300000, //总金额
      down_payment: 0,// 预付款百分比
      down_payment_percentage: 20,
      loan_terms: 10, //贷款年限
      interest_rate: 4.5, // 利率
      calculationResults: 0,
      stateValue: [
        {
          title: 'Hawaii',
          value: 0.28
        },
        {
          title: 'Alabama',
          value: 0.41
        },
        {
          title: 'Colorado',
          value: 0.51
        },
        {
          title: 'Louisiana',
          value: 0.55
        },
        {
          title: 'District of Columbia',
          value: 0.56
        },
        {
          title: 'South Carolina',
          value: 0.57
        },
        {
          title: 'Delaware',
          value: 0.57
        },
        {
          title: 'West Virginia',
          value: 0.58
        },
        {
          title: 'Nevada',
          value: 0.6
        },
        {
          title: 'Wyoming',
          value: 0.61
        },
        {
          title: 'Arkansas',
          value: 0.62
        },
        {
          title: 'Utah',
          value: 0.63
        },
        {
          title: 'Arizona',
          value: 0.66
        },
        {
          title: 'Idaho',
          value: 0.69
        },
        {
          title: 'Tennessee',
          value: 0.71
        },
        {
          title: 'California',
          value: 0.76
        },
        {
          title: 'New Mexico',
          value: 0.8
        },
        {
          title: 'Mississippi',
          value: 0.81
        },
        {
          title: 'Virginia',
          value: 0.82
        },
        {
          title: 'Montana',
          value: 0.84
        },
        {
          title: 'North Carolina',
          value: 0.84
        },
        {
          title: 'Indiana',
          value: 0.85
        },
        {
          title: 'Kentucky',
          value: 0.86
        },
        {
          title: 'Florida',
          value: 0.89
        },
        {
          title: 'Oklahoma',
          value: 0.9
        },
        {
          title: 'Georgia',
          value: 0.92
        },
        {
          title: 'Missouri',
          value: 0.97
        },
        {
          title: 'Oregon',
          value: 0.97
        },
        {
          title: 'North Dakota',
          value: 0.98
        },
        {
          title: 'Washington',
          value: 0.98
        },
        {
          title: 'Maryland',
          value: 1.09
        },
        {
          title: 'Minnesota',
          value: 1.12
        },
        {
          title: 'Alaska',
          value: 1.19
        },
        {
          title: 'Massachusetts',
          value: 1.23
        },
        {
          title: 'South Dakota',
          value: 1.31
        },
        {
          title: 'Maine',
          value: 1.36
        },
        {
          title: 'Kansas',
          value: 1.41
        },
        {
          title: 'Michigan',
          value: 1.54
        },
        {
          title: 'Ohio',
          value: 1.56
        },
        {
          title: 'Iowa',
          value: 1.57
        },
        {
          title: 'Pennsylvania',
          value: 1.58
        },
        {
          title: 'Rhode Island',
          value: 1.63
        },
        {
          title: 'New York',
          value: 1.72
        },
        {
          title: 'Nebraska',
          value: 1.73
        },
        {
          title: 'Texas',
          value: 1.8
        },
        {
          title: 'Wisconsin',
          value: 1.85
        },
        {
          title: 'Vermont',
          value: 1.9
        },
        {
          title: 'Connecticut',
          value: 2.14
        },
        {
          title: 'New Hampshire',
          value: 2.18
        },
        {
          title: 'Illinois',
          value: 2.27
        },
        {
          title: 'New Jersey',
          value: 2.49
        }
      ],
      stateIndex: 0,
      homeownerInsurance: 0, //房主保险
      propertyTax: 0, //财产税
      HOAFee: 0 //HOA费用
    }
  },
  methods: {
    updateTime,
    handleShowPrefaceContent() {
      this.isShowPrefaceContent = !this.isShowPrefaceContent;
    },
    // 计算首付
    changeDownPayment() {

      this.down_payment_percentage = (this.down_payment / this.price) * 100;

    },
    // 计算首付百分比
    changeDownPaymentPercentage() {

      this.down_payment = this.price * (this.down_payment_percentage / 100);
    },
    // 用户输入利率
    changeInterestRate() {
      this.calculate();
    },
    inputHomeownerInsurance() {
      this.calculate();
    },
    inputHOAFee() {
      this.calculate();
    },
    calculate() {

      //计算首付
      this.down_payment = Math.floor(this.price * (this.down_payment_percentage / 100));

      // 月利率
      let i = (this.interest_rate / 12) / 100;

      // 付款次数
      let n = this.loan_terms * 12;

      //本金
      let P = this.price;


      //每月付款
      let M = P * (i * Math.pow((1 + i), n)) / (Math.pow((1 + i), n) - 1);
      this.propertyTax = Number(((this.stateValue[this.stateIndex].value / 100) * M).toFixed(2));

      this.calculationResults = Math.floor(M) + Number(this.HOAFee) + Number(this.homeownerInsurance) + this.propertyTax;
    }
  },
  created() {
    this.calculate();
    // this.calculateDownPayment();
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/mortgage-loan-calculator.scss";
</style>
