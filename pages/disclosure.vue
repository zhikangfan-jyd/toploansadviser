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
        <p>Our comparison website is made up of our own views and opinions. The scoring is determined at our own discretion and should not be used for accuracy purposes. We are able to provide this service for free thanks to the referral fees we receive from a number of service providers. These referral fees may affect the rankings and score assigned to specific vendors. Furthermore, though many vendors appear on toploansadviser.com, this DOES NOT imply endorsement of any kind. The information and vendors which appear on this site is subject to change at any time.</p>
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