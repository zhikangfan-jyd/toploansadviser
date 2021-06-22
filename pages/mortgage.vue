<template>
  <main class="main-container">
    <section class="banner-area">
      <div class="banner-container">
        <div class="banner-content">
          <h1 class="website-title">Best Mortgage Lenders 2021</h1>
          <p class="sub-title">Last updated: {{updateTime().month.short}} {{updateTime().year}}</p>
          <div class="content">
              <p>Lower interest rates mean that you can save real money on your mortgage. Compare our top-tier providers and find the best refinance rates for you.</p>
          </div>
        </div>
        <img src="@/assets/img/mortgage-banner.png" alt="Toploansadviser" class="banner-img">

      </div>
    </section>
    <div class="container">
      <section class="product-area">
        <div class="product-container">
          <div class="product-container-top-box">
            <ul class="category-box">
              <li @click="getData('purchase')" :class="{ 'current': filterName == 'purchase' }">Purchase</li>
              <li @click="getData('refinance')" :class="{ 'current': filterName == 'refinance' }">Refinance</li>
              <!-- <li @click="getData('home-equity')" :class="{ 'current': filterName == 'home-equity' }">Home Equity</li> -->
            </ul>
            <div class="disclosure">
              <nuxt-link to="/disclosure" class="title">Advertising Disclosure</nuxt-link>
            </div>

          </div>
          <div class="product-list-box">
            <div class="product-title-box">
              <div class="title lenders"><span class="text">Mortgage Lenders</span></div>
              <div class="title score">
                <span class="text">
                  Score 
                  <el-popover
                    placement="bottom"
                    width="290"
                    trigger="hover"
                    popper-class="popper"
                    >
                    <span class="iconfont" slot="reference">&#xe669;</span>
                    <div class="content" style="padding: 10px;">
                      <div class="content-item" style="margin-bottom: 20px;">
                        <h6 class="content-title" style="font-size: 14px;font-family:'Poppins-SemiBold';margin-bottom: 5px;">TrustPilot Score</h6>
                        <p class="desc" style="font-size: 14px;margin-bottom: 5px;">Based on Real User Reviews</p>
                        <div class="bar-container" style="display: flex; align-items: center; justify-content: space-between;">
                          <div class="bar-box" style="width: 240px; height: 10px;background-color: #d3d6d6;border-radius: 7px;overflow: hidden; ">
                            <div class="bar" style="width: 30%;height: 100%;background-color: #29b674;border-radius: 7px;"></div>
                          </div>
                          <span class="text">30%</span>
                        </div>
                      </div>
                      <div class="content-item" style="margin-bottom: 15px;">
                        <h6 class="content-title" style="font-size: 14px;font-family:'Poppins-SemiBold';margin-bottom: 5px;">Click Trend</h6>
                        <p class="desc" style="font-size: 14px;margin-bottom: 5px;">Based on the past 7 days</p>
                        <div class="bar-container" style="display: flex; align-items: center; justify-content: space-between;">
                          
                          <div class="bar-box" style="width: 240px; height: 10px;background-color: #d3d6d6;border-radius: 7px;overflow: hidden; ">
                            <div class="bar" style="width: 40%;height: 100%;background-color: #ffd044;border-radius: 7px;"></div>

                          </div>
                        <span class="text">40%</span>
                        </div>
                      </div>
                      <div class="content-item">
                        <h6 class="content-title" style="font-size: 14px;font-family:'Poppins-SemiBold';margin-bottom: 5px;">Products And Features</h6>
                        <p class="desc" style="font-size: 14px;margin-bottom: 5px;">Based On our editorial reviews</p>
                        <div class="bar-container" style="display: flex; align-items: center; justify-content: space-between;">
                          
                          <div class="bar-box" style="width: 240px; height: 10px;background-color: #d3d6d6;border-radius: 7px;overflow: hidden; ">
                            <div class="bar" style="width: 30%;height: 100%;background-color: #1564bf;border-radius: 7px;"></div>
                          </div>
                          <span class="text">30%</span>
                        </div>
                      </div>
                      
                    </div>
                  </el-popover>
                </span>
              </div>
              <div class="title features"><span class="text">Loan Features</span></div>
              <div class="title terms"><span class="text"></span></div>
              
            </div>
            <div class="product-list" v-if="!loading">
              <div class="product-item" v-for="(item,index) in products" :key="item.name">
                <div class="corner-box" v-if="index == 0">
                  <span class="text">LOW RATES</span>
                </div>
                <div class="visited-box" v-if="index == 0">
                  <span class="iconfont"></span>
                  <span class="text">285 users chose this site today</span>
                </div>
                
                <div class="product-item-container">
                  <div class="img-score-box">
                    <div class="img-box">
                      <img v-lazy="item.logo" alt="">
                    </div>
                    <div class="rate-box">
                      <div class="rate">
                        <span class="score">{{item.rate.score}}</span>
                        <!-- <div class="trustpilot-box" v-if="index == 0">
                          <div class="text-box">
                            <span class="iconfont">&#xe64c;</span>
                            <span class="text">Trustpilot</span>
                          </div>
                          <ul class="star-list">
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                            <li>
                              <span class="iconfont">&#xe64c;</span>
                            </li>
                          </ul>
                        </div> -->
                        <div class="star-box">
                          <el-rate
                          disabled
                          :value="computeScore(item.rate.score)"
                          :colors="['#29b674','#29b674','#29b674']"
                          ></el-rate>
                        </div>
                        <!-- <nuxt-link v-if="item.review_key != ''" :to="'/reviews/' + item.review_key" class="reviews-link">Read Review</nuxt-link> -->
                        <span class="score-text"><strong>LoanAdviser</strong> score</span>
                      </div>
                    </div>
                  </div>
                  <div class="features-terms-box">
                    <div class="list-box">
                      <dl class="features-list">
                        <dt>
                          <!-- <span class="pc-text">Easily Compare & Save</span> -->
                          <span class="phone-text">Loan Features</span>
                        </dt>
                        <dd>
                          <p class="text">{{item.slogan}}</p>
                        </dd>
                        <dd v-for="(it,id) in item.meritList" :key="id">
                          <span class="iconfont">&#xe65a;</span>
                          <p class="text">{{it.text}}</p>
                        </dd>
                      </dl>
                      <div class="details-box" @click="handleShow(index)">
                          <span class="text">view detail</span>
                          <span class="iconfont">&#xe600;</span>
                      </div>
                      <div class="phone-details-box" @click="handlePhoneShow(index)">
                          <span class="text">view detail</span>
                          <span class="iconfont">&#xe600;</span>
                      </div>
                    </div>
                    

                  </div>
                  <div class="phone-key-facts-container">
                      <span class="title">Key Facts</span>
                            <ul class="phone-key-facts-list">
                                <li v-if="item.key_facts.mortgage_types != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Mortgage types: {{item.key_facts.mortgage_types}}.</p>
                                </li>
                                <li v-if="item.key_facts.credit_score != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Min. Credit Score: <span>{{item.key_facts.credit_score}}</span></p>
                                </li>
                                <li v-if="item.key_facts.apr != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">APR <span>{{item.key_facts.apr}}</span></p>
                                 </li>
                                <li v-if="item.key_facts.NMLS != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">NMLS#: <span>{{item.key_facts.NMLS}}</span></p>
                                </li>
                            </ul>
                    </div>
                  <div class="btn-box">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" @click="handleTracking({name: item.name,click_time: new Date().getTime(),link: item.link})" class="btn">

                      <span class="text">View Rates</span>
                      <span class="iconfont">&#xeb1b;</span>
                    </a>
                    <a :href="item.link" target="_blank" rel="noopener noreferrer nofollow" class="quicken-loasn-btn">
                        <span class="text">Visit Quicken Loans</span>
                        <span class="iconfont">&#xe63c;</span>

                    </a>
                  </div>
                </div>
                <div class="product-content-container">
                  <div class="product-content-container-box">

                  
                    <div class="pros-cons-box">
                        <div class="pros-box">
                            <span class="title">Pros:</span>
                            <ul class="pros-list">
                                <li v-for="(it,id) in item.pros" :key="id">
                                    <span class="circle">●</span>
                                    <p class="text">{{it.text}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="cons-box">
                            <span class="title">Cons:</span>
                            <ul class="cons-list">
                                <li v-for="(it,id) in item.cons" :key="id">
                                    <span class="circle">●</span>
                                    <p class="text">{{it.text}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="review-key_facts-box">

                    
                        <div class="key-facts-box">
                            <span class="title">Key Facts</span>
                            <ul class="key-facts-list">
                                <li v-if="item.key_facts.mortgage_types != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Mortgage types: {{item.key_facts.mortgage_types}}.</p>
                                </li>
                                <li v-if="item.key_facts.credit_score != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Min. Credit Score: <span>{{item.key_facts.credit_score}}</span></p>
                                </li>
                                <li v-if="item.key_facts.apr != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">APR <span>{{item.key_facts.apr}}</span></p>
                                 </li>
                                <li v-if="item.key_facts.NMLS != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">NMLS#: <span>{{item.key_facts.NMLS}}</span></p>
                                </li>
                            </ul>
                        </div>
                        <div class="review-link-box">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer" class="review-btn">
                                <span class="text">Check My Rate</span>
                                <span class="iconfont">&#xe63c;</span>
                            </a>
                        </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="loading-box" v-else style="display: flex; justify-content: center; align-items: center;">
                <img src="~/assets/img/img-loading.gif" alt="" style="height: 200px;">
              </div>
          </div>
          
          <div class="more-box" v-if="products.length > pageSize">
            <button v-if="isNull" class="btn" @click="loadMore">
              <span class="text">SEE MORE</span>
             <span class="iconfont">&#xe600;</span>
            </button>
            <button v-else class="btn close" @click="closeMore">
              <span class="text">COLLAPSE</span>
             <span class="iconfont">&#xe600;</span>
            </button>
          </div>
        </div>
      </section>
      <section class="pick-area">
        <div class="pick-container">

        
          <div class="pick-item-container">
            <h2 class="area-title">Our Pick For Purchase</h2>
            <div class="product-item">
                  <div class="corner-box">
                    <span class="text">LOW RATES</span>
                  </div>
                  <div class="product-item-container">
                    <div class="img-score-box">
                      <div class="img-box">
                        <img v-lazy="purchase_product.logo" alt="">
                      </div>
                      <div class="rate-box">
                        <div class="rate">
                          <span class="score">{{purchase_product.rate.score}}</span>
                          <!-- <div class="trustpilot-box" v-if="index == 0">
                            <div class="text-box">
                              <span class="iconfont">&#xe64c;</span>
                              <span class="text">Trustpilot</span>
                            </div>
                            <ul class="star-list">
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                            </ul>
                          </div> -->
                          <div class="star-box">
                            <el-rate
                            disabled
                            :value="computeScore(purchase_product.rate.score)"
                            :colors="['#29b674','#29b674','#29b674']"
                            ></el-rate>
                          </div>
                          <!-- <nuxt-link v-if="item.review_key != ''" :to="'/reviews/' + item.review_key" class="reviews-link">Read Review</nuxt-link> -->
                          <span class="score-text"><strong>LoanAdviser</strong> score</span>
                        </div>
                      </div>
                    </div>
                    <div class="features-terms-box">
                      <div class="list-box">
                        <dl class="features-list">
                          <dt>
                            <!-- <span class="pc-text">Easily Compare & Save</span> -->
                            <span class="phone-text">Loan Features</span>
                          </dt>
                          <dd>
                            <p class="text">{{purchase_product.slogan}}</p>
                          </dd>
                          <dd v-for="(it,id) in purchase_product.meritList" :key="id">
                            <span class="iconfont">&#xe65a;</span>
                            <p class="text">{{it.text}}</p>
                          </dd>
                        </dl>
                        <div class="details-box purchase-details" @click="handlePickShow('purchase')">
                            <span class="text">view detail</span>
                            <span class="iconfont">&#xe600;</span>
                        </div>
                        <div class="phone-details-box purchase-phone-details" @click="handlePhonePickShow('purchase')">
                          <span class="text">view detail</span>
                          <span class="iconfont">&#xe600;</span>
                        </div>
                      </div>
                      

                    </div>
                    <div class="phone-key-facts-container purchase-phone-container">
                      <span class="title">Key Facts</span>
                            <ul class="phone-key-facts-list">
                                <li v-if="purchase_product.key_facts.mortgage_types != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Mortgage types: {{purchase_product.key_facts.mortgage_types}}.</p>
                                </li>
                                <li v-if="purchase_product.key_facts.credit_score != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Min. Credit Score: <span>{{purchase_product.key_facts.credit_score}}</span></p>
                                </li>
                                <li v-if="purchase_product.key_facts.apr != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">APR <span>{{purchase_product.key_facts.apr}}</span></p>
                                 </li>
                                <li v-if="purchase_product.key_facts.NMLS != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">NMLS#: <span>{{purchase_product.key_facts.NMLS}}</span></p>
                                </li>
                            </ul>
                    </div>
                    <div class="btn-box">
                      <a :href="purchase_product.link" target="_blank" rel="noopener noreferrer nofollow" @click="handleTracking({name: purchase_product.name,click_time: new Date().getTime(),link: purchase_product.link})" class="btn">

                        <span class="text">View Rates</span>
                        <span class="iconfont">&#xeb1b;</span>
                      </a>
                      <a :href="purchase_product.link" target="_blank" rel="noopener noreferrer nofollow" class="quicken-loasn-btn">
                          <span class="text">Visit Quicken Loans</span>
                          <span class="iconfont">&#xe63c;</span>

                      </a>
                    </div>
                  </div>
                  <div class="product-content-container purchase-container">
                    <div class="product-content-container-box">

                    
                      <div class="pros-cons-box">
                          <div class="pros-box">
                              <span class="title">Pros:</span>
                              <ul class="pros-list">
                                  <li v-for="(it,id) in purchase_product.pros" :key="id">
                                      <span class="circle">●</span>
                                      <p class="text">{{it.text}}</p>
                                  </li>
                              </ul>
                          </div>
                          <div class="cons-box">
                              <span class="title">Cons:</span>
                              <ul class="cons-list">
                                  <li v-for="(it,id) in purchase_product.cons" :key="id">
                                      <span class="circle">●</span>
                                      <p class="text">{{it.text}}</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="review-key_facts-box">

                      
                          <div class="key-facts-box">
                              <span class="title">Key Facts</span>
                              <ul class="key-facts-list">
                                  <li v-if="purchase_product.key_facts.mortgage_types != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">Mortgage types: {{purchase_product.key_facts.mortgage_types}}.</p>
                                  </li>
                                  <li v-if="purchase_product.key_facts.credit_score != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">Min. Credit Score: <span>{{purchase_product.key_facts.credit_score}}</span></p>
                                  </li>
                                  <li v-if="purchase_product.key_facts.apr != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">APR <span>{{purchase_product.key_facts.apr}}</span></p>
                                  </li>
                                  <li v-if="purchase_product.key_facts.NMLS != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">NMLS#: <span>{{purchase_product.key_facts.NMLS}}</span></p>
                                  </li>
                              </ul>
                          </div>
                          <div class="review-link-box">
                              <a :href="purchase_product.link" target="_blank" rel="noopener noreferrer" class="review-btn">
                                  <span class="text">Check My Rate</span>
                                  <span class="iconfont">&#xe63c;</span>
                              </a>
                          </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div class="pick-item-container">
            <h2 class="area-title">Our Pick For Refinance</h2>
            <div class="product-item">
                  <div class="corner-box suitable">
                    <span class="text">SUITABLE</span>
                  </div>
                  <div class="product-item-container">
                    <div class="img-score-box">
                      <div class="img-box">
                        <img v-lazy="refinance_product.logo" alt="">
                      </div>
                      <div class="rate-box">
                        <div class="rate">
                          <span class="score">{{refinance_product.rate.score}}</span>
                          <!-- <div class="trustpilot-box" v-if="index == 0">
                            <div class="text-box">
                              <span class="iconfont">&#xe64c;</span>
                              <span class="text">Trustpilot</span>
                            </div>
                            <ul class="star-list">
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                              <li>
                                <span class="iconfont">&#xe64c;</span>
                              </li>
                            </ul>
                          </div> -->
                          <div class="star-box">
                            <el-rate
                            disabled
                            :value="computeScore(refinance_product.rate.score)"
                            :colors="['#29b674','#29b674','#29b674']"
                            ></el-rate>
                          </div>
                          <!-- <nuxt-link v-if="item.review_key != ''" :to="'/reviews/' + item.review_key" class="reviews-link">Read Review</nuxt-link> -->
                          <span class="score-text"><strong>LoanAdviser</strong> score</span>
                        </div>
                      </div>
                    </div>
                    <div class="features-terms-box">
                      <div class="list-box">
                        <dl class="features-list">
                          <dt>
                            <!-- <span class="pc-text">Easily Compare & Save</span> -->
                            <span class="phone-text">Loan Features</span>
                          </dt>
                          <dd>
                            <p class="text">{{refinance_product.slogan}}</p>
                          </dd>
                          <dd v-for="(it,id) in refinance_product.meritList" :key="id">
                            <span class="iconfont">&#xe65a;</span>
                            <p class="text">{{it.text}}</p>
                          </dd>
                        </dl>
                        <div class="details-box refinance-details" @click="handlePickShow('refinance')">
                            <span class="text">view detail</span>
                            <span class="iconfont">&#xe600;</span>
                        </div>
                        <div class="phone-details-box refinance-phone-details" @click="handlePhonePickShow('refinance')">
                          <span class="text">view detail</span>
                          <span class="iconfont">&#xe600;</span>
                        </div>
                      </div>
                      

                    </div>
                    <div class="phone-key-facts-container refinance-phone-container">
                      <span class="title">Key Facts</span>
                            <ul class="phone-key-facts-list">
                                <li v-if="refinance_product.key_facts.mortgage_types != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Mortgage types: {{refinance_product.key_facts.mortgage_types}}.</p>
                                </li>
                                <li v-if="refinance_product.key_facts.credit_score != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">Min. Credit Score: <span>{{refinance_product.key_facts.credit_score}}</span></p>
                                </li>
                                <li v-if="refinance_product.key_facts.apr != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">APR <span>{{refinance_product.key_facts.apr}}</span></p>
                                 </li>
                                <li v-if="refinance_product.key_facts.NMLS != ''">
                                    <span class="iconfont">&#xe65a;</span>
                                    <p class="text">NMLS#: <span>{{refinance_product.key_facts.NMLS}}</span></p>
                                </li>
                            </ul>
                    </div>
                    <div class="btn-box">
                      <a :href="refinance_product.link" target="_blank" rel="noopener noreferrer nofollow" @click="handleTracking({name: refinance_product.name,click_time: new Date().getTime(),link: refinance_product.link})" class="btn">

                        <span class="text">View Rates</span>
                        <span class="iconfont">&#xeb1b;</span>
                      </a>
                      <a :href="refinance_product.link" target="_blank" rel="noopener noreferrer nofollow" class="quicken-loasn-btn">
                          <span class="text">Visit Quicken Loans</span>
                          <span class="iconfont">&#xe63c;</span>

                      </a>
                    </div>
                  </div>
                  <div class="product-content-container refinance-container">
                    <div class="product-content-container-box">

                    
                      <div class="pros-cons-box">
                          <div class="pros-box">
                              <span class="title">Pros:</span>
                              <ul class="pros-list">
                                  <li v-for="(it,id) in refinance_product.pros" :key="id">
                                      <span class="circle">●</span>
                                      <p class="text">{{it.text}}</p>
                                  </li>
                              </ul>
                          </div>
                          <div class="cons-box">
                              <span class="title">Cons:</span>
                              <ul class="cons-list">
                                  <li v-for="(it,id) in refinance_product.cons" :key="id">
                                      <span class="circle">●</span>
                                      <p class="text">{{it.text}}</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="review-key_facts-box">

                      
                          <div class="key-facts-box">
                              <span class="title">Key Facts</span>
                              <ul class="key-facts-list">
                                  <li v-if="refinance_product.key_facts.mortgage_types != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">Mortgage types: {{refinance_product.key_facts.mortgage_types}}.</p>
                                  </li>
                                  <li v-if="refinance_product.key_facts.credit_score != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">Min. Credit Score: <span>{{refinance_product.key_facts.credit_score}}</span></p>
                                  </li>
                                  <li v-if="refinance_product.key_facts.apr != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">APR <span>{{refinance_product.key_facts.apr}}</span></p>
                                  </li>
                                  <li v-if="refinance_product.key_facts.NMLS != ''">
                                      <span class="iconfont">&#xe65a;</span>
                                      <p class="text">NMLS#: <span>{{refinance_product.key_facts.NMLS}}</span></p>
                                  </li>
                              </ul>
                          </div>
                          <div class="review-link-box">
                              <a :href="refinance_product.link" target="_blank" rel="noopener noreferrer" class="review-btn">
                                  <span class="text">Check My Rate</span>
                                  <span class="iconfont">&#xe63c;</span>
                              </a>
                          </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
      <section class="faq-area">
        <div class="faq-area-title-box">
          <img src="@/assets/img/faq.png" alt="Toploansadviser" class="pic">
          <div class="faq-content">
            <h2 class="faq-title">
              <span>FAQ's</span>
              <span>About Mortgage Loans</span>
            </h2>
            <div class="content">
              <p>Before taking a student loan be sure you familiarize yourself with all the terms and conditions associated with the loan. To help you get started, we’ve compiled some of the most frequently asked questions about student loans below.</p>
            </div>
          </div>
        </div>
        <div class="faq-container">
            <div class="faq-item">
                <h2 class="title">How Does the Mortgage Loan Process Work?</h2>
                <div class="content">
                    <p>Whether you are buying a home or refinancing one, the mortgage process is basically similar to one another. Here is an introductory look at what happens when you’re mortgaging/refinancing a home:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Turn In Mortgage Application</strong> – The majority of home lenders provide an online application process. Fill it out, submit the form along with pertinent documentation.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Wait To Receive Loan Estimate</strong> – A lender is required to give you an estimate within three business days of a submitted application. The document needs to entail three things – monthly mortgage rate, estimated interest rate and closing costs.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Set Up A Home Inspection</strong> – Be sure to communicate with the seller about dates and times for a home inspection. An inspection will help uncover potential problems.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Get A Home Appraisal</strong> – Ask your lender to provide you with an appraiser to determine the home’s value. You will need to pay for this appraisal.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Buy Homeowners Insurance</strong> – This is a necessity before a bank approves a loan.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Wait Until Underwriting Is Completed</strong> – You’ll need to wait for the bank to prepare the loan documents, and it can take some time.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Begin Underwriting Process</strong> – Underwriters, using manual or automated systems, can take days or weeks to approve or decline loans.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Review Closing Disclosure Documents</strong> – Within three business days, the loan documents will arrive. Be sure to review the mortgage documents before signing. You want to compare the disclosure to the lender’s recent loan estimate to ensure no significant changes.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Close On The Loan</strong> – At this point, all parties involved in the mortgage transaction will need to sign the pertinent documents. Afterward, you pay the closing costs and down payment.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="faq-item">
                <h2 class="title">Understanding The Mortgage Interest and How It’s Calculated</h2>
                <div class="content">
                    <p>The mortgage interest rate is the yearly cost of financing your home, noted in a percentage of the loan amount. For example, a 2.75% interest rate on your mortgage means an additional 2.75% on the remaining balance is added. </p>
                    <p>There are two types of interest rates: fixed and adjustable.</p>
                </div>
                <h2 class="small-title">Fixed-Rate</h2>
                <div class="content">
                    <p>With a fixed-rate mortgage, the interest rate stays the same throughout the life of the loan. This means the monthly mortgage payment also remains the same. You don’t have to worry about increasing costs, but you don’t benefit unless you choose to refinance if the market drops.</p>
                    <p>Fixed-rate mortgages tend to have a higher initial monthly payment because the lender is unable to raise the interest rate when the market dictates it.</p>
                   
                </div>
                <h2 class="small-title">Adjustable-Rate</h2>
                <div class="content">
                    <p>If you have an adjustable-rate mortgage, the interest rate is tied to the market rates. It’s subjected to the market’s movements, using a benchmark rate (i.e., prime rate). When the benchmark rate increases, your monthly mortgage payment will increase. When it falls, your mortgage payment will also decline.</p>
                    <p>This kind of rate is only ideal when you’re going to sell or refinance your home before an increase in rates or if you believe there were be a decline in the market.</p>
                    <p>How do you know which one is best for you? It will depend on three things:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Market conditions</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Your individual finances</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">How long you intend to maintain the mortgage </p>
                        </li>
                    </ul>
                    <p>When it comes to determining your mortgage interest rate, there are several factors that lenders will consider of you, the home, the loan, and current economic conditions. Such factors are:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Property type and use</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Your credit history</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Home price</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Down payment</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Loan term</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Market rates</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Interest rate type</p>
                        </li>
                    </ul>
                    <p>When looking at the different offers, it’s important to consider the annual percentage rate (APR) and interest rate percentage. The interest rate calculates how much you’re borrowing every year. The APR denotes the interest rate as well as the origination fees, discount points and closing costs</p>
                </div>
            </div>
            
            <div class="faq-item">
                <h2 class="title">8 Steps To Applying For A Home Mortgage</h2>
                <div class="content">
                    <p>Be sure to begin the mortgage pre-approval process before you look at homes. This is important for three reasons:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">You’ll know how much you are approved for and can look for homes in that price range.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Many sellers required buyers to be pre-approved.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text">Pre-approval means you can submit an offer as soon you find the home you want to buy.</p>
                        </li>
                    </ul>
                    
                    <p>From that point, here is what you’ll need to do:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Analyze Your Credit History</strong> – Look at your credit report and its history before applying for a mortgage. If there are any mistakes (that affect the score), address them immediately with all three credit bureaus – TransUnion, Experian and Equifax. If your score is low, make sure to improve them first.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Prepare Documents</strong> – The bank will request pay stubs, bank account statements, and tax returns to be submitted with the loan application.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Compare Shop With Different Lenders</strong> – If you comparison shop in a 45-day window, your credit score will suffer only slightly.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Review Offers</strong> – Any lender you applied with will give you a loan estimate that includes monthly payment, interest rate, closing costs and other important information.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Pick Your Lender</strong> – Once you’ve reviewed each loan term, pick the lender best for you.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Ensure Quick Responses To Any Requests Made</strong> – When your loan goes through the processing and underwriting, the lender may request something. Be sure to respond as quickly as you can to move this process along faster. </p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Review Closing Disclosure</strong> – The lender is required to give you a closing disclosure, showing you the final mortgage costs, the interest rate, fees, etc., within three business days of the closing date scheduled. Look at the closing disclosure and the loan estimate they initially provided to determine if and why fees changed. </p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Close On The Home</strong> – At the closing, you’ll sign a plethora of documents to ensure the home reverts to your possessions. You will also be required to pay the down payment and up to 5% closing costs.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="faq-item">
                <h2 class="title">How To Find The Best Possible Mortgage Lender</h2>
                <div class="content">
                    <p>When looking at each mortgage company, there are four factors to consider:</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Interest Rate</strong> – Interest will vary by product and lender; make sure you’re comparison shopping to find the best possible deal</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Closing Costs</strong> – Closing costs will include the application, loan origination and appraisal fees, so even though a lender offers a low rate compared to others, the mortgage costs may not make it the best. Use the APR to compare the lenders’ offers.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Product Offerings</strong> – Look for a state-licensed lender that offers great options for you – be it a VA loan, 30-year-fixed rate loan, etc.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>Customer Service Reviews</strong> – Read reviews and feedback to learn more about the lender. You want lenders who treat their customers with respect as well as offer a good loan rate</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="faq-item">
                <h2 class="title">What Kind Of Mortgage Will Suit You?</h2>
                <div class="content">
                    <p>Your individual situation – plans, preferences and finances – will dictate what the best mortgage is. The most common kind of mortgages are:</p>
                    <h6 class="small-title">Adjustable-Rate Mortgages</h6>
                    <p>Monthly payments and interest rates are affected by the market, which means you could pay more or less during the life of the loan. Early adjustable-rate mortgages are low, but rates can spike unexpectedly (leaving some borrowers unable to pay).</p>
                    <h6 class="small-title">Balloon Mortgages</h6>
                    <p>These are loans with short-term interest payments of five to 10 years, which then require the homeowner to make a lump sum payment. This may be ideal for individuals who are going to sell or refinance the home before the impending balloon payment is due.</p>
                    <h6 class="small-title">Conforming Loans</h6>
                    <p>The loans are subjected to the limits and guidelines as laid out by Fannie Mae and Freddie Mac.</p>
                    <h6 class="small-title">Conventional Mortgages</h6>
                    <p>These mortgages originate from private lenders and are not federally backed by the government. To qualify, private lenders want a minimum 620 credit score, a low debt-to-income ratio and a minimum 3% down payment. Any down payment less than 20% must include private mortgage insurance.</p>
                    <h6 class="small-title">Fixed-Rate Mortgages</h6>
                    <p>Loans with a fixed rate mean payments and interest rate remain the same (great for budgeters). However, if the rate falls, you will need to refinance if you want to benefit financially. </p>
                    <h6 class="small-title">Government-Backed Loans</h6>
                    <p>These are loans from the Department of Agriculture, Department of Veterans Affairs and Federal Housing Administration. If you are unable to get a convention loan, you could attain a government-backed loan.</p>
                    <ul>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>FHA</strong> – The majority of FHA-backed lenders want a minimum of 580 in credit score and a 3.5% down payment. However, you could be approved if you agree to pay a 10% down payment even if your credit score is 500 to 579.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>VA</strong> – The VA has no requirements about down payments or credit score minimums, but a lender will do an in-depth analysis of your financial profile. A lender will need to see the Certificate of Eligibility (COE) that shows you are eligible for a VA loan.</p>
                        </li>
                        <li>
                            <span class="circle">●</span>
                            <p class="text"><strong>USDA</strong> – The majority of lenders who do USDA loans do not require money down but a minimum of 640 credit score. A home must be located in a permissible rural area, and you have to meet specific income requirements.</p>
                        </li>
                    </ul>
                    <h6 class="small-title">Nonconforming Loans</h6>
                    <p>These are jumbo or government-backed loans that don’t meet the criteria set forth by Fannie Mae or Freddie Mac. Jumbo loans surpass the limits of a conforming loan and have stringent qualifications for eligibility due to lenders’ risk.</p>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  </main>
</template>

<script>
import { computeScore } from '../utils/index'
import { updateTime } from '../utils/date'
export default {
  // async asyncData({ $axios, redirect, route }) {

  //   // 拼接 msclkid 参数
  //   const changeLink = (url) => {
  //     let msclkid = route.query['msclkid'];
  //     return `${url}&msclkid=${msclkid}`
  //   }

  //   try {
  //     // 获取所有产品
  //     let product_results = await $axios.$get('/data/mortgage_product.json');

  //     // 给所有 是www.creditble.com 的链接后面都拼接 参数
  //     product_results.data.forEach(ele => {
  //       if (ele.link.indexOf('www.credible.com') != -1) {
  //         ele.link = changeLink(ele.link);
  //       }
  //     })

  //     return {
  //       count: product_results.data.length,
  //       allProducts: product_results.data,
  //       overallData: product_results.data.slice(0,2)
  //     }
  //   } catch (error) {
  //     redirect('/error')
  //   }
  // },
  data() {
    return {
      loading: false,
      filterName: '',
      count: 0,
      allProducts: [],
      isNull: true,
      page: 1,
      pageSize: 5,
      products: [],
      
      purchase_product: {
            "name": "Credible",
            "review_key": "",
            "link": "https://www.credible.com/",
            "logo": "/data/images/credible.png",
            "rate": {
                "max": 10,
                "score": "9.8"
            },
            "slogan": "1 Application, Several Offers",
            "meritList": [
                {
                    "text": "Compare rates in minutes"
                },
                {
                    "text": "Easy process, 100% online"
                },
                {
                    "text": "Secured website with data encryption"
                }
            ],
            "key_facts": {
                "mortgage_types": "jumbo, conventional, refinance",
                "credit_score": "620",
                "apr": "set by lender",
                "NMLS": "1681276"
            },
            "pros": [
                {
                    "text": "No fees to use Credible’s services"
                },
                {
                    "text": "Find out your actual rate without a hard credit check"
                },
                {
                    "text": "E-verification for many financial documents"
                }
            ],
            "cons": [
                {
                    "text": "Credible doesn’t operate in several large states"
                },
                {
                    "text": "No face-to-face customer support"
                }
            ]
            
        },
      refinance_product: {
            "name": "LoanDepot",
            "review_key": "",
            "link": "https://www.loandepot.com/",
            "logo": "/data/images/loandepot.png",
            "rate": {
                "max": 10,
                "score": "9.8"
            },
            "slogan": "No Login/Registration Required",
            "meritList": [
                {
                    "text": "Has funded over $65 billion in home loans"
                },
                {
                    "text": "Clearance in as little as 8 days"
                },
                {
                    "text": "Mello smartloan™ digital asset verification"
                }
            ],
            "key_facts": {
                "mortgage_types": "purchase, refinance, adjustable & fixed rates, jumbo & more",
                "credit_score": "620",
                "apr": "depends on type of loan & lender",
                "NMLS": "174457"
            },
            "pros": [
                {
                    "text": "Can choose face-to-face interaction by accessing over 150 affiliated loan stores in the United States"
                },
                {
                    "text": "Experienced FHA and VA lender"
                },
                {
                    "text": "Fannie Mae HomeStyle home improvement and FHA 302K fixer-upper loans available"
                },
                {
                    "text": "100% digital asset, employment, and income verification available"
                }
            ],
            "cons": [
                {
                    "text": "No home equity line of credit or loan products available"
                },
                {
                    "text": "USDA Rural Development loans not available"
                }
            ]
            
        }
    }
  },
  methods: {
    computeScore,
    updateTime,
    async getData(name) {
      this.loading = true;
      this.filterName = name;
      // 拼接 msclkid 参数
      const changeLink = (url) => {
        let msclkid = this.$route.query['msclkid'];

        return `${url}&msclkid=${msclkid}`
      }

      let path = '/data/mortgage_' + name + '.json'
      let product_results = await this.$axios.$get(path);
      // 给所有 是www.creditble.com 的链接后面都拼接 参数
      this.loading = false;
      product_results.data.forEach(ele => {
        if (ele.link.indexOf('www.credible.com') != -1) {
          ele.link = changeLink(ele.link);
        }
      })

      this.count = product_results.data.length,
      this.allProducts = product_results.data,
      this.page = 1;
      this.products = [];
      this.isNull = true;
      this.loadMore();

    },
    handleTracking(params) {
      // window.tracking();
      if (typeof window.uba != 'function') { return }
      window.uba(params);
    },
    // 点击加载更多数据
    loadMore() {
      let data = this.allProducts.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      this.products = this.products.concat(data)
      this.page++;
      if (this.products.length == this.count) {
        this.isNull = false
      }
      
    },
    // 关闭更多
    closeMore() {
      this.isNull = true;
      this.page = 1;
      this.products = [];
      this.loadMore();
    },
    handleShow(index) {
      this.$nextTick(() => {
        $('.product-content-container').eq(index).slideToggle('fast');
        $('.features-terms-box .details-box').eq(index).toggleClass('rotate')
      })
    },
    handlePhoneShow(index) {
      this.$nextTick(() => {
        $('.phone-key-facts-container').eq(index).slideToggle('fast');
        $('.phone-details-box').eq(index).toggleClass('rotate')
      })
    },
    handlePickShow(name) {
      this.$nextTick(() => {
        let box = '.'+ name + '-container';
        let detailDom = '.features-terms-box .details-box' + '.' + name + '-details'
        $(box).slideToggle('fast');
        $(detailDom).toggleClass('rotate')
      })
    },
    handlePhonePickShow(name) {
      this.$nextTick(() => {
        let container = '.' + name + '-phone-container';
        let detail = '.' + name + '-phone-details';
        $(container).slideToggle('fast');
        $(detail).toggleClass('rotate')
      })
    },
  },
  created() {
    this.getData('purchase');
    // this.loadMore();
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mortgage.scss';
</style>