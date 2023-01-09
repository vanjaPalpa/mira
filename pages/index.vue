<template>
    <div class="main home-page">
        <div class="intro-slider-container mb-5">
            <div class="intro-slider swiper-carousel swiper-1">
                <div v-swiper:swiper1="carouselSetting1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                v-lazy:background-image="'./images/home/sliders/slide-1.png'"
                            >
                                <div class="container intro-content">
                                    <div class="row justify-content-end">
                                        <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                            <h3
                                                class="intro-subtitle text-third"
                                            >Deals and Promotions</h3>

                                            <h1 class="intro-title">Beats by</h1>
                                            <h1 class="intro-title">Dre Studio 3</h1>

                                            <div class="intro-price">
                                                <sup class="intro-old-price">$349,95</sup>
                                                <span class="text-third">
                                                    $279
                                                    <sup>.99</sup>
                                                </span>
                                            </div>

                                            <nuxt-link
                                                to="/shop/sidebar/list"
                                                class="btn btn-primary btn-round"
                                            >
                                                <span>Shop More</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="intro-slide"
                                v-lazy:background-image="'./images/home/sliders/slide-2.png'"
                            >
                                <div class="container intro-content">
                                    <div class="row justify-content-end">
                                        <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                            <h3 class="intro-subtitle text-primary">New Arrival</h3>

                                            <h1 class="intro-title">
                                                Apple iPad Pro
                                                <br />12.9 Inch, 64GB
                                            </h1>

                                            <div class="intro-price">
                                                <sup>Today:</sup>
                                                <span class="text-primary">
                                                    $999
                                                    <sup>.99</sup>
                                                </span>
                                            </div>

                                            <nuxt-link
                                                to="/shop/sidebar/list"
                                                class="btn btn-primary btn-round"
                                            >
                                                <span>Shop More</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav nav-rounded">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
                <div class="swiper-dots swiper-dots-inner"></div>
            </div>
        </div>

        <div class="container">
            <h2 class="title text-center mb-4">Explore Popular Categories</h2>

            <div class="cat-blocks-container">
                <div class="row">
                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=computers" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/1.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Computer & Laptop</h3>
                        </nuxt-link>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=cameras" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/2.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Digital Cameras</h3>
                        </nuxt-link>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=accessories" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/3.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Smart Phones</h3>
                        </nuxt-link>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=televisions" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/4.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Televisions</h3>
                        </nuxt-link>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=audio" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/5.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Audio</h3>
                        </nuxt-link>
                    </div>

                    <div class="col-6 col-sm-4 col-lg-2">
                        <nuxt-link to="/shop/sidebar/3cols?category=watches" class="cat-block">
                            <figure>
                                <span>
                                    <img
                                        v-lazy="'./images/home/cats/6.png'"
                                        alt="Category"
                                        class="bg-transparent"
                                    />
                                </span>
                            </figure>

                            <h3 class="cat-block-title">Smart Watches</h3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-4"></div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="banner banner-overlay banner-overlay-light">
                        <nuxt-link to="/shop/sidebar/3cols">
                            <img
                                v-lazy="'./images/home/banners/banner-1.png'"
                                width="376"
                                height="160"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle">
                                <a href="#">Smart Offer</a>
                            </h4>

                            <h3 class="banner-title">
                                <a href="#">
                                    Save $150
                                    <strong>
                                        on Samsung
                                        <br />Galaxy Note9
                                    </strong>
                                </a>
                            </h3>

                            <nuxt-link to="/shop/sidebar/3cols" class="banner-link">
                                Shop Now
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="banner banner-overlay banner-overlay-light">
                        <nuxt-link to="/shop/sidebar/list">
                            <img
                                v-lazy="'./images/home/banners/banner-2.jpg'"
                                width="376"
                                height="160"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle">
                                <a href="#">Time Deals</a>
                            </h4>

                            <h3 class="banner-title">
                                <a href="#">
                                    <strong>Bose SoundSport</strong>
                                    <br />Time Deal -30%
                                </a>
                            </h3>

                            <nuxt-link to="/shop/sidebar/3cols" class="banner-link">
                                Shop Now
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="banner banner-overlay banner-overlay-light">
                        <nuxt-link to="/shop/sidebar/list">
                            <img
                                v-lazy="'./images/home/banners/banner-3.png'"
                                class="bg-transparent"
                                width="376"
                                height="160"
                                alt="Banner"
                            />
                        </nuxt-link>

                        <div class="banner-content">
                            <h4 class="banner-subtitle">
                                <a href="#">Clearance</a>
                            </h4>

                            <h3 class="banner-title">
                                <a href="#">
                                    <strong>GoPro - Fusion 360</strong>
                                    <br />Save $70
                                </a>
                            </h3>

                            <nuxt-link to="/shop/sidebar/3cols" class="banner-link">
                                Shop Now
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3"></div>

        <new-collection :products="newProducts" v-if="loaded"></new-collection>

        <div class="mb-6"></div>

        <div class="container">
            <div class="cta cta-border mb-5" v-lazy:background-image="'./images/home/bg-1.jpg'">
                <img
                    v-lazy="'./images/home/camera.png'"
                    alt="camera"
                    class="cta-img bg-transparent"
                />
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="cta-content d-flex">
                            <div class="cta-text text-right text-white">
                                <p>
                                    Shop Today’s Deals
                                    <br />
                                    <strong>Awesome Made Easy. HERO7 Black</strong>
                                </p>
                            </div>

                            <nuxt-link to="/shop/sidebar/list" class="btn btn-primary btn-round">
                                <span>Shop Now - $429.99</span>
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <deal-collection v-if="loaded"></deal-collection>

        <div class="container">
            <hr class="mb-0" />
            <div class="swiper-carousel brands-slider swiper-2 mb-5 mt-5">
                <div v-swiper:swiper2="carouselSetting2">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(brand, index) in homeData.brands"
                            :key="index"
                        >
                            <a href="#" class="brand">
                                <img
                                    :src="brand.image"
                                    class="bg-white"
                                    alt="Brand"
                                    :width="brand.width"
                                    :height="brand.height"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <trendy-collection :products="topProducts" v-if="loaded"></trendy-collection>
        <div class="mb-5"></div>
        <recommend-collection :products="products" v-if="loaded"></recommend-collection>

        <div class="mb-4"></div>

        <div class="container">
            <hr class="mb-0" />
        </div>

        <div class="icon-boxes-container bg-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-rocket"></i>
                            </span>
                            <div class="icon-box-content">
                                <h3 class="icon-box-title">Free Shipping</h3>

                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-rotate-left"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">Free Returns</h3>

                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-info-circle"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">Get 20% Off 1 Item</h3>

                                <p>when you sign up</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-life-ring"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">We Support</h3>

                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="cta bg-image bg-dark pt-4 pb-5 mb-0"
            v-lazy:background-image="'./images/home/bg-5.jpg'"
        >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-10 col-md-8 col-lg-6">
                        <div class="cta-heading text-center">
                            <h3 class="cta-title text-white">Get The Latest Deals</h3>

                            <p class="cta-desc text-white">
                                and receive
                                <span class="font-weight-normal">$20 coupon</span> for first shopping
                            </p>
                        </div>

                        <form action="#">
                            <div class="input-group input-group-round">
                                <input
                                    type="email"
                                    class="form-control form-control-white"
                                    placeholder="Enter your Email Address"
                                    aria-label="Email Adress"
                                    required
                                />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">
                                        <span>Subscribe</span>
                                        <i class="icon-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import NewCollection from '~/components/partial/home/NewCollection';
