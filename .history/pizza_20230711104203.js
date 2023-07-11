function cart() {
  return {
    amount: 0,
    price: 31.99,
    increment() {
      this.amount++;
    },
    decrement() {
      if (this.amount > 0) {
        this.amount--;
      }
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("cart", cart);
});
