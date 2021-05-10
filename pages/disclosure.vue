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
        <p>Our comparison site consists of our own views and opinions. Ratings are at our sole discretion and should not be used for accuracy purposes. Since we charge referral fees from many service providers, we are able to provide this service for free. These introduction fees may affect the ranking and score assigned to a particular supplier. In addition, although many suppliers appear on toploansadviser.com, this does not imply any form of approval. The information and vendors which appear on this site is subject to change at any time. The information and vendors which appear on this site is subject to change at any time.</p>
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