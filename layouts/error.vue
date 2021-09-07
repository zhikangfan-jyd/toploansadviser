<template>
  <main class="error-container">
    <div class="content">
      <div class="content-text">
        <p class="g big">Sorry...</p>
        <p>The page you were looking for <span class="g">doesn't</span> exist.</p>
      </div>
      <img src="@/assets/img/404.webp" alt="404 Not Found" class="pic">
      <a href="/" rel="noopener noreferrer" class="btn">Back To Home</a>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    setHeight() {
      let screenHeight = $(window).height();
      let footerHeight = $('.footer-container').height();
      if ($(window).height() <= 1000) {
        $('.error-container').css({
          height: 700
        })
      } else {
        $('.error-container').css({
          height: screenHeight - footerHeight
        })
      }
      
    }
  },
  mounted () {
    let that = this;
    that.setHeight();
    $(window).on('resize',  that.setHeight)
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/error.scss';
</style>