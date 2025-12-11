<script setup>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import aboutImgAsset from "@/assets/profil.jpg"

const aboutImage = aboutImgAsset
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f5e5e1]">
    <Navbar />

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:py-20 overflow-hidden">

      <section class="mb-16 sm:mb-20">
        <div class="bg-white/60 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)] flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          
          <div class="flex-1 w-full text-center lg:text-left">
            <h2 class="text-2xl sm:text-4xl font-bold text-[#1f1f1f] mb-4 sm:mb-6">Andi Zalfa Zahirah Najib</h2>
            <h1 class="text-xl sm:text-2xl text-[#1f1f1f] mb-4 sm:mb-6">11231010 - Informatika _ Institut Teknologi Kalimantan</h1>
            <div class="space-y-4 text-[#444] text-sm sm:text-lg leading-relaxed text-justify sm:text-left">
              <p>
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum 
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
              </p>
            </div>
          </div>

          <div class="flex-1 w-full h-full flex justify-center">
             <img 
              :src="aboutImage" 
              alt="my profile" 
              class="w-full h-[250px] sm:h-[400px] lg:max-h-[500px] object-cover rounded-[1.2rem] sm:rounded-[1.6rem] shadow-md rotate-2 transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </section>

      <section class="text-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <h4 class="text-lg font-bold text-[#222] mb-2">Bekerja sama dalam tim</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <h4 class="text-lg font-bold text-[#222] mb-2">Juara Olimpiade Matematika</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <h4 class="text-lg font-bold text-[#222] mb-2">Olimpiade KSN-Kebumian</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
          </div>

          <div class="bg-white rounded-[1.6rem] p-6 text-left shadow-[0_14px_32px_rgba(0,0,0,0.05)]">
            <h4 class="text-lg font-bold text-[#222] mb-2">Olimpiade K3 Kota Balikpapan</h4>
            <p class="text-sm text-[#555] leading-relaxed">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
          </div>
        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>
