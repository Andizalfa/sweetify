<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// Emit events
const emit = defineEmits(['close', 'add-to-cart'])

const formatPrice = (value) => {
  if (typeof value !== "number") return value
  return value.toLocaleString("id-ID")
}
</script>

<template>
  <div 
    class="relative w-full max-w-[900px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
    @click.stop
  >
    <button 
      class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-gray-500 hover:text-red-600 transition-colors text-2xl"
      @click="$emit('close')"
      aria-label="Close"
    >
      &times;
    </button>

    <div class="overflow-y-auto p-6 sm:p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        <div class="w-full">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-auto aspect-square object-cover rounded-2xl shadow-md"
          />
        </div>

        <div class="flex flex-col">
          <h2 class="text-2xl sm:text-3xl font-bold text-[#2b2b3a] mb-2 leading-tight">
            {{ product.name }}
          </h2>
          <p class="text-xl sm:text-2xl font-bold text-[#9e182b] mb-4">
            Rp {{ formatPrice(product.price) }}
          </p>

          <p class="text-[#555] text-sm sm:text-base leading-relaxed mb-6">
            {{ product.description }}
          </p>

          <h4 class="text-lg font-bold text-[#333] mb-2">Composition</h4>
          <ul class="list-disc list-inside space-y-1 text-sm sm:text-base text-[#555] mb-8 marker:text-[#9e182b]">
            <li v-for="(item, index) in product.composition" :key="index">
              {{ item }}
            </li>
          </ul>

          <button 
            class="mt-auto w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#9e182b] text-white font-medium text-base shadow-[0_16px_30px_rgba(158,24,43,0.55)] transition-all hover:bg-[#b61d34] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            @click="$emit('add-to-cart', product)"
          >
            <span>🛒</span> Add to Cart
          </button>
        </div>

      </div>
    </div>
  </div>
</template>