<template class="relative">
  <div class="font-bold font-[Inter] text-3xl ml-[40px]">
    Тестовая задача
  </div>
  <div
    class="flex flex-row flex-wrap mt-[30px]"
  >
    <div
      v-for="product, index in products"
      :key="index"
    >
      <div
        class="flex-col m-[30px] font-[Golos_Text] h-[386px]"
        @mouseover="hoveredProductIndex = index"
        @mouseleave="hoveredProductIndex = null"
      >
        <div class="">
          <img
            class="w-[201px] h-[201px] bg-cover rounded-xl"
            src="/assets/img/1122.jpg"
          >
        </div>
        <div class="flex flex-row">
          <div class="text-base mr-3">
            {{ product.newPrice ? product.newPrice : "00.00" }} ₽
          </div>
          <div class="text-base line-through text-gray-400">
            {{ product.oldPrice ? NaN : "00.00" }} ₽
          </div>
        </div>
        <div class="text-xs font-semibold uppercase ">
          {{ product.name }}
        </div>
        <div class="text-sm font-normal">
          {{ product.brand }}
        </div>
        <button
          v-show="hoveredProductIndex === index"
          class="bg-black text-white w-[119px] h-[40px] rounded-lg mt-[12px]"
          @click="addToCart(index)"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
  <div
    v-show="visiblePopup"
    class="w-[233px] h-[65px] rounded-2xl bg-pink-600 absolute z-10 fixed bottom-[99px] right-[40px]"
  >
    <div class="text-sm font-normal text-white mt-[24px] text-center">
      Товар добавлен в корзину
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { products } from '~/utils/generate'

export default {
  setup() {
    const hoveredProductIndex = ref(null)
    const visiblePopup = ref(false)

    function addToCart(index) {
      const id = index
      visiblePopup.value = true
      setTimeout(() => {
        visiblePopup.value = false
      }, 3000)
    }

    return {
      hoveredProductIndex,
      visiblePopup,
      addToCart,
    }
  },
}
</script>
