<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="bg-[#FFF4E6] text-[#6b4f2b] min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <main class="grow">
      <section
        class="py-20 px-6 md:px-20 text-center bg-linear-to-b from-[#FADADD] to-[#FFF4E6] text-[#6b4f2b]"
      >
        <h1 class="text-4xl font-bold mb-4 text-[#B58E64]">Hubungi Kami</h1>
        <p class="text-lg">
          Kami senang mendengar dari Anda! Silakan hubungi kami melalui informasi di bawah ini.
        </p>
      </section>

      <!-- Informasi Kontak -->
      <section
        class="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-[#FFF4E6]"
      >
        <!-- Info -->
        <div>
          <h2 class="text-2xl font-bold mb-6 text-[#B58E64]">Informasi Toko</h2>
          <ul class="space-y-5 text-lg">
            <li>
              <span class="font-semibold text-[#B58E64]">Alamat:</span><br />
              Jl. Mawar No. 123, Samarinda, Kalimantan Timur
            </li>
            <li>
              <span class="font-semibold text-[#B58E64]">Nomor HP:</span><br />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                class="hover:underline hover:text-[#B58E64]"
              >
                +62 812-3456-7890
              </a>
            </li>
            <li>
              <span class="font-semibold text-[#B58E64]">Email:</span><br />
              <a
                href="mailto:info@tokokami.com"
                class="hover:underline hover:text-[#B58E64]"
              >
                info@tokokami.com
              </a>
            </li>
            <li>
              <span class="font-semibold text-[#B58E64]">Jam Operasional:</span><br />
              Senin - Sabtu: 08.00 - 17.00 <br />
              Minggu: Tutup
            </li>
          </ul>
        </div>

        <!-- Map -->
        <div
          class="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-[#FADADD]"
        >
          <iframe
            class="w-full h-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.601179036122!2d117.1479!3d-0.5021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67e3e2b9d9b7b%3A0x7f4a5c9a0c0a8ee0!2sSamarinda%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1698910000000!5m2!1sid!2sid"
          ></iframe>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
a {
  color: #b58e64;
  transition: color 0.3s ease;
}
a:hover {
  color: #8c6e48;
}
</style>
