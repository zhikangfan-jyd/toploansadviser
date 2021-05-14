<template>
  <div class="alert-wrapper">
      <div class="alert-content">
          <div class="step-box-1">
              <div class="step-box-left">
                  <h3 class="title">Compare Personal Loan Rates From Top Lenders</h3>
                <p class="desc">
                    <span class="iconfont"></span>
                    <span class="text">Estimate your credit score</span>
                </p>
              </div>
              <div class="step-box-right">
                  <div class="box-1">
                      <div class="credit-score-item">
                            <button class="credit-score">&lt; 640</button>
                            <span class="text">Poor</span>
                        </div>
                        <div class="credit-score-item">
                            <button class="credit-score">640 - 699</button>
                            <span class="text">Below</span>
                        </div>
                  </div>
                  <div class="box-1">
                      <div class="credit-score-item">
                        <button class="credit-score">700 - 749</button>
                        <span class="text"></span>
                    </div>
                    <div class="credit-score-item">
                        <button class="credit-score">&gt; 749</button>
                        <span class="text">Good</span>
                    </div>
                  </div>
                  
              </div>
          </div>
          <div class="steps-container">
              <div class="steps-text-box">
                  <span class="steps-num">1</span>/2 steps
              </div>
              <div class="steps-box">
                  <div class="bar"></div>
              </div>
          </div>
          <span class="close icon" @click="closeAlert"></span>
      </div>
  </div>
</template>

<script>
export default {
    
    props: ['url'],
    data: () => {
        return {
            timer: null,
            timer2: null,
            count: 0
        }
    },
    methods: {
        showAlert() {
                $('.alert-wrapper').css({
                    display: 'block'
                    
                }).animate({
                    opacity: 1
                },200)
                $('.alert-content').animate({
                    top: '50%',
                    opacity: 1
                },400)
        },
        closeAlert() {
            this.$nextTick(() => {
                $('.alert-content').animate({
                    top: '40%',
                    opacity: 0
                },400,function () {
                    
                })
                $('.alert-wrapper').animate({
                    opacity: 0
                },500,function () {
                    $(this).css({
                        display: 'none'
                    })
                })
                
                
            })
        }
    },
    mounted() {
        this.timer2 = setTimeout(() => {
            $('body').on('mouseenter',() => {
                $('body').one('mouseleave',() => {
                    if (this.count == 0) {
                        this.showAlert();
                    }
                    this.count ++;
                })
            })
        },1000)
        
    },
    destroyed() {
        clearInterval(this.timer);
        clearTimeout(this.timer2)
    }
}
</script>
<style lang="scss" scoped>
@import './scss/Message.scss';
</style>