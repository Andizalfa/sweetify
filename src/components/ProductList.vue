<script setup>
import { computed, ref, onUnmounted } from 'vue'
import { useCartStore } from "@/store/cartStore"
import ProductCard from "./ProductCard.vue"
import ProductDetail from "./ProductDetail.vue"

// Import Gambar (Pastikan path ini sesuai dengan project Anda)
import birthdayImg from "@/assets/birthdayImg.jpg"
import chocolateImg from "@/assets/chocolateImg.jpg"
import cupcakesImg from "@/assets/cupcakesImg.jpg"
import weddingImg from "@/assets/weddingImg.jpg"
import fruitImg from "@/assets/fruitImg.jpg"
import redVelvetImg from "@/assets/redVelvetImg.jpg"
import cheesecakeImg from "@/assets/cheesecakeImg.jpg"
import chocoTruffleImg from "@/assets/chocoTruffleImg.jpg"

const props = defineProps({
  search: { type: String, default: "" },
  category: { type: String, default: "All" },
})

const cartStore = useCartStore()

// === DATA PRODUK LENGKAP ===
const products = [
  {
    id: 1,
    name: "Birthday Cake Rainbow",
    tag: "Birthday",
    image: birthdayImg,
    price: 350000,
    shortDescription: "Colorful birthday cake with bright colors and delicious vanilla taste.",
    description: "Colorful birthday cake with soft vanilla sponge, layered with buttercream and rainbow sprinkles. Perfect for birthday celebrations full of joy.",
    composition: ["Vanilla sponge cake", "Buttercream frosting", "Rainbow sprinkles", "Fresh milk & eggs", "Premium vanilla extract"],
  },
  {
    id: 2,
    name: "Chocolate Fudge Cake",
    tag: "Chocolate",
    image: chocolateImg,
    price: 280000,
    shortDescription: "Premium chocolate cake with soft texture and rich chocolate taste.",
    description: "Moist chocolate fudge cake with rich dark chocolate ganache. The perfect choice for true chocolate lovers.",
    composition: ["Dark chocolate", "Cocoa powder", "Fresh butter & eggs", "Chocolate ganache topping", "Espresso"],
  },
  {
    id: 3,
    name: "Rainbow Cupcakes",
    tag: "Cupcakes",
    image: cupcakesImg,
    price: 180000,
    shortDescription: "Set of 12 beautiful cupcakes with colorful frosting, ideal for parties.",
    description: "Box of 12 soft cupcakes with colorful buttercream frosting. Perfect for birthday parties, office events, or as sweet souvenirs.",
    composition: ["Vanilla cupcake base", "Buttercream frosting", "Food-grade coloring", "Sugar pearls & sprinkles"],
  },
  {
    id: 4,
    name: "Elegant Wedding Cake",
    tag: "Wedding",
    image: weddingImg,
    price: 1500000,
    shortDescription: "Luxurious tiered wedding cake with elegant decoration.",
    description: "Three-tier wedding cake with elegant floral decoration. Can be customized with flavors and colors according to your wedding theme.",
    composition: ["Choice of vanilla / chocolate / red velvet", "Fondant or buttercream finishing", "Handmade sugar flowers", "Premium ingredients"],
  },
  {
    id: 5,
    name: "Strawberry Delight",
    tag: "Fruit",
    image: fruitImg,
    price: 320000,
    shortDescription: "Fresh cake with layered strawberries and soft cream.",
    description: "Light sponge cake with fresh strawberry slices, strawberry coulis, and smooth whipped cream. Perfect for fruit lovers.",
    composition: ["Vanilla sponge cake", "Fresh strawberries", "Whipped cream", "Strawberry coulis", "Fresh milk & eggs"],
  },
  {
    id: 6,
    name: "Red Velvet Classic",
    tag: "Classic",
    image: redVelvetImg,
    price: 300000,
    shortDescription: "Classic red velvet cake with soft texture and cream cheese frosting.",
    description: "Moist red velvet layers with rich cream cheese frosting, giving a perfect balance of sweet and tangy flavor.",
    composition: ["Red velvet sponge cake", "Cream cheese frosting", "Cocoa powder", "Fresh butter & eggs"],
  },
  {
    id: 7,
    name: "Blueberry Cheesecake",
    tag: "Cheesecake",
    image: cheesecakeImg,
    price: 290000,
    shortDescription: "Creamy cheesecake topped with fresh blueberry compote.",
    description: "Baked cheesecake with buttery biscuit base, creamy cheese filling, and generous blueberry topping.",
    composition: ["Cream cheese", "Butter biscuit base", "Fresh blueberries", "Sugar & fresh cream"],
  },
  {
    id: 8,
    name: "Chocolate Truffle Cake",
    tag: "Chocolate",
    image: chocoTruffleImg,
    price: 380000,
    shortDescription: "Rich chocolate truffle cake with luxurious ganache layers.",
    description: "Decadent chocolate sponge soaked in chocolate syrup, layered with truffle cream, and coated with glossy chocolate ganache.",
    composition: ["Chocolate sponge cake", "Chocolate truffle cream", "Chocolate ganache", "Cocoa powder", "Fresh butter & eggs"],
  },
]

// Logic Filtering
const filteredProducts = computed(() => {
  const q = (props.search || "").toLowerCase()
  const cat = props.category

  return products.filter((p) => {
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
    const matchCat = cat === "All" || p.tag === cat
    return matchSearch && matchCat
  })
})

// === LOGIC ACTIVE CARD (UNTUK FITUR TAP TO REVEAL DI HP) ===
const activeProductId = ref(null)

const toggleActiveCard = (id) => {
  if (activeProductId.value === id) {
    activeProductId.value = null
  } else {
    activeProductId.value = id
  }
}

// Modal Logic
const selectedProduct = ref(null)
const openDetail = (product) => { selectedProduct.value = product }
const closeDetail = () => { selectedProduct.value = null }

// Toast Logic
const toastVisible = ref(false)
const toastMessage = ref("")
let toastTimeoutId = null

const showToast = (message) => {
  toastMessage.value = message
  toastVisible.value = true
  if (toastTimeoutId) clearTimeout(toastTimeoutId)
  toastTimeoutId = setTimeout(() => {
    toastVisible.value = false
    toastTimeoutId = null
  }, 3000)
}

onUnmounted(() => {
  if (toastTimeoutId) clearTimeout(toastTimeoutId)
})

const addToCart = (product) => {
  cartStore.addItem(product)
  const existing = cartStore.state.items.find((i) => i.id === product.id)
  const qty = existing ? existing.qty : 1
  showToast(`${product.name} (${qty}) added to cart!`)
}
</script>

<template>
  <div class="mt-8">
    
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :is-active="activeProductId === product.id"
        @toggle-active="toggleActiveCard"
        @view-detail="openDetail"
        @add-to-cart="addToCart"
      />
    </div>

    <div v-else class="py-12 text-center text-gray-500 text-lg">
      <p>No products found for your search.</p>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProduct" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeDetail"></div>
        
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <ProductDetail
            v-if="selectedProduct"
            :product="selectedProduct"
            @close="closeDetail"
            @add-to-cart="addToCart"
          />
        </Transition>
      </div>
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-1rem]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-1rem]"
    >
      <div v-if="toastVisible" class="fixed top-24 right-4 sm:right-6 z-[60] flex items-center gap-3 p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-green-100 max-w-[90vw]">
        <div class="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200 flex-shrink-0">
          ✓
        </div>
        <div class="text-sm sm:text-base text-gray-800 font-medium">
          {{ toastMessage }}
        </div>
      </div>
    </Transition>

  </div>
</template>