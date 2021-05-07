<template>
  <div v-if="loading" class="loading-wrapper">
      <img src="@/assets/img/img-loading.gif" alt="loading..." class="loading-img">
  </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        }
    }
}
</script>

<style scoped lang="scss">
.loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #000;
    .loading-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 200px;
    }
}
</style>