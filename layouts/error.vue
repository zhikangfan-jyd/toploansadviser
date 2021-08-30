<template>
  <main class="error-container">
    <div class="content">
      <img src="@/assets/img/error.webp" alt="error">
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style lang="scss" scoped>
.error-container {
  position: relative;
  height: 1000px;
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 600px;

    
    img {
      width: 100%;

    }

  }

  @media screen and (max-width: 750px) {
      height: 600px;
      .content {
        width: 80%;
      }
    }
}
</style>