<script setup>
// Tidak diperlukan script khusus untuk tampilan statis
</script>

<template>
  <section class="bg-[#FFF4E6] py-16 px-6 md:px-20 font-poppins">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-extrabold text-[#B58E64] mb-4">About Sweetify</h2>
      <p class="text-lg text-[#5C4A33] leading-relaxed max-w-3xl mx-auto">
        Sweetify adalah toko kue modern yang menghadirkan cita rasa manis dan tampilan elegan dalam setiap produk.
        Kami percaya bahwa setiap momen spesial pantas dirayakan dengan kelembutan rasa dan keindahan desain.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-10 mt-10">
      <!-- Visi -->
      <div
        class="bg-[#FADADD] rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
      >
        <h3 class="text-2xl font-bold text-[#B58E64] mb-4">Our Vision</h3>
        <p class="text-[#5C4A33] leading-relaxed">
          Menjadi toko kue terdepan yang dikenal karena kualitas rasa, desain menawan, serta pelayanan yang tulus kepada setiap pelanggan kami.
        </p>
      </div>

      <!-- Misi -->
      <div
        class="bg-white rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
      >
        <h3 class="text-2xl font-bold text-[#B58E64] mb-4">Our Mission</h3>
        <ul class="list-disc list-inside text-[#5C4A33] space-y-2 text-left">
          <li>Menghadirkan kue berkualitas tinggi dengan bahan terbaik.</li>
          <li>Memberikan pengalaman pelanggan yang menyenangkan dan berkesan.</li>
          <li>Mengembangkan inovasi rasa dan desain sesuai tren modern.</li>
          <li>Menjadi bagian dari momen bahagia pelanggan di setiap kesempatan.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
