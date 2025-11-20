<script setup>
// Tidak perlu script tambahan, semua statis
</script>

<template>
  <footer class="bg-[#FFF4E6] text-[#6b4f2b] pt-10 pb-6 border-t border-[#FADADD]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <!-- Tentang Sweetify -->
        <div>
          <h3 class="text-[#B58E64] font-semibold text-lg mb-3">About Sweetify</h3>
          <p class="text-sm text-[#6b4f2b]/80">
            Sweetify adalah toko kue dengan cita rasa istimewa dan desain menawan
            untuk setiap momen spesial Anda.
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-[#B58E64] font-semibold text-lg mb-3">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center justify-center sm:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#B58E64" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 20.25c4.97-4.97 8.25-8.25 8.25-11.25A8.25 8.25 0 1 0 3.75 9c0 3 3.28 6.28 8.25 11.25z" />
              </svg>
              <span>Jl. Manis Raya No. 123, Jakarta Selatan</span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#B58E64" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75l8.954 5.372a.75.75 0 0 0 .792 0L21.75 6.75M3.75 17.25h16.5a.75.75 0 0 0 .75-.75V6.75A.75.75 0 0 0 20.25 6H3.75A.75.75 0 0 0 3 6.75v9.75a.75.75 0 0 0 .75.75z" />
              </svg>
              <span>info@sweetify.com</span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="#B58E64" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 4.5h19.5m-19.5 0v15a.75.75 0 0 0 .75.75H21a.75.75 0 0 0 .75-.75v-15m-19.5 0L12 13.5l9.75-9" />
              </svg>
              <span>+62 812-3456-7890</span>
            </li>
          </ul>
        </div>

        <!-- Media Sosial -->
        <div>
          <h3 class="text-[#B58E64] font-semibold text-lg mb-3">Follow Us</h3>
          <div class="flex justify-center sm:justify-start space-x-4">
            <a href="#" class="bg-white rounded-full shadow-md p-2 hover:bg-[#FADADD] transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#B58E64" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.117C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" class="bg-white rounded-full shadow-md p-2 hover:bg-[#FADADD] transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#B58E64" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.36 3.608 1.336.975.975 1.274 2.243 1.336 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.36 2.633-1.336 3.608-.975.975-2.243 1.274-3.608 1.336-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.36-3.608-1.336-.975-.975-1.274-2.243-1.336-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.36-2.633 1.336-3.608.975-.975 2.243-1.274 3.608-1.336C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.428 3.77 1.317 2.882 2.205 2.584 3.317 2.525 4.598 2.466 5.878 2.454 6.288 2.454 12c0 5.712.012 6.122.071 7.402.059 1.281.357 2.393 1.245 3.282.889.888 2.001 1.186 3.282 1.245 1.281.059 1.691.071 7.403.071s6.122-.012 7.402-.071c1.281-.059 2.393-.357 3.282-1.245.888-.889 1.186-2.001 1.245-3.282.059-1.281.071-1.691.071-7.403s-.012-6.122-.071-7.402c-.059-1.281-.357-2.393-1.245-3.282-.889-.888-2.001-1.186-3.282-1.245C15.667.013 15.257 0 12 0z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
            <a href="#" class="bg-white rounded-full shadow-md p-2 hover:bg-[#FADADD] transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#B58E64" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M23.953 4.57a10.006 10.006 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.184 4.922 4.922 0 0 0-8.384 4.482 13.978 13.978 0 0 1-10.15-5.15 4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616v.06a4.934 4.934 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.937 4.937 0 0 0 4.604 3.417A9.868 9.868 0 0 1 .96 19.54 13.94 13.94 0 0 0 7.548 21c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Garis pembatas dan hak cipta -->
      <div class="mt-8 border-t border-[#FADADD] pt-4 text-center text-sm text-[#6b4f2b]/70">
        © 2025 Sweetify. Semua hak cipta dilindungi.
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #FFF4E6, #FADADD);
}
</style>
