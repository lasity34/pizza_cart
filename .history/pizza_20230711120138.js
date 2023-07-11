function cart() {
  return {
    smallAmount:  0,
    mediumAmount: 0,
    largeAmount: 0,
    prices: {
      small: 27.99,
      medium: 57.99,
      large: 87.99,
    },
    increment(size) {
      if (size === "small") {
        this.smallAmount++;
      } else if (size === "medium") {
        this.mediumAmount++;
      } else if (size === "large") {
        this.largeAmount++;
      }
    },
    decrement(size) {
      if (size === "small" && this.smallAmount > 0) {
        this.smallAmount--;
      } else if (size === "medium" && this.mediumAmount > 0) {
        this.mediumAmount--;
      } else if (size === "large" && this.largeAmount > 0) {
        this.largeAmount--;
      }
    },
    total() {
        return (
        (this.smallAmount * this.prices.small) +
        (this.mediumAmount * this.prices.medium) +
        (this.largeAmount * this.prices.large)
        )
    }
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("cart", cart);
});
