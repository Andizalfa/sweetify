<script setup>
import { ref } from 'vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import ProductList from "@/components/ProductList.vue"

const searchQuery = ref("")
const activeCategory = ref("All")

const categories = [
  "All",
  "Birthday",
  "Chocolate",
  "Cupcakes",
  "Wedding",
  "Fruit",
  "Classic",
  "Cheesecake",
]
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f5e5e1]">
    <Navbar />

    <main class="flex-grow w-full max-w-7xl mx-auto pt-28 pb-16">
      
      <section class="text-center mb-8 px-4 sm:px-6 lg:px-8">
        <h1 
          class="text-4xl sm:text-5xl font-bold text-[#262634] mb-3"
          style="font-family: 'Poppins', sans-serif;"
        >
          Our Cake 
          <span 
            class="text-[#9e182b]"
            style="font-family: 'Poppins', sans-serif;"
          >
            Collection
          </span>
        </h1>
        <p class="text-[#555] text-sm sm:text-base max-w-xl mx-auto mb-8">
          Discover various delicious cake options for every special occasion
        </p>

        <div class="relative max-w-2xl mx-auto mb-8">
          <span class="absolute left-5 top-1/2 -translate-y-1/2 text-lg opacity-60">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search cakes..."
            class="w-full py-4 pl-12 pr-6 rounded-full border border-[#f0dadd] bg-white text-base shadow-sm focus:outline-none focus:border-[#f2afbc] focus:ring-4 focus:ring-[#f2afbc]/20 transition-all placeholder-[#c29599]"
          />
        </div>
      </section>

      <section class="mb-10 w-full px-0 sm:px-6">
        
        <div class="flex items-center gap-3 overflow-x-auto lg:overflow-visible no-scrollbar px-4 lg:px-0 lg:flex-wrap lg:justify-center">
            
            <div class="w-11 h-11 rounded-full bg-white text-[#9e182b] flex items-center justify-center shadow-sm flex-shrink-0 border border-white/50">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </div>

            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap shadow-sm flex-shrink-0 border"
              :class="[
                activeCategory === category 
                  ? 'bg-[#9e182b] text-white border-[#9e182b] shadow-[#9e182b]/30' 
                  : 'bg-white text-[#444] border-transparent hover:translate-y-[-2px] hover:shadow-md'
              ]"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>

        </div>
      </section>

      <section class="px-4 sm:px-6 lg:px-8">
        <ProductList
          :search="searchQuery"
          :category="activeCategory"
        />
      </section>
      
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Utility scrollbar hidden */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>