<template>
    <div class="product-detail-view">
        <div class="grid grid-cols-2">
            <div>
                <img :src="product_details.get_image" :alt="product_details.name" />
            </div>
            <div>
                <h1>{{ product_details.name }}</h1>
                <p>{{ product_details.description }}</p>
                <p>{{ product_details.price }}</p>
                <button>Add to Cart</button>
            </div>
        </div>


    </div>
</template>

<script>
    import { useProductStore } from '../stores/ProductStore';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router'

    export default {
        name: 'ProductDetailsView',
        setup() {
            const route = useRoute();

            const productStore = useProductStore();
            const { products, product_details } = storeToRefs(productStore)


            function getProduct() {
                const category_slug = route.params.category_slug;
                const product_slug = route.params.product_slug;
                console.log(category_slug, product_slug);
                productStore.fetchProductDetails(category_slug, product_slug)
            }

            onMounted(() => {
                getProduct()
            })

            

            return {
                productStore,
                products,
                product_details,
                getProduct,
            }
        },
        // data() {
        //     return {
        //         product: null
        //     }
        // },
        // methods: {
        //     getProduct() {
        //         const category_slug = this.$route.params.category_slug;
        //         const product_slug = this.$route.params.product_slug;

        //     },

        //     getProductDetails() {}
        // },
        // mounted() {
        //     this.getProduct();
        // }
    }
</script>