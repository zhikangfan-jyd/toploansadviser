<template>
  <div class="contact-component-container">
    <img src="@/assets/img/email-icon.png" alt="email" class="email-icon">
    <span class="iconfont cancel-icon" @click="hiddenForm">&#xe614;</span>
    <div class="contact-title">Newsletter</div>
    <div class="text">Stay up to date with the lowest rate loans.</div>
    <form class="contact-component-form">
      <div class="form-item-block">
        <input type="text" name="email" placeholder="Your email address" autocomplete="off" class="email-input"
               v-model.trim="form.email"></input>
        <button type="button" class="submit-btn" @click="submitForm">Subscribe »
        </button>
      </div>
    </form>
    <p class="tips">Your email is safe with us, we don't spam.</p>
  </div>
</template>
<script>
export default {
  name: "Contact-Component",
  data() {
    return {
      isHidden: true,
      form: {
        email: ''
      }
    }
  },
  methods: {
    async submitForm() {

      const reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );
      if (this.form.email === "" || !reg.test(this.form.email)) {
        this.$message({
          showClose: false,
          message: "Please fill in your email address correctly!",
          type: "error",
        });
        return;
      }

      let res = await this.$axios.$post('https://store.thetopvpns.com/send', {email: this.form.email});

      if (res.code === 'success') {
        this.form.email = '';
        this.$message({
          message: 'Submitted successfully',
          type: 'success'
        })
      } else {
        this.$message({
          message: 'Submission failed',
          type: 'error'
        })
      }
    },
    hiddenForm() {
      this.$nextTick(() => {
        $('.contact-component-container').animate({
          opacity: 0,
          right: 0,
          bottom: -20
        }, 1000, 'linear', () => {
          $('.contact-component-container').css({
            display: 'none'
          })
        })
      })
    },
    showForm() {
      this.$nextTick(() => {
        $('.contact-component-container').css({
          display: 'block'
        }).animate({
          opacity: 1,
          right: 0,
          bottom: 30
        }, 1000)
      })

      this.form.email = '';
    }
  },
  mounted() {
    setTimeout(() => {
      this.showForm();
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
