<script setup>
// Pastikan path gambarnya sesuai dengan lokasi file kamu
import heroImg from '@/assets/hero1.jpg' 

const heroImage = heroImg
</script>

<template>
  <section class="relative w-full h-[550px] md:h-screen flex items-center justify-center overflow-hidden">
    
    <img 
      :src="heroImage" 
      alt="Delicious Cake" 
      class="absolute inset-0 w-full h-full object-cover object-center"
    />

    <div class="absolute inset-0 bg-black/40 md:bg-black/30"></div>

    <div class="relative z-10 w-full px-6 md:px-12 lg:px-8 max-w-7xl mx-auto mt-16">
      
      <div class="text-center md:text-left max-w-3xl mx-auto md:mx-0">
        
        <h1 
          class="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg"
          style="font-family: 'Great Vibes', cursive;"
        >
          Experience The 
          
          <br class="block md:hidden" />
          
          <span class="text-[#F2AFBC]">Deliciousness</span> 
          
          <br />
          Of Special Cakes!
        </h1>

        <p class="mt-4 md:mt-6 text-base md:text-lg text-gray-100 font-light leading-relaxed drop-shadow-md max-w-xl mx-auto md:mx-0">
          Handmade cakes with premium taste, crafted with love to celebrate your sweetest moments.
        </p>

        <div class="mt-8 flex justify-center md:justify-start">
          <router-link
            to="/product"
            class="px-8 py-3 bg-[#9E182B] text-white font-semibold rounded-full shadow-lg hover:bg-[#F2AFBC] hover:text-[#9E182B] transition-all duration-300 transform hover:-translate-y-1"
          >
            Order Now
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Pastikan font Great Vibes sudah diimport di index.html atau global css */
section {
  font-family: 'Poppins', sans-serif;
}
</style>