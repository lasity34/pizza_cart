

function cart() {
    return {
        amount: 0,
        price: 31.99,
        increment() {
            amount++
        },
        decrement() {
            amount--
        }
    }
}


document.addEventListener('alpine:init', () => {
    Alpine.data('cart', cart);
});