import { reactive, computed } from "vue"

const state = reactive({
  items: [], 
})

function addItem(product) {
  const existing = state.items.find((i) => i.id === product.id)
  
  let cleanPrice = product.price
  if (typeof product.price === 'string') {
     cleanPrice = parseInt(product.price.replace(/\D/g, '')) || 0
  }

  if (existing) {
    existing.qty += 1
  } else {
    state.items.push({
      id: product.id,
      name: product.name,
      price: Number(cleanPrice), // Pastikan jadi Number
      tag: product.tag,
      image: product.image,
      qty: 1,
    })
  }
}

function removeItem(id) {
  state.items = state.items.filter((i) => i.id !== id)
}

function increaseQty(id) {
  const item = state.items.find((i) => i.id === id)
  if (item) item.qty += 1
}

function decreaseQty(id) {
  const item = state.items.find((i) => i.id === id)
  if (item && item.qty > 1) item.qty -= 1
}

// Computed properties
const totalItems = computed(() =>
  state.items.reduce((sum, i) => sum + (i.qty || 0), 0)
)

const subtotal = computed(() =>
  state.items.reduce((sum, i) => sum + (Number(i.price) || 0) * (Number(i.qty) || 0), 0)
)

const taxRate = 0.1 
const tax = computed(() => subtotal.value * taxRate)
const total = computed(() => subtotal.value + tax.value)

export function useCartStore() {
  return {
    state,
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
    totalItems,
    subtotal,
    tax,
    total,
  }
}