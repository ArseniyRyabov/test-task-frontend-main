<template>
  <header class="h-[90px] flex">
    <NuxtLink
      to="/"
      class="mt-[27px] ml-[40px] text-3xl font-bold"
    >Brand Name</NuxtLink>
    <div class="flex items-center justify-center ml-auto mr-[125px]">
      <Icon
        name="material-symbols:shopping-basket-outline"
        class="mr-[10px] text-3xl"
      />
      <div class="text-sm">
        {{ productCount }}
      </div>
    </div>
  </header>
  <main class="h-full mb-[90px]">
    <slot />
  </main>
  <footer class="h-[90px] flex fixed bottom-[0px] bg-black text-white w-full">
    <NuxtLink
      to="/"
      class="mt-[27px] ml-[40px] text-3xl font-bold"
    >Brand Name</NuxtLink>
    <a
      href="https://github.com/ArseniyRyabov"
      class="flex items-center justify-center ml-auto mr-[125px] "
    >
      Разработчик Arseniy Ryabov
    </a>
  </footer>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'

const { productCount } = useApplicationStore()
</script>
