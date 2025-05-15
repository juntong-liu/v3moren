import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(product) {
      this.items.push(product)
    }
  }
})