<template>
    <div class="container">
        <div class="heading text-center mb-3">
            <h2 class="title">Deals & Outlet</h2>

            <p class="title-desc">Today’s deal and more</p>
        </div>

        <div class="row">
            <div class="col-lg-6 deal-col">
                <div class="deal" v-lazy:background-image="'./images/home/deals/bg-1.jpg'">
                    <div class="deal-top">
                        <h2>Deal of the Day.</h2>
                        <h4>Limited quantities.</h4>
                    </div>

                    <div class="deal-content">
                        <h3 class="product-title">
                            <nuxt-link
                                to="/product/default/home-smart-speaker-with-google-assistant"
                            >Home Smart Speaker with Google Assistant</nuxt-link>
                        </h3>

                        <div class="product-price">
                            <span class="new-price">$129.99</span>
                            <span class="old-price">Was $159.99</span>
                        </div>

                        <nuxt-link
                            to="/product/default/home-smart-speaker-with-google-assistant"
                            class="btn btn-link"
                        >
                            <span>Shop Now</span>
                            <i class="icon-long-arrow-right"></i>
                        </nuxt-link>
                    </div>

                    <div class="deal-bottom">
                        <count-down
                            wrap="deal-countdown daily-deal-countdown"
                            until="+10h"
                            format="HMS"
                        ></count-down>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 deal-col">
                <div class="deal" v-lazy:background-image="'./images/home/deals/bg-2.jpg'">
                    <div class="deal-top">
                        <h2>Your Exclusive Offers.</h2>
                        <h4>Sign in to see amazing deals.</h4>
                    </div>

                    <div class="deal-content">
                        <h3 class="product-title">
                            <nuxt-link
                                to="/product/default/microsoft-refurbish-xbox-one-s-500gb"
                            >Microsoft – Refurbish Xbox One S 500GB</nuxt-link>
                        </h3>

                        <div class="product-price">
                            <span class="new-price">$29.99</span>
                        </div>

                        <nuxt-link to="/pages/login" class="btn btn-link">
                            <span>Sign In and Save money</span>
                            <i class="icon-long-arrow-right"></i>
                        </nuxt-link>
                    </div>

                    <div class="deal-bottom">
                        <count-down
                            wrap="deal-countdown daily-deal-countdown"
                            until="+11h"
                            format="HMS"
                        ></count-down>
                    </div>
                </div>
            </div>
        </div>

        <div class="more-container text-center mt-1 mb-5">
            <nuxt-link to="/shop/sidebar/3cols" class="btn btn-outline-dark-2 btn-round btn-more">
                <span>Shop more Outlet deals</span>
                <i class="icon-long-arrow-right"></i>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import CountDown from '~/components/elements/CountDown';
export default {
    components: {
        CountDown
    }
};
</script>