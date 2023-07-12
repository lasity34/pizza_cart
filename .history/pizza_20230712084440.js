function cart() {
  return {
    smallAmount: 0,
    mediumAmount: 0,
    largeAmount: 0,
    paymentAmount: 0,
    message: "",
    payMessage: "",
    smallAdded: false,
    mediumAdded: false,
    largeAdded: false,
    prices: {
      small: 27.99,
      medium: 57.99,
      large: 87.99,
    },
    lastMessageAdded: '',
    increment(size) {
      if (size === "small" && this.smallAdded) {
        this.smallAmount++
        this.lastMessageAdded = 'Small Pizza'
      }
      else if (size === "medium" && this.mediumAdded) {
        this.mediumAmount++;
        this.lastMessageAdded = 'Medium Pizza'
      }
      else if (size === "large" && this.largeAdded) {
        this.largeAmount++;
      }
    },
    decrement(size) {
      if(size === 'small' && this.smallAmount > 0 && this.smallAdded) {
        this.smallAmount--;
        if(this.smallAmount === 0) this.smallAdded = false;
      }
      if(size === 'medium' && this.mediumAmount > 0 && this.mediumAdded) {
        this.mediumAmount--;
        if(this.mediumAmount === 0) this.mediumAdded = false;
      }
      if(size === 'large' && this.largeAmount > 0 && this.largeAdded) {
        this.largeAmount--;
        if(this.largeAmount === 0) this.largeAdded = false;
      }
    },
    
    total() {
      return (
        this.smallAmount * this.prices.small +
        this.mediumAmount * this.prices.medium +
        this.largeAmount * this.prices.large
      );
    },
    paymentTotal() {
      if (this.paymentAmount < this.total()) {
        this.message = `R${(this.total() - this.paymentAmount).toFixed(2)} is needed`;
        setTimeout(() => {
          this.message = "";
        }, 2000);
      } else if (this.paymentAmount > this.total()) {
        this.message = `There is R${(this.paymentAmount - this.total()).toFixed(2)} too much`;
        setTimeout(() => {
          this.message = "";
        }, 2000);
      } else {
        this.message = "Enjoy your pizzas";
        setTimeout(() => {
          this.message = "";
        }, 2000);
      }
    },
    show: false,
    toggleModal() {
      this.show = !this.show;
      if (this.show) {
        setTimeout(() => { this.show = false; }, 2000); // Close after 3 seconds
      }
    },
    
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("cart", cart);
});
