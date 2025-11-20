<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/logo.png'

const activeLink = ref('Home')
const open = ref(false)

// === NEW === (navbar berubah ketika discroll)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// === END NEW ===


const menus = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Product', href: '/product' },
  { name: 'Contact', href: '/contact' },
  { name: 'Keranjang', href: '/keranjang', icon: 'cart' }
]

const route = useRoute()

watch(
  () => route.path,
  () => {
    const currentMenu = menus.find(m => m.href === route.path)
    if (currentMenu) activeLink.value = currentMenu.name
  },
  { immediate: true }
)

function setActive(menu) {
  activeLink.value = menu
  open.value = false
}
</script>

<template>
  <nav
    :class="[ 
      'fixed w-full top-0 z-50 transition-all duration-300',
      'bg-[#F5E5E1] shadow-md border-b border-[#F9CBD6]'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <!-- LOGO -->
        <div class="flex items-center">
          <!-- <img :src="logo" alt="Logo" class="h-16 w-16 mr-2" /> -->
          <span
            :class="[
              'font-semibold text-xl tracking-wide transition-colors duration-300',
              isScrolled ? 'text-[#9E182B]' : 'text-[#F2AFBC]'
            ]"
            style="font-family: 'Great Vibes', cursive; font-size: 2rem;"
          >
            Sweetify
          </span>
        </div>

        <!-- DESKTOP MENU -->
        <div class="hidden sm:flex space-x-6">
          <router-link
            v-for="menu in menus"
            :key="menu.name"
            :to="menu.href"
            @click="setActive(menu.name)"
            class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2"
            :class="[
              activeLink === menu.name
                ? 'bg-[#F2AFBC] text-white'
                : isScrolled
                  ? 'text-[#9E182B] hover:bg-[#F9CBD6] hover:text-[#9E182B]'
                  : 'text-[#F2AFBC] hover:bg-[#F9CBD6]/40 hover:text-white'
            ]"
          >
            <template v-if="menu.icon === 'cart'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 
                  1.437m0 0L6.75 12.75m-1.644-6.478h13.788c.86 
                  0 1.497.834 1.271 1.668l-1.5 5.25a1.35 
                  1.35 0 01-1.271.957H7.5m0 0a2.25 2.25 0 
                  100 4.5 2.25 2.25 0 000-4.5zm10.5 
                  2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 
                  014.5 0z" />
              </svg>
            </template>

            <span v-else>{{ menu.name }}</span>
          </router-link>
        </div>

        <!-- MOBILE BUTTON -->
        <div class="sm:hidden flex items-center">
          <button
            @click="open = !open"
            :class="[
              'rounded-md p-2 transition-all duration-300',
              isScrolled ? 'text-[#9E182B]' : 'text-[#F2AFBC]'
            ]"
          >
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <div class="sm:hidden" v-if="open">
      <div class="px-2 pt-2 pb-3 space-y-1"
        :class="isScrolled ? 'bg-[#F2E0D2]' : 'bg-[#F9CBD6]/30 backdrop-blur'">

        <router-link
          v-for="menu in menus"
          :key="menu.name"
          :to="menu.href"
          @click="setActive(menu.name)"
          class="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
          :class="[
            activeLink === menu.name
              ? 'bg-[#F2AFBC] text-white'
              : 'text-[#9E182B] hover:bg-[#F9CBD6] hover:text-[#9E182B]'
          ]"
        >
          <template v-if="menu.icon === 'cart'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 
                1.437m0 0L6.75 12.75m-1.644-6.478h13.788c.86 
                0 1.497.834 1.271 1.668l-1.5 5.25a1.35 
                1.35 0 01-1.271.957H7.5m0 0a2.25 2.25 0 
                100 4.5 2.25 2.25 0 000-4.5zm10.5 
                2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 
                  014.5 0z" />
            </svg>
          </template>

          <span v-else>{{ menu.name }}</span>
        </router-link>

      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Poppins', sans-serif;
}
</style>
