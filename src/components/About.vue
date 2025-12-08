<script setup>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import aboutImgAsset from "@/assets/about.jpg"

const aboutImage = aboutImgAsset
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f5e5e1]">
    <Navbar />

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:py-20 overflow-hidden">
      
      <section class="text-center mb-12 sm:mb-16">
        <h1 
          class="text-3xl sm:text-5xl font-bold text-[#262626] mb-3 leading-tight"
          style="font-family: 'Poppins', sans-serif;"
        >
          About 
          <span 
            class="text-[#9e182b] inline-block"
            style="font-family: 'Poppins', sans-serif;"
          >
            Sweetify
          </span>
        </h1>
        <p class="text-[#555] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
          Our story in bringing happiness through every cake we make
        </p>
      </section>

      <section class="mb-16 sm:mb-20">
        <div class="bg-white/60 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)] flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          
          <div class="flex-1 w-full text-center lg:text-left">
            <h2 class="text-2xl sm:text-4xl font-bold text-[#1f1f1f] mb-4 sm:mb-6">Our Story</h2>
            <div class="space-y-4 text-[#444] text-sm sm:text-lg leading-relaxed text-justify sm:text-left">
              <p>
                Sweetify was founded in 2015 with a vision to deliver premium
                quality cakes that are not only delicious but also beautiful to
                behold. Starting from a small kitchen with traditional recipes, we
                have grown to become one of the most trusted cake shops.
              </p>
              <p>
                Every cake we make is a work of art filled with love and
                dedication. We believe that every special moment deserves to be
                celebrated with a special cake. From birthdays, weddings, to
                corporate events, Sweetify is ready to be part of your happiness.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="bg-gradient-to-br from-white to-[#f5e5e1] border border-white/50 rounded-2xl py-3 px-2 sm:px-8 shadow-sm flex flex-col items-center justify-center">
                <p class="text-xl sm:text-3xl font-bold text-[#9e182b]">10+</p>
                <p class="text-xs sm:text-sm text-[#555]">Years Experience</p>
              </div>
              <div class="bg-gradient-to-br from-white to-[#f5e5e1] border border-white/50 rounded-2xl py-3 px-2 sm:px-8 shadow-sm flex flex-col items-center justify-center">
                <p class="text-xl sm:text-3xl font-bold text-[#9e182b]">5000+</p>
                <p class="text-xs sm:text-sm text-[#555]">Happy Customers</p>
              </div>
            </div>
          </div>

          <div class="flex-1 w-full h-full flex justify-center">
             <img 
              :src="aboutImage" 
              alt="Sweetify Cakes" 
              class="w-full h-[250px] sm:h-[400px] lg:max-h-[500px] object-cover rounded-[1.2rem] sm:rounded-[1.6rem] shadow-md rotate-2 transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
        <div class="bg-gradient-to-br from-[#f9cbd6] to-[#f5e5e1] rounded-[1.5rem] p-6 sm:p-10 shadow-[0_16px_35px_rgba(0,0,0,0.06)]">
          <h3 class="text-xl sm:text-2xl font-bold text-[#9e182b] mb-3 sm:mb-4">Our Vision</h3>
          <p class="text-sm sm:text-base text-[#444] leading-relaxed">
            To become the leading cake shop known for quality, creativity, and
            the best service, and to be part of every precious moment of our
            customers.
          </p>
        </div>
        <div class="bg-gradient-to-br from-[#f9cbd6] to-[#f5e5e1] rounded-[1.5rem] p-6 sm:p-10 shadow-[0_16px_35px_rgba(0,0,0,0.06)]">
          <h3 class="text-xl sm:text-2xl font-bold text-[#9e182b] mb-3 sm:mb-4">Our Mission</h3>
          <p class="text-sm sm:text-base text-[#444] leading-relaxed">
            Delivering premium quality cakes with special taste, stunning
            design, and friendly service to ensure every customer gets the best
            experience.
          </p>
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-2xl sm:text-4xl font-bold text-[#222] mb-3">Our Values</h2>
        <p class="text-[#555] text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          The principles we uphold in every aspect of our business
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl text-white mb-4 shadow-sm">
              ❤
            </div>
            <h4 class="text-lg font-bold text-[#222] mb-2">Premium Quality</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              We only use the finest quality ingredients for every cake we make.
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl text-white mb-4 shadow-sm">
              🎨
            </div>
            <h4 class="text-lg font-bold text-[#222] mb-2">Unlimited Creativity</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Unique and attractive cake designs, tailored to your event wishes.
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl text-white mb-4 shadow-sm">
              🤝
            </div>
            <h4 class="text-lg font-bold text-[#222] mb-2">Best Service</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Our team is ready to serve with friendliness and professionalism.
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl text-white mb-4 shadow-sm">
              🎯
            </div>
            <h4 class="text-lg font-bold text-[#222] mb-2">On Time</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Our commitment is to deliver your order on time safely.
            </p>
          </div>

        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Style tambahan minor saja, sisanya sudah di-handle Tailwind */
</style>