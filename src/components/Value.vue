<script setup>
// Komponen statis, tidak perlu script logic
</script>

<template>
  <section class="bg-[#f5e5e1] py-16 px-6 sm:px-8 lg:px-12">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-12">
        <h2 
          class="text-3xl sm:text-4xl font-bold text-[#2b2b3a] tracking-wide mb-3"
          style="font-family: 'Poppins', sans-serif;"
        >
          Why Choose 
          <span 
            class="text-[#9e182b]" 
            style="font-family: 'Poppins', sans-serif;"
          >
            Sweetify?
          </span>
        </h2>
        <p class="text-[#555] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We are committed to providing the best for every customer
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="group bg-gradient-to-br from-white to-[#f9cbd6] rounded-[1.8rem] p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(158,24,43,0.15)] cursor-default">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-4xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-md">
            🎂
          </div>
          <h3 class="text-xl font-bold mb-3 text-[#222]">Premium Ingredients</h3>
          <p class="text-sm sm:text-base text-[#555] leading-relaxed">
            Using the finest quality ingredients for perfect taste.
          </p>
        </div>

        <div class="group bg-gradient-to-br from-white to-[#f9cbd6] rounded-[1.8rem] p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(158,24,43,0.15)] cursor-default">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-4xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-md">
            ✨
          </div>
          <h3 class="text-xl font-bold mb-3 text-[#222]">Custom Design</h3>
          <p class="text-sm sm:text-base text-[#555] leading-relaxed">
            Cakes can be customized to match your theme and preferences.
          </p>
        </div>

        <div class="group bg-gradient-to-br from-white to-[#f9cbd6] rounded-[1.8rem] p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_55px_rgba(158,24,43,0.15)] cursor-default md:col-span-2 lg:col-span-1">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-4xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-md">
            ⚡
          </div>
          <h3 class="text-xl font-bold mb-3 text-[#222]">Fast Delivery</h3>
          <p class="text-sm sm:text-base text-[#555] leading-relaxed">
            Your order will arrive on time with safe packaging.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* 🔴 TAMBAHKAN IMPORT INI AGAR FONT TERBACA DI SINI */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600&display=swap');

section {
  font-family: 'Poppins', sans-serif;
}
</style>