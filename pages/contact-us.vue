<template>
  <main class="main-container">
     <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">Contact US</h1>
          <p class="update">Last updated March 2021</p>
          
        </div>
        <!-- <img src="@/assets/img/contact-banner.webp" alt="Toploansadviser" class="banner-img"> -->
      </div>
      
    </section> 
    <div class="contact-container">
      <div class="form-box">
        <h3 class="form-title">To be Toploansadviser partners, please fill the form</h3>
        <form @submit.prevent="submitForm" class="form">
          <div class="form-item name-item">
            <label for="">
              <span class="title">FIRST NAME *</span>
              <input type="text" autocomplete="off" v-model="form.firstName" class="name">
            </label>
            <label for="">
              <span class="title">LAST NAME *</span>
              <input type="text" autocomplete="off" v-model="form.lastName" class="name">
            </label>
          </div>
          <div class="form-item email-item">
            <label for="">
              <span class="title">EMAIL *</span>
              <input type="text" autocomplete="off" v-model="form.email" class="email">
            </label>
          </div>
          <div class="form-item message-item">
            <label for="">
              <span class="title">MESSAGE *</span>
              <textarea cols="30" rows="6" v-model="form.content"></textarea>
            </label>
          </div>
          <div class="form-item btn-item">
            <button type="submit" class="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    validate() {
      const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      if (this.form.firstName == '' || this.form.firstName.trim().length == 0) {
        this.$message({
            showClose: false,
            message: 'Please enter your first name!',
            type: 'error'
          })
        return false;
      } else if (this.form.lastName == '' || this.form.lastName.trim().length == 0) {
        this.$message({
            showClose: false,
            message: 'Please enter your last name!',
            type: 'error'
          })
        return false;
      } else if (this.form.email == '' || !reg.test(this.email)) {
        this.$message({
            showClose: false,
            message: 'Please fill in your email address correctly!',
            type: 'error'
          })
        return false;
      } else if (this.form.content == '' || this.form.content.trim().lenght == 0) {
        this.$message({
            showClose: false,
            message: 'Please fill in what you want to send!',
            type: 'error'
          })
        return false;
      }

      return true;
    },
    submitForm() {
      
      const flag = this.validate();
      if (flag) {
        this.$axios.post('https://api.vpncollection.com/admin/email',{
          params: {
            username: this.form.firstName + '' + this.form.lastName,
            email: this.email,
            content: this.form.content
          }
        }).then(() => {
          this.$message({
            showClose: false,
            message: 'Submit successfully!',
            type: 'success'
          })

          this.clearForm();
        }).catch(err => {
          this.$message({
            showClose: false,
            message: 'Fail to send, please refresh and try again!',
            type: 'error'
          })
        })
      }
    },
    clearForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        content: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/contact.scss';
</style>