<template>
  <div class="page">
    <header class="header-area">
      <div class="header-container">
        <a href="/personal-loans" target="_blank" rel="noopener noreferrer">
          <img
            src="@/assets/img/website-footer-logo.webp"
            alt=""
            class="logo"
          />
        </a>
        <div class="menu-box">
          <ul class="menu-list">
            <li>
              <a
                href="/personal-loans"
                target="_blank"
                rel="noopener noreferrer"
                >Personal Loan</a
              >
            </li>
            <li>
              <a href="/student-loan" target="_blank" rel="noopener noreferrer"
                >Student Loan</a
              >
            </li>
            <li>
              <a href="/mortgage-loan" target="_blank" rel="noopener noreferrer"
                >Mortgage Loan</a
              >
            </li>
            <li>
              <a href="/guides" target="_blank" rel="noopener noreferrer"
                >Guides</a
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
    <Nuxt />
    <footer class="footer-area">
      <section class="footer-info-area">
        <div class="footer-info-container">
          <div class="quick-link-container">
            <h4 class="title">QUICK LINK</h4>
            <div class="menu-footer-container">
              <ul class="footer-menu">
                <li>
                  <a
                    href="/personal-loans"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Personal Loan</a
                  >
                </li>

                <li>
                  <a
                    href="/student-loan"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Student Loan</a
                  >
                </li>
                <li>
                  <a
                    href="/mortgage-loan"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Mortgage Loan</a
                  >
                </li>
                <li>
                  <a href="/about-us" target="_blank" rel="noopener noreferrer"
                    >About Us</a
                  >
                </li>
                <li>
                  <a href="/guides" target="_blank" rel="noopener noreferrer"
                    >Guides</a
                  >
                </li>
                <li>
                  <a
                    href="/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a
                    href="/term-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Terms of Use</a
                  >
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="contact-container">
            <h4 class="title">GET IN TOUCH</h4>
            <div class="form-box">
              <div class="input-box">
                <input
                  type="text"
                  class="input"
                  placeholder="Name"
                  autocomplete="off"
                />
                <input
                  type="text"
                  class="input"
                  placeholder="Email"
                  autocomplete="off"
                />
              </div>
              <textarea class="content" placeholder="Your Message"></textarea>
            </div>
            <div class="form-bottom">
              <p class="text">
                Your information will be handled as detailed in our
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Privacy Policy</a
                >
              </p>
              <button class="btn">Send</button>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-disc-area">
        <div class="footer-disc-container">
          <div class="img-box">
            <img
              src="@/assets/img/website-footer-logo.webp"
              alt=""
              class="logo"
            />
          </div>

          <div class="disc-content">
            <p class="text">
              Disclaimer: All rates, fees and offers are presented without
              guarantee and are subject to additional terms and change pursuant
              to each financial institute sole discretion, which will further
              determine the criteria necessary for providing the requested
              services. There is no guarantee you will be qualified and eligible
              to receive the offers, rates, fees, or terms advertised in this
              website. Certain territories may not be eligible to be provided
              with the offers and certain financial institute services. Actual
              APR, APY and other terms will depend on factors like credit score,
              minimum deposit, minimum balance, requested loan amount, loan
              term, and credit history and ranking. We encourage you to review
              the applicable financial institute and offer's terms when you
              evaluate an offer, including all fees, costs and terms associated
              with each financial product and service, in order to determine
              which offer and financial institute is best suitable for you.
              Filing for bankruptcy shall not exempt from the obligation to
              repay the loan. Your use of and reliance on the information
              provided herein is at your own responsibility and risk.
              Trafficpoint Ltd is not a financial institute, insurance broker or
              agent. Student Loans Refinance: You may be eligible to specific
              educational loan benefits from your educational institution or may
              be qualified for Federal student financial assistance you may
              receive additional information with your institution of higher
              education or at the website of the U.S. Department of Education.
            </p>
            <div class="footer-additional">
              <p class="copyright">
                All rights reserved © 2021
                <span class="green">Toploansadviser</span>
              </p>
              <span class="circle"><strong>18</strong> +</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/personal-layout.scss";
</style>