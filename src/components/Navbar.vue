<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useCartStore } from "@/store/cartStore"

const activeLink = ref("Home")
const open = ref(false)

const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Aboutme", href: "/aboutme"},
  { name: "Products", href: "/product" },
  { name: "Contact", href: "/contact" },
  { name: "Cart", href: "/cart", icon: "cart" },
]

const { totalItems } = useCartStore()
const route = useRoute()

watch(
  () => route.path,
  () => {
    const currentMenu = menus.find((m) => m.href === route.path)
    if (currentMenu) activeLink.value = currentMenu.name
    open.value = false
  },
  { immediate: true }
)

function setActive(menuName) {
  activeLink.value = menuName
  open.value = false
}
</script>

<template>
  <nav class="fixed w-full top-0 z-50 bg-[#F5E5E1] shadow-md border-b border-[#F9CBD6]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <router-link
          to="/"
          class="font-semibold tracking-wide shrink-0"
          style="font-family:'Great Vibes', cursive; font-size:2rem; color:#9E182B;"
        >
          Sweetify
        </router-link>

        <div class="hidden md:flex space-x-6 items-center">
          <router-link
            v-for="menu in menus"
            :key="menu.name"
            :to="menu.href"
            @click="setActive(menu.name)"
            class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2"
            :class="[
              activeLink === menu.name
                ? 'bg-[#F2AFBC] text-white shadow-sm'
                : 'text-[#9E182B] hover:bg-[#F9CBD6] hover:text-[#9E182B]'
            ]"
          >
            <template v-if="menu.icon === 'cart'">
              <div class="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 12.75m-1.644-6.478h13.788c.86 0 1.497.834 1.271 1.668l-1.5 5.25a1.35 1.35 0 01-1.271.957H7.5m0 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm10.5 2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span v-if="totalItems > 0" class="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#9E182B] text-white text-[10px] font-bold shadow-sm animate-bounce-short z-10">
                  {{ totalItems }}
                </span>
              </div>
            </template>
            <span v-else>{{ menu.name }}</span>
          </router-link>
        </div>

        <div class="flex md:hidden items-center">
          <button
            @click="open = !open"
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-[#9E182B] hover:bg-[#F9CBD6] focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="open" class="md:hidden bg-[#F5E5E1] border-t border-[#F9CBD6] shadow-lg">
        <div class="space-y-1 px-4 py-4 pb-5">
          <router-link
            v-for="menu in menus"
            :key="menu.name"
            :to="menu.href"
            @click="setActive(menu.name)"
            class="block rounded-md px-3 py-3 text-base font-medium transition-colors"
            :class="[
              activeLink === menu.name
                ? 'bg-[#F2AFBC] text-white'
                : 'text-[#9E182B] hover:bg-[#F9CBD6] hover:text-[#9E182B]'
            ]"
          >
            <div class="flex items-center justify-between">
              <span class="flex items-center gap-3">
                <template v-if="menu.icon === 'cart'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 12.75m-1.644-6.478h13.788c.86 0 1.497.834 1.271 1.668l-1.5 5.25a1.35 1.35 0 01-1.271.957H7.5m0 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm10.5 2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    Cart
                </template>
                <template v-else>{{ menu.name }}</template>
              </span>
              <span v-if="menu.icon === 'cart' && totalItems > 0" class="bg-[#9E182B] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {{ totalItems }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
nav {
  font-family: "Poppins", sans-serif;
}
@keyframes bounceShort {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.animate-bounce-short {
  animation: bounceShort 0.3s ease-in-out;
}
</style>