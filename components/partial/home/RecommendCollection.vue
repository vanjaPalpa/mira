<template>
    <div class="container for-you">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Recommendation For You</h2>
            </div>

            <div class="heading-right">
                <nuxt-link to="/shop/nosidebar/fullwidth" class="title-link">
                    View All Recommendadion
                    <i class="icon-long-arrow-right"></i>
                </nuxt-link>
            </div>
        </div>

        <div class="products">
            <div class="row justify-content-center">
                <div
                    class="col-6 col-md-4 col-lg-3"
                    v-for="(product, index) in products.slice(0, 8)"
                    :key="index"
                >
                    <product-twelve :product="product"></product-twelve>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductTwelve from '~/components/elements/products/ProductTwelve';

export default {
    components: {
        ProductTwelve
    },
    props: {
        products: Array
    }
};
</script>