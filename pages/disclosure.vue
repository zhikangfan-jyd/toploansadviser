<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">
              <span>Advertising Disclosure</span>
          </h1>
          <p class="update">Last updated: {{updateTime().month.short}} {{updateTime().year}}</p>
        </div>
        
      </div>
      <img src="@/assets/img/disclosure-banner.png" alt="Toploansadviser" class="banner-img">
    </section>
    <section class="disclosure-container">
      <p>The information shared through this website is based on our team’s personal judgements and views. We use our own comparisons to assign values, which are not intended to reflect a certain benchmark of precision. To keep our website free for use, we accept referral fees from various service providers, which have the potential to influence their respective appointed scores. A third party’s participation on toploansadviser.com is not an indication of endorsement. The information and vendors which appear on this site is subject to change at any time.</p>
    </section>
  </main>
</template>

<script>
import { updateTime } from '../utils/date'
export default {
  methods: {
    updateTime
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/disclosure.scss';
</style>