<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const showModal = ref(false);

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  // Simulasi kirim data
  console.log("Form Submitted:", form.value);
  
  // Tampilkan modal sukses
  showModal.value = true;
  
  // Reset form
  form.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f5e5e1]">
    <Navbar />

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      
      <section class="text-center mb-12 sm:mb-16 px-2">
        <h1 
          class="text-4xl sm:text-5xl font-bold text-[#262626] mb-3 leading-tight"
          style="font-family: 'Poppins', sans-serif;"
        >
          Contact 
          <span 
            class="text-[#9e182b]"
            style="font-family: 'Poppins', sans-serif;"
          >
            Us
          </span>
        </h1>
        <p class="text-[#555] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Have questions or want to order? Don’t hesitate to contact us.
        </p>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <div class="flex flex-col gap-6 order-2 lg:order-1">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#222] mb-2 text-center lg:text-left">Contact Information</h2>

          <div class="flex items-center gap-5 p-5 sm:p-6 rounded-[1.5rem] bg-white sm:bg-gradient-to-br sm:from-[#fef5f7] sm:to-[#f5e5e1] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl sm:text-2xl text-white shadow-sm flex-shrink-0">
              📍
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#333] mb-0.5">Address</h3>
              <p class="text-[#555] text-sm sm:text-base leading-relaxed">
                123 Sweet Avenue <br> South Jakarta, 12345
              </p>
            </div>
          </div>

          <div class="flex items-center gap-5 p-5 sm:p-6 rounded-[1.5rem] bg-white sm:bg-gradient-to-br sm:from-[#fef5f7] sm:to-[#f5e5e1] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl sm:text-2xl text-white shadow-sm flex-shrink-0">
              📞
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#333] mb-0.5">Phone</h3>
              <p class="text-[#555] text-sm sm:text-base leading-relaxed">
                +62 812-3456-7890 <br> +62 821-9876-5432
              </p>
            </div>
          </div>

          <div class="flex items-center gap-5 p-5 sm:p-6 rounded-[1.5rem] bg-white sm:bg-gradient-to-br sm:from-[#fef5f7] sm:to-[#f5e5e1] shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f9cbd6] to-[#f2afbc] flex items-center justify-center text-xl sm:text-2xl text-white shadow-sm flex-shrink-0">
              ✉️
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#333] mb-0.5">Email</h3>
              <p class="text-[#555] text-sm sm:text-base leading-relaxed">
                info@sweetify.com <br> order@sweetify.com
              </p>
            </div>
          </div>

          <div class="p-6 rounded-[1.5rem] bg-white sm:bg-gradient-to-br sm:from-[#fef5f7] sm:to-[#f5e5e1] shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
             <h3 class="text-lg font-bold text-[#333] mb-3">Business Hours</h3>
             <div class="space-y-2 text-[#555] text-sm sm:text-base">
                <div class="flex justify-between border-b border-[#eecdd2] pb-2">
                  <span>Monday - Friday</span>
                  <span class="font-medium">08:00 - 20:00</span>
                </div>
                <div class="flex justify-between pt-1">
                  <span>Saturday - Sunday</span>
                  <span class="font-medium">09:00 - 18:00</span>
                </div>
             </div>
          </div>

        </div>

        <div class="w-full h-full bg-white rounded-[1.8rem] sm:rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#f3c8c8]/40 order-1 lg:order-2">
          <div class="text-center mb-6 sm:mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-[#222] mb-2">Contact Us Now</h2>
            <p class="text-[#808080] text-sm sm:text-base">We will respond as soon as possible 😊</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
            <div class="flex flex-col gap-1.5 sm:gap-2">
              <label for="name" class="text-sm font-medium text-[#444] tracking-wide ml-1">Full Name *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                required
                class="w-full rounded-xl sm:rounded-2xl border border-[#f0d6d8] p-3 sm:p-4 text-sm sm:text-base bg-[#fbeaea] text-[#333] placeholder-[#c69598] focus:outline-none focus:border-[#f2afbc] focus:bg-[#fff7f7] focus:ring-2 focus:ring-[#f2afbc]/30 transition-all"
              />
            </div>

            <div class="flex flex-col gap-1.5 sm:gap-2">
              <label for="email" class="text-sm font-medium text-[#444] tracking-wide ml-1">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="name@email.com"
                required
                class="w-full rounded-xl sm:rounded-2xl border border-[#f0d6d8] p-3 sm:p-4 text-sm sm:text-base bg-[#fbeaea] text-[#333] placeholder-[#c69598] focus:outline-none focus:border-[#f2afbc] focus:bg-[#fff7f7] focus:ring-2 focus:ring-[#f2afbc]/30 transition-all"
              />
            </div>

            <div class="flex flex-col gap-1.5 sm:gap-2">
              <label for="phone" class="text-sm font-medium text-[#444] tracking-wide ml-1">Phone Number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="+62 812-3456-7890"
                class="w-full rounded-xl sm:rounded-2xl border border-[#f0d6d8] p-3 sm:p-4 text-sm sm:text-base bg-[#fbeaea] text-[#333] placeholder-[#c69598] focus:outline-none focus:border-[#f2afbc] focus:bg-[#fff7f7] focus:ring-2 focus:ring-[#f2afbc]/30 transition-all"
              />
            </div>

            <div class="flex flex-col gap-1.5 sm:gap-2">
              <label for="message" class="text-sm font-medium text-[#444] tracking-wide ml-1">Message *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Write your message or question..."
                required
                class="w-full rounded-xl sm:rounded-2xl border border-[#f0d6d8] p-3 sm:p-4 text-sm sm:text-base bg-[#fbeaea] text-[#333] placeholder-[#c69598] focus:outline-none focus:border-[#f2afbc] focus:bg-[#fff7f7] focus:ring-2 focus:ring-[#f2afbc]/30 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="w-full mt-2 py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-[#9e182b] text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(158,24,43,0.4)] transition-all hover:bg-[#b91b32] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(158,24,43,0.5)] active:scale-[0.98]"
            >
              <span>📨</span> Send Message
            </button>
          </form>
        </div>

      </section>
    </main>

    <Footer />

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="showModal" class="fixed inset-0 z-[999] flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
        
        <div class="relative bg-white rounded-3xl p-8 sm:p-10 max-w-[420px] w-full text-center shadow-2xl">
          
          <button @click="closeModal" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors text-2xl">
            &times;
          </button>

          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f2afbc] to-[#d89ba5] flex items-center justify-center shadow-[0_8px_24px_rgba(242,175,188,0.4)]">
             <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#f2afbc] to-[#e599a5] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
             </div>
          </div>

          <h2 class="text-2xl font-bold text-[#333] mb-3">Message Sent!</h2>
          <p class="text-[#666] mb-8 leading-relaxed">
            Thank you for contacting us. We'll get back to you as soon as possible!
          </p>
          
          <button @click="closeModal" class="w-full py-3 rounded-full bg-[#9e182b] text-white font-medium shadow-[0_8px_20px_rgba(158,24,43,0.3)] transition-all hover:bg-[#b91b32] hover:-translate-y-0.5">
            Close
          </button>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* Transisi Vue */
</style>