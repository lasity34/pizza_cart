function cart() {
  return {
    smallAmount:  0,
    mediumAmount: 0,
    largeAmount: 0,
    paymentAmount: 0,
    message: '',
    payMessage: '',
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
    },
    paymentTotal() {
        if (this.paymentAmount < this.total()) {
          setTimeout(() => {
            this.message = `R${(this.total() - this.paymentAmount).toFixed(2)} is needed`;
          }, 2000); // message will appear after 2 seconds
        } else if (this.paymentAmount > this.total()) {
          setTimeout(() => {
            this.message = `There is R${(this.paymentAmount - this.total()).toFixed(2)} too much`;
          }, 2000); // message will appear after 2 seconds
        } else {
          setTimeout(() => {
            this.message = 'Enjoy your pizzas';
          }, 2000); // message will appear after 2 seconds
        }
      }
      
   
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("cart", cart);
});
