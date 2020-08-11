const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'T-shirts',
            image: './assets/images/green.jpg',
            inventory: 100,
            details: ['50% cotton', '20% wool', '20% polyester'],
            variants: [
                { id: 2211, color: 'white', image: './assets/images/green.jpg' },
                { id: 2212, color: 'blue', image: './assets/images/blue.jpg' },
                { id: 2213, color: 'black', image: './assets/images/black.jpg' },
                { id: 2214, color: 'grey', image: './assets/images/grey.jpg' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})