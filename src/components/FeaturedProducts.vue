<script setup>
// Import gambar dari assets
import birthdayImg from "@/assets/birthdayImg.jpg"
import chocolateImg from "@/assets/chocolateImg.jpg"
import cupcakesImg from "@/assets/cupcakesImg.jpg"
import weddingImg from "@/assets/weddingImg.jpg"

// Data Produk
const featuredProducts = [
  {
    id: 1,
    name: "Birthday Cake Rainbow",
    image: birthdayImg,
    price: 350000,
  },
  {
    id: 2,
    name: "Chocolate Fudge Cake",
    image: chocolateImg,
    price: 280000,
  },
  {
    id: 3,
    name: "Rainbow Cupcakes",
    image: cupcakesImg,
    price: 180000,
  },
  {
    id: 4,
    name: "Elegant Wedding Cake",
    image: weddingImg,
    price: 1500000,
  },
]
</script>

<template>
  <section class="bg-[#f5e5e1] pb-16 px-6 sm:px-8 lg:px-12 pt-4">
    <div class="max-w-[1200px] mx-auto">
      
      <header class="text-center mb-10">
        <h2 
          class="text-3xl sm:text-4xl font-bold text-[#2b2b3a] mb-2"
          style="font-family: 'Poppins', sans-serif;"
        >
          Featured 
          <span 
            class="text-[#9e182b]"
            style="font-family: 'Poppins', sans-serif;"
          >
            Products
          </span>
        </h2>
        <p class="text-[#555] text-sm sm:text-base">
          Some of the most popular cakes from our collection
        </p>
      </header>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <article
          v-for="cake in featuredProducts"
          :key="cake.id"
          class="bg-white rounded-[1.6rem] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] group"
        >
          <div class="h-[260px] w-full overflow-hidden">
            <img 
              :src="cake.image" 
              :alt="cake.name" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <h3 class="text-[1.05rem] font-medium text-[#2b2b3a] mb-2 truncate">
              {{ cake.name }}
            </h3>
            <p class="text-[1.1rem] font-bold text-[#b11d30]">
              Rp {{ cake.price.toLocaleString("id-ID") }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-12 flex justify-center">
        <router-link 
          to="/product" 
          class="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#9e182b] text-white font-medium shadow-[0_16px_40px_rgba(158,24,43,0.55)] transition-all duration-200 hover:bg-[#b91c33] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(158,24,43,0.65)]"
        >
          View All Products
        </router-link>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Import font Great Vibes jika belum ada di global index.html,
   namun sebaiknya diimport di index.html agar performa lebih baik */
/* @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap'); */

section {
  font-family: 'Poppins', sans-serif;
}
</style>