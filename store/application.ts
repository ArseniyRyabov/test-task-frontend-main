import { defineStore } from 'pinia'

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore('application', () => {
  const productCount = '12 товаров'

  return {
    productCount,
  }
})
