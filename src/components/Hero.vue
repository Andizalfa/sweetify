<script setup>
import { useRouter } from 'vue-router'
import heroImage from '@/assets/logo3.jpg'

const router = useRouter()
const goToProduk = () => router.push('/produk')
</script>

<template>
  <section class="relative flex items-center justify-start h-[90vh] mt-16">

    <!-- Background Image -->
    <img 
      :src="heroImage" 
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
    />

    <!-- Soft Dark Overlay -->
    <div class="absolute inset-0 bg-black/40 z-10"></div>

    <!-- Text Content -->
    <div class="relative z-20 max-w-2xl pl-24">

      <!-- ELEGANT FONT -->
      <h1 
        class="text-[#452829] font-bold leading-tight 
               text-4xl sm:text-5xl md:text-6xl drop-shadow-xl elegant-title"
      >
        Experience The Deliciousness  
        <br />
        <span class="text-[#452829]">
          Of Special Cakes!
        </span>
      </h1>

      <!-- Removed paragraph -->

      <!-- BUTTON: updated color palette -->
      <button
        @click="goToProduk"
        class="mt-10 bg-[#DEB6AB] text-white font-semibold
               px-10 py-4 rounded-full shadow-md 
               transition-all duration-300
               hover:bg-[#B58E64] hover:text-white active:scale-95"
      >
        Order Now
      </button>

    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap');

section {
  font-family: 'Poppins', sans-serif;
}

/* FONT TITLE ELEGANT */
.elegant-title {
  font-family: 'Playfair Display', serif !important;
}
</style>
