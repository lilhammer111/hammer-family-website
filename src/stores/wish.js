import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWishStore = defineStore(
  'wish',
  () => {
  const wishItems = ref([])
  return { wishItems }
})