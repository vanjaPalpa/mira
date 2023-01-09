<template>
    <div class="bg-light pt-5 pb-5">
        <div class="container trending-products">
            <div class="heading heading-flex mb-3">
                <div class="heading-left">
                    <h2 class="title">Trending Products</h2>
                </div>

                <div class="heading-right">
                    <tabs
                        class="nav nav-pills nav-border-anim justify-content-center"
                        :data="tabsData"
                        id="trendy"
                    ></tabs>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5col d-none d-xl-block">
                    <div class="banner">
                        <nuxt-link to="/shop/sidebar/list">
                            <img
                                v-lazy="'./images/home/banners/banner-4.jpg'"
                                alt="banner"
                                width="218"
                                height="390"
                            />
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-xl-4-5col">
                    <div class="tab-content tab-content-carousel just-action-icons-sm">
                        <div class="tab-pane p-0 fade show active" id="trendy-top-rated">
                            <div class="swiper-carousel carousel-with-shadow swiper-1">
                                <div class="mb-0" v-swiper:swiper1="carouselSetting1">
                                    <div class="swiper-wrapper">
                                        <div
                                            class="swiper-slide"
                                            v-for="(product, index) in ratedProducts"
                                            :key="index"
                                        >
                                            <product-twelve :product="product" class="mb-3"></product-twelve>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-nav nav-side">
                                    <div class="swiper-prev">
                                        <i class="icon-angle-left"></i>
                                    </div>
                                    <div class="swiper-next">
                                        <i class="icon-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane p-0 fade" id="trendy-best-selling">
                            <div class="swiper-carousel carousel-with-shadow swiper-2">
                                <div class="mb-0" v-swiper:swiper2="carouselSetting2">
                                    <div class="swiper-wrapper">
                                        <div
                                            class="swiper-slide"
                                            v-for="(product, index) in featuredProducts"
                                            :key="index"
                                        >
                                            <product-twelve :product="product"></product-twelve>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-nav nav-side">
                                    <div class="swiper-prev">
                                        <i class="icon-angle-left"></i>
                                    </div>
                                    <div class="swiper-next">
                                        <i class="icon-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane p-0 fade" id="trendy-on-sale">
                            <div class="swiper-carousel carousel-with-shadow swiper-3">
                                <div class="mb-0" v-swiper:swiper3="carouselSetting3">
                                    <div class="swiper-wrapper">
                                        <div
                                            class="swiper-slide"
                                            v-for="(product, index) in saleProducts"
                                            :key="index"
                                        >
                                            <product-twelve :product="product"></product-twelve>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-nav nav-side">
                                    <div class="swiper-prev">
                                        <i class="icon-angle-left"></i>
                                    </div>
                                    <div class="swiper-next">
                                        <i class="icon-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import ProductTwelve from '~/components/elements/products/ProductTwelve';

import { attrFilter } from '~/utilities/common';
import { carouselSetting1 } from '~/utilities/carousel';

export default {
    components: {
        Tabs,
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'top-rated',
                    title: 'Top Rated',
                    active: true
                },
                {
                    id: 'best-selling',
                    title: 'Best Selling'
                },
                {
                    id: 'on-sale',
                    title: 'On Sale'
                }
            ],
            carouselSetting1: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending-products .swiper-1 .swiper-next',
                    prevEl: '.trending-products .swiper-1 .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending-products .swiper-2 .swiper-next',
                    prevEl: '.trending-products .swiper-2 .swiper-prev'
                }
            },
            carouselSetting3: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending-products .swiper-3 .swiper-next',
                    prevEl: '.trending-products .swiper-3 .swiper-prev'
                }
            }
        };
    },
    computed: {
        featuredProducts: function() {
            return attrFilter(this.products, 'featured');
        },
        ratedProducts: function() {
            return attrFilter(this.products, 'rated');
        },
        saleProducts: function() {
            return attrFilter(this.products, 'sale');
        }
    }
};
</script>