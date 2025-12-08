<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/store/cartStore"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

const router = useRouter()

// Mengambil state dan actions dari cartStore
const {
  state,
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  totalItems, 
  subtotal,
  tax,
  total,
} = useCartStore()

const showModal = ref(false)

const goBack = () => {
  router.push("/product")
}

const goShopping = () => {
  router.push("/product")
}

const proceedCheckout = () => {
  showModal.value = true
  // Kosongkan cart (Simulasi)
  state.items = []
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f5e5e1]">
    <Navbar />

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      
      <div v-if="totalItems > 0" class="mb-4 sm:mb-6">
        <button 
          @click="goBack"
          class="inline-flex items-center text-[#9e182b] font-medium text-sm sm:text-base hover:underline transition-all"
        >
          ← Continue Shopping
        </button>
      </div>

      <section v-if="totalItems === 0" class="flex flex-col items-center justify-center py-12 text-center">
        <div class="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full bg-[#f9cbd6]/35 flex items-center justify-center mb-6">
          <div class="w-[70px] h-[70px] sm:w-[82px] sm:h-[82px] rounded-full bg-[#ffe5ea] flex items-center justify-center">
            <div class="empty-box scale-75 sm:scale-100">
              <div class="empty-handle"></div>
              <div class="empty-face"></div>
            </div>
          </div>
        </div>

        <h1 class="text-2xl sm:text-4xl font-bold text-[#333] mb-2 sm:mb-3">Your Cart is Empty</h1>
        <p class="text-[#6b6b7a] text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto mb-8 leading-relaxed">
          No products in your cart yet. Let’s find some delicious cakes!
        </p>

        <button 
          @click="goShopping"
          class="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#9e182b] text-white font-medium text-sm sm:text-base shadow-[0_16px_38px_rgba(158,24,43,0.45)] transition-all hover:bg-[#b91b32] hover:-translate-y-1"
        >
          Start Shopping
        </button>
      </section>

      <section v-else>
        <header class="mb-6 sm:mb-10 text-center sm:text-left">
          <h1 
            class="text-3xl sm:text-4xl font-bold text-[#333] mb-1 sm:mb-2"
            style="font-family: 'Poppins', sans-serif;"
          >
            Shopping 
            <span 
              class="text-[#9e182b]"
              style="font-family: 'Poppins', sans-serif;"
            >
              Cart
            </span>
          </h1>
          <p class="text-[#6b6b7a] text-sm sm:text-base">
            You have <span class="font-bold text-[#9e182b]">{{ totalItems }}</span> item<span v-if="totalItems !== 1">s</span> in your cart
          </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
          
          <div class="lg:col-span-2 space-y-4 sm:space-y-6">
            <article
              v-for="item in state.items"
              :key="item.id"
              class="bg-white rounded-[1.2rem] sm:rounded-[1.5rem] p-3 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-row items-center gap-3 sm:gap-6 transition-transform"
            >
              <img 
                :src="item.image" 
                :alt="item.name" 
                class="w-20 h-20 sm:w-[160px] sm:h-[130px] object-cover rounded-xl sm:rounded-2xl flex-shrink-0 bg-gray-100" 
              />

              <div class="flex-1 flex flex-col items-start justify-center min-w-0">
                <h3 class="text-sm sm:text-lg font-bold text-[#333] mb-1 leading-tight line-clamp-2">
                  {{ item.name }}
                </h3>
                
                <span class="inline-block px-2 py-0.5 sm:px-4 sm:py-1 rounded-full bg-[#ffe3ea] text-[#9e182b] text-[10px] sm:text-xs font-bold tracking-wide mb-2 sm:mb-4">
                  {{ item.tag || 'Sweet' }}
                </span>

                <div class="flex items-center gap-2 sm:gap-4 bg-[#f8e8e8] sm:bg-[#f5e5e1] rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1">
                  <button 
                    @click="decreaseQty(item.id)"
                    class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#9e182b] flex items-center justify-center hover:bg-[#f2afbc] transition-colors font-bold text-base sm:text-lg leading-none pb-0.5 sm:pb-1 shadow-sm"
                  >
                    −
                  </button>
                  <span class="text-xs sm:text-base font-bold w-4 sm:w-6 text-center text-[#333]">{{ item.qty }}</span>
                  <button 
                    @click="increaseQty(item.id)"
                    class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#9e182b] flex items-center justify-center hover:bg-[#f2afbc] transition-colors font-bold text-base sm:text-lg leading-none pb-0.5 sm:pb-1 shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div class="flex flex-col items-end justify-between self-stretch sm:self-auto gap-1 sm:gap-2">
                
                <button 
                  @click="removeItem(item.id)"
                  class="text-gray-400 hover:text-red-600 transition-colors p-1"
                  title="Remove Item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>

                <div class="flex-grow sm:hidden"></div>

                <div class="text-right">
                    <p class="text-[10px] sm:text-xs text-[#888] hidden sm:block">
                      Rp {{ Number(item.price).toLocaleString('id-ID') }} × {{ item.qty }}
                    </p>
                    <p class="text-sm sm:text-xl font-bold text-[#9e182b]">
                      Rp {{ Number(item.price * item.qty).toLocaleString('id-ID') }}
                    </p>
                </div>
              </div>

            </article>
          </div>

          <aside class="lg:col-span-1 bg-white rounded-[1.5rem] p-6 sm:p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] lg:sticky lg:top-24">
            <h2 class="text-lg sm:text-xl font-bold text-center text-[#333] mb-4 sm:mb-6">Order Summary</h2>

            <div class="space-y-3 mb-6 text-sm sm:text-base">
              <div class="flex justify-between text-[#555]">
                <span>Subtotal ({{ totalItems }} items)</span>
                <span class="font-medium">Rp {{ Number(subtotal).toLocaleString("id-ID") }}</span>
              </div>
              <div class="flex justify-between text-[#555]">
                <span>Tax (10%)</span>
                <span class="font-medium">Rp {{ Number(tax).toLocaleString("id-ID") }}</span>
              </div>
            </div>

            <div class="border-t border-dashed border-gray-200 my-4"></div>

            <div class="flex justify-between items-end mb-8">
              <span class="text-base sm:text-lg font-bold text-[#333]">Total</span>
              <span class="text-lg sm:text-xl font-bold text-[#9e182b]">Rp {{ Number(total).toLocaleString("id-ID") }}</span>
            </div>

            <button 
              @click="proceedCheckout"
              class="w-full py-3 sm:py-3.5 rounded-full bg-[#9e182b] text-white font-medium text-sm sm:text-base shadow-[0_8px_20px_rgba(158,24,43,0.3)] transition-all hover:bg-[#b91b32] hover:-translate-y-1 active:scale-95"
            >
              Proceed to Checkout
            </button>
            <p class="text-[10px] sm:text-xs text-center text-[#6b6b7a] mt-4">
              You will be directed to the contact page to complete your order
            </p>
          </aside>

        </div>
      </section>
    </main>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
        <div class="relative bg-white rounded-3xl p-6 sm:p-10 max-w-[320px] sm:max-w-[420px] w-full text-center shadow-2xl">
          <button @click="closeModal" class="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors text-xl sm:text-2xl">
            &times;
          </button>
          <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[#f2afbc] to-[#d89ba5] flex items-center justify-center shadow-[0_8px_24px_rgba(242,175,188,0.4)]">
             <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f2afbc] to-[#e599a5] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
             </div>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-[#333] mb-2 sm:mb-3">Order Successful!</h2>
          <p class="text-sm sm:text-base text-[#666] mb-6 sm:mb-8 leading-relaxed">
            Your order is being processed. We will contact you shortly for confirmation.
          </p>
          <button @click="closeModal" class="w-full py-2.5 sm:py-3 rounded-full bg-[#9e182b] text-white font-medium shadow-[0_8px_20px_rgba(158,24,43,0.3)] transition-all hover:bg-[#b91b32] hover:-translate-y-0.5">
            Close
          </button>
        </div>
      </div>
    </Transition>

    <Footer />
  </div>
</template>

<style scoped>
/* CSS Art untuk Icon Empty State */
.empty-box {
  width: 48px;
  height: 38px;
  border-radius: 12px;
  border: 3px solid #9e182b;
  position: relative;
  box-sizing: border-box;
}

.empty-handle {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 10px;
  border: 3px solid #9e182b;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
}

.empty-face {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 6px;
  border-bottom: 3px solid #9e182b;
  border-radius: 0 0 999px 999px;
}
</style>