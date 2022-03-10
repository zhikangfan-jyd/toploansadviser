<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
            <span>Advertising Disclosure</span>
          </h1>
          <p class="update">
            Last updated: {{ updateTime().month.short }} {{ updateTime().year }}
          </p>
        </div>
      </div>
      <img
        alt="Toploansadviser"
        class="banner-img"
        src="@/assets/img/disclosure-banner.webp"
      />
    </section>
    <section class="disclosure-container">
      <p>
        The information shared through this website is based on our team’s
        personal judgements and views. We use our own comparisons to assign
        values, which are not intended to reflect a certain benchmark of
        precision. To keep our website free for use, we accept referral fees
        from various service providers, which have the potential to influence
        their respective appointed scores. A third party’s participation on
        toploansadviser.com is not an indication of endorsement. The information
        and vendors which appear on this site is subject to change at any
        time.The site does not include all companies offering loan products or
        all available loan offers.
      </p>
    </section>
  </main>
</template>

<script>
import {updateTime} from "../utils/date";
import {seo} from "../utils/seo";

export default {
  head() {
    return seo({
      title: 'Advertising Disclosure | Toploansadviser.com',
      description: 'Toploansadviser is a place to compare and review best loans lenders for your financial decision. Toploansadviser  is made up of experts who believe in updating you the most useful information to make informed decisions about your financial life.',
      url: 'https://www.toploansadvisr.com/disclosure',
      img: 'https://www.toploansadviser.com/data/images/personal-loan.webp',
      img_size: {
        width: '325',
        height: '295'
      },
      img_type: 'image/webp',
    });
  },
  methods: {
    updateTime,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/disclosure.scss";
</style>
