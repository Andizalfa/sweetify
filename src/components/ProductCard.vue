<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  // Menerima status apakah kartu ini sedang diklik (aktif) atau tidak
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['add-to-cart', 'view-detail', 'toggle-active'])

const formattedPrice = computed(() => {
  return Number(props.product.price).toLocaleString("id-ID")
})
</script>

<template>
  <article 
    class="group relative bg-white rounded-[1.6rem] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.06)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.09)] cursor-pointer"
    @click="$emit('toggle-active', product.id)"
  >
    <div class="relative overflow-hidden w-full h-[220px] sm:h-[260px]">
      
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />

      <div 
        class="absolute inset-0 bg-black/20 transition-opacity duration-300"
        :class="[
           isActive ? 'opacity-100' : 'opacity-0',
           'lg:opacity-0 lg:group-hover:opacity-100'
        ]"
      ></div>

      <span class="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[#f2afbc] text-white text-xs sm:text-sm font-medium shadow-md z-10">
        {{ product.tag }}
      </span>

      <div 
        class="absolute inset-x-5 bottom-5 flex gap-3 transition-all duration-300 z-20"
        :class="[
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          'lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'
        ]"
      >
        <button
          type="button"
          class="flex-1 border-none rounded-full bg-[#9e182b] text-white text-sm font-medium py-2.5 px-4 flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#b61d34]"
          @click.stop="$emit('add-to-cart', product)"
        >
          <span>🛒</span> Add
        </button>

        <button
          type="button"
          class="border-none rounded-full bg-white text-[#333] py-2.5 px-5 text-sm font-medium shadow-lg transition-transform hover:-translate-y-1"
          @click.stop="$emit('view-detail', product)"
        >
          Detail
        </button>
      </div>
    </div>

    <div class="p-5 flex flex-col gap-2 flex-grow relative bg-white">
      <h3 class="text-[1.1rem] font-bold text-[#2b2b3a] leading-tight line-clamp-1">
        {{ product.name }}
      </h3>
      
      <p class="text-[0.95rem] text-[#555] leading-relaxed line-clamp-2 min-h-[3rem]">
        {{ product.shortDescription }}
      </p>

      <div class="mt-auto pt-3 flex justify-between items-center">
        <p class="text-[1.15rem] font-bold text-[#9e182b]">
          Rp {{ formattedPrice }}
        </p>

        <button
          type="button"
          class="w-[48px] h-[48px] rounded-full bg-[#f9cbd6] text-[#9e182b] flex items-center justify-center text-xl shadow-md transition-transform active:scale-95 hover:bg-[#f2afbc]"
          @click.stop="$emit('add-to-cart', product)"
        >
          🛒
        </button>
      </div>
    </div>
  </article>
</template>