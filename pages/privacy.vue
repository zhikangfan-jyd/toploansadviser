<template>
  <main class="main-container">
      <section class="banner-area">
        <div class="banner-container">
            <div class="banner-content">
            <h1 class="website-title">Privacy Policy</h1>
            <p class="update">Last updated: {{updateTime().month.short}} {{updateTime().year}}</p>
            
            </div>
            <img src="@/assets/img/term-banner.png" alt="Toploansadviser" class="banner-img">
        </div>
        
        </section> 
        <div class="privacy-container">
            <div class="content-container">
                <div class="content-item">
                    <h5 class="content-title"></h5>
                    <div class="content">
                        <p>This Privacy Policy is among you, and ("Toploansadviser" , "we", or "our") and applies to your utilization of Toploansadviser's site at www.Toploansadviser.com(the "Site"). We perceive the significance of individual security to our clients. We need you to see how we assemble, use, and defend data about you to give you our items and administrations. Our protection standards have been received to keep up the security, honesty and privacy of your own data. By utilizing our Site, you agree to our assortment and utilization of your information as depicted in the Privacy Policy. </p>
                        <p>By giving Toploansadviser your email address you agree to Toploansadviser sending you Service related takes note. Likewise, we may utilize your gave email address to send you different messages including however not restricted to, refreshes and additionally changes to Service highlights and exceptional advancements from Toploansadviser or outsider products or administrations. In the event that you presently don't have any desire to get such email messages, you may quit by tapping the "withdraw" connect gave in the email or by reaching us at support@Toploansadviser.com. </p>
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title"></h5>
                    <div class="content">
                        <dl>
                            <dt>List of chapters: </dt>
                            <dd>1.	Information We Gather</dd>
                            <dd>2.	How We Protect Your Information</dd>
                            <dd>3.	Information We Share </dd>
                            <dd>4.	Additional Provisions </dd>
                            <dd>5.	Updates </dd>
                        </dl>
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title">1. Data WE GATHER</h5>
                    <div class="content">
                        <dl>
                            <dt>We gather individual data about you from the accompanying sources:</dt>
                            <dd>I. Data we get from you on applications or different structures. </dd>
                            <dd>ii. Data about your exchanges with us, our subsidiaries or others. </dd>
                        </dl>
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title">2. HOW WE PROTECT YOUR INFORMATION</h5>
                    <div class="content">
                        <p>We confine admittance to individual data about you to those representatives who need to realize that data to give items or administrations to you. We keep up physical, electronic and procedural protections that conform to government and state guidelines to monitor your own data.</p>
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title">3. Data WE SHARE </h5>
                    <div class="content">
                        <p>We share your data with our workers and outsider suppliers to offer our types of assistance to you and to give you benefits from suppliers and outsiders. Data we get and share incorporates data from you submitted on applications or different structures. We will uncover your data where needed to do as such by law or summon or on the off chance that we sensibly accept that such activity is important to:</p>
                        <p>I. Consent to the law and the sensible solicitation of law requirement.</p>
                        <p>ii. Authorize our Terms of Use or administration or to ensure the security or uprightness of our administration.</p>
                        <p>iii. Exercise or secure the rights, property, or individual wellbeing of us, our workers, project workers, suppliers, clients or others.</p>
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title">4. Extra PROVISIONS</h5>
                    <div class="content">
                        <p>I. Latent Account: If you choose to close your account(s) or are not, at this point a functioning client, we will keep on regarding your own data as portrayed in this Privacy Policy, as corrected every once in a while.</p><p>ii. Use By Those Over Thirteen: This site isn't coordinated towards kids and we don't mean to advertise any items or administrations to youngsters under thirteen (13) years old. We don't intentionally assemble or request information from youngsters under thirteen (13) years old through this site under any circumstance. By utilizing this site, you address that you are not under thirteen (13) years old.</p>
                        <p>iii. Revisions or Concerns: If you accept any of your own data kept up is wrong, or in the event that you have a security related concern, kindly reach us. </p>
                     
                    </div>
                </div>
                <div class="content-item">
                    <h5 class="content-title">5. UPDATES </h5>
                    <div class="content">
                        <p>Every now and then, we may refresh or correct this Privacy Policy and will inform you of those progressions as legally necessary. Changes in our Privacy Policy will be posted on this page and supplant any earlier posted Privacy Policy. You may see the most current form of the Privacy Policy whenever by mentioning a duplicate from any of our workplaces, or by visiting our site at www.toploansadviser.com.</p>
                    </div>
                </div>
            </div>
        </div>
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
@import '../assets/scss/privacy.scss';
</style>