import DealCollection from '~/components/partial/home/DealCollection';
import TrendyCollection from '~/components/partial/home/TrendyCollection';
import RecommendCollection from '~/components/partial/home/RecommendCollection';
import NewsletterModal from '~/components/elements/modals/NewsletterModal';

import Repository, { baseUrl } from '~/repositories/repository.js';
import { attrFilter } from '~/utilities/common';
import {
    carouselSettingSingle,
    carouselSettingDefault
} from '~/utilities/carousel';
import { homeData } from '~/utilities/data';

export default {
    components: {
        RecommendCollection,
        DealCollection,
        TrendyCollection,
        NewCollection
    },
    data: function() {
        return {
            loaded: false,
            products: [],
            newProducts: [],
            topProducts: [],
            carouselSetting1: {
                ...carouselSettingSingle,
                pagination: {
                    el: '.intro-slider-container .swiper-dots',
                    clickable: true
                },
                navigation: {
                    nextEl: '.intro-slider-container .swiper-next',
                    prevEl: '.intro-slider-container .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSettingDefault,
                slidesPerView: 6,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.brands-slider .swiper-next',
                    prevEl: '.brands-slider .swiper-prev'
                },
                breakpoints: {
                    992: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 4
                    },
                    576: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            },
            homeData: homeData
        };
    },
    computed: {
        ...mapGetters('demo', ['newsletterShow'])
    },
    created: function() {
        this.getProducts();
    },
    mounted: function() {
        if (this.newsletterShow) {
            setTimeout(() => {
                if (this.$route.path == '/' && this.newsletterShow) {
                    this.$modal.show(
                        NewsletterModal,
                        {},
                        { width: '970', height: 'auto', adaptive: true }
                    );
                }
            }, 8000);
        }
    },
    methods: {
        getProducts: async function() {
            this.loaded = false;
            await Repository.get(`${baseUrl}/demo4`)
                .then(response => {
                    this.products = response.data.products;
                    this.newProducts = attrFilter(this.products, 'new');
                    this.topProducts = attrFilter(this.products, 'top');
                    this.loaded = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        }
    }
};
</script>