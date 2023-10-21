import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        product_details : {}
    }),

    actions: {
        async fetchProducts() {
            await axios.get('/api/v1/latest-products/')
                .then(response => {
                    console.log('products', response.data)
                    this.products = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },

        async fetchProductDetails(category_slug, productSlug) {
            await axios.get(`/api/v1/products/${category_slug}/${productSlug}/`)
                .then(response => {
                    console.log('product details', response.data)
                    this.product_details = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
})